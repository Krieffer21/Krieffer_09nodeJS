function generateMarkdown(data) {
  return `
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
${data.license}

## Contribution 
${data.contribution}

## Tests 
${data.tests}

## Questions 
${data.questions}
`;

}

module.exports = generateMarkdown;
