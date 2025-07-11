# GitHub Assets

This directory contains assets for the GitHub repository.

## Social Preview Image

The `social-preview.svg` file is a vector-based social preview image that can be converted to PNG format for use in GitHub repository settings.

### Converting SVG to PNG

You can convert the SVG to PNG using several methods:

#### Method 1: Online Converter
1. Visit an online SVG to PNG converter (e.g., convertio.co, cloudconvert.com)
2. Upload the `social-preview.svg` file
3. Set output dimensions to 1280x640 pixels
4. Download the PNG file
5. Rename to `social-preview.png`

#### Method 2: Command Line (if you have ImageMagick)
```bash
convert social-preview.svg -resize 1280x640 social-preview.png
```

#### Method 3: Using a browser
1. Open the SVG file in a web browser
2. Take a screenshot or use browser dev tools to save as PNG
3. Ensure the dimensions are 1280x640 pixels

### Usage
Once converted to PNG, upload the `social-preview.png` file to your GitHub repository's "Social preview" section in the repository settings.

### Design Details
- **Dimensions**: 1280x640 pixels
- **Theme**: Dark theme with blue accents
- **Content**: "Attribution-Plugin" title with subtitle
- **Style**: Modern, clean design suitable for social media sharing 