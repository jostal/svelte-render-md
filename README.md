# svelte-render-md
## Description
A library that allows reading of yaml frontmatter from a .md file and rendering the md content as html.
MD conversion done using Showdown and YAML parsing done using yaml-js.
## Usage
### Read YAML Frontmatter
```
import { parseContent } from "svelte-render-md";
let mdContent = "---\n
name: 'test'\n
description: 'This is a test'\n
---\n
# Test\n
This is to test the content parser\n";
let content = parseContent(mdContent);
let frontmatter = content.frontmatter;
```
### Render md as HTML 
You can render any md string as html:
```
<script>
  import { RenderHTML } from "svelte-render-md";
</script>

<RenderHTML mdString="# Test String\n This is to test" />
```
Combine the two to render file content as html and retrieve frontmatter:
```
<script>
  import { RenderHTML, parseContent } from "svelte-render-md";
  let mdContent = "---\n
  name: 'test'\n
  description: 'This is a test'\n
  ---\n
  # Test\n
  This is to test the content parser\n";
  let content = parseContent(mdContent);
  let frontmatter = content.frontmatter;
  let mdStr = content.content;
 </script>
 
 <RenderHTML mdString={mdStr} />
```
