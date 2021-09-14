import React from 'react';
import {useTracker} from '@meteorrn/core';
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
    TasksCollection.update(id, {$set: {isDone: !isDone}});
  };

  const styleIsDone = {backgroundColor: isDone ? 'yellow' : 'transparent'};
  return (
    <Pressable
      style={[styles.SingleTaskDone, styleIsDone]}
      onPress={onPress}
      android_ripple={{color: 'white'}}
    />
  );
}

const styles = StyleSheet.create({
  SingleTaskDone: {
    width: 50,
    height: 50,
    margin: 3,
    borderWidth: 3,
    borderColor: 'red',
    borderRadius: 50,
  },
});

export default React.memo(SingleTaskDone);
