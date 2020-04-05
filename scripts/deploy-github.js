const ghpages = require('gh-pages');

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/ryuash/ryuash.github.io.git',
  },
  () => {
    console.log('Deploy Complete!');
  },
);
