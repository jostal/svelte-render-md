import * as fs from 'fs'
import * as yaml from 'js-yaml'
import * as showdown from 'showdown'

function mdToHTML(mdStr) {
  let converter = new showdown.Converter();
  return converter.makeHtml(mdStr);;
}

// reads md file and returns frontmatter as object and content as string 
function readMDFile(path) {
  let fileContent = fs.readFileSync(path, 'utf8');
  
  let mdStr;
  let yamlStr;
  // parse frontmatter and convert to object
  if (fileContent.slice(0, 3) === "---") {
    yamlStr = fileContent.split("---")[1];
    mdStr = fileContent.split("---")[2];
  } else {
    mdStr = fileContent;
  }
  
  return {
    frontmatter: yaml.load(yamlStr), 
    content: mdStr 
  }
}

export { mdToHTML, readMDFile }
