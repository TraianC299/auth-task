import React, { useState } from 'react'
import { View, StyleSheet, SafeAreaView, Text, ActivityIndicator } from 'react-native'
import { MAINCOLOR, WHITE, WHITEBLUE } from '../constants/colors'
// import { useAuth } from '../contexts/AuthContext'
import Input from '../components/input/Input';
import Button from '../components/buttons/Button';
import { textStyles } from '../styles/text';
 

const SignUp = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [passwordRepeat, setPasswordRepeat] = React.useState('')
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
//   const {setCurrentUser} =  useAuth()
  const [loading, setLoading] = useState<boolean>(false)

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
            <Input value={passwordRepeat} setValue={setPasswordRepeat} placeholder="Repeat password"></Input>
            <Input value={firstName} setValue={setFirstName} placeholder="Fist Name"></Input>
            <Input value={lastName} setValue={setLastName} placeholder="Second Name"></Input>
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
        </View>
            <Button color={WHITE} onPress={()=>loginFunc()} style={{justifyContent:"center", alignItems:"center"}}>
              Log In
            </Button>
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
    color:"white",
    marginBottom:20,
    fontWeight: "bold",
},
    container:{
        flex:1,
        backgroundColor:MAINCOLOR
    }
})
export default SignUp