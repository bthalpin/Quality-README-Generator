const licenseOptions = {'APACHE License 2.0':'[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
                        'GNU GPL v3':'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
                        'MIT':'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
                        'Mozilla':'[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
                        'Eclipse Public License 1.0':'[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
                        'None':''
                    };
const readMeContent = ({name,githubName,email,projectName,description,license,dependencies,test,usage,contributing}) => {
    return (
`# ${projectName}
${licenseOptions[license]}

## Description
${description}

## Table of Contents

[Installation](#installation)

[Usage](#usage)

[License](#license)

[Contributing](#contributing)

[Tests](#tests)

[Questions](#questions)

## Installation
To install the necessary dependencies, run the following command:

    ${dependencies}

## Usage
${usage}

## License
${license==='None'?license:`This product is licensed under ${license}`}

## Contributing
${contributing}

## Tests
To run tests, run the following command:

    ${test}

## Questions
If you have any questions about the repo, open an issue or contact me directly at <${email}>. You can find more
    of my work at [${name}](https://github.com/${githubName}).
`
)
}

module.exports = {
    readMeContent,
    licenseOptions
}