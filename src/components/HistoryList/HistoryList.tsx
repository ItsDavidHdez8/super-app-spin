import React, { useState } from 'react'
import { FlatList } from 'react-native'

export const HistoryList = () => {

  const [movements, setmovements] = useState([])

  return (
    <FlatList
      data={movements}
      renderItem={() => <></>}

    />
  )
}
