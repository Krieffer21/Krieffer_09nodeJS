function generateMarkdown(data) {
  return `![badmath](https://img.shields.io/github/languages/topbadge/offset-earth/carbon/${data.username})

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
