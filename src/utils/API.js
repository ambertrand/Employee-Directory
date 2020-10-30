import axios from 'axios';

const APIURL = {
    getDummyEmployees: () => {
        return axios.get("https://randomuser.me/api/?results=200&nat=us")  
    } 
}

export { APIURL }