import React from 'react';
import {Text, StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import ResultDetail from '../components/ResultDetail';
import {withNavigation} from 'react-navigation';

const resultList = function (props) {
    return (
        <View>
            <Text style={styles.titleStyle}>{props.title}</Text>
            <FlatList
                showsHorizontalScrollIndicator = {false}
                data={props.results}
                keyExtractor={function(result){
                    return result.id;
                }}
                horizontal = {true}
                renderItem = {function(args){
                    return (
                        <TouchableOpacity onPress={function(){
                            props.navigation.navigate('ResultContent',{id: args.item.id});
                        }}>
                            <ResultDetail
                                item = {args.item}
                            />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
});

export default withNavigation(resultList);