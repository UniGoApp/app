import React, {useState} from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
import theme from "../../config/theme";

const UserInput = ({name, value, setValue, autoCapitalize = 'none', keyboardType = 'default', secureTextEntry = false, editable = true}) => {
    const [borderColor, setBorderColor] = useState(theme.color.grey);
    const [borderWidth, setBorderWidth] = useState(0.5);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{name}</Text>
            <TextInput
                autoCorrect={false}
                autoCapitalize={autoCapitalize}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                style={[styles.input, {borderBottomColor: borderColor, borderBottomWidth: borderWidth}]}
                value={value}
                editable={editable}
                onChangeText={(text) => setValue(text)}
                onBlur={() => { 
                    setBorderWidth(0.5);
                    setBorderColor(theme.color.grey);
                }}
                onFocus={() => {
                    setBorderWidth(1.5);
                    setBorderColor(theme.color.verde);
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 24
    },
    label:{
        fontSize: 12,
        fontWeight: '200'
    },
    input:{
        height: 48,
        marginBottom: 30
    }
})

export default UserInput;