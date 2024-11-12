import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://api.currencyfreaks.com/v2.0/rates/latest?apikey=1313ee9323084c7f9af51c136e1f7828')
    .then(response => response.json())
    .then(result => {
      console.log(result)
      let rates = [
        {
          currency: 'CAD',
          exchange_rate: result.rates.CAD,
          we_buy: 1.05 * result.rates.CAD,
          we_sell: result.rates.CAD - 5 / 100 * result.rates.CAD,
        },
        {
          currency: 'IDR',
          exchange_rate: result.rates.IDR,
          we_buy: 1.05 * result.rates.IDR,
          we_sell: result.rates.IDR - 5 / 100 * result.rates.IDR,
        },
        {
          currency: 'JPY',
          exchange_rate: result.rates.JPY,
          we_buy: 1.05 * result.rates.JPY,
          we_sell: result.rates.JPY - 5 / 100 * result.rates.JPY,
        },
        {
          currency: 'CHF',
          exchange_rate: result.rates.CHF,
          we_buy: 1.05 * result.rates.CHF,
          we_sell: result.rates.CHF - 5 / 100 * result.rates.CHF,
        },
        {
          currency: 'EUR',
          exchange_rate: result.rates.EUR,
          we_buy: 1.05 * result.rates.EUR,
          we_sell: result.rates.EUR - 5 / 100 * result.rates.EUR,
        },
        {
          currency: 'GBP',
          exchange_rate: result.rates.GBP,
          we_buy: 1.05 * result.rates.GBP,
          we_sell: result.rates.GBP - 5 / 100 * result.rates.GBP,
        },
      ]

      setData(rates)
    })}, []
)


  return (
    <div>
        <table>
          <tr>
            <th>Currency</th>
            <th>exchange_rate</th>
            <th>we_buy</th>
            <th>we_sell</th>
          </tr>
          {
            data.map((rate, index) => {
              return (
                <tr key={index}>
                  <td>{rate.currency}</td>
                  <td>{rate.exchange_rate}</td>
                  <td>{rate.we_buy}</td>
                  <td>{rate.we_sell}</td>
                </tr>
              )
            })
          }
        </table>
      </div>
  )
}

export default App
