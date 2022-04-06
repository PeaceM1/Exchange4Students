import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../assets/colors/colors';

const ViewItemScreen = () => {
    
    return (
        <View>
            <Text>ViewItemScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    }
})

export default ViewItemScreen;