import React, { useContext, useState } from 'react'
import { FlatList, Image, View } from 'react-native'
import { AppContext } from '../../context/AppContext'

export const HistoryList = () => {

  const {appState} = useContext(AppContext)

  const renderListItem = () => {
    
    return (
      <View>
        <Image
          source={{}}
        />
      </View>
      )
  }

  return (
    <FlatList
      data={appState.history}
      renderItem={() => renderListItem()}

    />
  )
}
