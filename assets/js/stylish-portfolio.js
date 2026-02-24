(function () {
  "use strict";

  /* ============================================================
     Translations
     ============================================================ */
  var translations = {
    en: {
      langButton: '中文',
      /* Nav */
      navHome: 'Home', navAbout: 'About', navServices: 'Services',
      navPortfolio: 'Portfolio', navBlog: 'Blog', navContact: 'Contact',
      /* Hero */
      heroEyebrow: 'Southern Medical University',
      heroTitle: 'Self Introduction',
      heroSubtitle: 'July',
      heroBtn: 'Find Out More',
      /* About */
      aboutEyebrow: 'About Me',
      aboutHeading: 'I am a student from Southern Medical University, majored in clinical medicine.',
      aboutText: 'Passionate about combining medical knowledge with technology to make a difference in healthcare.',
      aboutBtn: 'Who I Am',
      /* Services */
      servicesEyebrow: 'Things',
      servicesHeading: 'That I Manage',
      s1Title: 'Web Design',       s1Text: 'I currently design the page for SMOOTH',
      s2Title: 'Scientific Research', s2Text: 'In the field of microbiome',
      s3Title: 'File Management',  s3Text: 'Working with great habits',
      s4Title: 'English',          s4Text: 'Spoken English is good',
      /* Portfolio */
      portfolioEyebrow: 'Things I Like',
      portfolioHeading: 'GitHub Account',
      portfolioOtherHeading: 'Other Things I Like',
      /* CTA */
      ctaHeading: "Let's Connect!",
      ctaBtn1: 'Contact Me', ctaBtn2: 'My GitHub',
      /* Contact */
      contactEyebrow: 'Get In Touch',
      contactHeading: 'Contact Me',
      labelName: 'Name *', labelEmail: 'Email *',
      labelSubject: 'Subject *', labelMessage: 'Message *',
      contactSubmit: 'Send Message',
      /* Footer */
      copyright: 'Copyright © July 2025'
    },
    zh: {
      langButton: 'EN',
      navHome: '首页', navAbout: '关于', navServices: '技能',
      navPortfolio: '作品集', navBlog: '博客', navContact: '联系',
      heroEyebrow: '南方医科大学',
      heroTitle: '自我介绍',
      heroSubtitle: 'July',
      heroBtn: '了解更多',
      aboutEyebrow: '关于我',
      aboutHeading: '我是南方医科大学临床医学专业的学生。',
      aboutText: '热衷于将医学知识与技术相结合，为医疗保健领域做出贡献。',
      aboutBtn: '关于我',
      servicesEyebrow: '我擅长的',
      servicesHeading: '技能',
      s1Title: '网页设计',       s1Text: '目前为 SMOOTH 设计页面',
      s2Title: '科学研究',        s2Text: '微生物组领域',
      s3Title: '文件管理',        s3Text: '良好的工作习惯',
      s4Title: '英语',            s4Text: '口语流利',
      portfolioEyebrow: '我的爱好',
      portfolioHeading: 'GitHub 账号',
      portfolioOtherHeading: '其他爱好',
      ctaHeading: '让我们联系吧！',
      ctaBtn1: '联系我', ctaBtn2: '我的 GitHub',
      contactEyebrow: '保持联系',
      contactHeading: '联系我',
      labelName: '姓名 *', labelEmail: '邮箱 *',
      labelSubject: '主题 *', labelMessage: '留言 *',
      contactSubmit: '发送消息',
      copyright: '版权所有 © July 2025'
    }
  };

  /* ============================================================
     Language
     ============================================================ */
  var langToggle = document.getElementById('lang-toggle');
  var currentLang = localStorage.getItem('language') || 'en';

  applyLanguage(currentLang);

  if (langToggle) {
    langToggle.addEventListener('click', function () {
      currentLang = currentLang === 'en' ? 'zh' : 'en';
      localStorage.setItem('language', currentLang);
      applyLanguage(currentLang);
    });
  }

  function setText(id, text) {
    var el = document.getElementById(id);
    if (el) el.textContent = text;
  }
  function setPlaceholder(id, text) {
    var el = document.getElementById(id);
    if (el) el.placeholder = text;
  }

  function applyLanguage(lang) {
    var t = translations[lang];
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    /* Language button */
    if (langToggle) langToggle.querySelector('.lang-text').textContent = t.langButton;

    /* Nav links */
    var navLinks = document.querySelectorAll('#nav-menu a');
    var keys = ['navHome', 'navAbout', 'navServices', 'navPortfolio', 'navBlog', 'navContact'];
    navLinks.forEach(function (a, i) { if (keys[i]) a.textContent = t[keys[i]]; });

    /* Hero */
    setText('hero-eyebrow', t.heroEyebrow);
    setText('hero-title', t.heroTitle);
    setText('hero-subtitle', t.heroSubtitle);
    setText('hero-btn', t.heroBtn);

    /* About */
    setText('about-eyebrow', t.aboutEyebrow);
    setText('about-heading', t.aboutHeading);
    setText('about-text', t.aboutText);
    setText('about-btn', t.aboutBtn);

    /* Services */
    setText('services-eyebrow', t.servicesEyebrow);
    setText('services-heading', t.servicesHeading);
    setText('s1-title', t.s1Title); setText('s1-text', t.s1Text);
    setText('s2-title', t.s2Title); setText('s2-text', t.s2Text);
    setText('s3-title', t.s3Title); setText('s3-text', t.s3Text);
    setText('s4-title', t.s4Title); setText('s4-text', t.s4Text);

    /* Portfolio */
    setText('portfolio-eyebrow', t.portfolioEyebrow);
    setText('portfolio-heading', t.portfolioHeading);
    setText('portfolio-other-heading', t.portfolioOtherHeading);

    /* CTA */
    setText('cta-heading', t.ctaHeading);
    setText('cta-btn1', t.ctaBtn1);
    setText('cta-btn2', t.ctaBtn2);

    /* Contact */
    setText('contact-eyebrow', t.contactEyebrow);
    setText('contact-heading', t.contactHeading);
    setText('label-name', t.labelName);
    setText('label-email', t.labelEmail);
    setText('label-subject', t.labelSubject);
    setText('label-message', t.labelMessage);
    setText('contact-submit', t.contactSubmit);

    /* Footer */
    setText('footer-copy', t.copyright);
  }

  /* ============================================================
     Theme
     ============================================================ */
  var themeToggle = document.getElementById('theme-toggle');
  var htmlEl = document.documentElement;

  var savedTheme = localStorage.getItem('theme') || 'light';
  htmlEl.setAttribute('data-bs-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var next = htmlEl.getAttribute('data-bs-theme') === 'light' ? 'dark' : 'light';
      htmlEl.setAttribute('data-bs-theme', next);
      localStorage.setItem('theme', next);
      updateThemeIcon(next);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggle) return;
    var icon = themeToggle.querySelector('i');
    if (icon) icon.className = theme === 'dark' ? 'fa fa-sun-o' : 'fa fa-moon-o';
  }

  /* ============================================================
     Mobile Navigation
     ============================================================ */
  var mobileToggle = document.getElementById('mobile-menu-toggle');
  var navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', function () {
      var isOpen = navMenu.classList.toggle('open');
      mobileToggle.classList.toggle('active', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    /* Close on nav link click */
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ============================================================
     Scroll-to-top
     ============================================================ */
  var scrollToTop = document.querySelector('.scroll-to-top');

  if (scrollToTop) {
    window.addEventListener('scroll', function () {
      scrollToTop.style.display = window.pageYOffset > 200 ? 'flex' : 'none';
    });
  }

  /* ============================================================
     Fade-in on scroll
     ============================================================ */
  var fadeObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(function (el) {
    fadeObserver.observe(el);
  });

  /* ============================================================
     Loading screen
     ============================================================ */
  window.addEventListener('load', function () {
    var ls = document.querySelector('.loading-screen');
    if (ls) setTimeout(function () { ls.classList.add('hidden'); }, 400);
  });

  /* ============================================================
     Contact form
     ============================================================ */
  var contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();

      var formStatus = document.getElementById('formStatus');

      if (!contactForm.checkValidity()) {
        contactForm.classList.add('was-validated');
        formStatus.innerHTML = '<div class="alert alert-danger mt-2">Please fill in all required fields.</div>';
        return;
      }

      var submitBtn = contactForm.querySelector('button[type="submit"]');
      var original = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';

      setTimeout(function () {
        formStatus.innerHTML = '<div class="alert alert-success mt-2">Thank you! I\'ll get back to you soon.</div>';
        contactForm.reset();
        contactForm.classList.remove('was-validated');
        submitBtn.disabled = false;
        submitBtn.textContent = original;
      }, 1500);
    });
  }

  /* ============================================================
     Blog posts (homepage)
     ============================================================ */
  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  }

  function loadBlogPosts() {
    var container = document.getElementById('blog-posts');
    if (!container) return;

    var posts = getBlogPosts(3);
    container.innerHTML = posts.map(function (post) {
      return '<div class="col-lg-4 col-md-6 fade-in">' +
        '<div class="blog-card">' +
        '<img src="' + post.image + '" alt="' + post.title + '" class="blog-card-img" loading="lazy">' +
        '<div class="blog-card-body">' +
        '<span class="blog-card-category">' + post.category + '</span>' +
        '<h3 class="blog-card-title">' + post.title + '</h3>' +
        '<div class="blog-card-meta"><i class="fa fa-calendar" aria-hidden="true"></i> ' + formatDate(post.date) +
        ' <span class="mx-2">·</span><i class="fa fa-user" aria-hidden="true"></i> ' + post.author + '</div>' +
        '<p class="blog-card-excerpt">' + post.excerpt + '</p>' +
        '<a href="blog-post.html?id=' + post.id + '" class="blog-card-link">Read More <i class="fa fa-arrow-right" aria-hidden="true"></i></a>' +
        '</div></div></div>';
    }).join('');

    /* Observe newly added elements */
    container.querySelectorAll('.fade-in').forEach(function (el) {
      fadeObserver.observe(el);
    });
  }

  if (typeof getBlogPosts !== 'undefined') {
    loadBlogPosts();
  }

})();
