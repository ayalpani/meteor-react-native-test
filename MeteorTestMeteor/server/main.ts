import { Meteor } from "meteor/meteor";
import { TasksCollection } from "/imports/api/TaskCollection";
import "../imports/api/methods";

const insertTask = (taskText: string) =>
  TasksCollection.insert({ text: taskText, isDone: false });

Meteor.startup(() => {
  console.log("Meteor.startup");
  if (TasksCollection.find().count() === 0) {
    [
      "Task 1",
      "Task 2",
      "Task 3",
      "Task 4",
      "Task 5",
      "Task 6",
      "Task 7",
      "Task 8",
      "Task 9",
      "Task 10",
      "Task 11",
      "Task 12",
      "Task 13",
      "Task 14",
      "Task 15",
      "Task 16",
      "Task 17",
      "Task 18",
      "Task 19",
      "Task 20",
    ].forEach(insertTask);
  }

  Meteor.publish("tasks.all", () => {
    console.log('publication "tasks.all" called');

    return TasksCollection.find({});
  });
});
