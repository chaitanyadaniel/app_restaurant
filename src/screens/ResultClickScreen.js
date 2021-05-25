import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import useImages from '../hooks/useImages';
import ResultImage from '../components/ResultImages'

const ResultScreen = function({navigation}) {
    const id = navigation.getParam('id');
    const [hitImageAPI, errorMsg, results] = useImages();
    
    useEffect(() => {
        hitImageAPI(id);
    }, [])

    if(!results) {
        return null;
    }

    return(
        <View>
            <FlatList
                data={results.photos}
                keyExtractor = {function(result){
                    console.log(result);
                    return result;
                }}
                renderItem = {function(args){
                    return (
                        <ResultImage url={args.item}/>
                    );
                }}
            />
            {errorMsg ? console.log(errorMsg) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    
});

export default ResultScreen;