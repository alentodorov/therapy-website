/**
 * Main JavaScript file for Alena Todorov's therapy website
 */

// Wait for DOM to be fully loaded before executing code
document.addEventListener('DOMContentLoaded', () => {
  // Initialize components
  initSmoothScroll();
  initMobileMenu();
});

/**
 * Initialize smooth scrolling for navigation links
 */
const initSmoothScroll = () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  // Add smooth scroll behavior to all internal links
  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      // Only process internal links
      const targetId = link.getAttribute('href');
      if (targetId.startsWith('#')) {
        event.preventDefault();
        
        // Handle special case for top of page
        if (targetId === '#') {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        } else {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      }
    });
  });
  
  // Highlight active section in navigation
  const trackedNavLinks = document.querySelectorAll('[data-nav-link]');

  if (sections.length > 0 && trackedNavLinks.length > 0) {
    // Debounce function to limit scroll event processing
    const debounce = (func, wait = 100) => {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
      };
    };
    
    const highlightNavigation = debounce(() => {
      const scrollPosition = window.scrollY;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          trackedNavLinks.forEach(link => {
            link.classList.remove('text-accent');
            link.classList.add('text-ink');
            if (link.getAttribute('href') === '#' + sectionId) {
              link.classList.add('text-accent');
              link.classList.remove('text-ink');
            }
          });
        }
      });
    }, 100);
    
    window.addEventListener('scroll', highlightNavigation, { passive: true });
    highlightNavigation(); // Run on initial load
  }
};

/**
 * Initialize mobile menu functionality
 */
const initMobileMenu = () => {
  const menuButton = document.getElementById('menuButton');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      // Toggle menu visibility
      const isVisible = mobileMenu.classList.contains('hidden');
      
      if (isVisible) {
        mobileMenu.classList.remove('hidden');
        menuButton.setAttribute('aria-expanded', 'true');
        // Change icon to X when menu is open
        const icon = menuButton.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        }
      } else {
        mobileMenu.classList.add('hidden');
        menuButton.setAttribute('aria-expanded', 'false');
        // Change icon back to bars when menu is closed
        const icon = menuButton.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    });
    
    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuButton.setAttribute('aria-expanded', 'false');
        // Reset icon
        const icon = menuButton.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      });
    });
  }
};
