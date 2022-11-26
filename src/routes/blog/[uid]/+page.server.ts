import { error } from '@sveltejs/kit';
import * as prismic from '@prismicio/client';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const { uid } = params;
	const client = prismic.createClient('danielmoretti-blog');
	const document = await client.getByUID('blog-post', uid);

	if (document) {
		return { document };
	}

	error(404, 'Not found');
}
