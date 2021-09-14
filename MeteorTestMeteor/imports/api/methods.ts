import { Meteor } from "meteor/meteor";
import { TasksCollection } from "./TaskCollection";

Meteor.methods({
  "tasks.updateIsDone"({
    taskId,
    isDone,
  }: {
    taskId: string;
    isDone: boolean;
  }) {
    console.log("called tasks.updateIsDone", taskId, isDone);
    TasksCollection.update(taskId, {
      $set: { isDone },
    });
  },
});
