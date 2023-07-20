import axios from "axios";

export async function getCoinPrices(id, currency, days, priceType) {
    // console.log(id, currency, days, priceType);
    try {
        const responce = await axios.get( `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}&interval=daily`);
        return responce.data[priceType];
    }
    catch (error) {
        console.log(new Error(error));
        return Promise.reject(error);
    }
}