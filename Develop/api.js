const axios = require('axios');
const api = require('./utils/api.js');

const api = { 
    async getUser(userResponses){
        try { let responses=await axios
        .get('https://api.github.com/user/${userResponses.username}');
    return responses.data;} catch(error){
        console.log(error);
    }
    }
};
module.exports = api;