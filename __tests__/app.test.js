require('dotenv').config();


const fakeRequest = require('supertest');
const app = require('../lib/app');
// const client = require('../lib/client');

describe('app routes', () => {
  describe('routes', () => {
  
    test('returns locations', async() => {


      const expectation = {
        'formatted_query': 'Seattle, King County, Washington, USA',
        'latitude': '47.6038321',
        'longitude': '-122.3300624',
      };

      const data = await fakeRequest(app)
        .get('/location?search=seattle')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(data.body).toEqual(expectation);
    });

    test('returns weather data', async() => {

      const expectation = [
        { 'forecast': 'Few clouds', 'time': 'Friday, June 25, 2021', },
        { 'forecast': 'Clear Sky', 'time': 'Saturday, June 26, 2021', },
        { 'forecast': 'Clear Sky', 'time': 'Sunday, June 27, 2021', },
        { 'forecast': 'Clear Sky', 'time': 'Monday, June 28, 2021', },
        { 'forecast': 'Clear Sky', 'time': 'Tuesday, June 29, 2021', },
        { 'forecast': 'Few clouds', 'time': 'Wednesday, June 30, 2021', },
        { 'forecast': 'Clear Sky', 'time': 'Thursday, July 1, 2021', },
        { 'forecast': 'Few clouds', 'time': 'Friday, July 2, 2021', },
        { 'forecast': 'Clear Sky', 'time': 'Saturday, July 3, 2021', },
        { 'forecast': 'Broken clouds', 'time': 'Sunday, July 4, 2021', },
        { 'forecast': 'Broken clouds', 'time': 'Monday, July 5, 2021', },
        { 'forecast': 'Broken clouds', 'time': 'Tuesday, July 6, 2021', },
        { 'forecast': 'Broken clouds', 'time': 'Wednesday, July 7, 2021', },
        { 'forecast': 'Clear Sky', 'time': 'Thursday, July 8, 2021', },
        { 'forecast': 'Clear Sky', 'time': 'Friday, July 9, 2021', },
        { 'forecast': 'Scattered clouds', 'time': 'Saturday, July 10, 2021', },
      ];

      const data = await fakeRequest(app)
        .get('/weather?latitude=47.6038321&longitude=-122.3300624')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(data.body).toEqual(expectation);
    });
  });
});
