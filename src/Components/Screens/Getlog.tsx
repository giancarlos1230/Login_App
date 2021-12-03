import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

interface Props {
    title: string;
    defaultValue:string;
    onChangeText:(text: string) => void;

}
const Getlog = ({title, defaultValue, onChangeText}:Props) => {
    return (
        <View>
            <Text>Hola</Text>
            <TextInput
                style={styles}
                defaultValue={defaultValue}
                onChangeText={text  =>onChangeText(text)}
            />
        </View>
    )
}

export default Getlog

const styles = StyleSheet.create({


})