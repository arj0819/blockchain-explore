import axios from 'axios';
import { API_BASE_URL } from '../config/apiBaseUrl';
import { API_KEY } from '../config/apiKey';
import store from '../store';

class BaseRepository {
    get(
        requestUrl, 
        params,
        includeAuthHeader = false
    ) {
        console.log(`GET: url -> ${API_BASE_URL + requestUrl}`);
        console.log(`     params -> ${JSON.stringify(params)}`);
        console.log(`     includeAuthHeader -> ${includeAuthHeader}`);
        if (includeAuthHeader) {
            config.headers = {
                Authorization: `Bearer ${localStorage.getItem('blockchain-exploreAuthToken') || ''}`
            }
        }
        var config = {
            params: {
                key: API_KEY, 
                q: store.state.latitude + ',' + store.state.longitude,
                aqi: 'yes',
                ...params
            }
        }
        return axios.get(API_BASE_URL + requestUrl, config);
    }

    post(
        requestUrl, 
        data = null, 
        config = { 
            params: {
                key: API_KEY, 
                q: store.state.latitude + ',' + store.state.longitude, 
                aqi: 'yes'
            }
        },
        includeAuthHeader = false
    ) {
        console.log(`POST: url -> ${API_BASE_URL + requestUrl}`);
        console.log(`      data -> ${JSON.stringify(data)}`);
        console.log(`      config -> ${JSON.stringify(config)}`);
        console.log(`      includeAuthHeader -> ${includeAuthHeader}`);
        if (includeAuthHeader) {
            config.headers = {
                Authorization: `Bearer ${localStorage.getItem('blockchain-exploreAuthToken') || ''}`
            }
        }
        return axios.post(API_BASE_URL + requestUrl, data, config);
    }
}

export default BaseRepository;