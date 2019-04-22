import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { ReactiveDict } from 'meteor/reactive-dict';



import { Tasks } from '../api/tasks.js';



import './task.js';

import './body.html';



Template.body.onCreated(function bodyOnCreated() {

    this.state = new ReactiveDict();
    Meteor.subscribe('tasks');

});

 


Template.body.helpers({

    tasks() {

        const instance = Template.instance();

        if (instance.state.get('hideCompleted')) {

            // If hide completed is checked, filter tasks

            return Tasks.find({ checked: { $ne: true } }, { sort: { createdAt: -1 } });

        }

        // Otherwise, return all of the tasks

        return Tasks.find({}, { sort: { createdAt: -1 } });

    },
    incompleteCount() {
        return Tasks.find({ checked: { $ne: true } }).count();
    },

});

Template.body.events({
    'click .takePhoto': function(e, instance) {
        e.preventDefault();
        var cameraOptions = {
            width: 800,
            height: 600
        };
        MeteorCamera.getPicture(cameraOptions, function (error, data) {
            if(!error){
                instance.$('.photo').attr('src', data);
            }
        });
            
    },
    'submit .new-task'(event) {
        event.preventDefault();
        console.log(event);

        const target = event.target;
        const text = target.text.value;

        Tasks.insert({
            text,
            createdAt: new Date(),
        });

        Meteor.call('tasks.insert', text);

        //clear form
        target.text.value = '';
    },

        'submit .new-task1'(event) {
            event.preventDefault();
            console.log(event);
    
            const target = event.target;
            const text = target.text.value;
    
            Tasks.insert({
                text,
                createdAt: new Date(),
            });
    
            Meteor.call('tasks.insert', text);
    
            //clear form
            target.text.value = '';

    },

    'submit .new-task2'(event) {
        event.preventDefault();
        console.log(event);

        const target = event.target;
        const text = target.text.value;

        Tasks.insert({
            text,
            createdAt: new Date(),
        });

        Meteor.call('tasks.insert', text);

        //clear form
        target.text.value = '';

},

'submit .new-task3'(event) {
    event.preventDefault();
    console.log(event);

    const target = event.target;
    const text = target.text.value;

    Tasks.insert({
        text,
        createdAt: new Date(),
    });

    Meteor.call('tasks.insert', text);

    //clear form
    target.text.value = '';

},

'submit .new-task4'(event) {
    event.preventDefault();
    console.log(event);

    const target = event.target;
    const text = target.text.value;

    Tasks.insert({
        text,
        createdAt: new Date(),
    });

    Meteor.call('tasks.insert', text);

    //clear form
    target.text.value = '';

},

'submit .new-task5'(event) {
    event.preventDefault();
    console.log(event);

    const target = event.target;
    const text = target.text.value;

    Tasks.insert({
        text,
        createdAt: new Date(),
    });

    Meteor.call('tasks.insert', text);

    //clear form
    target.text.value = '';

},

'submit .new-task6'(event) {
    event.preventDefault();
    console.log(event);

    const target = event.target;
    const text = target.text.value;

    Tasks.insert({
        text,
        createdAt: new Date(),
    });

    Meteor.call('tasks.insert', text);

    //clear form
    target.text.value = '';

},

'submit .new-task7'(event) {
    event.preventDefault();
    console.log(event);

    const target = event.target;
    const text = target.text.value;

    Tasks.insert({
        text,
        createdAt: new Date(),
    });

    Meteor.call('tasks.insert', text);

    //clear form
    target.text.value = '';

},

'submit .new-task8'(event) {
    event.preventDefault();
    console.log(event);

    const target = event.target;
    const text = target.text.value;

    Tasks.insert({
        text,
        createdAt: new Date(),
    });

    Meteor.call('tasks.insert', text);

    //clear form
    target.text.value = '';

},

'submit .new-task9'(event) {
    event.preventDefault();
    console.log(event);

    const target = event.target;
    const text = target.text.value;

    Tasks.insert({
        text,
        createdAt: new Date(),
    });

    Meteor.call('tasks.insert', text);

    //clear form
    target.text.value = '';

},

'submit .new-task10'(event) {
    event.preventDefault();
    console.log(event);

    const target = event.target;
    const text = target.text.value;

    Tasks.insert({
        text,
        createdAt: new Date(),
    });

    Meteor.call('tasks.insert', text);

    //clear form
    target.text.value = '';

},

'submit .new-task11'(event) {
    event.preventDefault();
    console.log(event);

    const target = event.target;
    const text = target.text.value;

    Tasks.insert({
        text,
        createdAt: new Date(),
    });

    Meteor.call('tasks.insert', text);

    //clear form
    target.text.value = '';

},

'submit .new-task12'(event) {
    event.preventDefault();
    console.log(event);

    const target = event.target;
    const text = target.text.value;

    Tasks.insert({
        text,
        createdAt: new Date(),
    });

    Meteor.call('tasks.insert', text);

    //clear form
    target.text.value = '';

},

'submit .new-task13'(event) {
    event.preventDefault();
    console.log(event);

    const target = event.target;
    const text = target.text.value;

    Tasks.insert({
        text,
        createdAt: new Date(),
    });

    Meteor.call('tasks.insert', text);

    //clear form
    target.text.value = '';

},

'submit .new-task14'(event) {
    event.preventDefault();
    console.log(event);

    const target = event.target;
    const text = target.text.value;

    Tasks.insert({
        text,
        createdAt: new Date(),
    });

    Meteor.call('tasks.insert', text);

    //clear form
    target.text.value = '';

},

'submit .new-task15'(event) {
    event.preventDefault();
    console.log(event);

    const target = event.target;
    const text = target.text.value;

    Tasks.insert({
        text,
        createdAt: new Date(),
    });

    Meteor.call('tasks.insert', text);

    //clear form
    target.text.value = '';

},

'submit .new-task16'(event) {
    event.preventDefault();
    console.log(event);

    const target = event.target;
    const text = target.text.value;

    Tasks.insert({
        text,
        createdAt: new Date(),
    });

    Meteor.call('tasks.insert', text);

    //clear form
    target.text.value = '';

},
    'change .hide-completed input'(event, instance) {

        instance.state.set('hideCompleted', event.target.checked);

    },

});