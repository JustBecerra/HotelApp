const RouterProperties = require('express').Router()
const { property } = require('../../models/property')
const axios = require('axios')

RouterProperties.get('/', (req, res) => {
    try{
        const options = {
            method: 'GET',
            url: 'https://hotels-com-provider.p.rapidapi.com/v1/destinations/search',
            params: {query: req.query, currency: 'USD', locale: 'en_US'},
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
        console.log(err).message
    }
})

RouterProperties.get('/details', (req, res) => {
    try{
        // const options = {
        //     method: 'GET',
        //     url: 'https://booking-com.p.rapidapi.com/v1/hotels/search',
        //     params: {
        //       checkout_date: '2022-10-01',
        //       units: 'metric',
        //       dest_id: '-553173',
        //       dest_type: 'city',
        //       locale: 'en-gb',
        //       adults_number: '2',
        //       order_by: 'popularity',
        //       filter_by_currency: 'AED',
        //       checkin_date: '2022-09-30',
        //       room_number: '1',
        //       children_number: '2',
        //       page_number: '0',
        //       children_ages: '5,0',
        //       categories_filter_ids: 'class::2,class::4,free_cancellation::1',
        //       include_adjacency: 'true'
        //     },
        //     headers: {
        //       'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
        //       'X-RapidAPI-Key': 'c9472fcbd6msh2b15be1905fcf79p11f9a5jsna646ce55c345'
        //     }
        //   };
    }catch(err){
        console.log(err)
    }
})

RouterProperties.get('/photos', async (req, res) => {
    try{
        const options = {
            method: 'GET',
            url: 'https://hotels4.p.rapidapi.com/properties/get-hotel-photos',
            params: {id: '1178275040'},
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

module.exports = RouterProperties;