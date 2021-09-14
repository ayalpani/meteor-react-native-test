import {Mongo} from '@meteorrn/core';

// duplicate - make sure to share types with Backend

export type Task = {
  _id: string;
  isDone?: boolean;
  text: string;
};

export let TasksCollection = new Mongo.Collection('tasks');
