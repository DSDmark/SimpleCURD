const fs = require('fs');

const content = `
# My repository
This is the README for my repository.
`;

fs.writeFileSync('README.md', content);
