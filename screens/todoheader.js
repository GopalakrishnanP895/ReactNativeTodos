import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const TodoHeader = () => {

    return (
        <View style={styles.header}>
            <Text style={styles.headertext}>Todos List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        paddingHorizontal: 20,
        paddingVertical:10,
        backgroundColor: "pink"
    },
    headertext:{
        fontSize: 24,
        textAlign: "center"
    }
});

export default TodoHeader;