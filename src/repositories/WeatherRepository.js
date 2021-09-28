import BaseRepository from '../repositories/BaseRepository';

class WeatherRepository extends BaseRepository {
    login(email, password) {
        return this.post('/users/login', {
            email,
            password,
        }, undefined, false);
    }

    getCurrentWeather() {
        return this.get('/current.json')
    }
    
    getDayForecast() {
        return this.get('/forecast.json', { days: 1, alerts: 'yes' })
    }
}

export default WeatherRepository;