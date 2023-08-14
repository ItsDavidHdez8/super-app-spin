import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface props {
  data : Array<{
    key: string,
    title: string
  }>,
  active: number
}

export const CustomTabBar = ({data, active} : props) => {
  return (
    <View style={{flexDirection:"row"}}>
      {data.map((item, index) =>
      <View style={{alignItems:"center"}} key={index}>
        <Text style={[styles.title, (active === index ? styles.titleActive : {})]}>{item.title}</Text>
        {active === index &&
          <View style={styles.activeLine}/>
        }
      </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: "#666666",
    padding: 20,
    fontSize:16,
    fontWeight:"bold"
  },
  titleActive: {
    color:"#6abda6",
    
  },
  activeLine: {
    backgroundColor:"#6abda6",
    height:2,
    width:50
    
  }
})