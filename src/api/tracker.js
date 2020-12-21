import axios from 'axios';

export default axios.create({
    baseURL:'http://d4949dc3eea9.ngrok.io' // 8 saatte bir kapanıyor ngrok ile tekrar çağırıyoruz.
})