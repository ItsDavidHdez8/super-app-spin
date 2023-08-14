import React, {useContext, useState} from 'react';
import {FlatList, Image, SectionList, View} from 'react-native';
import {AppContext} from '../../context/AppContext';
import {MovemenListItem} from './MovemenListItem';
import {StackNavigationProp} from '@react-navigation/stack';
import {History, HistorySection} from '../../interfaces/history';
import Text from '../../../library/components/Text/Text';
import { useHistoryList } from '../../hooks/useHistoryList';

interface Props {
  movements: History[];
}



export const HistoryList = ({movements}: Props) => {

  const {getMovementsInSections, getIcon} = useHistoryList({allMovements : movements})

  return (
    <View style={{flex: 1}}>
      <SectionList
        renderItem={({item}) => (
          <MovemenListItem
            itemName={item.entity}
            supportText={item.date}
            infoLabel={`+ ${item.points}`}
            onPress={() => console.log('')}
            icon={getIcon(item.entity)}
          />
        )}
        sections={getMovementsInSections()}
        stickySectionHeadersEnabled={false}
        renderSectionHeader={({section: {title}}) => (
          <Text variant="small-body-bold" style={{margin: 12}}>
            {title}
          </Text>
        )}
        // onEndReached={() => moreData ? getData() : null}
        // ListFooterComponent={() => {
        //     return (
        //         loading && <Spinner
        //             testID="button-activity-indicator"
        //             size='large'
        //         />
        //     )
        // }}
      />
    </View>
  );
};
