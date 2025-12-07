import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('aboutMe');
  return rss({
    stylesheet: '/rss/styles.xsl',
    title: 'cool stuff',
    description: 'My journey learning Astro',
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: post.url,
    })),
    customData: `<language>en-us</language>`,
  });
}
