import { Meteor } from 'meteor/meteor';

import '../imports/api/tasks.js';

//server.js

//check if user is actually user
Meteor.methods({
    checkuploaduser: function (userId) {
        if (userId !=null && this.userId == userId) {
            valid = true;
            picid = userId
        }
    }
});

//upload stuff
WebApp.connectHandlers.use('/file', (req, res) => {
if (valid) {
res.setHeader("Access-Control-Allow-Methods", "PUT");
res.setHeader("Access-Control-Allow-Origin", "*");
res.setHeader("Access-Control-Allow-Headers", "Content-Type");
if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
    } else if (req.method === 'PUT') {
    if (!req.headers['content-type'].startsWith('image')) {
        res.writeHead(400);
        res.end();
    }
    let getFile = Meteor.wrapAsync(done => {
        let chunks = [];
        var chunk = null;
        while (null !== (chunk = req.read())) chunks.push(chunk);
        // req.on('readable', () => {
        //     chunks.push(req.read());
        // });
        //console.log(chunks)
        
        req.on('end', () => {
            done(undefined, Buffer.concat(chunks));
        });
    });
    let buffer = getFile();
    //console.log(buffer)
	//encode buffer as base64
    var base64data = new Buffer(buffer).toString('base64');
    //console.log(picid);
	//base64 as image in mongo
    Meteor.users.update({_id: picid}, {$set: {"profile.image": base64data}});
	//the comments below are for saving to local dir if you want
		//let path = process.env['METEOR_SHELL_DIR'] + '/../../../public';
		// const fs0 = require('fs');
		// filename = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
		// fs0.writeFile(path + "/" + filename, buffer, Meteor.bindEnvironment(function (err) {
			// if (err) {
				// console.log("Error:" + err);
			// } else {
				// console.log("Success");
			// }
		// }));
    res.writeHead(200);
    res.end();
} }
});