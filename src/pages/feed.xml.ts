import { constants } from '@/constants.ts';
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

const { title, description, defaultAuthor, site, permalinkBase } =
    constants.meta.feed;

export async function GET() {
    const items = await getCollection('news');

    items.sort((a, b) => {
        return a.id < b.id ? 1 : -1;
    });

    return rss({
        title,
        description,
        site,
        items: items
            .slice(0, 10)
            .map(
                ({
                    id,
                    body = '',
                    data: { title, date: pubDate, author },
                }) => ({
                    title,
                    pubDate,
                    author: author || defaultAuthor,
                    link: `${site}/${permalinkBase}/${id}/`,
                    content: sanitizeHtml(marked(body, { async: false }), {
                        allowedTags: sanitizeHtml.defaults.allowedTags.concat([
                            'img',
                        ]),
                    }),
                }),
            ),
    });
}
