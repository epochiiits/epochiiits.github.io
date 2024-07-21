
    document.querySelector('.scroll-indicator').addEventListener('click', function() {
        window.scrollTo({
            top: document.documentElement.clientHeight,
            behavior: 'smooth'
        });
    });



   
    
    document.addEventListener('DOMContentLoaded', function() {
        // Add click event listener to all "Read More" buttons
        document.querySelectorAll('.read-more-btn').forEach(button => {
            button.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent default link behavior
    
                // Find the corresponding content to show
                const targetId = this.getAttribute('data-target');
                const content = document.getElementById(targetId);
    
                if (content) {
                    // Toggle the visibility of the content
                    if (content.style.display === 'none' || content.style.display === '') {
                        content.style.display = 'block';
                        this.textContent = 'Read Less'; // Change button text
                    } else {
                        content.style.display = 'none';
                        this.textContent = 'Read More'; // Change button text back
                    }
                }
            });
        });
    });
    

   
