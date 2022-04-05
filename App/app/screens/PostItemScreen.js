import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

function PostItemScreen(props) {
    return (
        <View>
            <TextInput style={styles.itemName}/>
            <TextInput style={styles.input}/>
        </View>
    );
}

const styles = StyleSheet.create({
    itemName: {
        backgroundColor: 'white',
        padding: 10,
        marginTop: 40,
        marginHorizontal: 30,
        borderWidth: 1  
    }
})

export default PostItemScreen;