import '../imports/ui/body.js';
import '../imports/startup/accounts-config.js';

//client.js
Template.changeimage.events({
    'change input[type="file"]': function (event) {
      var file = event.target.files[0]
      console.log(file)
      var xhr = new XMLHttpRequest()
      userId=Meteor.userId()
      xhr.open('PUT', 'https://yourapp.com/file', true)
         xhr.onload = (event) => {
            console.log('done uploading!');
          };
      xhr.upload.onprogress = (event) => {
        let percent = 100 * (event.loaded / event.total);
        console.log(percent+'% uploaded');
      };
      Meteor.call('checkuploaduser', Meteor.userId());
      xhr.send(file);
    }
  })