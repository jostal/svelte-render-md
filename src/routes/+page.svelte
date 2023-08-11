<script>
	import { onMount } from 'svelte';
	import RenderHtml from '$lib/RenderHTML.svelte';
	import { parseContent } from '$lib/md_to_html.js';

	let data;
	let mdStr;

	onMount(async () => {
		data = await readFile('test.md');
		mdStr = parseContent(data).content;
	});

	async function readFile(filepath) {
		let content = await fetch(filepath).then((res) => res.text());
		return content;
	}
</script>

{#if mdStr}
	<RenderHtml mdString={mdStr} />
{/if}
