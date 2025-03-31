/**
 * Main JavaScript file for Alena Todorov's therapy website
 */

// Wait for DOM to be fully loaded before executing code
document.addEventListener('DOMContentLoaded', () => {
  // Initialize components
  initAOS();
  initSmoothScroll();
  initMobileMenu();
  initDetailsAnimation();
  initAccordion();
});

/**
 * Initialize AOS (Animate On Scroll) library
 */
const initAOS = () => {
  try {
    AOS.init({
      duration: 800,
      offset: 50,
      once: true
    });
  } catch (error) {
    console.error('Error initializing AOS:', error);
  }
};

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
  if (sections.length > 0 && navLinks.length > 0) {
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
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + sectionId) {
              link.classList.add('active');
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

/**
 * Add animation to details elements (accordion functionality)
 * Note: This is now handled by CSS, but we add click handlers for the plus/minus icons
 */
const initDetailsAnimation = () => {
  const detailsElements = document.querySelectorAll('details');
  
  detailsElements.forEach(details => {
    const summary = details.querySelector('summary');
    const icon = summary?.querySelector('i');
    
    if (summary && icon) {
      // Update icon when details is toggled
      details.addEventListener('toggle', () => {
        if (details.open) {
          icon.classList.add('rotate-45');
        } else {
          icon.classList.remove('rotate-45');
        }
      });
    }
  });
};

/**
 * Initialize accordion functionality for the services section
 */
const initAccordion = () => {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  if (accordionHeaders.length > 0) {
    accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const body = header.nextElementSibling;
        const isActive = header.classList.contains('active');
        
        // Close all accordion items
        document.querySelectorAll('.accordion-header').forEach(h => {
          h.classList.remove('active');
          const b = h.nextElementSibling;
          if (b) b.style.maxHeight = null;
        });
        
        // Open clicked item if it was closed
        if (!isActive) {
          header.classList.add('active');
          if (body) body.style.maxHeight = body.scrollHeight + "px";
        }
      });
    });
  }
};
