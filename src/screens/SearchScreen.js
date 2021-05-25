import React, {useState} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar.js';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList'


const SearchScreen = function() {
    const [term, setTerm] = useState('');
    const [hitSearchAPI,errorMsg,results] = useResults();
    const filterResultsByPrice = function(price) {
        return results.filter(function(result){
            return result.price === price;
        });
    }
    return (
        <>
            <SearchBar 
            term = {term} 
            onTermChange = {function(newTerm){
                setTerm(newTerm);
            }}
            onTermSubmit = {function(){
                hitSearchAPI(term);
            }}
            />

            {errorMsg ? <Text>{errorMsg}</Text> : null }
            <ScrollView>
                <ResultList  results={filterResultsByPrice('$')} title='Debit card is enough'/>
                <ResultList  results={filterResultsByPrice('$$')}title="Credit card worthy"/>
                <ResultList  results={filterResultsByPrice('$$$')}title="Ambani Orders from here"/>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    
});

export default SearchScreen;