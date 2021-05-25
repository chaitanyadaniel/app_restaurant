import React, {useEffect} from 'react';
import {Text,View,StyleSheet,FlatList, TouchableOpacity} from 'react-native';
import useImages from '../hooks/useImages';

const ResultContent = function({navigation}) {
    const id = navigation.getParam('id');
    const [hitImageAPI, errorMsg, results] = useImages();

    useEffect(() => {
        hitImageAPI(id);
    }, [])

    if(!results) {
        return null;
    }

    return (
        <View>
            <Text style={styles.nameStyle}>{results.name}</Text>
            <Text style={styles.phoneStyle}>Phone: {results.display_phone}</Text>
            <Text style={styles.addressStyle}>Address: {results.location.address1}, {results.location.city}, {results.location.state}, {results.location.zip_code}</Text>
            <View style={styles.cusineStyle}>
                <Text style={styles.cusineTextStyle}>Cuisines:</Text>
                <FlatList
                    data = {results.categories}
                    keyExtractor = {function(category){
                        return category.alias;
                    }}
                    renderItem = {function(args){
                        return (
                            <View>
                                <Text>{args.item.title}</Text>
                            </View>
                        );
                    }}
                />
            </View>
            <TouchableOpacity onPress={function(){
                navigation.navigate('ResultClick',{id: results.id});
            }}>
                <Text style={styles.phoneStyle}>Click here for more Images</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    nameStyle: {
        alignSelf: 'center',
        marginTop: 10,
        fontSize: 30,
        fontWeight: 'bold'
    },
    phoneStyle: {
        fontSize: 18,
        margin: 20,
        backgroundColor: 'rgb(220,220,220)',
        borderRadius: 50
    },
    addressStyle: {
        fontSize: 18,
        margin: 20,
        backgroundColor: 'rgb(220,220,220)'
    },
    cusineStyle: {
        margin: 20,
        backgroundColor: 'rgb(220,220,220)'
    },
    cusineTextStyle: {
        fontSize: 20
    }
});

export default ResultContent;