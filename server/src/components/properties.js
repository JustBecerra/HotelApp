const RouterProperties = require('express').Router()
const { property } = require('../../models/property')
const axios = require('axios')

RouterProperties.get('/', (req, res) => {
    try{
        const options = {
            method: 'GET',
            url: 'https://hotels4.p.rapidapi.com/properties/list',
            params: {
              destinationId: '1506246',
              pageNumber: '1',
              pageSize: '25',
              checkIn: '2020-01-08',
              checkOut: '2020-01-15',
              adults1: '1',
              sortOrder: 'PRICE',
              locale: 'en_US',
              currency: 'USD'
            },
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
        const options = {
            method: 'GET',
            url: 'https://hotels4.p.rapidapi.com/properties/get-details',
            params: {
              id: '424023',
              checkIn: '2020-01-08',
              checkOut: '2020-01-15',
              adults1: '1',
              currency: 'USD',
              locale: 'en_US'
            },
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