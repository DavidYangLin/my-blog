import axios from 'axios'

axios.defaults.timeout = 5000

const test = process.env.API_URL

axios.interceptors.request.use(config=>{
    console.log(test);
    return config;
},error=>{
    return Promise.reject(error)
})

axios.interceptors.response.use(data=>{
    console.log(data);
    return data;
},error=>{ 
    return Promise.reject(error)
})

export default axios