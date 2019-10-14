import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import RestaurantDetails from "./RestaurantDetails";

const RestaurantsList = ({title, restaurants}) => {
    return (
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={restaurants}
                keyExtractor={(restaurant) => restaurant.id}
                renderItem={({item}) => {
                    return <RestaurantDetails restaurant={item} />
                }}
            />
        </View>
    );

};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default RestaurantsList;