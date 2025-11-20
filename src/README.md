# Deploying an Astro project to GitHub Pages

Lets deploy your Astro project to GitHub Pages.

Do know that you can also upload your Astro project to other hosting services like Combell, Vercel, Netlify, etc. This guide specifically focuses on GitHub Pages.

Some useful resources:

- [Deploying your Astro site](https://docs.astro.build/en/guides/deploy/)
- [Deploying Astro to GitHub Pages](https://docs.astro.build/en/guides/deploy/github-pages/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

The most important steps are described below.

## 1. Check your directory

First check your current working directory to ensure you are in the right place:

```bash
pwd
```

You should see the path to your Astro project. If not, navigate to your project directory using the `cd` command.

## 2. Install dependencies

Make sure all your project dependencies are installed. You can do this by running:

```bash
npm install
```

or

```bash
npm i
```

Don't forget to run your local development server to ensure everything is working correctly:

```bash
npm run dev
```

## 3. Build the project

Building a project means creating an optimized version of your application that is ready for deployment. To create a production build of your Astro project, run the following command in your project directory:

```bash
npm run build
```

You will see a new folder named `dist` created in your project directory. This folder contains all the files needed for deployment.

Open some of the CSS and JS files in the `dist` folder to see what we mean with optimized files.

## 4. Preview the build

To preview the production build locally, you can use the following command:

Do know that if you update your code. The dist folder will not be updated automatically. You will need to run `npm run build` again to create a new production build.

```bash
npm run preview
```

This will start a local server that serves the files from the `dist` folder, allowing you to test the production build before deploying it.

## 5. Configure the base path

Before deploying to GitHub Pages, you need to configure the `base` path in your `astro.config.mjs` file. This is important because GitHub Pages serves your site from a subdirectory based on your repository name.

Open your `astro.config.mjs` file and add the following configuration:

```javascript
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-github-username.github.io',
  base: '/cck/',
});

```

Don't forget to update the nav links in your `Header.astro` component to use the correct [base path](https://docs.astro.build/en/reference/configuration-reference/#base) as well. (You will need to change all the links in your project that point to internal pages.)

You can use the base path from `astro/config` via this syntax: `import.meta.env.BASE_URL`, so it goes like this:

```jsx
<a class="nav__link" href={`${import.meta.env.BASE_URL}news`}>News</a>
```

## 6. Automatic builds with GitHub Actions

Good developers are lazy developers. So why not automate the build and deployment process using GitHub Actions?

Create a GitHub repository for your Astro project if you haven't already.

Make sure your local project is connected to the GitHub repository.

Follow the official Astro guide on [Deploying Astro to GitHub Pages](https://docs.astro.build/en/guides/deploy/github/) to set up a GitHub Actions workflow that automatically builds and deploys your Astro project to GitHub Pages whenever you push changes to your repository.

## 7. Access your deployed site

That's it! After the GitHub Actions workflow completes, your Astro project should be live on GitHub Pages.

Every time you push changes to your deployed branch (`main`), the GitHub Actions workflow will automatically build and deploy your updated site to GitHub Pages.

### 8. Follow up on actions

You can follow up on the GitHub Actions by navigating to the "Actions" tab in your GitHub repository. Here, you can see the status of your workflows, check logs, and troubleshoot any issues that may arise during the build and deployment process.
