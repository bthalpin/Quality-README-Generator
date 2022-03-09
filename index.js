// What is user name
//  email
// project name
// short description for project
// License MIT APACHE GPL BSD NONE
// what command to install dependancies npm i
// what command to run tests - npm test
// what does user need to know about using repo --usage
// what does user need to know baout contributing to the repo?

// TITLE
// License tag
// DESCRIPTION
// description
// TABLE OF CONTENTS
// installation
// Usage
// License
// Contributing
// tests
// questions

// INSTALLATION
// to install necessary dependencies run the following command:
// npm install
// USAGE
// usage text
// License
// This project is licensed under the MIT license
// Contributing
// 
// TESTS
// to run tests run the followin command
// npm test
// Questions
// if you have any questions about the repo, open an issue or contact me directly at email. You can find more
// of my work at GITHUB LINK

const inquirer = require('inquirer');
const fs = require('fs');
const readmeTemplate = require('./template/readmeTemplate')

// const licenseOptions = {'APACHE License 2.0':'[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
//                         'GNU GPL v3':'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
//                         'MIT':'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
//                         'Mozilla':'[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
//                         'Eclipse Public License 1.0':'[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
//                         'None':''
//                     };
// const readMeContent = ({name,githubName,email,projectName,description,license,dependencies,test,usage,contributing}) => {
//     return (
// `# ${projectName}
// ${licenseOptions[license]}

// ## Description
// ${description}

// ## Table of Contents

// [Installation](#installation)

// [Usage](#usage)

// [License](#license)

// [Contributing](#contributing)

// [Tests](#tests)

// [Questions](#questions)

// ## Installation
// To install the necessary dependencies, run the following command:

//     ${dependencies}

// ## Usage
// ${usage}

// ## License
// ${license==='None'?license:`This product is licensed under ${license}`}

// ## Contributing
// ${contributing}

// ## Tests
// To run tests, run the following command:

//     ${test}

// ## Questions
// If you have any questions about the repo, open an issue or contact me directly at <${email}>. You can find more
//     of my work at [${name}](https://github.com/${githubName}).
// `
// )
// }

inquirer
    .prompt([
        {
            type:'input',
            name:'name',
            message:'What is your full name? ',
        },
        {
            type:'input',
            name:'githubName',
            message:'What is your GitHub username? '
        },
        {
            type:'input',
            name:'email',
            message:'What is your email address? '
        },
        {
            type:'input',
            name:'projectName',
            message:'What is your project name? '
        },
        {
            type:'input',
            name:'description',
            message:'Enter a brief description about your project: '
        },
        {
            type:'list',
            name:'license',
            message:'Select which license you would like to use: ',
            choices:Object.keys(readmeTemplate.licenseOptions)
        },
        {
            type:'input',
            name:'dependencies',
            message:'What is the command to install the dependencies for the project? ',
            default:'npm install'
        },
        {
            type:'input',
            name:'test',
            message:'What is the command to run tests for the project? ',
            default:'npm test'
        },
        {
            type:'input',
            name:'usage',
            message:'What does the user need to know about using the repo? '
        },
        {
            type:'input',
            name:'contributing',
            message:'What does the user need to know about contributing to the page? '
        },
    ])
    .then(response=>{

        fs.writeFile(`./generated-readme/README.md`,readmeTemplate.readMeContent(response),err=>{
            err?console.log(err):console.log('README.md Generated')
        })
    })