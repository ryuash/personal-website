export const projects = [
  {
    title: 'Multiplayer Conway\'s Game of Life',
    background: './game-of-life.png',
    about: 'A spinoff of the popular Game of Life. This project was created as a fun refresher on how to use SocketIO and it\'s websocket protocols. Real-time interactive was created using SocketIO and Nodejs on the backend and React on the frontend.',
    skills: ['React', 'Express', 'Nodejs', 'SocketIO'],
    links: [
      {
        type: 'external',
        description: 'Game of life',
        url: 'https://gol-react-ryuash.herokuapp.com/',
      },
      {
        type: 'github',
        description: 'github game of life react',
        url: 'https://github.com/ryuash/game-of-life-react',
      },
      {
        type: 'github',
        description: 'github game of life nodejs',
        url: 'https://github.com/ryuash/game-of-life-nodejs',
      },
    ],
  },
  {
    title: 'Uprise Merchant App',
    background: './uprise-merchant.png',
    about: 'Uprise Merchant App is the merchant facing part of the loan platform designed by me and developed with the tech team during my time at Uprise. Some features I imeplemented were merchant team integrations, user attempt lockouts and OAuth integrations with Stripe and Paypal.',
    links: [
      {
        type: 'external',
        description: 'Uprise merchant app',
        url: 'https://app.uprise.hk/',
      },
    ],
  },
  {
    title: 'Stackbox',
    background: './stackbox.png',
    about: 'A spinoff of the popular Jackbox party games developed by Jackbox Games. Stackbox is a multiplayer collaborative project with several games designed to be played with one device acting as a host, and up to four players on their personal devices. Stackbox utilizes Google’s real-time Firebase for real-time interactivity',
    skills: ['React', 'Redux', 'Recharts', 'Express', 'Firebase', 'Mocha', 'Chai'],
    links: [
      {
        type: 'github',
        description: 'github stackbox',
        url: 'https://github.com/guava-jay/capstone',
      },
      {
        type: 'external',
        description: 'stackbox',
        url: 'https://stackbox.herokuapp.com/',
      },
    ],
  },
];
