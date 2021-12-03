import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

interface Props {
    title: string;
    defaultValue: string;
    onChangeText: (text: string) => void;

}
const Getlog = ({ title, defaultValue, onChangeText }: Props) => {
    return (
        <View>
            <Text style={styles.text}>{title}</Text>
            <TextInput
                style={styles.input}
                defaultValue={defaultValue}
                onChangeText={text => onChangeText(text)}
            />
        </View>
    )
}

export default Getlog

const styles = StyleSheet.create({

    input: {
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 10,
        textAlign: 'left',
        fontSize: 20,
        color: 'black',
        width: '100%'

    },
    text: {
        fontSize: 35,
        color: '#034C50',
    }

})