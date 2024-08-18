// REACT
import React from 'react'

import Constants from "expo-constants"


// COMPONENTS
import { SafeAreaView, StatusBar, Text, View } from 'react-native'


// ROUTES
// import { Routes } from '@routes/index'

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar
        barStyle="light-content"
        translucent={false}
      />
    {/* <Routes /> */}
    <View style={{ flex: 1, backgroundColor: "#7159c1", justifyContent: "center", alignItems: "center" }}>
      <Text>salve</Text>
    </View>
    </SafeAreaView>
  )
}

