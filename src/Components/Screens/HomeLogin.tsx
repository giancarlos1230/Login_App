import React, { useState } from 'react'
import { Button, StyleSheet, View } from 'react-native'
import Getlog from './Getlog';

const HomeLogin = () => {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const Form = () => {

        if (user === "Gianca@gmail.com" && password === "Free") {
            alert("Welcome")
        }
    }
    return (
        <View style={styles.container}>

            <Getlog
                title="Usuario"
                defaultValue={user}
                onChangeText={setUser}
            />
            <Getlog
                title="Contraseña"
                defaultValue={password}
                onChangeText={setPassword}
            />

            <View style={styles.button} >
                <Button
                    title="Iniciar sesión"
                    onPress={Form}
                />
            </View>

        </View>
    )
}

export default HomeLogin

const styles = StyleSheet.create({

    container: {
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: "orange",
        flex: 1,
        width: "100%",
        paddingTop: 100,
        paddingLeft: 30,
        paddingRight: 30,
    },

    button: {
        paddingLeft: 90,
        paddingRight: 90,
        paddingTop: 40,

    }
})
