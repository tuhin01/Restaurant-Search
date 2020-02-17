import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import BusinessDetails from "./BusinessDetails";

const BusinessList = ({ title, businesses }) => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={businesses}
                keyExtractor={business => business.id}
                renderItem={({ item }) => {
                    return <BusinessDetails item={item} />;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        marginBottom: 8,
        borderBottomWidth: 1,
        borderColor: "#ccc",
    },
    title: {
        marginLeft: 16,
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 12,
    },
});

export default BusinessList;
