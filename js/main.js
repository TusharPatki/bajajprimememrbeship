document.addEventListener('DOMContentLoaded', function() {
    // The target URL
    const targetUrl = 'https://www.bajajfinserv.in/webform/v1/rewards/bajaj-prime?utm_source=EEE&utm_medium=TQ_588_45&utm_campaign=680a106e1d1183034149dce2';
    
    // Generate a random user ID if one doesn't exist in localStorage
    if (!localStorage.getItem('userId')) {
        const randomId = Math.random().toString(36).substring(2, 15) + 
                         Math.random().toString(36).substring(2, 15);
        localStorage.setItem('userId', randomId);
    }
    
    // Get the user ID from localStorage
    const userId = localStorage.getItem('userId');
    
    // Function to track user click
    function trackUserClick() {
        // Log the click with the user ID
        console.log(`User ${userId} clicked on the offer link`);
        
        // Save click data to localStorage
        const clicks = JSON.parse(localStorage.getItem('userClicks') || '[]');
        const clickData = {
            userId: userId,
            timestamp: new Date().toISOString(),
            offer: 'bajaj-prime'
        };
        
        clicks.push(clickData);
        localStorage.setItem('userClicks', JSON.stringify(clicks));
        
        // For Netlify deployment - we can use Netlify functions instead of PHP
        // Uncomment this if you set up Netlify functions later
        /*
        fetch('/.netlify/functions/track-click', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(clickData)
        })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch(error => console.error('Error:', error));
        */
        
        // Redirect the user to the target URL
        window.open(targetUrl, '_blank');
        
        // Prevent default link behavior
        return false;
    }
    
    // Attach click event to the offer link
    const offerLink = document.getElementById('offer-link');
    if (offerLink) {
        offerLink.addEventListener('click', function(e) {
            e.preventDefault();
            trackUserClick();
        });
        
        // Update the href attribute
        offerLink.setAttribute('href', targetUrl);
    }
}); 