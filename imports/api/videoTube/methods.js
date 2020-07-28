import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { VideoTube } from './videoTube'

Meteor.methods({
    'videoTube.insert'(id, name) {
        check(id, Number);
        check(name, String);

        return VideoTube.insert({
            id,
            name,
            createdAt: new Date(),
        });
    },
});



