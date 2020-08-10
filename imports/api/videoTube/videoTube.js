import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const VideoTube = new Mongo.Collection('videoTube');


export const videoSchema = new SimpleSchema({
    name: {
       type: String
    }
})

VideoTube.attachSchema(videoSchema)