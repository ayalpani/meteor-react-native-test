import React from 'react';
import {useTracker} from '@meteorrn/core';
import {View} from 'react-native';
import SingleTask from './SingleTask';
import {Task, TasksCollection} from '../types';

function Tasks() {
  const tasks: Task[] = useTracker(
    () => TasksCollection.find({}, {fields: {_id: 1}}).fetch(),
    [],
  );

  console.log('render <Tasks>', {tasks: tasks.map((t: Task) => t._id)});

  return (
    <View>
      {tasks.map((t: Task) => (
        <SingleTask key={t._id} id={t._id} />
      ))}
    </View>
  );
}

export default React.memo(Tasks);
