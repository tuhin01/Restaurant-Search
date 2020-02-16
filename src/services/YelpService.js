import * as axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization:
            "Bearer 5Pi7WCwVZ99__4yuMa9nyYK0u5ONT5VlLB3Xkdj89XGhuZxXU1mZrMwki792E2BP2kqkKNeAx5UUwX6tnDeteZ8Chk3-mG0oJm1e3l7HS9VVz_o7AUG5uyhoz1RJXnYx",
    },
});
