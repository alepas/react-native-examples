import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from "../components/SearchBar";
import RestaurantsList from "../components/RestaurantsList";
import useRestaurants from "../hooks/useRestaurants";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, restaurants, errorMessage] = useRestaurants();

    const filterRestaurantsByPrice = (price) => {
        return restaurants.filter(restaurant => {
            return restaurant.price === price;
        });
    };
    /*  NB. ScrollView works properly in IOS but it doesn't in Android. It is necessary
        to put flex=1 to the most parent view
    */
    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <RestaurantsList
                title="Cost Effective"
                restaurants={filterRestaurantsByPrice('$')}
                />
                <RestaurantsList
                title="Bit Pricier"
                restaurants={filterRestaurantsByPrice('$$')}
                />
                <RestaurantsList
                title="Big Spender"
                restaurants={filterRestaurantsByPrice('$$$')}
                />
                <RestaurantsList
                title="Luxury Spender"
                restaurants={filterRestaurantsByPrice('$$$$')}
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;