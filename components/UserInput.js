import React, {useState} from "react";
import { TextInput, View, Text, StyleSheet, Pressable } from "react-native";
import theme from "../config/theme";
import SvgElement from "./SvgElement"

const UserInput = ({name, value, setValue, autoCapitalize = 'none', autoCompleteType, keyboardType = 'default', secureTextEntry = false, editable = true}) => {
    const [borderColor, setBorderColor] = useState(theme.color.grey);
    const [borderWidth, setBorderWidth] = useState(0.5);
    const [secure, setSecure] = useState(secureTextEntry);
    const [icon, setIcon] = useState(autoCompleteType);
    return (
        <View>
            <Text style={styles.label}>{name}</Text>
            <View style={[styles.inputContainer, {borderColor: borderColor, borderWidth: borderWidth}]}>
                <TextInput
                    autoCorrect={false}
                    autoCapitalize={autoCapitalize}
                    keyboardType={keyboardType}
                    secureTextEntry={secure}
                    style={styles.input}
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
                <Pressable style={styles.icon} onPress={() => {
                        if(icon === "password"){
                            setSecure(!secure);
                            setIcon(autoCompleteType+'Off');
                        }else if(icon === "passwordOff"){
                            setSecure(!secure);
                            setIcon(autoCompleteType);
                        }
                    }} >
                    <SvgElement color={borderColor} name={icon} />
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    label:{
        fontSize: 13,
        fontWeight: '200',
        marginBottom: 4,
    },
    inputContainer: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 6,
        padding: 12,
        marginBottom: 20
    },
    input:{
        fontSize: 16,
        height: 32,
        width: '100%',
    },
    icon: {
        position: 'absolute',
        right: 10,
    }
})

export default UserInput;