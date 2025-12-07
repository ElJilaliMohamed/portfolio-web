import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt();
export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: 'My little adventures | Blog',
    description: 'Some cool stuff I experience in life.',
    site: context.site,
    items: await Promise.all(
      posts.map(async (post) => ({
        title: post.data.title,
        description: post.data.description,
        trailingSlash: false,
        stylesheet: '/rss/styles.xsl',
        content: sanitizeHtml(parser.render(post.body), {
          content: sanitizeHtml(await post.compiledContent()),
        }),
      }))
    ),
    customData: `<language>en-us</language>`,
  });
}
