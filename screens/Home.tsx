import React from 'react'
import { SafeAreaView } from 'react-native'
import Animation from '../components/pages/home/Animation'
import Chart from '../components/pages/home/Chart'
const Home = () => {
  return (
    <SafeAreaView style={{padding: 16}}>
  <Chart></Chart>
  <Animation></Animation>
</SafeAreaView>
  )
}

export default Home