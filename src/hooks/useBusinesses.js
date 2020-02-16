import { useEffect, useState } from "react";
import yelp from "../services/YelpService";

export default () => {
    const [businesses, setBusinesses] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const getBusinesses = async searchTerm => {
        try {
            const response = await yelp.get("/search", {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: "California",
                },
            });
            setBusinesses(response.data.businesses);
        } catch (e) {
            setErrorMessage("Something went wrong");
        }
    };

    useEffect(() => {
        getBusinesses("pasta");
    });

    return [getBusinesses, businesses, errorMessage];
};
