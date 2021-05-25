import {useState} from 'react';
import yelp from '../api/yelp';

export default useResults = function() {
    const [results, setResults] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');

    const hitImageAPI = async function(id){
        try{
        const response = await yelp.get('/'+id);
        setResults(response.data);
        } catch(err) {
            setErrorMsg('Something went wrong');
        }
    }

    return [hitImageAPI,errorMsg,results];
}