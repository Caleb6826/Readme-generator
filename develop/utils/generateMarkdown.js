// badge function

function badge(license){
  return `![Badge](https://img.shields.io/badge/License-${license}-blueviolet)`
}
// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Description
  ${data.description}
  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contribution](#contribution)
  [Tests](#tests)
  [Questions](#questions)
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## License
  The application is covered under the ${data.license} license.
  ${badge(data.license)}
  ## Contribution
  ${data.contributors}
  ## Tests
  ${data.test}
  ## Questions
  **Github Username:** ${data.github}
  **Github Profile:** www.github.com/${data.github}/
  
  **Email Address:** ${data.email}
`;
}

// Export Markdown File
module.exports = generateMarkdown;