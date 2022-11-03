import React, { useState } from 'react'
import {
    Keyboard,
    TextInput,
    Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { LIGHTGREY, RED, WHITE } from '../../constants/colors';
import { borderRadius } from '../../constants/styles';



// const DismissKeyboard = ({ children, focus }:{
//     children?: JSX.Element | JSX.Element[];
//     focus: boolean
// }) => (
//   <Pressable style={{zIndex:focus?100000:0, elevation:focus?1:-1}} hitSlop={focus?100000:0} onPress={() => Keyboard.dismiss()}>
//   {children}
//   </Pressable>
//   );


const Input = ({value, setValue, error, setError, style, ...props}:{
    value: string;
    setValue: (value: string) => void;
    error?: string;
    setError?: (error: string) => void;
    style?: any;
    [key: string]: any;
}) => {
  return (
    <View style={{
      marginBottom: 16
    }}>
        <TextInput
        placeholderTextColor={LIGHTGREY}
        value={value}
        style={{
          ...styles.input, ...style}}
            onChangeText={(text) => setValue(text)}
                                {...props}
                            />
                            <Text style={{color:RED, marginLeft:16, marginTop:8}}>{error}</Text>
                            </View>
              
  )
}

export default Input


const styles = StyleSheet.create({
    input:{
        borderRadius: borderRadius,
        backgroundColor: WHITE,
        width: '100%',
        fontSize:18,
        
        paddingHorizontal: 32,
        paddingVertical: 16,
        paddingLeft:16
}
})