<script>
  import { mdToHTML } from "./md_to_html";
  // markdown as a string so user must convert to string from file if that is md source
  // chose to render from string so user can provide md from any source to this component
  export let mdString;
  let html = mdToHTML(mdString);
</script>

<div class="rendered-html">
  {@html html}
</div>
