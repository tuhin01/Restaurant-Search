import { useEffect, useState } from "react";
import yelp from "../services/YelpService";

export default () => {
    const [businesses, setBusinesses] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    async function getBusinesses(searchTerm) {
        console.log("Here in getBusiness");
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
            console.log(e);
            setErrorMessage("Something went wrong");
        }
    }

    useEffect(() => {
        (async () => {
            await getBusinesses("pasta");
        })();
    }, []);

    return [getBusinesses, businesses, errorMessage];
};
