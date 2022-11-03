import React from 'react'
import { SafeAreaView, View } from 'react-native'
import Button from '../components/buttons/Button'
import Chart from '../components/pages/home/Chart'
import Animation from '../components/pages/home/Animation'
import { useDispatch } from "react-redux";
import { logout } from '../redux/login';
 


const Home = ({navigation}:{
    navigation:any
}) => {
  const dispatch = useDispatch()

  const onLogout = () => {
    try{
      dispatch(logout())
      navigation.navigate("Login")
    }
    catch(e){
      console.log(e)
    }
      };

  return (
    <SafeAreaView style={{padding: 16}}>
  <Chart></Chart>
  <Animation></Animation>
  <View style={{flex:1}}></View>
  <Button style={{}} onPress={()=>onLogout()}>Log out</Button>
</SafeAreaView>
  )
}

export default Home