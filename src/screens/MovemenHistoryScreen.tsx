import React, { useContext, useEffect, useState } from 'react'
import { Animated, Dimensions, FlatList, SafeAreaView, View, useWindowDimensions } from 'react-native'
import { SceneMap, TabView } from 'react-native-tab-view';
import { HistoryList } from '../components/HistoryList/HistoryList';
import TabBar from '../../library/components/TabBar/TabBar';
import { AppContext } from '../context/AppContext';
import { CustomTabBar } from '../components/HistoryList/CustomTabBar';
import { MovemenListItem } from '../components/HistoryList/MovemenListItem';

export const MovemenHistoryScreen = () => {

  const {appState} = useContext(AppContext);

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    { key: 'all', title: 'Todos' },
    { key: 'positive', title: 'Ganados' },
    {key : 'negative', title : 'Usados'}
  ]);

  const animatedValue = new Animated.ValueXY();


  const screen = Dimensions.get('window');



  const all = () => (
    <HistoryList movements={appState.history}/>
  );


  const renderScene = SceneMap({
    all,
    positive: () => <HistoryList movements={appState.history}/>,
    negative: () => <HistoryList movements={appState.history}/>,
  });

  return (
    <SafeAreaView style={{flex:1}}>
       <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={{width: screen.width / 3.73}}
            indicatorContainerStyle={{left: 12, right: 12, width: 'auto'}}
          />
        )}
        initialLayout={{width: layout.width}}
      />
    </SafeAreaView>
  )
}
