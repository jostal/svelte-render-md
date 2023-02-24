<script>
  import RenderHtml from "$lib/RenderHTML.svelte";
  import { readMDFile } from "$lib/md_to_html";

  let mdFile = readMDFile('./static/test.md');
  let frontmatter = mdFile.frontmatter;
  let mdStr = mdFile.content;
</script>

<RenderHtml mdString={mdStr} />
