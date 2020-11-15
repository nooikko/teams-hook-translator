import * as express from 'express';
import chalk from 'chalk';
import axios from 'axios';
import dotenv from 'dotenv';
import { MessageCardType } from './types';

dotenv.config();

const app = express.default();
const port = 3000;

app.get('/', (req, res) => {
  const card: MessageCardType = {
    '@type': 'MessageCard',
    '@context': 'https://schema.org/extensions',
    summary: '_',
    title: 'Scan Generator Issues',
    themeColor: 'FF0000',
    sections: [
      {
        activityTitle: 'The Scan Generator is offline',
        activitySubtitle: 'Please check the Scan Generator',
        activityImage:
          'https://cdn.iconscout.com/icon/premium/png-256-thumb/generator-1497593-1270467.png',
        facts: [
          {
            name: 'Offline DateTime',
            value: '09/05/2020 - 12:14 PM MST',
          },
        ],
      },
    ],
    potentialAction: [
      {
        '@type': 'OpenUri',
        name: 'View Metrics',
        targets: [
          {
            os: 'default',
            uri: 'https://google.com',
          },
        ],
      },
    ],
  };

  axios.post(process.env.HOOK_URL, card).catch((error) => console.error(error)); // eslint-disable-line

  res.send('ok');
});

app.listen(port, () => {
  console.log('Service is running on:'); // eslint-disable-line
  console.log(chalk.bgGreenBright.black(`http://localhost:${port}`)); // eslint-disable-line
});
