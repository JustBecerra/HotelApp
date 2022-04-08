const RouterLocations = require('express').Router()
// const conversationNetwork = require('express').Router()
// const router = express.Router();
const { location } = require('../../models/location')
const axios = require('axios')

RouterLocations.get('/', (req, res) => {
    try{
      const options = {
        method: 'GET',
        url: 'https://hotels4.p.rapidapi.com/get-meta-data',
        headers: {
          'X-RapidAPI-Host': process.env.API_HOST,
          'X-RapidAPI-Key': process.env.API_KEY
        }
      }
      axios(options).then((response) => {
        res.json(response.data)
      }).catch((err) => {
        console.log(err)
      })
    }catch(err){
        console.log(err)
    }
})

RouterLocations.get('/search', async (req, res) => {
  try{
    const options = {
      method: 'GET',
      url: 'https://hotels4.p.rapidapi.com/locations/v2/search',
      params: {query: req.params.query},
      headers: {
        'X-RapidAPI-Host': process.env.API_HOST,
        'X-RapidAPI-Key': process.env.API_KEY
      }
    };
    axios(options).then((response) => {
      res.json(response.data)
    }).catch((err) => {
      console.log(err)
    })
  }catch(err){
    console.log(err)
  }
})

module.exports = RouterLocations;