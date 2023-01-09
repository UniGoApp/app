import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

function SubmitButton({title, handleSubmit, loading}) {
    return (
        <View>
            <TouchableOpacity
            style={{ backgroundColor: '#000',
            borderRadius: 8,
            borderColor: '#000',
            borderWidth: 2,
            paddingVertical: 16,
            paddingHorizontal: 32 }}
            onPress={handleSubmit}
            >
                <Text style={{textAlign: 'center', color: '#fff', fontSize: 16, fontWeight: 'bold'}}>{loading ? "Espere... " : title}</Text>
            </TouchableOpacity>
        </View>
        
    );
}

export default SubmitButton;