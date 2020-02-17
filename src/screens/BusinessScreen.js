import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import yelp from "../services/YelpService";

const BusinessScreen = ({ route, navigation }) => {
    const { id } = route.params;

    const [business, setBusiness] = useState(null);

    const getBusiness = async id => {
        const response = await yelp.get(`/${id}`);
        setBusiness(response.data);
    };

    useEffect(() => {
        (async () => {
            await getBusiness(id);
        })();
    }, []);

    if (!business) {
        return null;
    }

    navigation.setOptions({ title: business.name });

    return (
        <View>
            <Text>{business.name}</Text>
            <FlatList
                data={business.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return <Image source={{ uri: item }} style={{ flex: 1, height: 250 }} />;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default BusinessScreen;
