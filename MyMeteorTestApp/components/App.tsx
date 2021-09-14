import Meteor, {useTracker} from '@meteorrn/core';
import React from 'react';
import Tasks from './Tasks';

Meteor.connect('ws://192.168.178.51:3000/websocket');

const App = () => {
  const {isReady} = useTracker(() => {
    return {
      isReady: Meteor.subscribe('tasks.all').ready(),
    };
  }, []);

  if (!isReady) {
    return null;
  }
  return <Tasks />;
};

export default App;
