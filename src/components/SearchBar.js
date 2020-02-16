import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ searchTerm, onChange, onSearch }) => {
    return (
        <View style={styles.searchcontainer}>
            <Feather style={styles.searchIcon} name="search" />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.searchInput}
                placeholder="Search"
                value={searchTerm}
                onChangeText={newText => onChange(newText)}
                onEndEditing={onSearch}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchcontainer: {
        backgroundColor: "#F0EEEE",
        height: 50,
        marginHorizontal: 16,
        marginTop: 12,
        borderRadius: 5,
        flexDirection: "row",
    },
    searchIcon: {
        alignSelf: "center",
        fontSize: 35,
        marginHorizontal: 16,
    },
    searchInput: {
        flex: 1,
        fontSize: 18,
    },
});

export default SearchBar;
