import React, { useState } from 'react'
import { View, StyleSheet, SafeAreaView, Text, ActivityIndicator, Pressable } from 'react-native'
import { MAINCOLOR, WHITE } from '../constants/colors'
import Input from '../components/input/Input';
import Button from '../components/buttons/Button';
import { textStyles } from '../styles/text';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from "react-redux";
import {signupSuccess} from '../redux/signup';
import { isEmail } from '../utils/validation';

const SignUp = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [passwordRepeat, setPasswordRepeat] = React.useState('')
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
//   const {setCurrentUser} =  useAuth()
  const nav = useNavigation()
  const dispatch = useDispatch();
  const navigation = useNavigation();


  const [emailError, setEmailError] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')
  const [passwordRepeatError, setPasswordRepeatError] = useState<string>('')
  const [firstNameError, setFirstNameError] = useState<string>('')
  const [lastNameError, setLastNameError] = useState<string>('')




  const isValid = () => {
      setEmailError(isEmail(email))
      setPasswordError(password.length < 6 ? 'Password must be at least 6 characters' : '')
      setPasswordRepeatError(password !== passwordRepeat ? 'Passwords do not match' : '')
      setFirstNameError(firstName.length < 2 ? 'First name must be at least 2 characters' : '')
      setLastNameError(lastName.length < 2 ? 'Last name must be at least 2 characters' : '')

      if (isEmail(email) || password.length < 6 || password !== passwordRepeat || firstName.length < 2 || lastName.length < 2) {
          return false
      }
      return true
  }


  const signupFunc =  () => {
    if(isValid()){
    try{
        dispatch(signupSuccess({
          email,
          password,
          firstName,
          lastName,
        }))
        navigation.navigate("Login")
    }catch(e){
        console.log(e)
    }
    }

  };

  





  return (
    <SafeAreaView style={styles.container}>
       
        <View style={styles.viewContainer}>
          
            <Text style={[textStyles.h2, styles.title]}>Sign up:</Text>
            <Input error={emailError} value={email} setValue={setEmail}  placeholder="Email" keyboardType='email-address'></Input>
            <Input error={passwordError} setError={setPasswordError} value={password} setValue={setPassword} secureTextEntry={true} placeholder="Password"></Input>
            <Input error={passwordRepeatError} setError={setPasswordRepeatError} value={passwordRepeat}  setValue={setPasswordRepeat} secureTextEntry={true} placeholder="Repeat password"></Input>
            <Input error={firstNameError} setError={setFirstNameError} value={firstName} setValue={setFirstName} placeholder="Fist Name"></Input>
            <Input error={lastNameError} setError={setLastNameError} value={lastName} setValue={setLastName} placeholder="Second Name"></Input>
       
            <Button  onPress={()=>signupFunc()} style={{alignSelf:"flex-end"}}>
              Sign up
            </Button>
            <View style={{flex:1}}></View>
            <View style={{
                flexDirection:"row",
                    justifyContent:"center",
                    alignItems:"center",
                    marginTop: 16,
                    
                    
                }}>
                
                    <Text style={[textStyles.p]}>Already have an account? </Text>
          
                <Pressable onPress={()=>{nav.navigate("Login")}}>
                    <Text style={[textStyles.h6, {color: MAINCOLOR, fontWeight:'bold'}]}> Log in</Text>
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
export default SignUp