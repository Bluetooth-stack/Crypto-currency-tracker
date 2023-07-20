import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJs } from 'chart.js/auto' ///important
import { reduceNumberLength } from '../../../functionalities/reduceNumberLength';


function LineGraph({ chartData, priceType, currency, multiAxis }) {
    const options = {
        plugins: {
            legend: {
                display: multiAxis ? true : false
            }
        },
        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        scales: {
            crypto_1: {
                type: 'linear',
                display: true,
                position: 'left',
                ticks: {
                    // Include a currency sign in the ticks
                    callback: function (value, index, ticks) {
                        return currency + reduceNumberLength(value);
                    }
                }
            },
            crypto_2: {
                type: 'linear',
                display: true,
                position: 'right',
                ticks: {
                    // Include a currency sign in the ticks
                    callback: function (value, index, ticks) {
                        return currency + reduceNumberLength(value);
                    }
                }
            },
        }
    };


    return (
        <Line data={chartData} options={options} />
    )
}

export default LineGraph