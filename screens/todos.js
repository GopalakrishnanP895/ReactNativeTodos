import React from 'react';
import { StyleSheet, View, StatusBar, Text } from 'react-native';

import Constants from "expo-constants";

import TodoHeader from './todoheader';
import List from './list';


const Todos = () => {

    return (
        <View style={styles.container}>
            <TodoHeader />
            <List />
        </View>
    )
}

export default Todos;

const styles = StyleSheet.create({
    container:{
        marginTop: Constants.statusBarHeight,
        padding: 20,
        flex:1
    }
})