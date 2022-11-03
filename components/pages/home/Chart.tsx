import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import {LineChart} from 'react-native-chart-kit'
import { MAINCOLOR } from '../../../constants/colors'
import { WINDOW_WIDTH } from '../../../constants/layout'
const Chart = () => {
  return (
    <SafeAreaView>
  <LineChart

    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={WINDOW_WIDTH} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: MAINCOLOR,
      backgroundGradientFrom: `${MAINCOLOR}50`,
      backgroundGradientTo: `${MAINCOLOR}10`,
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16,
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: `${MAINCOLOR}10`,
      }
    }}
    bezier
    style={{
      marginVertical: 8,

      borderRadius: 16,

    }}
  />
</SafeAreaView>
  )
}

export default Chart