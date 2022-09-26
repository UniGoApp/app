import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import theme from '../../config/theme';

function SubmitButton({title, handleSubmit, loading}) {
    return (
        <TouchableOpacity
        style={{height: 50, marginHorizontal: 40, borderRadius: 6, padding: 10, backgroundColor: theme.color.verde, justifyContent: 'center' }}
        onPress={handleSubmit}
        >
            <Text style={{textAlign: 'center', fontSize: 20}}>{loading ? "Please wait... " : title}</Text>
        </TouchableOpacity>
    );
}

export default SubmitButton;