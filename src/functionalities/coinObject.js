export const coinObject = (data, setCoinData,  currency) => {
    setCoinData({
        id: data.id,
        name: data.name,
        symbol: data.symbol,
        image: data.image.large,
        description: data.description.en,
        price_change_percentage_24h: data.market_data.price_change_percentage_24h,
        current_price: data.market_data.current_price[currency],
        total_volume: data.market_data.total_volume[currency],
        market_cap: data.market_data.market_cap[currency]
    })
} 