# Contributing

We welcome contributions to improve NueZip! Whether you're fixing a bug, adding a feature, translating, or improving documentation, your help is appreciated.

## Ways to Contribute

### Bug Reports
- Check existing [issues](https://github.com/nuezip/nuezip/issues) first
- Include macOS version, NueZip version, and steps to reproduce
- Attach sample archives if possible (minimal size)

### Feature Requests
- Describe the feature and the use case
- Explain why it would benefit NueZip users
- Check if it aligns with the offline-first, native macOS philosophy

### Translations
- NueZip supports multiple languages via i18n JSON files
- Contribute translations for missing or incomplete languages
- See `NueZip/Resources/i18n/` for existing translations

### Code Contributions
- The project is written in **Swift 6 + SwiftUI**
- Fork the repository and submit a pull request
- Follow Clean Architecture patterns used in the codebase

## Getting Started

### Prerequisites
- Node.js 18 or later (for site)
- pnpm package manager (for site)
- Xcode 16+ (for app development)
- macOS 14 Sonoma+

### Development Setup

1. **Fork the repository** on GitHub
2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/pet-reminder-site.git
   cd pet-reminder-site
   ```
3. **Install dependencies**:
   ```bash
   pnpm install
   ```
4. **Start development server**:
   ```bash
   pnpm docs:dev
   ```
5. **Open** `http://localhost:5173` in your browser

### Making Changes

1. Create a new branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make your changes to the documentation files in `docs/`
3. Test your changes by building the site:
   ```bash
   pnpm docs:build
   ```
4. Commit your changes:
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

### Submitting Changes

1. **Push your branch** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
2. **Create a Pull Request** on GitHub
3. **Wait for review** and address any feedback

## Guidelines

### Writing Style
- Use clear, concise language
- Write in active voice when possible
- Be inclusive and welcoming
- Use consistent formatting
- Include screenshots when helpful

### File Structure
- Documentation pages go in `docs/`
- Guides go in `docs/guide/`
- Use lowercase filenames with hyphens: `my-new-guide.md`
- Frontmatter is not required but can be used for metadata

### Links
- Use relative links for internal documentation
- Link to external resources when helpful
- Ensure all links work

### Images and Assets
- Place images in `docs/public/` or subdirectories
- Use descriptive filenames
- Optimize images for web (under 500KB preferred)

## Code of Conduct

This project follows a code of conduct. By participating, you agree to:
- Be respectful and inclusive
- Focus on constructive feedback
- Accept responsibility for mistakes

See [CODE_OF_CONDUCT.md](https://github.com/gomoku-app/gomoku-site/blob/main/CODE_OF_CONDUCT.md) for details.

## Questions?

If you have questions about contributing:
-- Check existing [issues](https://github.com/gomoku-app/gomoku-site/issues) and [discussions](https://github.com/gomoku-app/gomoku-site/discussions)
- Create a new issue if needed
- Contact the maintainers

Thank you for helping improve Gomoku documentation! 🎉