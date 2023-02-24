import * as fs from 'fs'
import * as yaml from 'js-yaml'
import * as showdown from 'showdown'

function mdToHTML(mdStr) {
  let converter = new showdown.Converter();
  return converter.makeHtml(mdStr);;
}

// reads md file and returns frontmatter as object and content as string 
function parseContent(content) {
  let mdStr;
  let yamlStr;
  // parse frontmatter and convert to object
  if (content.slice(0, 3) === "---") {
    yamlStr = content.split("---")[1];
    mdStr = content.split("---")[2];
  } else {
    mdStr = content;
  }
  
  return {
    frontmatter: yaml.load(yamlStr), 
    content: mdStr 
  }
}

export { mdToHTML, parseContent }
