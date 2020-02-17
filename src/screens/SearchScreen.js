import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import useBusinesses from "../hooks/useBusinesses";
import BusinessList from "../components/BusinessList";

const SearchScreen = ({ navigation }) => {
    navigation.setOptions({ title: "Business Search" });

    const [searchTerm, setSearchTerm] = useState("");
    const [getBusinesses, businesses, errorMessage] = useBusinesses();

    const filterBusinessByPrice = price => {
        return businesses.filter(business => business.price === price);
    };

    return (
        <View style={styles.mainContainer}>
            <SearchBar
                searchTerm={searchTerm}
                onChange={setSearchTerm}
                onSearch={() => getBusinesses(searchTerm)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView style={{ marginTop: 16 }}>
                <BusinessList businesses={filterBusinessByPrice("$")} title="Cost Effective" />
                <BusinessList businesses={filterBusinessByPrice("$$")} title="Bit Pricier" />
                <BusinessList businesses={filterBusinessByPrice("$$$")} title="Big Spender" />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "white",
        flex: 1,
    },
});

export default SearchScreen;
