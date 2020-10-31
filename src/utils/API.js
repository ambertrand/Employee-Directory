import axios from 'axios';

const API = "https://randomuser.me/api/?results=200&nat=us"

export default {
    getEmployees: () => axios.get(API)
};