// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const licenseType = data.License[0];

  let licenseVar = " ";

  if (licenseType === "MIT") {
    licenseVar = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  };
  if (licenseType === "GNU GPL") {
    licenseVar = `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
  };
  if (licenseType === "Apache License") {
    licenseVar = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  };
  return licenseVar;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

  ## Description
  ${data.Description}

  ## Table of Contents 
  - [Description](#Description)
  - [Installation Instructions](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributors](#Contributors)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ## Installation Instructions
  ${data.Installation}
  
  ## Usage
  ${data.Usage}

  ## License
  ${renderLicenseBadge(data)}

  ## Contributors
  ${data.Contributors}

  ## Tests
  ${data.Tests}

  ## Questions
  ${data.Username}

`;
}

module.exports = generateMarkdown;
