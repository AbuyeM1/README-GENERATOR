

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

![alttext](https://lh3.googleusercontent.com/KyvvcO0bXTbkyu1F7-lXmKutFdRoVo31Buas7aP3r2EPQq5NsERd3M7S1mkA4yHj_6WLDdQ=s250)

![Video](https://drive.google.com/file/d/1ugnDwfYQLtGCZPGzN0zpGNUL6cYmlAOR/view?usp=sharing)
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

* [Abuye Mamuye](https://github.com/AbuyeM1)
`+data.contribute;}

markDown+=`

## Question `+`

* [LinkedIn](https://www.linkedin.com/in/abuye-mamuye-5a49921b0/)

 * [GitHub](https://github.com/AbuyeM1)


* [Email](`+data.email+`)`;


return markDown;
  //return `# ${data.title}

}

module.exports = generateMarkdown;
