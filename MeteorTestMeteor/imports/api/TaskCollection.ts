import { Mongo } from "meteor/mongo";

type Task = {
  _id: string;
  isDone?: boolean;
  text: string;
};

export const TasksCollection: Mongo.Collection<Task> =
  new Mongo.Collection<Task>("tasks");

TasksCollection.allow({
  insert(userId, doc) {
    return true;
  },

  update(userId, doc, fields, modifier) {
    return true;
  },

  remove(userId, doc) {
    return true;
  },
});
