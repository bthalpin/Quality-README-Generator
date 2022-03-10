const inquirer = require('inquirer');
const fs = require('fs');
const readmeTemplate = require('./template/readmeTemplate')

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
        {
            type:'confirm',
            message:({name,githubName,email,projectName,description,license,dependencies,test,usage,contributing})=>{
    return (`
    PLEASE CONFIRM YOUR INFORMATION:

    Name: ${name}

    GitHub Name: ${githubName}

    Email: ${email}

    Project Name: ${projectName}

    Description: ${description}

    License: ${license}

    Method to install dependencies: ${dependencies}

    Method to run tests: ${test}

    Usage: ${usage}

    Contributions: ${contributing}

    Proceed with README creation?
    `)

            },
            name:'confirmed'
        }
    ])
    .then(response=>{
        if (response.confirmed){
            fs.writeFile(`./generated-readme/README.md`,readmeTemplate.readMeContent(response),err=>{
                err?console.log(err):console.log('README.md Generated')
            })

        } else {
            console.log('README Generator was cancelled!')
        }
    })