function generateMarkdown(data) {
  return `
![badge](https://img.shields.io/badge/${data.title}-${data.username}-carbon/)

# ${data.title}

## ${data.description}

## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)

## Installation 
${data.installation}

## Usage 
${data.usage}

## License 
The license used for this project was, ${data.license}.

## Contribution 
${data.contribution}

## Tests 
${data.tests}

## Questions 
For any questions please email me at ${data.questions}.
`;
}

module.exports = generateMarkdown;
