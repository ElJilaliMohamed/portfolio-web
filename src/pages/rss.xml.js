import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
  const posts = await getCollection('aboutMe');
  return rss({
    stylesheet: '/rss/styles.xsl',
    title: 'cool stuff',
    description: 'My journey learning Astro',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `portfolio-web/blog/${post.id}`,
      content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
      }),
    })),
    customData: `<language>en-us</language>`,
  });
  
}
