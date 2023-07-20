import axios from "axios";

export async function getCoinsDataApi(id) {
    try {
        const responce = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
        return responce.data;
    }
    catch (error) {
        console.log(new Error(error));
        // setLoading(false);
        return Promise.reject(error);
    }
}