import React from 'react';
import {useTracker} from '@meteorrn/core';
import {StyleSheet, Text, View} from 'react-native';
import {TasksCollection, Task} from '../types';
import SingleTaskDone from './SingleTaskDone';

function SingleTask({id}: {id: string}) {
  const task: Task = useTracker(
    () => TasksCollection.findOne({_id: id}, {fields: {text: 1}}),
    [],
  );

  if (!task) {
    return null;
  }

  console.log('render <SingleTask>', {task});
  return (
    <View style={styles.SingleTask}>
      <SingleTaskDone id={id} />
      <Text>{task.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  SingleTask: {
    height: 50,
    padding: 5,
    backgroundColor: 'lightgrey',
    borderRadius: 100,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default React.memo(SingleTask);
