import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import yelpService from "../services/YelpService";

class SearchScreen extends React.Component {
    state = {
        searchTerm: "",
        searchResults: [],
    };

    async componentDidMount() {
        await this.searchHandler("pasta");
    }

    searchTermHandler = newSearchTerm => {
        this.setState({
            searchTerm: newSearchTerm,
        });
    };

    searchHandler = async searchTerm => {
        console.log("Searching...");
        try {
            const response = await yelpService.get("/search", {
                params: {
                    term: searchTerm,
                    location: "california",
                    limit: 50,
                },
            });
            console.log(response);
            this.setState({
                searchResults: response.data.businesses,
            });
        } catch (e) {
            console.log(e.message);
        }
    };

    render() {
        let { navigation } = this.props;
        // navigation.setOptions({ title: "Updated 2!" });
        return (
            <View style={styles.mainContainer}>
                <SearchBar
                    searchTerm={this.state.searchTerm}
                    onChange={this.searchTermHandler}
                    onSearch={() => this.searchHandler(this.state.searchTerm)}
                />
                <Text>We have found {this.state.searchResults.length} results</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 16,
        backgroundColor: "white",
        flex: 1,
    },
});

export default SearchScreen;
