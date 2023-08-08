import React from 'react'
import { Animated, SafeAreaView, useWindowDimensions } from 'react-native'
import TabBar from '../components/TabBar/TabBar'
import { SceneMap } from 'react-native-tab-view';
import { HistoryList } from '../components/HistoryList/HistoryList';

export const MovemenHistoryScreen = () => {

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Info' },
    { key: 'second', title: 'Precios' },
  ]);


  const all = () => (
    <HistoryList/>
  );


  const renderScene = SceneMap({
    all,
  });

  return (
    <SafeAreaView>
      <TabBar
        navigationState={{index, routes}}
        layout={layout}
        jumpTo={() => {}}
        position={new Animated.AnimatedInterpolation}
        
      />
    </SafeAreaView>
  )
}
