"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
/**
 * Attribution VS Code Extension
 * Adds configurable attribution text to the top of files
 */
// Configuration keys
const CONFIG_SECTION = 'attribution';
const CONFIG_TEXT_KEY = 'text';
const CONFIG_NOTIFICATIONS_KEY = 'showNotifications';
// Error messages
const ERROR_MESSAGES = {
    NO_EDITOR: 'No active text editor found. Please open a file first.',
    NO_ATTRIBUTION_TEXT: 'No attribution text found in settings. Please configure the attribution text in VS Code settings.',
    INSERTION_FAILED: 'Failed to insert attribution text. Please try again.',
    EMPTY_ATTRIBUTION: 'Attribution text cannot be empty. Please configure a valid attribution text in settings.'
};
/**
 * Gets the attribution text from configuration
 */
function getAttributionText() {
    const config = vscode.workspace.getConfiguration(CONFIG_SECTION);
    return config.get(CONFIG_TEXT_KEY);
}
/**
 * Gets the notification setting from configuration
 */
function shouldShowNotifications() {
    const config = vscode.workspace.getConfiguration(CONFIG_SECTION);
    return config.get(CONFIG_NOTIFICATIONS_KEY, true);
}
/**
 * Validates the attribution text
 */
function validateAttributionText(text) {
    return typeof text === 'string' && text.trim().length > 0;
}
/**
 * Shows a notification if notifications are enabled
 */
function showNotification(message, type = 'info') {
    if (!shouldShowNotifications()) {
        return;
    }
    switch (type) {
        case 'info':
            vscode.window.showInformationMessage(message);
            break;
        case 'warning':
            vscode.window.showWarningMessage(message);
            break;
        case 'error':
            vscode.window.showErrorMessage(message);
            break;
    }
}
/**
 * Inserts attribution text at the top of the current file
 */
async function insertAttributionText(editor, attributionText) {
    try {
        const position = new vscode.Position(0, 0);
        const textToInsert = `${attributionText.trim()}\n`;
        const success = await editor.edit(editBuilder => {
            editBuilder.insert(position, textToInsert);
        });
        if (success) {
            showNotification('Attribution text added successfully!', 'info');
            return true;
        }
        else {
            showNotification(ERROR_MESSAGES.INSERTION_FAILED, 'error');
            return false;
        }
    }
    catch (error) {
        console.error('Error inserting attribution text:', error);
        showNotification(ERROR_MESSAGES.INSERTION_FAILED, 'error');
        return false;
    }
}
/**
 * Main command handler for adding attribution
 */
async function addAttributionCommand() {
    // Get the currently active text editor
    const editor = vscode.window.activeTextEditor;
    // Check if there's an active editor
    if (!editor) {
        showNotification(ERROR_MESSAGES.NO_EDITOR, 'warning');
        return;
    }
    // Get and validate attribution text from configuration
    const attributionText = getAttributionText();
    if (!validateAttributionText(attributionText)) {
        showNotification(ERROR_MESSAGES.EMPTY_ATTRIBUTION, 'error');
        return;
    }
    // Insert the attribution text
    await insertAttributionText(editor, attributionText);
}
/**
 * Extension activation function
 */
function activate(context) {
    console.log('Attribution extension is now active!');
    // Register the command
    const disposable = vscode.commands.registerCommand('extension.addAttribution', addAttributionCommand);
    // Add to subscriptions for proper cleanup
    context.subscriptions.push(disposable);
}
exports.activate = activate;
/**
 * Extension deactivation function
 */
function deactivate() {
    // Cleanup is handled automatically by VS Code
    console.log('Attribution extension deactivated.');
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map