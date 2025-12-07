// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
import { rssSchema } from '@astrojs/rss';

const image = () => z.object({ url: z.string(), alt: z.string() });

const collabs = defineCollection({

    loader: glob({pattern: '**/[^_]*.md', base: "./src/collabs" }),
    schema:({image}) => z.object({
        title: z.string(),
        description: z.string(),
        cover:z.array(image()),

      })
})
const aboutMe = defineCollection({

  loader: glob({pattern: '**/[^_]*.md', base: "./src/aboutme" }),
  schema:({image}) => rssSchema.extend({
    title: z.string(),
    description: z.string(),
    cover: z.array(image()),
  }),

})

export const collections = { collabs, aboutMe };
