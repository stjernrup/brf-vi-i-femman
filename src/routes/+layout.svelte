<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const aboutUs = data?.fields as { href: string; text: string };
</script>

<nav><a href={aboutUs.href}>{aboutUs.text}</a></nav>
<slot />
