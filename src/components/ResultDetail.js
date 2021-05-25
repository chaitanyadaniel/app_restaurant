import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const ResultDetail = function({item}) {
    return (
        <View>
            <Image style={styles.itemImage} source={{uri: item.image_url}}/>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemReview}>Rated {item.rating} out of 5</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    itemImage: {
        width: 250,
        height: 150,
        borderRadius: 15,
        marginLeft: 15
    },
    itemName: {
        fontWeight: 'bold',
        marginLeft: 15
    },
    itemReview: {
        marginLeft: 15,
        marginBottom: 10
    }
});

export default ResultDetail;