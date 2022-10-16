<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const content = data.items.find((item) => item.fields.id === 'header-startpage');
</script>

<h1>{content.fields.heading}</h1>
<p>{content.fields.simpleDescription}</p>
