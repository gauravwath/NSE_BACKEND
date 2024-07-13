import { NseIndia } from  "stock-nse-india";
//const express = require('express')
//import {express} from "express";

//const app = express();
const  nseIndia = new  NseIndia()
//const  app = new  express()

const port = process.env.PORT || 6123;

// To get all symbols from NSE
// nseIndia.getAllStockSymbols().then(symbols  => {
// console.log(symbols)
// })

//To get equity details for specific symbol
nseIndia.getEquityDetails('IRCTC').then(details  => {
console.log(details)
})

// To get equity historical data for specific symbol
const range = {
    start: new Date("2010-01-01"),
    end: new Date("2021-03-20")
}
// nseIndia.getEquityHistoricalData(symbol, range).then(data => {
//     console.log(data)
// })

// app.get('/api/marketAnalysis/', async (req, res) => {
//     const { identifier } = req.query;
//     if (!identifier) {
//       res.status(400).json({ error: 'Invalid request. No identifier was given.' });
//       return;
//     }; 
  
//     try {
//         nseIndia.getEquityDetails('TCS').then(details  => {
//             console.log(details)
//             })
//       //const data = await getMarketAnalysisData(cookie, identifier.toLowerCase());
//       res.json(details).status(200).end();
//     } catch (error) {
//       console.error('Proxy request error: here', error);
//       res.status(500).json({ error: 'Proxy request failed.' });
//     };
//   });

//   app.get('/', function (req, res) {
//     res.send('Hello World')
//   })

//   app.listen(port, () => {
//     console.log('Server running on port 6123');
//   });