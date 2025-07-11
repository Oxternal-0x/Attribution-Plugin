# Contributing to Attribution-Plugin

Thank you for your interest in contributing to Attribution-Plugin! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Bugs
- Use the [Bug Report template](.github/ISSUE_TEMPLATE/bug_report.md)
- Provide detailed steps to reproduce the issue
- Include your environment information (OS, VS Code version, extension version)
- Add screenshots if applicable

### Requesting Features
- Use the [Feature Request template](.github/ISSUE_TEMPLATE/feature_request.md)
- Describe the problem you're trying to solve
- Explain your proposed solution
- Consider alternative approaches

### Submitting Code Changes

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
   - Follow the coding standards below
   - Add tests if applicable
   - Update documentation as needed
4. **Test your changes**
   ```bash
   npm install
   npm run compile
   # Test in VS Code Extension Development Host
   ```
5. **Commit your changes**
   ```bash
   git commit -m "feat: add your feature description"
   ```
6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request**
   - Use the PR template if available
   - Describe your changes clearly
   - Link any related issues

## 📋 Development Setup

### Prerequisites
- Node.js (v16 or higher)
- Visual Studio Code
- Git

### Local Development
1. Clone your fork
   ```bash
   git clone https://github.com/your-username/Attribution-Plugin.git
   cd Attribution-Plugin
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Compile the extension
   ```bash
   npm run compile
   ```

4. Run in Extension Development Host
   - Press `F5` in VS Code
   - Or use the "Run Extension" debug configuration

### Available Scripts
- `npm run compile` - Compile TypeScript to JavaScript
- `npm run watch` - Watch for changes and recompile
- `npm run lint` - Run ESLint (if configured)

## 🎨 Coding Standards

### TypeScript/JavaScript
- Use TypeScript for all new code
- Follow strict TypeScript configuration
- Use meaningful variable and function names
- Add JSDoc comments for public functions
- Use async/await instead of callbacks when possible

### Code Style
- Use 2 spaces for indentation
- Use semicolons
- Use single quotes for strings
- Use camelCase for variables and functions
- Use PascalCase for classes and interfaces

### File Organization
- Keep functions focused and single-purpose
- Use constants for configuration values
- Separate concerns into different modules
- Follow the existing project structure

### Error Handling
- Use try-catch blocks for async operations
- Provide meaningful error messages
- Log errors appropriately
- Handle edge cases gracefully

## 🧪 Testing

### Manual Testing
- Test the extension in different VS Code versions
- Test on different operating systems if possible
- Test with various file types
- Test error scenarios

### Code Quality
- Ensure code compiles without errors
- Check for TypeScript errors
- Verify functionality works as expected
- Test configuration changes

## 📝 Documentation

### Code Documentation
- Add JSDoc comments for public functions
- Document complex logic with inline comments
- Keep comments up-to-date with code changes

### User Documentation
- Update README.md for user-facing changes
- Add examples for new features
- Update configuration documentation

## 🔄 Pull Request Guidelines

### Before Submitting
- [ ] Code compiles without errors
- [ ] All tests pass (if applicable)
- [ ] Documentation is updated
- [ ] Code follows style guidelines
- [ ] Changes are tested manually

### PR Description
- Describe what the PR does
- Explain why the changes are needed
- Link related issues
- Include screenshots for UI changes
- Mention any breaking changes

## 🏷️ Commit Message Format

Use conventional commit format:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding tests
- `chore:` for maintenance tasks

Example:
```
feat: add keyboard shortcut for attribution command

- Add Ctrl+Shift+A (Cmd+Shift+A on macOS) shortcut
- Update package.json with keybinding configuration
- Add documentation for new shortcut
```

## 📞 Getting Help

- Open an issue for questions or problems
- Check existing issues for similar problems
- Review the README.md for setup instructions
- Look at existing code for examples

## 📄 License

By contributing to Attribution-Plugin, you agree that your contributions will be licensed under the same license as the project (Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International).

## 🙏 Recognition

Contributors will be recognized in:
- The project README
- Release notes
- GitHub contributors list

Thank you for contributing to Attribution-Plugin! 🎉 