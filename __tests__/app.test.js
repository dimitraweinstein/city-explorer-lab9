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

    test('returns yelp review data', async() => {

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

      const data = await fakeRequest(app)
        .get('/reviews?latitude=47.6038321&longitude=-122.3300624')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(data.body).toEqual(expectation);
    });

  });
});
