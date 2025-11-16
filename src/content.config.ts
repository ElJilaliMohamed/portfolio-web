// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
const collabs = defineCollection({

    loader: glob({pattern: '**/[^_]*.md', base: "./src/collabs" }),
    schema:({image}) => z.object({
        title: z.string(),
        description: z.string(),
        image:z.array(image()),

      })

})

const aboutMe = defineCollection({

  loader: glob({pattern: '**/[^_]*.md', base: "./src/aboutme" }),
  schema:({image}) => z.object({
      title: z.string(),
      description: z.string(),
      image:z.array(image()),

    })

})
// Export a single `collections` object to register your collection(s)
export const collections = { collabs, aboutMe };
