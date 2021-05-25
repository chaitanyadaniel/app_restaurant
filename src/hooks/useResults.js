import {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default useResults = function() {
    const [results, setResults] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
    
    const hitSearchAPI = async function(term){
        try{
        const response = await yelp.get('/search',{
            params: {
                term: term,
                location: 'pao alto',
                limit: 50
            }
        });
        setResults(response.data.businesses);
        } catch(err) {
            setErrorMsg('Something went wrong');
        }
    }

    useEffect(() => {
        hitSearchAPI('nuggets');
    }, [])

    return [hitSearchAPI,errorMsg,results];
}