import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
const SearchBar= function(props) {
    return (
        <View style={styles.viewBackground}>
            <Ionicons style={{margin: 10}} name='ios-search' size={25}/>
            <TextInput
            placeholder = 'Search'
            style = {styles.textInput}
            autoCapitalize = 'none'
            autoCorrect = {false}
            value = {props.term}
            onChangeText = {function(newTerm){
                props.onTermChange(newTerm);
            }}
            onEndEditing = {function(){
                props.onTermSubmit();
            }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        marginLeft: 0,
        marginBottom:10,
        marginTop: 8,
        flex: 1,
        height:30,
        alignSelf: 'center',
        fontSize: 18
    },
    viewBackground: {
        margin: 15,
        marginTop: 30,
        backgroundColor: 'rgb(220,220,220)',
        borderRadius: 20,
        flexDirection: 'row'

    }
});

export default SearchBar;