function generateMarkdown(data) {
  return `
# ${data.title}

## ${data.description}

## ${data.installation}
## ${data.usage}
## ${data.license}
## ${data.contribution}
## ${data.tests}
## ${data.questions}
`;

}

module.exports = generateMarkdown;
