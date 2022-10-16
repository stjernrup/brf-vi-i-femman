import contentful from 'contentful';
import { env } from '$env/dynamic/private';

export async function load() {
	const client = contentful.createClient({
		space: env.CONTENTFUL_SPACE_ID,
		accessToken: env.CONTENTFUL_ACCESS_TOKEN
	});
	const entries = await client.getEntry('3XyhbijuG6rfIaGSTuhA4D');

	return entries;
}
