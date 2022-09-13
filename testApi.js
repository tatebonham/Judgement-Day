const axios = require('axios')

const url =  'https://www.dnd5eapi.co/api/'
const testOne = ()=>{
    axios.get(url)
    .then(apiData=>{
        console.log(apiData)
    })
}

testOne()