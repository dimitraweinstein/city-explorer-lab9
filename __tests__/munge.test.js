const {  mungeWeatherResponse, mungeLocations, mungeReviews } = require('../lib/munge.js');

require('dotenv').config();

// const fakeRequest = require('supertest');
// const app = require('../lib/app');
// const client = require('../lib/client');

describe('munge functions', () =>
{

  test('returns weather data', async () =>
  {
    const expectation = [
      { 'forecast': 'Few clouds', 'time': 'Thursday, June 24, 2021', },
      { 'forecast': 'Broken clouds', 'time': 'Friday, June 25, 2021', },
      { 'forecast': 'Broken clouds', 'time': 'Saturday, June 26, 2021', },
      { 'forecast': 'Few clouds', 'time': 'Sunday, June 27, 2021', },
      { 'forecast': 'Broken clouds', 'time': 'Monday, June 28, 2021', },
      { 'forecast': 'Broken clouds', 'time': 'Tuesday, June 29, 2021', },
      { 'forecast': 'Overcast clouds', 'time': 'Wednesday, June 30, 2021', },
      { 'forecast': 'Thunderstorm with rain', 'time': 'Thursday, July 1, 2021', },
      { 'forecast': 'Broken clouds', 'time': 'Friday, July 2, 2021', },
      { 'forecast': 'Overcast clouds', 'time': 'Saturday, July 3, 2021', },
      { 'forecast': 'Moderate rain', 'time': 'Sunday, July 4, 2021', },
      { 'forecast': 'Thunderstorm with rain', 'time': 'Monday, July 5, 2021', },
      { 'forecast': 'Overcast clouds', 'time': 'Tuesday, July 6, 2021', },
      { 'forecast': 'Overcast clouds', 'time': 'Wednesday, July 7, 2021', },
      { 'forecast': 'Broken clouds', 'time': 'Thursday, July 8, 2021', },
      { 'forecast': 'Scattered clouds', 'time': 'Friday, July 9, 2021', },
    ];
    
    const input = {
      'data': [
        {
          'moonrise_ts': 1624669935,
          'wind_cdir': 'E',
          'rh': 62,
          'pres': 988.521,
          'high_temp': 28.2,
          'sunset_ts': 1624668723,
          'ozone': 305.76,
          'moon_phase': 0.956391,
          'wind_gust_spd': 10.0938,
          'snow_depth': 0,
          'clouds': 7,
          'ts': 1624593660,
          'sunrise_ts': 1624616964,
          'app_min_temp': 19.5,
          'wind_spd': 2.87362,
          'pop': 0,
          'wind_cdir_full': 'east',
          'slp': 1020.25,
          'moon_phase_lunation': 0.53,
          'valid_date': '2021-06-25',
          'app_max_temp': 28.9,
          'vis': 24.096,
          'dewpt': 16.1,
          'snow': 0,
          'uv': 10.6418,
          'weather': {
            'icon': 'c02d',
            'code': 801,
            'description': 'Few clouds'
          },
          'wind_dir': 98,
          'max_dhi': null,
          'clouds_hi': 1,
          'precip': 0,
          'low_temp': 19.7,
          'max_temp': 28.3,
          'moonset_ts': 1624623384,
          'datetime': '2021-06-25',
          'temp': 24.1,
          'min_temp': 19.5,
          'clouds_mid': 0,
          'clouds_low': 7
        },
        {
          'moonrise_ts': 1624760031,
          'wind_cdir': 'E',
          'rh': 77,
          'pres': 987.979,
          'high_temp': 28.4,
          'sunset_ts': 1624755128,
          'ozone': 295.396,
          'moon_phase': 0.894502,
          'wind_gust_spd': 8.59375,
          'snow_depth': 0,
          'clouds': 53,
          'ts': 1624680060,
          'sunrise_ts': 1624703383,
          'app_min_temp': 21.6,
          'wind_spd': 2.29751,
          'pop': 20,
          'wind_cdir_full': 'east',
          'slp': 1019.73,
          'moon_phase_lunation': 0.56,
          'valid_date': '2021-06-26',
          'app_max_temp': 30.9,
          'vis': 24.096,
          'dewpt': 19.4,
          'snow': 0,
          'uv': 5.46652,
          'weather': {
            'icon': 'c03d',
            'code': 803,
            'description': 'Broken clouds'
          },
          'wind_dir': 93,
          'max_dhi': null,
          'clouds_hi': 10,
          'precip': 0.125,
          'low_temp': 21.4,
          'max_temp': 28.4,
          'moonset_ts': 1624713914,
          'datetime': '2021-06-26',
          'temp': 24.1,
          'min_temp': 21.3,
          'clouds_mid': 1,
          'clouds_low': 53
        },
        {
          'moonrise_ts': 1624849559,
          'wind_cdir': 'ESE',
          'rh': 67,
          'pres': 986.896,
          'high_temp': 31.9,
          'sunset_ts': 1624841532,
          'ozone': 295.396,
          'moon_phase': 0.813043,
          'wind_gust_spd': 9.8125,
          'snow_depth': 0,
          'clouds': 55,
          'ts': 1624766460,
          'sunrise_ts': 1624789803,
          'app_min_temp': 20.9,
          'wind_spd': 2.8206,
          'pop': 0,
          'wind_cdir_full': 'east-southeast',
          'slp': 1018.98,
          'moon_phase_lunation': 0.59,
          'valid_date': '2021-06-27',
          'app_max_temp': 32.2,
          'vis': 24.128,
          'dewpt': 18.6,
          'snow': 0,
          'uv': 6.28703,
          'weather': {
            'icon': 'c03d',
            'code': 803,
            'description': 'Broken clouds'
          },
          'wind_dir': 123,
          'max_dhi': null,
          'clouds_hi': 22,
          'precip': 0,
          'low_temp': 20.3,
          'max_temp': 32.1,
          'moonset_ts': 1624804328,
          'datetime': '2021-06-27',
          'temp': 25.8,
          'min_temp': 20.2,
          'clouds_mid': 2,
          'clouds_low': 39
        },
        {
          'moonrise_ts': 1624938558,
          'wind_cdir': 'ESE',
          'rh': 61,
          'pres': 988.167,
          'high_temp': 33.6,
          'sunset_ts': 1624927934,
          'ozone': 306.281,
          'moon_phase': 0.718729,
          'wind_gust_spd': 9.33594,
          'snow_depth': 0,
          'clouds': 19,
          'ts': 1624852860,
          'sunrise_ts': 1624876225,
          'app_min_temp': 20.6,
          'wind_spd': 3.19064,
          'pop': 20,
          'wind_cdir_full': 'east-southeast',
          'slp': 1020.31,
          'moon_phase_lunation': 0.63,
          'valid_date': '2021-06-28',
          'app_max_temp': 33,
          'vis': 24.056,
          'dewpt': 17.4,
          'snow': 0,
          'uv': 9.72894,
          'weather': {
            'icon': 'c02d',
            'code': 801,
            'description': 'Few clouds'
          },
          'wind_dir': 108,
          'max_dhi': null,
          'clouds_hi': 7,
          'precip': 0.0625,
          'low_temp': 20.2,
          'max_temp': 33.6,
          'moonset_ts': 1624894541,
          'datetime': '2021-06-28',
          'temp': 26.5,
          'min_temp': 20.1,
          'clouds_mid': 0,
          'clouds_low': 12
        },
        {
          'moonrise_ts': 1624940738,
          'wind_cdir': 'ESE',
          'rh': 74,
          'pres': 989.361,
          'high_temp': 31.9,
          'sunset_ts': 1625014334,
          'ozone': 320.611,
          'moon_phase': 0.617634,
          'wind_gust_spd': 9.40625,
          'snow_depth': 0,
          'clouds': 68,
          'ts': 1624939260,
          'sunrise_ts': 1624962647,
          'app_min_temp': 21.3,
          'wind_spd': 2.97957,
          'pop': 10,
          'wind_cdir_full': 'east-southeast',
          'slp': 1021.64,
          'moon_phase_lunation': 0.66,
          'valid_date': '2021-06-29',
          'app_max_temp': 32.1,
          'vis': 24.128,
          'dewpt': 19.2,
          'snow': 0,
          'uv': 6.80184,
          'weather': {
            'icon': 'c03d',
            'code': 803,
            'description': 'Broken clouds'
          },
          'wind_dir': 107,
          'max_dhi': null,
          'clouds_hi': 41,
          'precip': 0.3125,
          'low_temp': 20.2,
          'max_temp': 31.4,
          'moonset_ts': 1624984552,
          'datetime': '2021-06-29',
          'temp': 24.6,
          'min_temp': 20.7,
          'clouds_mid': 19,
          'clouds_low': 36
        },
        {
          'moonrise_ts': 1625029024,
          'wind_cdir': 'SE',
          'rh': 73,
          'pres': 987.188,
          'high_temp': 31.8,
          'sunset_ts': 1625100733,
          'ozone': 319.438,
          'moon_phase': 0.51474,
          'wind_gust_spd': 6.69922,
          'snow_depth': 0,
          'clouds': 58,
          'ts': 1625025660,
          'sunrise_ts': 1625049071,
          'app_min_temp': 20.8,
          'wind_spd': 2.16441,
          'pop': 55,
          'wind_cdir_full': 'southeast',
          'slp': 1019.25,
          'moon_phase_lunation': 0.69,
          'valid_date': '2021-06-30',
          'app_max_temp': 32.7,
          'vis': 24.034,
          'dewpt': 19.7,
          'snow': 0,
          'uv': 6.17095,
          'weather': {
            'icon': 'c03d',
            'code': 803,
            'description': 'Broken clouds'
          },
          'wind_dir': 126,
          'max_dhi': null,
          'clouds_hi': 19,
          'precip': 3.5,
          'low_temp': 21.5,
          'max_temp': 32.1,
          'moonset_ts': 1625074406,
          'datetime': '2021-06-30',
          'temp': 25.4,
          'min_temp': 19.9,
          'clouds_mid': 0,
          'clouds_low': 51
        },
        {
          'moonrise_ts': 1625117126,
          'wind_cdir': 'S',
          'rh': 71,
          'pres': 983.562,
          'high_temp': 28.6,
          'sunset_ts': 1625187131,
          'ozone': 312.781,
          'moon_phase': 0.413957,
          'wind_gust_spd': 4.80078,
          'snow_depth': 0,
          'clouds': 75,
          'ts': 1625112060,
          'sunrise_ts': 1625135496,
          'app_min_temp': 22,
          'wind_spd': 2.13731,
          'pop': 45,
          'wind_cdir_full': 'south',
          'slp': 1015.56,
          'moon_phase_lunation': 0.73,
          'valid_date': '2021-07-01',
          'app_max_temp': 33,
          'vis': 22.182,
          'dewpt': 19.8,
          'snow': 0,
          'uv': 3.43087,
          'weather': {
            'icon': 'c04d',
            'code': 804,
            'description': 'Overcast clouds'
          },
          'wind_dir': 172,
          'max_dhi': null,
          'clouds_hi': 66,
          'precip': 2.3125,
          'low_temp': 20.9,
          'max_temp': 33.2,
          'moonset_ts': 1625164165,
          'datetime': '2021-07-01',
          'temp': 26,
          'min_temp': 20.9,
          'clouds_mid': 0,
          'clouds_low': 31
        },
        {
          'moonrise_ts': 1625205133,
          'wind_cdir': 'SW',
          'rh': 80,
          'pres': 983.25,
          'high_temp': 30.5,
          'sunset_ts': 1625273526,
          'ozone': 305.75,
          'moon_phase': 0.318398,
          'wind_gust_spd': 10.4219,
          'snow_depth': 0,
          'clouds': 44,
          'ts': 1625198460,
          'sunrise_ts': 1625221922,
          'app_min_temp': 21.6,
          'wind_spd': 2.19805,
          'pop': 75,
          'wind_cdir_full': 'southwest',
          'slp': 1015.31,
          'moon_phase_lunation': 0.76,
          'valid_date': '2021-07-02',
          'app_max_temp': 31.4,
          'vis': 19.67,
          'dewpt': 21.1,
          'snow': 0,
          'uv': 10.296,
          'weather': {
            'icon': 't02d',
            'code': 201,
            'description': 'Thunderstorm with rain'
          },
          'wind_dir': 220,
          'max_dhi': null,
          'clouds_hi': 32,
          'precip': 7.9375,
          'low_temp': 21,
          'max_temp': 30.7,
          'moonset_ts': 1625253891,
          'datetime': '2021-07-02',
          'temp': 24.9,
          'min_temp': 20.6,
          'clouds_mid': 3,
          'clouds_low': 15
        },
        {
          'moonrise_ts': 1625293126,
          'wind_cdir': 'SW',
          'rh': 71,
          'pres': 984.875,
          'high_temp': 33.4,
          'sunset_ts': 1625359921,
          'ozone': 299.188,
          'moon_phase': 0.230743,
          'wind_gust_spd': 11.3047,
          'snow_depth': 0,
          'clouds': 58,
          'ts': 1625284860,
          'sunrise_ts': 1625308349,
          'app_min_temp': 21.6,
          'wind_spd': 2.80147,
          'pop': 20,
          'wind_cdir_full': 'southwest',
          'slp': 1016.94,
          'moon_phase_lunation': 0.8,
          'valid_date': '2021-07-03',
          'app_max_temp': 31.6,
          'vis': 24.128,
          'dewpt': 19.7,
          'snow': 0,
          'uv': 6.53523,
          'weather': {
            'icon': 'c03d',
            'code': 803,
            'description': 'Broken clouds'
          },
          'wind_dir': 236,
          'max_dhi': null,
          'clouds_hi': 21,
          'precip': 0.125,
          'low_temp': 21.4,
          'max_temp': 30.7,
          'moonset_ts': 1625343632,
          'datetime': '2021-07-03',
          'temp': 25.8,
          'min_temp': 20.5,
          'clouds_mid': 0,
          'clouds_low': 46
        },
        {
          'moonrise_ts': 1625381176,
          'wind_cdir': 'SW',
          'rh': 64,
          'pres': 984.7,
          'high_temp': 32,
          'sunset_ts': 1625446313,
          'ozone': 295.15,
          'moon_phase': 0.153551,
          'wind_gust_spd': 5.01172,
          'snow_depth': 0,
          'clouds': 83,
          'ts': 1625371260,
          'sunrise_ts': 1625394777,
          'app_min_temp': 21.8,
          'wind_spd': 2.00442,
          'pop': 0,
          'wind_cdir_full': 'southwest',
          'slp': 1016.7,
          'moon_phase_lunation': 0.83,
          'valid_date': '2021-07-04',
          'app_max_temp': 33.3,
          'vis': 24.128,
          'dewpt': 17.9,
          'snow': 0,
          'uv': 5.65627,
          'weather': {
            'icon': 'c04d',
            'code': 804,
            'description': 'Overcast clouds'
          },
          'wind_dir': 235,
          'max_dhi': null,
          'clouds_hi': 83,
          'precip': 0,
          'low_temp': 21.1,
          'max_temp': 33.4,
          'moonset_ts': 1625433415,
          'datetime': '2021-07-04',
          'temp': 26,
          'min_temp': 21.1,
          'clouds_mid': 0,
          'clouds_low': 6
        },
        {
          'moonrise_ts': 1625469356,
          'wind_cdir': 'S',
          'rh': 88,
          'pres': 982.75,
          'high_temp': 31.2,
          'sunset_ts': 1625532704,
          'ozone': 288.5,
          'moon_phase': 0.0894298,
          'wind_gust_spd': 5.91406,
          'snow_depth': 0,
          'clouds': 100,
          'ts': 1625457660,
          'sunrise_ts': 1625481206,
          'app_min_temp': 22.9,
          'wind_spd': 1.93839,
          'pop': 80,
          'wind_cdir_full': 'south',
          'slp': 1014.75,
          'moon_phase_lunation': 0.86,
          'valid_date': '2021-07-05',
          'app_max_temp': 26.6,
          'vis': 14.938,
          'dewpt': 21.8,
          'snow': 0,
          'uv': 3.4217,
          'weather': {
            'icon': 'r02d',
            'code': 501,
            'description': 'Moderate rain'
          },
          'wind_dir': 184,
          'max_dhi': null,
          'clouds_hi': 100,
          'precip': 11.8125,
          'low_temp': 21,
          'max_temp': 27.6,
          'moonset_ts': 1625523232,
          'datetime': '2021-07-05',
          'temp': 24,
          'min_temp': 21.5,
          'clouds_mid': 52,
          'clouds_low': 12
        },
        {
          'moonrise_ts': 1625557740,
          'wind_cdir': 'SSW',
          'rh': 69,
          'pres': 984.5,
          'high_temp': 29.4,
          'sunset_ts': 1625619094,
          'ozone': 288.25,
          'moon_phase': 0.0410198,
          'wind_gust_spd': 9.80469,
          'snow_depth': 0,
          'clouds': 94,
          'ts': 1625544060,
          'sunrise_ts': 1625567636,
          'app_min_temp': 22.2,
          'wind_spd': 3.74293,
          'pop': 65,
          'wind_cdir_full': 'south-southwest',
          'slp': 1016.75,
          'moon_phase_lunation': 0.9,
          'valid_date': '2021-07-06',
          'app_max_temp': 32.7,
          'vis': 24.128,
          'dewpt': 19.1,
          'snow': 0,
          'uv': 4.3264,
          'weather': {
            'icon': 't02d',
            'code': 201,
            'description': 'Thunderstorm with rain'
          },
          'wind_dir': 204,
          'max_dhi': null,
          'clouds_hi': 83,
          'precip': 5.25,
          'low_temp': 22.6,
          'max_temp': 32,
          'moonset_ts': 1625613036,
          'datetime': '2021-07-06',
          'temp': 26.8,
          'min_temp': 21,
          'clouds_mid': 56,
          'clouds_low': 61
        },
        {
          'moonrise_ts': 1625646400,
          'wind_cdir': 'NW',
          'rh': 72,
          'pres': 988,
          'high_temp': 32.9,
          'sunset_ts': 1625705482,
          'ozone': 295.75,
          'moon_phase': 0.0107898,
          'wind_gust_spd': 1.7334,
          'snow_depth': 0,
          'clouds': 100,
          'ts': 1625630460,
          'sunrise_ts': 1625654067,
          'app_min_temp': 21.3,
          'wind_spd': 1.17688,
          'pop': 0,
          'wind_cdir_full': 'northwest',
          'slp': 1020.25,
          'moon_phase_lunation': 0.93,
          'valid_date': '2021-07-07',
          'app_max_temp': 28.3,
          'vis': 24.128,
          'dewpt': 18.5,
          'snow': 0,
          'uv': 3.40813,
          'weather': {
            'icon': 'c04d',
            'code': 804,
            'description': 'Overcast clouds'
          },
          'wind_dir': 318,
          'max_dhi': null,
          'clouds_hi': 100,
          'precip': 0,
          'low_temp': 21.5,
          'max_temp': 27.4,
          'moonset_ts': 1625702741,
          'datetime': '2021-07-07',
          'temp': 24,
          'min_temp': 21.1,
          'clouds_mid': 91,
          'clouds_low': 2
        },
        {
          'moonrise_ts': 1625735396,
          'wind_cdir': 'WNW',
          'rh': 64,
          'pres': 986.25,
          'high_temp': 31.1,
          'sunset_ts': 1625791868,
          'ozone': 305.375,
          'moon_phase': 0.0107898,
          'wind_gust_spd': 3.10352,
          'snow_depth': 0,
          'clouds': 92,
          'ts': 1625716860,
          'sunrise_ts': 1625740499,
          'app_min_temp': 22.6,
          'wind_spd': 1.35272,
          'pop': 20,
          'wind_cdir_full': 'west-northwest',
          'slp': 1018.5,
          'moon_phase_lunation': 0.96,
          'valid_date': '2021-07-08',
          'app_max_temp': 32.3,
          'vis': 24.128,
          'dewpt': 18.6,
          'snow': 0,
          'uv': 4.64342,
          'weather': {
            'icon': 'c04d',
            'code': 804,
            'description': 'Overcast clouds'
          },
          'wind_dir': 297,
          'max_dhi': null,
          'clouds_hi': 92,
          'precip': 0.1875,
          'low_temp': 21,
          'max_temp': 31.2,
          'moonset_ts': 1625789141,
          'datetime': '2021-07-08',
          'temp': 26.7,
          'min_temp': 21,
          'clouds_mid': 69,
          'clouds_low': 4
        },
        {
          'moonrise_ts': 1625824755,
          'wind_cdir': 'SW',
          'rh': 76,
          'pres': 986.25,
          'high_temp': 29.3,
          'sunset_ts': 1625878252,
          'ozone': 302.75,
          'moon_phase': 0.000726167,
          'wind_gust_spd': 2.70117,
          'snow_depth': 0,
          'clouds': 58,
          'ts': 1625803260,
          'sunrise_ts': 1625826931,
          'app_min_temp': 21.7,
          'wind_spd': 2.03503,
          'pop': 55,
          'wind_cdir_full': 'southwest',
          'slp': 1018.5,
          'moon_phase_lunation': 1,
          'valid_date': '2021-07-09',
          'app_max_temp': 31,
          'vis': 24.128,
          'dewpt': 20,
          'snow': 0,
          'uv': 7.37953,
          'weather': {
            'icon': 'c03d',
            'code': 803,
            'description': 'Broken clouds'
          },
          'wind_dir': 232,
          'max_dhi': null,
          'clouds_hi': 47,
          'precip': 3.8125,
          'low_temp': 22.1,
          'max_temp': 29.4,
          'moonset_ts': 1625878647,
          'datetime': '2021-07-09',
          'temp': 25.2,
          'min_temp': 21,
          'clouds_mid': 39,
          'clouds_low': 0
        },
        {
          'moonrise_ts': 1625914449,
          'wind_cdir': 'SE',
          'rh': 59,
          'pres': 987.75,
          'high_temp': 32.9,
          'sunset_ts': 1625964635,
          'ozone': 299.75,
          'moon_phase': 0.0120419,
          'wind_gust_spd': 5.21875,
          'snow_depth': 0,
          'clouds': 25,
          'ts': 1625889660,
          'sunrise_ts': 1625913364,
          'app_min_temp': 23,
          'wind_spd': 2.5987,
          'pop': 0,
          'wind_cdir_full': 'southeast',
          'slp': 1020,
          'moon_phase_lunation': 0.03,
          'valid_date': '2021-07-10',
          'app_max_temp': 33,
          'vis': 24.128,
          'dewpt': 17.9,
          'snow': 0,
          'uv': 10.9668,
          'weather': {
            'icon': 'c02d',
            'code': 802,
            'description': 'Scattered clouds'
          },
          'wind_dir': 129,
          'max_dhi': null,
          'clouds_hi': 25,
          'precip': 0,
          'low_temp': 23.4,
          'max_temp': 32.9,
          'moonset_ts': 1625967879,
          'datetime': '2021-07-10',
          'temp': 27.8,
          'min_temp': 22.6,
          'clouds_mid': 2,
          'clouds_low': 0
        }
      ],
      'city_name': 'Fayetteville',
      'lon': '-84.45493',
      'timezone': 'America/New_York',
      'lat': '33.44873',
      'country_code': 'US',
      'state_code': 'GA'
    };
    
    const actual = mungeWeatherResponse(input);

    expect(actual).toEqual(expectation);
  });

  test('munge locations', async () =>
  {
    const expectation = {
      'formatted_query': 'Seattle, King County, Washington, USA',
      'latitude': '47.6038321',
      'longitude': '-122.3300624'
    };
    
    const location = [{
      'place_id': '235549103',
      'licence': 'https://locationiq.com/attribution',
      'osm_type': 'relation',
      'osm_id': '237385',
      'boundingbox': [
        '47.4810022',
        '47.7341357',
        '-122.459696',
        '-122.224433'
      ],
      'lat': '47.6038321',
      'lon': '-122.3300624',
      'display_name': 'Seattle, King County, Washington, USA',
      'class': 'place',
      'type': 'city',
      'importance': 0.772979173564379,
      'icon': 'https://locationiq.org/static/images/mapicons/poi_place_city.p.20.png'
    },
    {
      'place_id': '55417079',
      'licence': 'https://locationiq.com/attribution',
      'osm_type': 'node',
      'osm_id': '4836954932',
      'boundingbox': [
        '20.7199184',
        '20.7200184',
        '-103.3763786',
        '-103.3762786'
      ],
      'lat': '20.7199684',
      'lon': '-103.3763286',
      'display_name': 'Seattle, Villas de Guadalupe, Zapopan, Jalisco, 38901, Mexico',
      'class': 'place',
      'type': 'neighbourhood',
      'importance': 0.30000000000000004
    },
    {
      'place_id': '156976950',
      'licence': 'https://locationiq.com/attribution',
      'osm_type': 'way',
      'osm_id': '291707810',
      'boundingbox': [
        '25.1837689',
        '25.1845505',
        '121.4465868',
        '121.4474398'
      ],
      'lat': '25.18415975',
      'lon': '121.446939985985',
      'display_name': 'Seattle, Lanweibu, Beitou Village, Danhai, Tamsui District, New Taipei, Taiwan',
      'class': 'landuse',
      'type': 'residential',
      'importance': 0.30000000000000004
    },
    {
      'place_id': '84138175',
      'licence': 'https://locationiq.com/attribution',
      'osm_type': 'way',
      'osm_id': '10671266',
      'boundingbox': [
        '41.9611659',
        '41.9657274',
        '-121.9226362',
        '-121.9226043'
      ],
      'lat': '41.9641881',
      'lon': '-121.922629',
      'display_name': 'Seattle, Dorris, Siskiyou County, California, 96058, USA',
      'class': 'highway',
      'type': 'residential',
      'importance': 0.2
    },
    {
      'place_id': '90129562',
      'licence': 'https://locationiq.com/attribution',
      'osm_type': 'way',
      'osm_id': '22919051',
      'boundingbox': [
        '14.6180684',
        '14.6213139',
        '121.0429669',
        '121.0448923'
      ],
      'lat': '14.6195488',
      'lon': '121.0440164',
      'display_name': 'Seattle, Kaunlaran, Cubao, 4th District, Quezon City, Eastern Manila District, Metro Manila, 1111, Philippines',
      'class': 'highway',
      'type': 'residential',
      'importance': 0.2
    },
    {
      'place_id': '160325077',
      'licence': 'https://locationiq.com/attribution',
      'osm_type': 'way',
      'osm_id': '307770120',
      'boundingbox': [
        '28.8472264',
        '28.8487875',
        '-111.9789493',
        '-111.9780146'
      ],
      'lat': '28.8481394',
      'lon': '-111.9783605',
      'display_name': 'Seattle, Nuevo Kino, Bahía Kino, Hermosillo, Sonora, Mexico',
      'class': 'highway',
      'type': 'residential',
      'importance': 0.2
    },
    {
      'place_id': '95155603',
      'licence': 'https://locationiq.com/attribution',
      'osm_type': 'way',
      'osm_id': '29546551',
      'boundingbox': [
        '14.4191845',
        '14.4193677',
        '120.9180883',
        '120.9187908'
      ],
      'lat': '14.4192428',
      'lon': '120.918312',
      'display_name': 'Seattle, ACM Woodstock Homes Ph9, Alapan 1-A, Bayan Luma VI, Imus, Cavite, Calabarzon, 4103, Philippines',
      'class': 'highway',
      'type': 'residential',
      'importance': 0.2
    },
    {
      'place_id': '203034631',
      'licence': 'https://locationiq.com/attribution',
      'osm_type': 'way',
      'osm_id': '561843639',
      'boundingbox': [
        '47.4112544',
        '47.4112745',
        '-122.2621269',
        '-122.2608738'
      ],
      'lat': '47.4112602',
      'lon': '-122.260923',
      'display_name': 'Seattle, Kent, King County, Washington, 98032, USA',
      'class': 'highway',
      'type': 'service',
      'importance': 0.175
    },
    {
      'place_id': '312432623',
      'licence': 'https://locationiq.com/attribution',
      'osm_type': 'way',
      'osm_id': '165271257',
      'boundingbox': [
        '14.6696649',
        '14.6703081',
        '121.0988688',
        '121.0994135'
      ],
      'lat': '14.6703081',
      'lon': '121.0994135',
      'display_name': 'Seattle, Vista Real Classica, Batasan Hills, 2nd District, Quezon City, Eastern Manila District, Metro Manila, 1808, Philippines',
      'class': 'highway',
      'type': 'service',
      'importance': 0.175
    },
    {
      'place_id': '6534059',
      'licence': 'https://locationiq.com/attribution',
      'osm_type': 'node',
      'osm_id': '668442224',
      'boundingbox': [
        '47.6028456',
        '47.6029456',
        '-122.3398908',
        '-122.3397908'
      ],
      'lat': '47.6028956',
      'lon': '-122.3398408',
      'display_name': 'Seattle, Colman Dock, West Edge, Belltown, Seattle, King County, Washington, 98104, USA',
      'class': 'amenity',
      'type': 'ferry_terminal',
      'importance': 0.101
    }];
    
    const data = mungeLocations(location);

    expect(data).toEqual(expectation);
  });
});

test('returns yelp business review data', async () =>
{
  const expectation = [
    { 'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/ZyQjV-wJQ2GHyX7l3jfbyg/o.jpg',
      'name': 'Pike Place Chowder',
      'price': '$$',
      'rating': 4.5,
      'url': 'https://www.yelp.com/biz/pike-place-chowder-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
    },
    {
      'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/qGlIuj5yn6i82DK8kxw4Uw/o.jpg',
      'name': 'Piroshky Piroshky',
      'price': '$',
      'rating': 4.5,
      'url': 'https://www.yelp.com/biz/piroshky-piroshky-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
    },
    {
      'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/jsZkRaDQ6aEa6jwRGWDi5Q/o.jpg',
      'name': 'Ellenos Real Greek Yogurt',
      'price': '$',
      'rating': 5,
      'url': 'https://www.yelp.com/biz/ellenos-real-greek-yogurt-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
    },
    {
      'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/SdnJM6TCUmlKlpN6bnP-Rg/o.jpg',
      'name': 'The Pink Door',
      'price': '$$',
      'rating': 4.5,
      'url': 'https://www.yelp.com/biz/the-pink-door-seattle-4?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
    },
    {
      'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/nJgiyjMZ7sglAtc5wyKSLQ/o.jpg',
      'name': 'Storyville Coffee Company',
      'price': '$$',
      'rating': 4.5,
      'url': 'https://www.yelp.com/biz/storyville-coffee-company-seattle-9?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
    },
    {
      'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/vucCrknnlu1RRvRaKWwovQ/o.jpg',
      'name': 'Japonessa Sushi Cocina',
      'price': '$$',
      'rating': 4,
      'url': 'https://www.yelp.com/biz/japonessa-sushi-cocina-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
    },
    {
      'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/Pxq-GrSvmQCjHxPoCLgsfw/o.jpg',
      'name': 'Starbucks Reserve Roastery Seattle',
      'price': '$$',
      'rating': 4.5,
      'url': 'https://www.yelp.com/biz/starbucks-reserve-roastery-seattle-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
    },
    {
      'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/nA5msGED9d3Bn5ldV2UgHA/o.jpg',
      'name': 'The Crumpet Shop',
      'price': '$',
      'rating': 4.5,
      'url': 'https://www.yelp.com/biz/the-crumpet-shop-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
    },
    {
      'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/hh5CwveJRABseaWt_UxtXA/o.jpg',
      'name': 'Beecher\'s Handmade Cheese',
      'price': '$',
      'rating': 4.5,
      'url': 'https://www.yelp.com/biz/beechers-handmade-cheese-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
    },
    {
      'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/ZxGvVggINkZ_BI3u7OX4CA/o.jpg',
      'name': 'Biscuit Bitch',
      'price': '$',
      'rating': 4,
      'url': 'https://www.yelp.com/biz/biscuit-bitch-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
    },
    {
      'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/5fmWSH9EoNSFLCRakj8tSw/o.jpg',
      'name': 'Le Panier French Bakery',
      'price': '$',
      'rating': 4.5,
      'url': 'https://www.yelp.com/biz/le-panier-french-bakery-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
    },
    {
      'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/qX2VP_ovmhS6NNlO0zi4gA/o.jpg',
      'name': 'Salumi Artisan Cured Meats',
      'price': '$$',
      'rating': 4.5,
      'url': 'https://www.yelp.com/biz/salumi-artisan-cured-meats-seattle-2?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
    },
    {
      'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/y37Xvo70cY1kh6-d1vDdfQ/o.jpg',
      'name': 'Lola',
      'price': '$$',
      'rating': 4,
      'url': 'https://www.yelp.com/biz/lola-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
    },
    {
      'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/mHyyfLAUge0LjN5t1hYfKw/o.jpg',
      'name': 'Serious Pie',
      'price': '$$',
      'rating': 4,
      'url': 'https://www.yelp.com/biz/serious-pie-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
    },
    {
      'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/2Jk8ycCKf7XaSrHdpWxEdw/o.jpg',
      'name': 'Metropolitan Grill',
      'price': '$$$$',
      'rating': 4,
      'url': 'https://www.yelp.com/biz/metropolitan-grill-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
    },
    {
      'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/naJ4Nkphiis5M36tGrGHJA/o.jpg',
      'name': 'Elliott\'s Oyster House',
      'price': '$$$',
      'rating': 4,
      'url': 'https://www.yelp.com/biz/elliotts-oyster-house-seattle-2?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
    },
    {
      'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/iUTo8Vc5is6j5dO358VWTg/o.jpg',
      'name': 'Von\'s 1000 Spirits',
      'price': '$$',
      'rating': 4.5,
      'url': 'https://www.yelp.com/biz/vons-1000-spirits-seattle-4?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
    },
    {
      'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/lH44FL3TivTFgJCjDNWnJA/o.jpg',
      'name': 'Tat\'s Delicatessen',
      'price': '$$',
      'rating': 4.5,
      'url': 'https://www.yelp.com/biz/tats-delicatessen-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
    },
    {
      'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/21QxhWyYxnlHjOBKUysvYA/o.jpg',
      'name': 'Purple Café and Wine Bar',
      'price': '$$$',
      'rating': 4,
      'url': 'https://www.yelp.com/biz/purple-caf%C3%A9-and-wine-bar-seattle-3?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
    },
    {
      'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/W9DnG_PyGHOtApxbAoFOqA/o.jpg',
      'name': 'Radiator Whiskey',
      'price': '$$',
      'rating': 4.5,
      'url': 'https://www.yelp.com/biz/radiator-whiskey-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
    },
  ];
    
  const input =  [
    {
      'id': '6I28wDuMBR5WLMqfKxaoeg',
      'alias': 'pike-place-chowder-seattle',
      'name': 'Pike Place Chowder',
      'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/ZyQjV-wJQ2GHyX7l3jfbyg/o.jpg',
      'is_closed': false,
      'url': 'https://www.yelp.com/biz/pike-place-chowder-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
      'review_count': 7575,
      'categories': [
        {
          'alias': 'seafood',
          'title': 'Seafood'
        },
        {
          'alias': 'soup',
          'title': 'Soup'
        }
      ],
      'rating': 4.5,
      'coordinates': {
        'latitude': 47.60939,
        'longitude': -122.34112
      },
      'transactions': [
        'pickup',
        'delivery'
      ],
      'price': '$$',
      'location': {
        'address1': '1530 Post Aly',
        'address2': 'Ste 11',
        'address3': '',
        'city': 'Seattle',
        'zip_code': '98101',
        'country': 'US',
        'state': 'WA',
        'display_address': [
          '1530 Post Aly',
          'Ste 11',
          'Seattle, WA 98101'
        ]
      },
      'phone': '+12062672537',
      'display_phone': '(206) 267-2537',
      'distance': 1033.824249573459
    },
    {
      'id': 'NxwrJPJLzTs0k0DQ-QCo1A',
      'alias': 'piroshky-piroshky-seattle',
      'name': 'Piroshky Piroshky',
      'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/qGlIuj5yn6i82DK8kxw4Uw/o.jpg',
      'is_closed': false,
      'url': 'https://www.yelp.com/biz/piroshky-piroshky-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
      'review_count': 6393,
      'categories': [
        {
          'alias': 'bakeries',
          'title': 'Bakeries'
        },
        {
          'alias': 'russian',
          'title': 'Russian'
        }
      ],
      'rating': 4.5,
      'coordinates': {
        'latitude': 47.60991,
        'longitude': -122.34231
      },
      'transactions': [
        'pickup',
        'delivery'
      ],
      'price': '$',
      'location': {
        'address1': '1908 Pike Pl',
        'address2': '',
        'address3': '',
        'city': 'Seattle',
        'zip_code': '98101',
        'country': 'US',
        'state': 'WA',
        'display_address': [
          '1908 Pike Pl',
          'Seattle, WA 98101'
        ]
      },
      'phone': '+12064416068',
      'display_phone': '(206) 441-6068',
      'distance': 1149.3174056850469
    },
    {
      'id': 'CKxp6p22ipCo94iLieXzbQ',
      'alias': 'ellenos-real-greek-yogurt-seattle',
      'name': 'Ellenos Real Greek Yogurt',
      'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/jsZkRaDQ6aEa6jwRGWDi5Q/o.jpg',
      'is_closed': false,
      'url': 'https://www.yelp.com/biz/ellenos-real-greek-yogurt-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
      'review_count': 1960,
      'categories': [
        {
          'alias': 'desserts',
          'title': 'Desserts'
        }
      ],
      'rating': 5.0,
      'coordinates': {
        'latitude': 47.608912,
        'longitude': -122.34058
      },
      'transactions': [
        'pickup',
        'delivery'
      ],
      'price': '$',
      'location': {
        'address1': '1500 Pike Pl',
        'address2': '',
        'address3': '',
        'city': 'Seattle',
        'zip_code': '98101',
        'country': 'US',
        'state': 'WA',
        'display_address': [
          '1500 Pike Pl',
          'Seattle, WA 98101'
        ]
      },
      'phone': '+12065357562',
      'display_phone': '(206) 535-7562',
      'distance': 969.948917408613
    },
    {
      'id': 'VOPdG8llLPaga9iJxXcMuQ',
      'alias': 'the-pink-door-seattle-4',
      'name': 'The Pink Door',
      'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/SdnJM6TCUmlKlpN6bnP-Rg/o.jpg',
      'is_closed': false,
      'url': 'https://www.yelp.com/biz/the-pink-door-seattle-4?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
      'review_count': 5350,
      'categories': [
        {
          'alias': 'italian',
          'title': 'Italian'
        },
        {
          'alias': 'wine_bars',
          'title': 'Wine Bars'
        },
        {
          'alias': 'seafood',
          'title': 'Seafood'
        }
      ],
      'rating': 4.5,
      'coordinates': {
        'latitude': 47.61028,
        'longitude': -122.3425
      },
      'transactions': [
        'delivery'
      ],
      'price': '$$',
      'location': {
        'address1': '1919 Post Alley',
        'address2': '',
        'address3': '',
        'city': 'Seattle',
        'zip_code': '98101',
        'country': 'US',
        'state': 'WA',
        'display_address': [
          '1919 Post Alley',
          'Seattle, WA 98101'
        ]
      },
      'phone': '+12064433241',
      'display_phone': '(206) 443-3241',
      'distance': 1185.5875469313717
    },
    {
      'id': 'FVzl8rDPiTWEtrNEuCu-Xg',
      'alias': 'storyville-coffee-company-seattle-9',
      'name': 'Storyville Coffee Company',
      'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/nJgiyjMZ7sglAtc5wyKSLQ/o.jpg',
      'is_closed': false,
      'url': 'https://www.yelp.com/biz/storyville-coffee-company-seattle-9?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
      'review_count': 1835,
      'categories': [
        {
          'alias': 'coffee',
          'title': 'Coffee & Tea'
        },
        {
          'alias': 'bakeries',
          'title': 'Bakeries'
        },
        {
          'alias': 'waffles',
          'title': 'Waffles'
        }
      ],
      'rating': 4.5,
      'coordinates': {
        'latitude': 47.60895949363687,
        'longitude': -122.34043157053927
      },
      'transactions': [
        'pickup',
        'delivery'
      ],
      'price': '$$',
      'location': {
        'address1': '94 Pike St',
        'address2': 'Ste 34',
        'address3': '',
        'city': 'Seattle',
        'zip_code': '98101',
        'country': 'US',
        'state': 'WA',
        'display_address': [
          '94 Pike St',
          'Ste 34',
          'Seattle, WA 98101'
        ]
      },
      'phone': '+12067805777',
      'display_phone': '(206) 780-5777',
      'distance': 964.0382167170328
    },
    {
      'id': 'L8RRAd-JZ0Bd4MER0yyX-g',
      'alias': 'japonessa-sushi-cocina-seattle',
      'name': 'Japonessa Sushi Cocina',
      'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/vucCrknnlu1RRvRaKWwovQ/o.jpg',
      'is_closed': false,
      'url': 'https://www.yelp.com/biz/japonessa-sushi-cocina-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
      'review_count': 4763,
      'categories': [
        {
          'alias': 'japanese',
          'title': 'Japanese'
        },
        {
          'alias': 'sushi',
          'title': 'Sushi Bars'
        },
        {
          'alias': 'cocktailbars',
          'title': 'Cocktail Bars'
        }
      ],
      'rating': 4.0,
      'coordinates': {
        'latitude': 47.6079793649921,
        'longitude': -122.339042355669
      },
      'transactions': [
        'delivery'
      ],
      'price': '$$',
      'location': {
        'address1': '1400 1st Ave',
        'address2': '',
        'address3': '',
        'city': 'Seattle',
        'zip_code': '98101',
        'country': 'US',
        'state': 'WA',
        'display_address': [
          '1400 1st Ave',
          'Seattle, WA 98101'
        ]
      },
      'phone': '+12069717979',
      'display_phone': '(206) 971-7979',
      'distance': 816.0292860649765
    },
    {
      'id': '6ZKNFPLWRIVWshUkMNlgng',
      'alias': 'starbucks-reserve-roastery-seattle-seattle',
      'name': 'Starbucks Reserve Roastery Seattle',
      'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/Pxq-GrSvmQCjHxPoCLgsfw/o.jpg',
      'is_closed': false,
      'url': 'https://www.yelp.com/biz/starbucks-reserve-roastery-seattle-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
      'review_count': 3106,
      'categories': [
        {
          'alias': 'coffee',
          'title': 'Coffee & Tea'
        },
        {
          'alias': 'coffeeroasteries',
          'title': 'Coffee Roasteries'
        }
      ],
      'rating': 4.5,
      'coordinates': {
        'latitude': 47.61401,
        'longitude': -122.32811
      },
      'transactions': [
        'delivery'
      ],
      'price': '$$',
      'location': {
        'address1': '1124 Pike St',
        'address2': '',
        'address3': '',
        'city': 'Seattle',
        'zip_code': '98101',
        'country': 'US',
        'state': 'WA',
        'display_address': [
          '1124 Pike St',
          'Seattle, WA 98101'
        ]
      },
      'phone': '+12066240173',
      'display_phone': '(206) 624-0173',
      'distance': 1141.1547869791877
    },
    {
      'id': 'aX2ctpgS9uvFDfdzCXjecA',
      'alias': 'the-crumpet-shop-seattle',
      'name': 'The Crumpet Shop',
      'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/nA5msGED9d3Bn5ldV2UgHA/o.jpg',
      'is_closed': false,
      'url': 'https://www.yelp.com/biz/the-crumpet-shop-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
      'review_count': 2364,
      'categories': [
        {
          'alias': 'bakeries',
          'title': 'Bakeries'
        },
        {
          'alias': 'coffee',
          'title': 'Coffee & Tea'
        },
        {
          'alias': 'breakfast_brunch',
          'title': 'Breakfast & Brunch'
        }
      ],
      'rating': 4.5,
      'coordinates': {
        'latitude': 47.60899,
        'longitude': -122.34044
      },
      'transactions': [
        'delivery'
      ],
      'price': '$',
      'location': {
        'address1': '1503 1st Ave',
        'address2': '',
        'address3': '',
        'city': 'Seattle',
        'zip_code': '98101',
        'country': 'US',
        'state': 'WA',
        'display_address': [
          '1503 1st Ave',
          'Seattle, WA 98101'
        ]
      },
      'phone': '+12066821598',
      'display_phone': '(206) 682-1598',
      'distance': 972.842611401474
    },
    {
      'id': 'mNdz7zdezTkiuk8S-cIKxg',
      'alias': 'beechers-handmade-cheese-seattle',
      'name': 'Beecher\'s Handmade Cheese',
      'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/hh5CwveJRABseaWt_UxtXA/o.jpg',
      'is_closed': false,
      'url': 'https://www.yelp.com/biz/beechers-handmade-cheese-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
      'review_count': 3044,
      'categories': [
        {
          'alias': 'cheese',
          'title': 'Cheese Shops'
        },
        {
          'alias': 'sandwiches',
          'title': 'Sandwiches'
        }
      ],
      'rating': 4.5,
      'coordinates': {
        'latitude': 47.60963,
        'longitude': -122.34179
      },
      'transactions': [
        'pickup',
        'delivery'
      ],
      'price': '$',
      'location': {
        'address1': '1600 Pike Pl',
        'address2': '',
        'address3': '',
        'city': 'Seattle',
        'zip_code': '98101',
        'country': 'US',
        'state': 'WA',
        'display_address': [
          '1600 Pike Pl',
          'Seattle, WA 98101'
        ]
      },
      'phone': '+12069561964',
      'display_phone': '(206) 956-1964',
      'distance': 1094.5690987855573
    },
    {
      'id': '09FLRYnePKcUwGDDPIOAkg',
      'alias': 'biscuit-bitch-seattle',
      'name': 'Biscuit Bitch',
      'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/ZxGvVggINkZ_BI3u7OX4CA/o.jpg',
      'is_closed': false,
      'url': 'https://www.yelp.com/biz/biscuit-bitch-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
      'review_count': 3990,
      'categories': [
        {
          'alias': 'breakfast_brunch',
          'title': 'Breakfast & Brunch'
        },
        {
          'alias': 'coffee',
          'title': 'Coffee & Tea'
        },
        {
          'alias': 'southern',
          'title': 'Southern'
        }
      ],
      'rating': 4.0,
      'coordinates': {
        'latitude': 47.61034,
        'longitude': -122.34167
      },
      'transactions': [
        'delivery'
      ],
      'price': '$',
      'location': {
        'address1': '1909 1st Ave',
        'address2': '',
        'address3': '',
        'city': 'Seattle',
        'zip_code': '98101',
        'country': 'US',
        'state': 'WA',
        'display_address': [
          '1909 1st Ave',
          'Seattle, WA 98101'
        ]
      },
      'phone': '+12064417999',
      'display_phone': '(206) 441-7999',
      'distance': 1144.6740671250118
    },
    {
      'id': 'Eh-7d5coQltQfQWAtWnPyg',
      'alias': 'le-panier-french-bakery-seattle',
      'name': 'Le Panier French Bakery',
      'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/5fmWSH9EoNSFLCRakj8tSw/o.jpg',
      'is_closed': false,
      'url': 'https://www.yelp.com/biz/le-panier-french-bakery-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
      'review_count': 2456,
      'categories': [
        {
          'alias': 'bakeries',
          'title': 'Bakeries'
        },
        {
          'alias': 'sandwiches',
          'title': 'Sandwiches'
        },
        {
          'alias': 'cakeshop',
          'title': 'Patisserie/Cake Shop'
        }
      ],
      'rating': 4.5,
      'coordinates': {
        'latitude': 47.6098933070898,
        'longitude': -122.342474609613
      },
      'transactions': [
        'delivery'
      ],
      'price': '$',
      'location': {
        'address1': '1902 Pike Pl',
        'address2': '',
        'address3': '',
        'city': 'Seattle',
        'zip_code': '98101',
        'country': 'US',
        'state': 'WA',
        'display_address': [
          '1902 Pike Pl',
          'Seattle, WA 98101'
        ]
      },
      'phone': '+12064413669',
      'display_phone': '(206) 441-3669',
      'distance': 1131.178799592818
    },
    {
      'id': 'T7XmistL2pQrW3hY3oTpng',
      'alias': 'salumi-artisan-cured-meats-seattle-2',
      'name': 'Salumi Artisan Cured Meats',
      'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/qX2VP_ovmhS6NNlO0zi4gA/o.jpg',
      'is_closed': false,
      'url': 'https://www.yelp.com/biz/salumi-artisan-cured-meats-seattle-2?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
      'review_count': 1384,
      'categories': [
        {
          'alias': 'italian',
          'title': 'Italian'
        },
        {
          'alias': 'sandwiches',
          'title': 'Sandwiches'
        },
        {
          'alias': 'meats',
          'title': 'Meat Shops'
        }
      ],
      'rating': 4.5,
      'coordinates': {
        'latitude': 47.59898,
        'longitude': -122.33269
      },
      'transactions': [
        'pickup',
        'delivery'
      ],
      'price': '$$',
      'location': {
        'address1': '404 Occidental Ave S',
        'address2': '',
        'address3': '',
        'city': 'Seattle',
        'zip_code': '98104',
        'country': 'US',
        'state': 'WA',
        'display_address': [
          '404 Occidental Ave S',
          'Seattle, WA 98104'
        ]
      },
      'phone': '+12066218772',
      'display_phone': '(206) 621-8772',
      'distance': 572.3979208787654
    },
    {
      'id': 'oq5KCmPFKV28BnB4hjpo_g',
      'alias': 'lola-seattle',
      'name': 'Lola',
      'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/y37Xvo70cY1kh6-d1vDdfQ/o.jpg',
      'is_closed': false,
      'url': 'https://www.yelp.com/biz/lola-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
      'review_count': 3933,
      'categories': [
        {
          'alias': 'greek',
          'title': 'Greek'
        },
        {
          'alias': 'mediterranean',
          'title': 'Mediterranean'
        },
        {
          'alias': 'breakfast_brunch',
          'title': 'Breakfast & Brunch'
        }
      ],
      'rating': 4.0,
      'coordinates': {
        'latitude': 47.6132519777742,
        'longitude': -122.340060726984
      },
      'transactions': [
        'delivery'
      ],
      'price': '$$',
      'location': {
        'address1': '2000 4th Ave',
        'address2': null,
        'address3': '',
        'city': 'Seattle',
        'zip_code': '98121',
        'country': 'US',
        'state': 'WA',
        'display_address': [
          '2000 4th Ave',
          'Seattle, WA 98121'
        ]
      },
      'phone': '+12064411430',
      'display_phone': '(206) 441-1430',
      'distance': 1288.0007211149011
    },
    {
      'id': '-FOAQv22SXtSBs7nptI3UA',
      'alias': 'serious-pie-seattle',
      'name': 'Serious Pie',
      'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/mHyyfLAUge0LjN5t1hYfKw/o.jpg',
      'is_closed': false,
      'url': 'https://www.yelp.com/biz/serious-pie-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
      'review_count': 4174,
      'categories': [
        {
          'alias': 'pizza',
          'title': 'Pizza'
        }
      ],
      'rating': 4.0,
      'coordinates': {
        'latitude': 47.61296,
        'longitude': -122.34047
      },
      'transactions': [
        'pickup',
        'delivery'
      ],
      'price': '$$',
      'location': {
        'address1': '316 Virginia St',
        'address2': null,
        'address3': '',
        'city': 'Seattle',
        'zip_code': '98121',
        'country': 'US',
        'state': 'WA',
        'display_address': [
          '316 Virginia St',
          'Seattle, WA 98121'
        ]
      },
      'phone': '+12068387388',
      'display_phone': '(206) 838-7388',
      'distance': 1279.7015541496398
    },
    {
      'id': 'lxvncNXJKThTmLmARv72pA',
      'alias': 'metropolitan-grill-seattle',
      'name': 'Metropolitan Grill',
      'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/2Jk8ycCKf7XaSrHdpWxEdw/o.jpg',
      'is_closed': false,
      'url': 'https://www.yelp.com/biz/metropolitan-grill-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
      'review_count': 1800,
      'categories': [
        {
          'alias': 'tradamerican',
          'title': 'American (Traditional)'
        },
        {
          'alias': 'steak',
          'title': 'Steakhouses'
        }
      ],
      'rating': 4.0,
      'coordinates': {
        'latitude': 47.604438,
        'longitude': -122.334126
      },
      'transactions': [
        'pickup',
        'delivery'
      ],
      'price': '$$$$',
      'location': {
        'address1': '820 2nd Ave',
        'address2': '',
        'address3': '',
        'city': 'Seattle',
        'zip_code': '98104',
        'country': 'US',
        'state': 'WA',
        'display_address': [
          '820 2nd Ave',
          'Seattle, WA 98104'
        ]
      },
      'phone': '+12066243287',
      'display_phone': '(206) 624-3287',
      'distance': 312.0208128156214
    },
    {
      'id': 'xqH038QcquJEMm5LIZHd5w',
      'alias': 'elliotts-oyster-house-seattle-2',
      'name': 'Elliott\'s Oyster House',
      'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/naJ4Nkphiis5M36tGrGHJA/o.jpg',
      'is_closed': false,
      'url': 'https://www.yelp.com/biz/elliotts-oyster-house-seattle-2?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
      'review_count': 3589,
      'categories': [
        {
          'alias': 'seafood',
          'title': 'Seafood'
        }
      ],
      'rating': 4.0,
      'coordinates': {
        'latitude': 47.6054699,
        'longitude': -122.34092
      },
      'transactions': [
        'delivery'
      ],
      'price': '$$$',
      'location': {
        'address1': '1201 Alaskan Way',
        'address2': '',
        'address3': 'Pier 56',
        'city': 'Seattle',
        'zip_code': '98101',
        'country': 'US',
        'state': 'WA',
        'display_address': [
          '1201 Alaskan Way',
          'Pier 56',
          'Seattle, WA 98101'
        ]
      },
      'phone': '+12066234340',
      'display_phone': '(206) 623-4340',
      'distance': 836.0363533530226
    },
    {
      'id': 'Lw7NmZ3j-WEye97ywEmkXQ',
      'alias': 'vons-1000-spirits-seattle-4',
      'name': 'Von\'s 1000 Spirits',
      'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/iUTo8Vc5is6j5dO358VWTg/o.jpg',
      'is_closed': false,
      'url': 'https://www.yelp.com/biz/vons-1000-spirits-seattle-4?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
      'review_count': 1802,
      'categories': [
        {
          'alias': 'newamerican',
          'title': 'American (New)'
        },
        {
          'alias': 'burgers',
          'title': 'Burgers'
        },
        {
          'alias': 'pubs',
          'title': 'Pubs'
        }
      ],
      'rating': 4.5,
      'coordinates': {
        'latitude': 47.606565,
        'longitude': -122.338337
      },
      'transactions': [
        'restaurant_reservation',
        'pickup',
        'delivery'
      ],
      'price': '$$',
      'location': {
        'address1': '1225 1st Ave',
        'address2': '',
        'address3': '',
        'city': 'Seattle',
        'zip_code': '98101',
        'country': 'US',
        'state': 'WA',
        'display_address': [
          '1225 1st Ave',
          'Seattle, WA 98101'
        ]
      },
      'phone': '+12066218667',
      'display_phone': '(206) 621-8667',
      'distance': 690.7900253149166
    },
    {
      'id': 'lqxaHsByP4IDsWlrqXhCDQ',
      'alias': 'tats-delicatessen-seattle',
      'name': 'Tat\'s Delicatessen',
      'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/lH44FL3TivTFgJCjDNWnJA/o.jpg',
      'is_closed': false,
      'url': 'https://www.yelp.com/biz/tats-delicatessen-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
      'review_count': 1150,
      'categories': [
        {
          'alias': 'delis',
          'title': 'Delis'
        },
        {
          'alias': 'cheesesteaks',
          'title': 'Cheesesteaks'
        }
      ],
      'rating': 4.5,
      'coordinates': {
        'latitude': 47.6015989850198,
        'longitude': -122.332317061304
      },
      'transactions': [
        'pickup',
        'delivery'
      ],
      'price': '$$',
      'location': {
        'address1': '159 Yesler Way',
        'address2': '',
        'address3': '',
        'city': 'Seattle',
        'zip_code': '98104',
        'country': 'US',
        'state': 'WA',
        'display_address': [
          '159 Yesler Way',
          'Seattle, WA 98104'
        ]
      },
      'phone': '+12062648287',
      'display_phone': '(206) 264-8287',
      'distance': 300.3895479378003
    },
    {
      'id': 'Mh5o8RtQNNUxhoJe6BxVkg',
      'alias': 'purple-café-and-wine-bar-seattle-3',
      'name': 'Purple Café and Wine Bar',
      'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/21QxhWyYxnlHjOBKUysvYA/o.jpg',
      'is_closed': false,
      'url': 'https://www.yelp.com/biz/purple-caf%C3%A9-and-wine-bar-seattle-3?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
      'review_count': 2479,
      'categories': [
        {
          'alias': 'newamerican',
          'title': 'American (New)'
        },
        {
          'alias': 'wine_bars',
          'title': 'Wine Bars'
        },
        {
          'alias': 'desserts',
          'title': 'Desserts'
        }
      ],
      'rating': 4.0,
      'coordinates': {
        'latitude': 47.60795,
        'longitude': -122.33508
      },
      'transactions': [
        'delivery'
      ],
      'price': '$$$',
      'location': {
        'address1': '1225 4th Ave',
        'address2': null,
        'address3': '',
        'city': 'Seattle',
        'zip_code': '98101',
        'country': 'US',
        'state': 'WA',
        'display_address': [
          '1225 4th Ave',
          'Seattle, WA 98101'
        ]
      },
      'phone': '+12068292280',
      'display_phone': '(206) 829-2280',
      'distance': 593.8105510194106
    },
    {
      'id': 'ps9ZlLoLYTfK87IjW9REfg',
      'alias': 'radiator-whiskey-seattle',
      'name': 'Radiator Whiskey',
      'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/W9DnG_PyGHOtApxbAoFOqA/o.jpg',
      'is_closed': false,
      'url': 'https://www.yelp.com/biz/radiator-whiskey-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
      'review_count': 1261,
      'categories': [
        {
          'alias': 'newamerican',
          'title': 'American (New)'
        },
        {
          'alias': 'cocktailbars',
          'title': 'Cocktail Bars'
        },
        {
          'alias': 'comfortfood',
          'title': 'Comfort Food'
        }
      ],
      'rating': 4.5,
      'coordinates': {
        'latitude': 47.608949,
        'longitude': -122.340599
      },
      'transactions': [
        'delivery'
      ],
      'price': '$$',
      'location': {
        'address1': '94 Pike St',
        'address2': 'Ste 30',
        'address3': '',
        'city': 'Seattle',
        'zip_code': '98101',
        'country': 'US',
        'state': 'WA',
        'display_address': [
          '94 Pike St',
          'Ste 30',
          'Seattle, WA 98101'
        ]
      },
      'phone': '+12064674268',
      'display_phone': '(206) 467-4268',
      'distance': 973.5058464656514
    }
  ];
    
  const actual = mungeReviews(input);

  expect(actual).toEqual(expectation);
});
