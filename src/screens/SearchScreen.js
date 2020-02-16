import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import SearchBar from "../components/SearchBar";
import useBusinesses from "../hooks/useBusinesses";

const SearchScreen = props => {
    let {navigation} = props;
    navigation.setOptions({title: "Business Search"});

    const [searchTerm, setSearchTerm] = useState("");
    const [getBusinesses, businesses, errorMessage] = useBusinesses();

    return (
        <View style={styles.mainContainer}>
            <SearchBar
                searchTerm={searchTerm}
                onChange={setSearchTerm}
                onSearch={() => getBusinesses(searchTerm)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {businesses.length} results</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        padding: 16,
        backgroundColor: "white",
        flex: 1,
    },
});

export default SearchScreen;
