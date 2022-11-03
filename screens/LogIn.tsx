import React, { useState } from 'react'
import { View, StyleSheet, SafeAreaView, Text, ActivityIndicator, Pressable } from 'react-native'
import { MAINCOLOR, WHITE } from '../constants/colors'
// import { useAuth } from '../contexts/AuthContext'
import Input from '../components/input/Input';
import Button from '../components/buttons/Button';
import { textStyles } from '../styles/text';
import { useNavigation } from '@react-navigation/native';
 

const SignUp = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
//   const {setCurrentUser} =  useAuth()
  const [loading, setLoading] = useState<boolean>(false)
  const navigation = useNavigation();

const loginFunc = async () => {
  setLoading(true)
    const response = await fetch(`https://commo-store.com/api/auth/login`, {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password
        }),
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
          },

    })
    
    const data = await response.json()
    // setCurrentUser((previous:)=>({
    //    uid: data.uid, 
    //    token: data.token,
    // }))
    setLoading(false)

}


  return (
    <SafeAreaView style={styles.container}>
        {loading?<View style={{flex:1, justifyContent:"center", alignContent:"center"}}>
          <ActivityIndicator size="large" color={MAINCOLOR}></ActivityIndicator>
        </View>:
        <View style={styles.viewContainer}>
          
            <Text style={[textStyles.h2, styles.title]}>Log In:</Text>
            <Input value={email} setValue={setEmail} placeholder="Email"></Input>
            <Input value={password} setValue={setPassword} secureTextEntry={true} placeholder="Password"></Input>
       
            <Button  onPress={()=>loginFunc()} style={{alignSelf:"flex-end"}}>
              Log in
            </Button>
            <View style={{flex:1}}></View>
            <View style={{
                flexDirection:"row",
                    justifyContent:"center",
                    alignItems:"center",
                    marginTop: 16,
                    
                    
                }}>
                
                    <Text style={[textStyles.p]}>Don't have an account? </Text>
          
                <Pressable onPress={()=>navigation.navigate("Signup")}>
                    <Text style={[textStyles.h6, {color: MAINCOLOR, fontWeight:'bold'}]}> Sign up</Text>
                </Pressable>
            </View>

        </View>}
        
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({


buttonText: {
    fontWeight: "600",
    fontSize: 16,
    color: WHITE,

},
  viewContainer:{
    padding: 20,
    flex:1
  },
  title:{
    marginBottom:20,
    fontWeight: "bold",
},
    container:{
        flex:1,
    }
})
export default SignUp