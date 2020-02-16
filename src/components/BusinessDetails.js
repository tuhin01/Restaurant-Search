import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const BusinessDetails = ({ item }) => {
    return (
        <View style={styles.mainContainer}>
            <Image source={{ uri: item.image_url }} style={{ width: 300, height: 200 }} />
            <Text style={styles.title}>{item.name}</Text>
            <Text>
                {item.rating} Stars, {item.review_count} Reviews
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        marginRight: 20,
        marginBottom: 16,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
        paddingVertical: 8,
    },
    reviewStyle: {
        fontSize: 14,
        marginBottom: 8,
    },
});

export default BusinessDetails;
