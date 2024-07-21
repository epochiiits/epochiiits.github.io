
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
    

    const images = [
        {
            src: 'images\a1.png',
            text: 'Lorem ipsum dolor sit amet elit.'                                                                                                                                                                                                               
        },
        {
            src: 'images\b1.png',
            text: 'Lorem ipsum dolor sit amet elit.'
        },
        {
           src: 'images\c1.png',
            text: 'Lorem ipsum dolor sit amet elit.'
        },
        {
           src: 'images\d1.png',
            text: 'Lorem ipsum dolor sit amet elit.'
        },
        {
            src: 'images\e1.png',
            text: 'Lorem ipsum dolor sit amet elit.'
        },
        {
            src: 'images\g1.png',
            text: 'Lorem ipsum dolor sit amet elit.'
        },
        {
            src: 'images\h1.png',
            text: 'Lorem ipsum dolor sit amet elit.'
        },
        {
            src: 'images\i1.png',
            text: 'Lorem ipsum dolor sit amet elit.'
        },
        {
           src: 'images\j1.png',
            text: 'Lorem ipsum dolor sit amet elit.'
        },
        {
            src: 'images\k1.png',
            text: 'Lorem ipsum dolor sit amet elit.'
        },
        {
            src: 'images\l1.png',
            text: 'Lorem ipsum dolor sit amet elit.'
        },
        {
            src: 'images\m1.png',
            text: 'Lorem ipsum dolor sit amet elit.'
        },
        {
            src: 'images\n1.png',
            text: 'Lorem ipsum dolor sit amet elit.'
        },
        {
            src: 'images\o1.png',
            text: 'Lorem ipsum dolor sit amet elit.'
        },
        {
            src: 'images\o1.jpeg',
            text: 'Lorem ipsum dolor sit amet elit.'
        },
        // Voeg hier meer afbeeldingen en beschrijvingen toe als nodig
    ];
    let currentIndex = 0;
    
    function openModal(index) {
        currentIndex = index;
        document.getElementById('modal-img').src = images[index].src;
        document.getElementById('modal-text').innerText = images[index].text;
        document.getElementById('modal').style.display = 'block';
    }
    
    function closeModal() {
        document.getElementById('modal').style.display = 'none';
    }
    
    function prevImage() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateModal();
    }
    
    function nextImage() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateModal();
    }
    
    function updateModal() {
        document.getElementById('modal-img').src = images[currentIndex].src;
        document.getElementById('modal-text').innerText = images[currentIndex].text;
    }