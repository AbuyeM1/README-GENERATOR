

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

let markDown='# Title : '+data.title;

let tableOfContent='## Table of Contents';
tableOfContent+=`
- [Description](#Description)`;
tableOfContent+=`
- [Installation](#Installation)`;
tableOfContent+=`
- [Tests](#Test)`;
tableOfContent+=`
- [repo](#Repo)`;
tableOfContent+=`
- [License](#License)`;
tableOfContent+=`
- [Contributing](#Contributing)`;
tableOfContent+=`
- [Questions](#Questions)`;



markDown+=`

`+tableOfContent;

markDown+=`

## Description` +`
`+data.description;

if(data.install!=''){
markDown+=`

## Installation `+`
`+data.install; }

if (data.test!=''){
markDown+=`

## Test `+`
`+data.test;}

if(data.repo!=''){
markDown+=`

## Repository `+`
`+data.repo;}

if (data.license !=''){
markDown+=`

## License `+`

![badge](https://shields.io/badge/license-`+data.license+`)`+`

![badge](https://shields.io/badge/downloads-120%2Fweek-green)`} 

if (data.contribute!=''){
markDown+=`

## Contributing `+`
`+data.contribute;}

markDown+=`

## Question `+`

* [Email](`+data.email+`)`;


return markDown;
  //return `# ${data.title}

}

module.exports = generateMarkdown;
