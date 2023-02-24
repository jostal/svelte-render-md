# svelte-render-md
## Description
A library that allows reading of yaml frontmatter from a .md file and rendering the md content as html.
MD conversion done using Showdown and YAML parsing done using yaml-js.
## Usage
### Read YAML Frontmatter
```
import { readMDFile } from "svelte-render-md";
let mdFile = readMDFile("myFile.md");
let frontmatter = mdFile.frontmatter;
```
### Render md as HTML 
You can render any md string as html:
```
<script>
  import { RenderHTML } from "svelte-render-md";
</script>

<RenderHTML mdString="# Test String\n This is to test" />
```
You can also render an md file as html:
```
<script>
  import { RenderHTML, readMDFile } from "svelte-render-md";
  let mdFile = readMDFile("myFile.md");
  let mdStr = mdFile.content;
 </script>
 
 <RenderHTML mdString={mdStr} />
```
