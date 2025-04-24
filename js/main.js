document.addEventListener('DOMContentLoaded', function() {
    // The target URL
    const targetUrl = 'http://tracking.cashkaro.com/visitretailer/24625?id=15960912&mode=direct';
    
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
        
        // In a real application, you would send this data to a server
        // Here's an example of how you might do that with fetch API
        try {
            // This is a placeholder for your actual tracking endpoint
            fetch('track-click.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: userId,
                    timestamp: new Date().toISOString(),
                    offer: 'bajaj-prime'
                })
            })
            .then(response => {
                if (response.ok) {
                    console.log('Click tracked successfully');
                }
            })
            .catch(error => {
                console.error('Error tracking click:', error);
            });
        } catch (error) {
            console.error('Error tracking click:', error);
        }
        
        // Save click data to localStorage as a fallback
        const clicks = JSON.parse(localStorage.getItem('userClicks') || '[]');
        clicks.push({
            userId: userId,
            timestamp: new Date().toISOString(),
            offer: 'bajaj-prime'
        });
        localStorage.setItem('userClicks', JSON.stringify(clicks));
        
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