import React, { useState } from 'react'
import {
    Keyboard,
    TextInput,
    Pressable,
    StyleSheet
} from 'react-native';
import { LIGHTGREY, WHITE } from '../../constants/colors';
import { borderRadius } from '../../constants/styles';



const DismissKeyboard = ({ children, focus }:{
    children?: JSX.Element | JSX.Element[];
    focus: boolean
}) => (
  <Pressable style={{zIndex:focus?100000:0, elevation:focus?1:-1}} hitSlop={focus?100000:0} onPress={() => Keyboard.dismiss()}>
  {children}
  </Pressable>
  );


const Input = ({value, setValue, error, setError, style, ...props}:{
    value: string;
    setValue: (value: string) => void;
    error?: string;
    setError?: (error: string) => void;
    style?: any;
    [key: string]: any;
}) => {
  const [focus, setFocus] = useState<boolean>(false)
  return (
 
      <DismissKeyboard focus={focus}>
        <TextInput
        onFocus={()=>setFocus(true)}
        onBlur={()=>setFocus(false)}
        placeholderTextColor={LIGHTGREY}
        value={value}
        style={{
          ...styles.input, ...style}}
            onChangeText={(text) => setValue(text)}
                                {...props}
                            />
      </DismissKeyboard>
  )
}

export default Input


const styles = StyleSheet.create({
    input:{
        borderRadius: borderRadius,
        backgroundColor: WHITE,
        width: '100%',
        fontSize:18,
        marginBottom: 16,
        paddingHorizontal: 32,
        paddingVertical: 16,
        paddingLeft:16
}
})