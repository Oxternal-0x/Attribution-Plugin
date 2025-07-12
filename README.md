# Attribution VS Code Extension

A Visual Studio Code extension that allows you to add configurable attribution text to the top of your files with enhanced features and optimizations.

## ✨ Features

- **Quick Attribution** - Add custom attribution text (like your name or license) to the top of any text file
- **Configurable Settings** - Customize your attribution text through VS Code settings
- **Multiple Access Methods** - Use command palette, keyboard shortcut, or context menu
- **Smart Notifications** - Optional success/error notifications with configurable display
- **Input Validation** - Ensures attribution text is properly configured before use
- **Error Handling** - Robust error handling with user-friendly messages

## 🚀 Usage

### Method 1: Command Palette
1. Open any text file in VS Code
2. Open the Command Palette (`Ctrl/Cmd + Shift + P`)
3. Type "Add Attribution" and select the command
4. Attribution text will be inserted at the top of the file

### Method 2: Keyboard Shortcut
- **Windows/Linux**: `Ctrl + Shift + A`
- **macOS**: `Cmd + Shift + A`

### Method 3: Context Menu
1. Right-click in any text editor
2. Select "Add Attribution" from the context menu

## ⚙️ Configuration

### Attribution Text
- Open VS Code Settings (`Ctrl/Cmd + ,`)
- Search for "Attribution"
- Set your desired attribution text in the "Attribution: Text" field
- **Default**: `// Created by: Your Name`

### Notifications
- Toggle success/error notifications on/off
- **Default**: Enabled

### Example Settings
```json
{
  "attribution.text": "// Created by: Your Name",
  "attribution.showNotifications": true
}
```

## 🛠️ Development

### Prerequisites
- Node.js (v16 or higher)
- Visual Studio Code

### Setup
1. Clone this repository
2. Run `npm install` to install dependencies
3. Press `F5` to launch the extension in a new Extension Development Host window

### Building
- `npm run compile` - Compile TypeScript to JavaScript
- `npm run watch` - Watch for changes and recompile automatically
- `npm run lint` - Run ESLint (if configured)

## 📁 Project Structure

```
Attribution-Plugin/
├── src/
│   └── extension.ts          # Main extension logic
├── out/                      # Compiled JavaScript
├── .vscode/                  # VS Code configuration
├── package.json              # Extension manifest
├── tsconfig.json             # TypeScript configuration
├── LICENSE                   # Creative Commons BY-NC-SA 4.0
└── README.md                 # This file
```

## 🔧 Technical Details

### Optimizations Implemented
- **Modular Code Structure** - Separated concerns into focused functions
- **Type Safety** - Full TypeScript implementation with strict typing
- **Error Handling** - Comprehensive error handling with user feedback
- **Performance** - Efficient text insertion with proper validation
- **User Experience** - Configurable notifications and multiple access methods
- **Maintainability** - Clean, documented code with constants and helper functions

### Key Features
- **Async/Await** - Modern JavaScript patterns for better performance
- **Input Validation** - Ensures attribution text is valid before insertion
- **Configuration Management** - Centralized configuration handling
- **Notification System** - User-configurable feedback system
- **Multiple UI Access Points** - Command palette, keyboard shortcuts, and context menu

## 📄 License

This project is licensed under the [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/).

## 🤝 Contributing

Contributions are welcome! Please ensure your code follows the existing style and includes appropriate tests.

## 📝 Changelog

### v1.0.0
- ✨ Initial release with core attribution functionality
- 🎯 Multiple access methods (command palette, keyboard shortcut, context menu)
- ⚙️ Configurable settings with validation
- 🔔 Optional notification system
- 🛡️ Comprehensive error handling
- 📚 Full documentation and examples
