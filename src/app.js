import Axios from 'axios';
import bodyParser from 'body-parser';
import express from 'express';
require('./db/models');
import UserRouter from './user/UserRouter';

const app = express();
app.use(bodyParser.json());

const hubSpot = express.Router();

const API_KEY = 'aac9b61c-c4f5-46c5-971a-829f96a0e330';
const hapikey = `?hapikey=${API_KEY}`;

async function getDeals(offset) {
  var offsetParam = null;
  var count = 10;
  if (typeof offset == 'undefined') {
    offsetParam = null;
  } else {
    offsetParam = `offset=${offset}`;
  }
  const hapikeyParam = `hapikey=${API_KEY}`;
  const paramsString = `?count=${count}&${hapikeyParam}&${offsetParam}`;

  const finalUrl = `https://api.hubapi.com/deals/v1/deal/paged${paramsString}`;
  console.log(finalUrl);

  try {
    const body = await Axios.get(finalUrl);
    return body;
    //   request(finalUrl, (error, response, body) => {
    // const parsedBody = JSON.parse(body);
    // parsedBody.deals.forEach((deal) => {
    //   returnedDeals.push(deal);
    // });
    // if (parsedBody['hasMore']) {
    //   getDeals(parsedBody['offset']);
    // } else {
    //   //print out all deals
    //   console.log(returnedDeals);
    // }
    //   });
  } catch (error) {
    console.log('error', error);
    throw new Error();
  }
}

function create(data) {
  const url = `https://api.hubapi.com/deals/v1/deal${hapikey}`;
  const result = Axios.post(url, data);
  return result;
}

hubSpot.get('/get-all', async (req, res) => {
  try {
    const deals = await getDeals();
    console.log(deals.data);
    res.jsonp(deals.data);
  } catch (error) {
    console.log({ error });
    res.jsonp(error);
  }
});

hubSpot.get('/get-all-client', async (req, res) => {
  try {
    const deals = await Axios.get(
      `https://api.hubapi.com/contacts/v1/lists/all/contacts/all?&hapikey=${API_KEY}`,
    );
    console.log(deals.data);
    res.jsonp(deals.data);
  } catch (error) {
    console.log({ error });
    res.jsonp(error);
  }
});

hubSpot.get('/get-all-list-client', async (req, res) => {
  try {
    const deals = await Axios.get(
      `https://api.hubapi.com/contacts/v1/lists?count=100&hapikey=${API_KEY}`,
    );
    console.log(deals.data);
    res.jsonp(deals.data);
  } catch (error) {
    console.log({ error });
    res.jsonp(error);
  }
});

// const dongs = [ ....]

const xUser = [5, 300];
// const xDog = [ 5, 70 ]
const xDog = [5, 70];

hubSpot.get('/get-k', async (req, res) => {
  const data = [
    { company: 'Microsoft', size: 91259, revenue: 60420 },
    { company: 'IBM', size: 400000, revenue: 98787 },
    { company: 'Skype', size: 700, revenue: 716 },
    { company: 'SAP', size: 48000, revenue: 11567 },
    { company: 'Yahoo!', size: 14000, revenue: 6426 },
    { company: 'eBay', size: 15000, revenue: 8700 },
  ];

  // Create the data 2D-array (vectors) describing the data
  let vectors = new Array();
  for (let i = 0; i < data.length; i++) {
    vectors[i] = [data[i]['size'], data[i]['revenue']];
  }

  console.log({ vectors });

  const kmeans = require('cx xxc');
  kmeans.clusterize(vectors, { k: 5 }, (err, res) => {
    if (err) console.error(err);
    else console.log('%o', res);
  });
  res.jsonp({});
});

hubSpot.post('/create', async (req, res) => {
  try {
    const data = req.body;
    const deals = await create(data);
    console.log(deals.data);
    res.jsonp(deals.data);
  } catch (error) {
    console.log({ error });
    res.jsonp(error);
  }
});

app.use('/api/client', UserRouter);

app.use('/api/hub', hubSpot);
app.use('/api/hub', hubSpot);

export default app;
