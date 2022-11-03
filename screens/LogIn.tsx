import React, { useState } from 'react'
import { View, StyleSheet, SafeAreaView, Text, ActivityIndicator, Pressable } from 'react-native'
import { MAINCOLOR, WHITE } from '../constants/colors'
// import { useAuth } from '../contexts/AuthContext'
import Input from '../components/input/Input';
import Button from '../components/buttons/Button';
import { textStyles } from '../styles/text';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from '../redux/login';


const LogIn = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
//   const {setCurrentUser} =  useAuth()
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const signupState = useSelector((state: any) => state.signup);

  const [emailError, setEmailError] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')


  const isValid = () => {
    setEmailError(email !== signupState.email ? 'Emails do not match' : '')
    setPasswordError(password !== signupState.password ? 'Passwords do not match' : '')
    if( email !== signupState.email && password !== signupState.password ){
      return false
    }
    return true
}


  const loginFunc = () => {
    isValid()
    if(isValid()){

      try{
        dispatch(loginSuccess({
          email,
          password,
        }))
        navigation.navigate("Home")
      }catch(e){
        console.log(e)
      }
    }
 
   
     
  };
  
  


  return (
    <SafeAreaView style={styles.container}>
         
        <View style={styles.viewContainer}>
          
            <Text style={[textStyles.h2, styles.title]}>Log In:</Text>
            <Input error={emailError} setError={setEmailError} value={email} setValue={setEmail} placeholder="Email" keyboardType='email-address'></Input>
            <Input error={passwordError} setError={setPasswordError} value={password} setValue={setPassword} secureTextEntry={true} placeholder="Password"></Input>
       
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

        </View>
        
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
export default LogIn