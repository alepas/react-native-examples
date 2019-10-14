import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import RestaurantDetails from "./RestaurantDetails";

const RestaurantsList = ({title, restaurants, navigation}) => {
    return (
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={restaurants}
                keyExtractor={(restaurant) => restaurant.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('RestaurantsShow')}>
                            <RestaurantDetails restaurant={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );

};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15
    }
});

export default withNavigation(RestaurantsList);