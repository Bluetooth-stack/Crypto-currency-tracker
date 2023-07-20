import { getDateForChart } from "./getDateForChart"

export const settingChartData = (setChartData, prices1, price_change_percentage_24h, prices2) => {
    if (prices2) {
        setChartData(
            {
                labels: prices1.map((date) => (getDateForChart(date[0]))),
                datasets: [
                    {
                        label: 'Crypto 1',
                        data: prices1.map((price) => (price[1])),
                        borderColor: '#dfdf28',
                        borderWidth: 2,
                        fill: false,
                        tension: 0.18,
                        pointRadius: 1,
                        yAxisID: 'crypto_1',
                    },
                    {
                        label: 'Crypto 2',
                        data: prices2.map((price) => (price[1])),
                        borderColor: '#3a80e9',
                        borderWidth: 2,
                        fill: false,
                        tension: 0.18,
                        pointRadius: 1,
                        yAxisID: 'crypto_2',
                    },
                ]
            }
        )
    }
    else {
        setChartData(
            {
                labels: prices1.map((date) => (getDateForChart(date[0]))),
                datasets: [
                    {
                        data: prices1.map((price) => (price[1])),
                        borderColor: price_change_percentage_24h ? price_change_percentage_24h < 0 ?
                            '#ee2525' : '#2fe046' : '#dfdf28',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.18,
                        backgroundColor: price_change_percentage_24h ? price_change_percentage_24h < 0 ?
                            'rgba(238, 37, 37, 0.2)' : 'rgba(47, 224, 71, 0.2)' : 'rgba(223, 223, 40, 0.2)',
                        pointRadius: 1,
                        yAxisID: 'crypto_1',
                    },
                ]
            }
        )
    }
}