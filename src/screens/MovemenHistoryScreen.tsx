import React, { useContext, useEffect, useState } from 'react'
import { Animated, SafeAreaView, useWindowDimensions } from 'react-native'
import { SceneMap } from 'react-native-tab-view';
import { HistoryList } from '../components/HistoryList/HistoryList';
import TabBar from '../../library/components/TabBar/TabBar';
import { AppContext } from '../context/AppContext';

export const MovemenHistoryScreen = () => {

  const {} = useContext(AppContext);

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Info' },
    { key: 'second', title: 'Precios' },
  ]);

  useEffect(() => {
    
  }, [])
  

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
