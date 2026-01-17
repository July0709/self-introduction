(function() {
  "use strict"; // Start of use strict

  // Translations
  var translations = {
    en: {
      langButton: '中文',
      brandName: 'July',
      navHome: 'Home',
      navAbout: 'About',
      navServices: 'Services',
      navPortfolio: 'Portfolio',
      navContact: 'Contact',
      heroTitle: 'Self Introduction',
      heroSubtitle: 'July',
      heroButton: 'Find Out More',
      aboutHeading: 'I am a student from Southern Medical University, majored in clinical medicine.',
      aboutText: 'Passionate about combining medical knowledge with technology to make a difference in healthcare.',
      aboutButton: 'Who I Am',
      servicesSubhead: 'Things',
      servicesHeading: 'That I Manage',
      service1Title: 'Web Design',
      service1Text: 'I currently design the page for SMOOTH',
      service2Title: 'Scientific Research',
      service2Text: 'In the field of microbiome',
      service3Title: 'File Management',
      service3Text: 'Working with great habits',
      service4Title: 'English',
      service4Text: 'Spoken English is good',
      portfolioSubhead: 'Things I Like',
      portfolioHeading: 'GitHub Account',
      portfolioOtherHeading: 'Other Things I Like',
      ctaHeading: "Let's Connect!",
      ctaButton1: 'Contact Me',
      ctaButton2: 'My GitHub',
      contactSubhead: 'Get In Touch',
      contactHeading: 'Contact Me',
      contactName: 'Name',
      contactEmail: 'Email',
      contactSubject: 'Subject',
      contactMessage: 'Message',
      contactSubmit: 'Send Message',
      copyright: 'Copyright © July 2025'
    },
    zh: {
      langButton: 'EN',
      brandName: 'July',
      navHome: '首页',
      navAbout: '关于',
      navServices: '技能',
      navPortfolio: '作品集',
      navContact: '联系',
      heroTitle: '自我介绍',
      heroSubtitle: 'July',
      heroButton: '了解更多',
      aboutHeading: '我是南方医科大学临床医学专业的学生。',
      aboutText: '热衷于将医学知识与技术相结合，为医疗保健领域做出贡献。',
      aboutButton: '关于我',
      servicesSubhead: '我擅长的',
      servicesHeading: '技能',
      service1Title: '网页设计',
      service1Text: '目前为 SMOOTH 设计页面',
      service2Title: '科学研究',
      service2Text: '微生物组领域',
      service3Title: '文件管理',
      service3Text: '良好的工作习惯',
      service4Title: '英语',
      service4Text: '口语流利',
      portfolioSubhead: '我的爱好',
      portfolioHeading: 'GitHub 账号',
      portfolioOtherHeading: '其他爱好',
      ctaHeading: '让我们联系吧！',
      ctaButton1: '联系我',
      ctaButton2: '我的 GitHub',
      contactSubhead: '保持联系',
      contactHeading: '联系我',
      contactName: '姓名',
      contactEmail: '邮箱',
      contactSubject: '主题',
      contactMessage: '留言',
      contactSubmit: '发送消息',
      copyright: '版权所有 © July 2025'
    }
  };

  // Language toggle functionality
  var langToggle = document.getElementById('lang-toggle');
  var currentLang = localStorage.getItem('language') || 'en';

  // Apply saved language on load
  applyLanguage(currentLang);

  if (langToggle) {
    langToggle.addEventListener('click', function() {
      currentLang = currentLang === 'en' ? 'zh' : 'en';
      localStorage.setItem('language', currentLang);
      applyLanguage(currentLang);
    });
  }

  function applyLanguage(lang) {
    var t = translations[lang];
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    // Update language button
    if (langToggle) {
      langToggle.querySelector('.lang-text').textContent = t.langButton;
    }

    // Update navigation
    document.querySelector('.sidebar-brand a').textContent = t.brandName;
    var navItems = document.querySelectorAll('.sidebar-nav-item a');
    if (navItems[0]) navItems[0].textContent = t.navHome;
    if (navItems[1]) navItems[1].textContent = t.navAbout;
    if (navItems[2]) navItems[2].textContent = t.navServices;
    if (navItems[3]) navItems[3].textContent = t.navPortfolio;
    if (navItems[4]) navItems[4].textContent = t.navContact;

    // Update hero section
    var heroTitle = document.querySelector('.masthead h1');
    var heroSubtitle = document.querySelector('.masthead h3 em');
    var heroButton = document.querySelector('.masthead a.btn');
    if (heroTitle) heroTitle.textContent = t.heroTitle;
    if (heroSubtitle) heroSubtitle.textContent = t.heroSubtitle;
    if (heroButton) heroButton.textContent = t.heroButton;

    // Update about section
    var aboutHeading = document.querySelector('#about h2');
    var aboutText = document.querySelector('#about p.lead');
    var aboutButton = document.querySelector('#about a.btn');
    if (aboutHeading) aboutHeading.textContent = t.aboutHeading;
    if (aboutText) aboutText.textContent = t.aboutText;
    if (aboutButton) aboutButton.textContent = t.aboutButton;

    // Update services section
    var servicesSubhead = document.querySelector('#services h3');
    var servicesHeading = document.querySelector('#services h2');
    if (servicesSubhead) servicesSubhead.textContent = t.servicesSubhead;
    if (servicesHeading) servicesHeading.textContent = t.servicesHeading;

    var serviceCards = document.querySelectorAll('#services .col-md-6');
    if (serviceCards[0]) {
      serviceCards[0].querySelector('h4').textContent = t.service1Title;
      serviceCards[0].querySelector('p').textContent = t.service1Text;
    }
    if (serviceCards[1]) {
      serviceCards[1].querySelector('h4').textContent = t.service2Title;
      serviceCards[1].querySelector('p').textContent = t.service2Text;
    }
    if (serviceCards[2]) {
      serviceCards[2].querySelector('h4').textContent = t.service3Title;
      serviceCards[2].querySelector('p').textContent = t.service3Text;
    }
    if (serviceCards[3]) {
      serviceCards[3].querySelector('h4').textContent = t.service4Title;
      serviceCards[3].querySelector('p').textContent = t.service4Text;
    }

    // Update portfolio section
    var portfolioSubhead = document.querySelector('#portfolio h3');
    var portfolioHeading = document.querySelector('#portfolio h2');
    var portfolioOtherHeading = document.querySelectorAll('#portfolio h2')[1];
    if (portfolioSubhead) portfolioSubhead.textContent = t.portfolioSubhead;
    if (portfolioHeading) portfolioHeading.textContent = t.portfolioHeading;
    if (portfolioOtherHeading) portfolioOtherHeading.textContent = t.portfolioOtherHeading;

    // Update CTA section
    var ctaSections = document.querySelectorAll('.content-section.bg-primary');
    if (ctaSections[1]) {
      var ctaHeading = ctaSections[1].querySelector('h2');
      var ctaButtons = ctaSections[1].querySelectorAll('a.btn');
      if (ctaHeading) ctaHeading.textContent = t.ctaHeading;
      if (ctaButtons[0]) ctaButtons[0].textContent = t.ctaButton1;
      if (ctaButtons[1]) ctaButtons[1].textContent = t.ctaButton2;
    }

    // Update contact section
    var contactSubhead = document.querySelector('#contact h3');
    var contactHeading = document.querySelector('#contact h2');
    if (contactSubhead) contactSubhead.textContent = t.contactSubhead;
    if (contactHeading) contactHeading.textContent = t.contactHeading;

    var contactLabels = document.querySelectorAll('#contactForm label');
    if (contactLabels[0]) contactLabels[0].textContent = t.contactName + ' *';
    if (contactLabels[1]) contactLabels[1].textContent = t.contactEmail + ' *';
    if (contactLabels[2]) contactLabels[2].textContent = t.contactSubject + ' *';
    if (contactLabels[3]) contactLabels[3].textContent = t.contactMessage + ' *';

    var contactSubmit = document.querySelector('#contactForm button[type="submit"]');
    if (contactSubmit) contactSubmit.textContent = t.contactSubmit;

    // Update footer
    var copyright = document.querySelector('footer p.small');
    if (copyright) copyright.textContent = t.copyright;
  }

  // Theme toggle functionality
  var themeToggle = document.getElementById('theme-toggle');
  var htmlElement = document.documentElement;

  // Load saved theme or default to light
  var savedTheme = localStorage.getItem('theme') || 'light';
  htmlElement.setAttribute('data-bs-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      var currentTheme = htmlElement.getAttribute('data-bs-theme');
      var newTheme = currentTheme === 'light' ? 'dark' : 'light';

      htmlElement.setAttribute('data-bs-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    var icon = themeToggle.querySelector('i');
    if (icon) {
      if (theme === 'dark') {
        icon.classList.remove('fa-moon-o');
        icon.classList.add('fa-sun-o');
      } else {
        icon.classList.remove('fa-sun-o');
        icon.classList.add('fa-moon-o');
      }
    }
  }

  // Menu toggle functionality
  var menuToggle = document.querySelector('.menu-toggle');
  var sidebar = document.querySelector('#sidebar-wrapper');

  if (menuToggle) {
    // Closes the sidebar menu
    menuToggle.addEventListener('click', function(e) {
      e.preventDefault();

      sidebar.classList.toggle('active');
      menuToggle.classList.toggle('active');

      var icon = menuToggle.querySelector('.fa-bars, .fa-times');

      if (icon) {
        if (icon.classList.contains('fa-times')) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        } else if (icon.classList.contains('fa-bars')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        }
      }

    });
  }

  var navbarCollapse = document.querySelector('.navbar-collapse');

  if (navbarCollapse) {
    var navbarItems = navbarCollapse.querySelectorAll('a');

    // Closes responsive menu when a scroll trigger link is clicked
    for (var item of navbarItems) {
      item.addEventListener('click', function (event) {
        sidebar.classList.remove('active');
        menuToggle.classList.remove('active');

        var icon = menuToggle.querySelector('.fa-bars, .fa-times');

        if (icon) {
          if (icon.classList.contains('fa-times')) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
          } else if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
          }
        }
      });
    }
  }

  // Scroll to top button appear
  var scrollToTop = document.querySelector('.scroll-to-top');

  if (scrollToTop) {
    // Scroll to top button appear
    window.addEventListener('scroll', function() {
      var scrollDistance = window.pageYOffset;

      if (scrollDistance > 100) {
        scrollToTop.style.display = 'block';
      } else {
        scrollToTop.style.display = 'none';
      }
    });
  }

  // Loading screen
  window.addEventListener('load', function() {
    var loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
      setTimeout(function() {
        loadingScreen.classList.add('hidden');
      }, 500);
    }
  });

  // Fade-in animation on scroll
  var observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(function(element) {
    observer.observe(element);
  });

  // Lazy loading images
  if ('loading' in HTMLImageElement.prototype) {
    var images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(function(img) {
      img.src = img.dataset.src;
    });
  } else {
    // Fallback for browsers that don't support lazy loading
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
  }

  // Contact form validation and submission
  var contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      event.stopPropagation();

      var formStatus = document.getElementById('formStatus');

      if (!contactForm.checkValidity()) {
        contactForm.classList.add('was-validated');
        formStatus.innerHTML = '<div class="alert alert-danger">Please fill in all required fields correctly.</div>';
        return;
      }

      // Get form data
      var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
      };

      // Show loading state
      var submitButton = contactForm.querySelector('button[type="submit"]');
      var originalButtonText = submitButton.textContent;
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';

      // Simulate form submission (replace with actual API call)
      setTimeout(function() {
        formStatus.innerHTML = '<div class="alert alert-success">Thank you for your message! I\'ll get back to you soon.</div>';
        contactForm.reset();
        contactForm.classList.remove('was-validated');
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;

        // Log to console (for demonstration - remove in production)
        console.log('Form submitted:', formData);
      }, 1500);
    });
  }
})(); // End of use strict

// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function(e) {
  this.addEventListener('click', onMapClickHandler);
  this.removeEventListener('mouseleave', onMapMouseleaveHandler);

  var iframe = this.querySelector('iframe'); 
  
  if (iframe) {
    iframe.style.pointerEvents = 'none';
  }
}

var onMapClickHandler = function(e) {
  // Disable the click handler until the user leaves the map area
  this.removeEventListener('click', onMapClickHandler);
  // Handle the mouse leave event
  this.addEventListener('mouseleave', onMapMouseleaveHandler);

  // Enable scrolling zoom
  var iframe = this.querySelector('iframe'); 
  
  if (iframe) {
    iframe.style.pointerEvents = 'auto';
  }
}

var maps = document.querySelectorAll('.map');

for (var map of maps) {
  // Enable map zooming with mouse scroll when the user clicks the map
  map.addEventListener('click', onMapClickHandler);
}
