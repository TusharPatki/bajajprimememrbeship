# Bajaj Prime Offer Promotion Page

This is a simple web application to promote the Bajaj Prime offer. It tracks user clicks, displays a tutorial video, and provides a link to a Google form for users to update their details after completing a transaction.

## Features

- Responsive design that works on mobile and desktop
- User click tracking with unique user IDs
- Embedded tutorial video placeholder
- Link to the Google form for user details
- Terms and conditions section

## Setup Instructions

### Local Setup

- Web server with PHP support (optional for full tracking functionality)
- Basic knowledge of HTML, CSS, and JavaScript

### Netlify Deployment

This site is configured for easy deployment on Netlify. Follow these steps:

1. Sign up for a [Netlify account](https://app.netlify.com/signup) if you don't have one
2. Go to https://app.netlify.com/start
3. Select "Deploy with GitHub" and connect to your GitHub account
4. Choose the repository `bajajprimememrbeship`
5. Use the following settings:
   - Build command: (leave blank)
   - Publish directory: `.`
6. Click "Deploy Site"

After deployment, you can:
- Configure a custom domain in the Netlify dashboard
- Set up Netlify Functions for server-side tracking (see advanced setup)

### Advanced Setup: Netlify Functions for Tracking

For server-side tracking with Netlify:

1. Create a `netlify/functions` directory
2. Add a serverless function for tracking
3. Uncomment the Netlify Functions code in `js/main.js`

### Customization

- **YouTube Video**: Update the YouTube video ID in `index.html` with your tutorial video:
   - Replace `VIDEO_ID_HERE` in the iframe src with your actual YouTube video ID
- **Styling**: Customize the look and feel by modifying the `css/styles.css` file.
- **Content**: Update the content in `index.html` to match your specific offer details.

## Usage

1. When a user visits the page, a unique user ID is generated and stored in their browser's localStorage.
2. When they click on the "Go to Bajaj Prime Offer" button:
   - Their user ID is logged and stored in localStorage
   - They are redirected to the Bajaj Prime offer page
3. After completing their transaction, users can click on the "Complete Google Form" button to fill out their details.

## Files

- `index.html`: Main HTML file with the page structure
- `css/styles.css`: CSS styles for the page
- `js/main.js`: JavaScript code for user tracking and link functionality
- `netlify.toml`: Configuration file for Netlify deployment

## Note

This is a simple implementation. For a production environment, consider:
- Implementing secure user tracking with proper authentication
- Using a database instead of a text file for logging
- Adding analytics integration
- Implementing server-side validation and security measures 