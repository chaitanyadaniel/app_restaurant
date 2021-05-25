import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const ResultImage = function({url}) {
    return(
        <View>
            <Image style={styles.imageStyle} source={{uri:url}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    imageStyle: {
        marginLeft: 20,
        marginTop: 20,
        width: 370,
        height: 200,
        borderRadius: 20
    }
});

export default ResultImage;