import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const BusinessDetails = ({ item }) => {
    return (
        <View style={styles.mainContainer}>
            <Image source={{ uri: item.image_url }} style={styles.image} />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.reviewStyle}>
                {item.rating} Stars, {item.review_count} Reviews
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        marginRight: 20,
        marginBottom: 16,
        height: 200,
    },
    image: {
        width: 250,
        flex: 1,
        borderRadius: 5,
    },
    title: {
        fontWeight: "bold",
        paddingVertical: 8,
    },
    reviewStyle: {
        fontSize: 14,
    },
});

export default BusinessDetails;
