import axios from 'axios'

export default axios.create({
    baseURL: "https://sendbox-challenge.herokuapp.com"
})