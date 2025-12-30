document.addEventListener('DOMContentLoaded', () => {
    
   
    const navbar = document.querySelector('.navbar');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll);

 
    const loginBtn = document.getElementById('loginBtn');
    const modal = document.getElementById('loginModal');
    const closeBtn = document.querySelector('.close-btn');
    const modalContent = document.querySelector('.modal-content');

   
    loginBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
        
        setTimeout(() => {
             modal.style.opacity = '1';
             modalContent.style.transform = 'scale(1) translateY(0)';
             modalContent.style.opacity = '1';
        }, 10);
       
        modal.querySelector('form').reset();
    });

    
    const closeModal = () => {
         
         modalContent.style.transform = 'scale(0.8) translateY(50px)';
         modalContent.style.opacity = '0';
         modal.style.opacity = '0';
         
         
         setTimeout(() => {
             modal.style.display = 'none';
         }, 300); 
    };

    closeBtn.addEventListener('click', closeModal);

    // Close when clicking outside content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // --- 3. Smooth Anchor Scrolling with Offset ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Offset for fixed navbar height
                const headerOffset = 90;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 4. Advanced Scroll Reveal Animations ---
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        // Trigger reveal when element is 150px into the viewport
        const revealPoint = 150; 

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    };

    // Run initially to catch above-the-fold elements
    setTimeout(revealOnScroll, 100); 
    // Run on scroll
    window.addEventListener('scroll', revealOnScroll);

    // --- 5. Mobile Hamburger Toggle (Visual only for demo) ---
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', () => {
        alert("Mobile menu clicked. In a full build, this would slide out a mobile navigation drawer.");
    });
});