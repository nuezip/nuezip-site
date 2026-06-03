# Gomoku Documentation

This repository hosts documentation for the **Gomoku** project. The site has been adapted to serve the Gomoku project's documentation and uses the custom domain `gomoku.w3cub.com`.

## Project Source

The local project used as the source for this site is located at:

/Users/terry/nuecms-workspace/gomoku

To use the Gomoku project's documentation as the site source, you can either copy its `docs/` contents into this repository's `docs/` folder or create a symlink:

```bash
rm -rf docs
ln -s /Users/terry/nuecms-workspace/gomoku/docs docs
```

## Documentation

This site is built with [VitePress](https://vitepress.dev/) and contains guides for the Gomoku project.

### Getting Help

- **Submit Issues**: Report bugs or request features at the Gomoku repository issues (e.g. `https://github.com/your-org/gomoku/issues`)
- **Documentation**: Browse the full documentation at https://gomoku.w3cub.com

## Development

### Prerequisites

- Node.js 18+
- pnpm

### Setup

```bash
pnpm install
```

### Development

```bash
pnpm docs:dev
```

This will start a local development server at `http://localhost:5173`.

### Build

```bash
pnpm docs:build
```

### Preview

```bash
pnpm docs:preview
```

## Deployment

This documentation site can be deployed to GitHub Pages; the workflow includes a step to add a `CNAME` for the custom domain `gomoku.w3cub.com`.

### Manual Deployment

To deploy manually:

1. Build the site: `pnpm docs:build`
2. The built files will be in `docs/.vitepress/dist`
3. Deploy to your hosting platform or push to `gh-pages`

## Contributing

We welcome contributions to improve the documentation:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

Documentation may be redistributed according to the repository LICENSE.
