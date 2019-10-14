import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather style={styles.iconStyle}
                name="search"/>
            <TextInput style={styles.inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 5
    }
});

export default SearchBar;