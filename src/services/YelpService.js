import * as axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization:
            "Bearer xPOZXGw-bY1cyT9yTinv-GmWMRNSYvVWbv-OpKqAzAkASRoie4F2glmk4uBBkG5ikkemXMKeGosSFk7hUGakk2yfrqpOS6oppZwzJaDRUY9-1qXdpqpYJxX_W25HXnYx",
    },
});
