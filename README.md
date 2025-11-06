<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# blanky-site-final
# blanky-site-final -->

# Blanky website

This repository contains the source for **blankyband.com**, a Vite powered React
site for the Lawrence, Kansas shoegaze band Blanky. The project uses
TailwindCSS for styling and deploys to Netlify.

## Getting started

```bash
npm install
npm run dev
```

## Building locally

```bash
npm run build
npm run preview
```

## Updating the Netlify production branch

The production branch in Netlify is **main**. Development happens on the
`work` branch, so after you commit fixes here you need to push those commits to
`main`. If you see `merge: work - not something we can merge`, fetch the branch
locally and re-run the merge or push the branch directly to `main`.

```bash
# option 1: create/update a local work branch from the remote copy
git fetch origin work:work
git checkout main
git merge work

# option 2: push the work branch straight to main
git push origin work:main
```

Once the remote `main` branch is updated Netlify will pick up the new build
using the configuration defined in `netlify.toml`.
