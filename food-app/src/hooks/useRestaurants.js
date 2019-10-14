import {useEffect, useState} from 'react';
//useEffect --> allows to run one piece of code just once
import yelp from "../api/yelp";

export default () => {
    const [restaurants, setRestaurants] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async searchTerm => {
        try {
            const response = await yelp.get('/search', {
                params: { //all the filters that will be added to the url after ? are set into param
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setRestaurants(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    };

    //BAD CODE: searchApi('pasta') -> it is run in a loop
    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, restaurants, errorMessage];
};