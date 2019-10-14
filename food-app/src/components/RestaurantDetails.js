import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const RestaurantDetails = ({restaurant}) => {
    return(
        <View>
            <Image
                style={styles.imageStyle}
                source={{uri: restaurant.image_url}}
            />
            <Text style={styles.nameStyle}>{restaurant.name}</Text>
            <Text style={styles.reviewStyle}>{restaurant.rating} Stars, {restaurant.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginRight: 10
    },
    nameStyle: {
        fontWeight: 'bold',
        fontSize: 16
    },
    reviewStyle: {
        marginBottom: 5
    }
});

export default RestaurantDetails;