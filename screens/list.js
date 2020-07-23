import React, { useState, useCallback } from 'react';                
import { View, Text, StyleSheet, ScrollView, RefreshControl, TouchableOpacity, Modal, TouchableHighlight, TextInput } from 'react-native';


function List()
{
    const [userList, setUserList] = useState([
        { name: 'krish', key: '1' },
        { name: 'krish G', key: '2' },
        { name: 'Ashok', key: '3' },
        { name: 'Purusho', key: '4' },
        { name: 'Muthu', key: '5' },
        { name: 'Ela', key: '6' },
        { name: 'PUBG', key: '7' },
        { name: 'karthi', key: '8' },
        { name: 'Guna', key: '9' },
    ])

    const [newItem, setNewItem] = useState('');

    const[refreshing, setRefreshing] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const wait = (timeout) => {
        return new Promise(resolve => {
          setTimeout(resolve, timeout);
        });
      }
      
    const handleRefresh = useCallback(() => {
        setRefreshing(true)
        wait(2000).then(() => setRefreshing(false));
    },[]);

    const openNewListModal = () => {
        setModalVisible(true);
    }

    return(
        <>
            <View style={styles.listContainer}>
                <ScrollView 
                    refreshControl= {
                        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
                    }
                    >
                        {userList.map(item => 
                        (
                            <View key={item.key} style={styles.listItemContainer}>
                                <Text style={styles.listItem}>{item.name}</Text>
                            </View>
                        ))}
                </ScrollView>

                <View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        }}
                    >
                        <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Add New Item</Text>
                                <TextInput style={styles.inputBox} onChangeText={value => setNewItem(value)} placeholder="e.g. make a app" />
                            <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                                let addedItem = {
                                    name: newItem,
                                    key: userList[userList.length - 1].key + 1
                                }
                                setUserList([...userList, addedItem])
                            }}
                            >
                            <Text style={styles.textStyle}>Add Item</Text>
                            </TouchableHighlight>
                        </View>
                        </View>
                    </Modal>
                </View>
                
            </View>
            <View style={styles.fabIcon}>
                <TouchableOpacity onPress={openNewListModal}>
                    <Text style={styles.fabIconText}>+</Text>
                </TouchableOpacity> 
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    listItemContainer: {
        flex: 1,
        marginHorizontal: 10
    },
    listItem: {
        backgroundColor : "#F2F3F4",
        marginBottom: 2,
        padding: 20
    },
    listContainer: {
        marginTop: 10,
        flex: 1
    },
    fabIcon:{
        position: "absolute",
        width: 50,
        height: 50,
        borderRadius: 32,
        bottom: 40,
        right: 50,
        backgroundColor: "pink",
        alignItems: "center",
        justifyContent: "center"
    },
    fabIconText: {
        fontSize: 32,
        textAlign: "center"
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 0
      },
    modalView: {
        width: "80%",
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      inputBox: {
          borderBottomColor: "#5D6D7E",
          borderBottomWidth: 2,
          marginBottom: 20,
          height: 30,
          padding: 5
      }
})

export default List;