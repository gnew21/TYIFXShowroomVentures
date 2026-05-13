// Showroom Ventures — light interactions
// Intersection-observer fade-up on scroll, plus smooth-scroll handled by CSS.

(function () {
    'use strict';

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
        // Older browser fallback: show everything immediately.
        document.querySelectorAll('.section').forEach(function (el) {
            el.classList.add('is-visible');
        });
        return;
    }

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px'
    });

    document.querySelectorAll('.section').forEach(function (section) {
        observer.observe(section);
    });

    // Make sticky-nav links highlight the section in view (subtle, non-essential)
    var navLinks = document.querySelectorAll('.site-nav a');
    var sections = document.querySelectorAll('main section[id]');

    if (navLinks.length && sections.length) {
        var navObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var id = entry.target.id;
                    navLinks.forEach(function (link) {
                        if (link.getAttribute('href') === '#' + id) {
                            link.style.color = 'var(--accent)';
                        } else {
                            link.style.color = '';
                        }
                    });
                }
            });
        }, {
            threshold: 0,
            rootMargin: '-40% 0px -55% 0px'
        });

        sections.forEach(function (section) {
            navObserver.observe(section);
        });
    }
})();
