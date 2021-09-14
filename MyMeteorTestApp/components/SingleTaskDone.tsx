import React from 'react';
import Meteor, {useTracker} from '@meteorrn/core';
import {Pressable, StyleSheet} from 'react-native';
import {TasksCollection, Task} from '../types';

function SingleTaskDone({id}: {id: string}) {
  const isDone: boolean = useTracker(() => {
    const task: Task = TasksCollection.findOne(
      {_id: id},
      {fields: {isDone: 1}},
    );
    return task.isDone;
  }, []);

  console.log('render <SingleTaskDone>', {id, isDone});

  const onPress = () => {
    Meteor.call(
      'tasks.updateIsDone',
      {taskId: id, isDone: !isDone},
      (error: any) => {
        if (error) {
          console.log('Update Error:', error);
        }
      },
    );
  };

  const styleIsDone = {backgroundColor: isDone ? 'yellow' : 'transparent'};
  return (
    <Pressable style={[styles.SingleTaskDone, styleIsDone]} onPress={onPress} />
  );
}

const styles = StyleSheet.create({
  SingleTaskDone: {
    width: 30,
    height: 30,
    margin: 3,
    borderWidth: 3,
    borderColor: 'red',
    borderRadius: 15,
  },
});

export default React.memo(SingleTaskDone);
