# Bajaj Prime Offer - CashKaro Promotion Page

This is a simple web application to promote the Bajaj Prime offer from CashKaro. It tracks user clicks, displays a tutorial video, and provides a link to a Google form for users to update their details after completing a transaction.

## Features

- Responsive design that works on mobile and desktop
- User click tracking with unique user IDs
- Embedded tutorial video placeholder
- Link to the Google form for user details
- Terms and conditions section

## Setup Instructions

### Prerequisites

- Web server with PHP support (for the tracking functionality)
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. Upload all files to your web server
2. Ensure the `click_logs.txt` file (which will be created) has write permissions
3. Update the YouTube video ID in `index.html` with your tutorial video:
   - Replace `VIDEO_ID_HERE` in the iframe src with your actual YouTube video ID

### Customization

- **Tracking Endpoint**: By default, the application uses `track-click.php` to track user clicks. You can modify the tracking logic in the `js/main.js` file to use a different endpoint or tracking method.
- **Styling**: Customize the look and feel by modifying the `css/styles.css` file.
- **Content**: Update the content in `index.html` to match your specific offer details.

## Usage

1. When a user visits the page, a unique user ID is generated and stored in their browser's localStorage.
2. When they click on the "Go to Bajaj Prime Offer" button:
   - Their user ID is logged (both in the browser console and sent to the server)
   - They are redirected to the Bajaj Prime coupon page on CashKaro
3. After completing their transaction, users can click on the "Complete Google Form" button to fill out their details.

## Files

- `index.html`: Main HTML file with the page structure
- `css/styles.css`: CSS styles for the page
- `js/main.js`: JavaScript code for user tracking and link functionality
- `track-click.php`: PHP script to log user clicks on the server
- `click_logs.txt`: Text file that stores the click logs (created automatically)

## Note

This is a simple implementation. For a production environment, consider:
- Implementing secure user tracking with proper authentication
- Using a database instead of a text file for logging
- Adding analytics integration
- Implementing server-side validation and security measures 