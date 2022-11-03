import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native';
import { MAINCOLOR } from '../../constants/colors'
import { borderRadius } from '../../constants/styles';

const Button = ({children, color=MAINCOLOR, style, ...props}:{
    children: JSX.Element | JSX.Element[] | string;
    color?: string;
    [key: string]: any;
}) => {
  return (
    <Pressable {...props} style={{...styles.container, backgroundColor:color, ...style}}>
        <Text style={{fontWeight:"bold", fontSize:16}}>{children}</Text>
      </Pressable>
  )
}

export default Button


const styles = StyleSheet.create({
    container:{
        borderRadius: borderRadius,
        fontSize:16,
        paddingHorizontal: 32,
        paddingVertical: 16,
        marginBottom: 8,
        

}
})