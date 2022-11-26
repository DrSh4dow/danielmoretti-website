import { error } from '@sveltejs/kit';
import { months } from '$lib/util/constants';
import * as prismic from '@prismicio/client';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const client = prismic.createClient('danielmoretti-blog');
	const rawQuery = await client.getAllByType('blog-post', {
		graphQuery: `{
      blog-post {
          title
          introduction
      }
    }`
	});

	if (rawQuery) {
		const documents = rawQuery.map((d) => {
			const rawDate = d.first_publication_date.split('T')[0].split('-');
			return {
				title: d.data.title[0].text,
				introduction: d.data.introduction[0].text,
				uid: d.uid,
				date: `${months[Number(rawDate[1]) - 1]} ${rawDate[2]}, ${rawDate[0]}`
			};
		});
		return { documents };
	}

	error(404, 'Not found');
}
