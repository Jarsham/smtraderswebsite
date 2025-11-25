document.addEventListener("DOMContentLoaded", () => {

    // === MOBILE MENU TOGGLE ===
    const menuBtn = document.querySelector(".menu-btn");
    const navMenu = document.getElementById("navMenu");

    menuBtn.addEventListener("click", () => {
        navMenu.style.display = (navMenu.style.display === "flex") ? "none" : "flex";
    });

    // Close mobile menu on link click
    navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 768) navMenu.style.display = "none";
        });
    });

    // === SMOOTH SCROLL FUNCTION ===
    window.scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    // === LAZY LOAD ALL IMAGES ===
    document.querySelectorAll("img").forEach(img => img.setAttribute("loading", "lazy"));

    // === INITIALIZE SLICK SLIDER (if jQuery & Slick exist) ===
    if (typeof $ !== "undefined" && $.fn.slick) {
        $('.gallery-slider').slick({
            dots: true,
            infinite: true,
            speed: 600,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            arrows: true,
            responsive: [
                { breakpoint: 1024, settings: { slidesToShow: 2 } },
                { breakpoint: 768,  settings: { slidesToShow: 1 } }
            ]
        });
    }

    // === LIGHTBOX FOR GALLERY IMAGES ===
    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', () => {
            const overlay = document.createElement('div');
            overlay.className = 'gallery-overlay';
            overlay.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
            document.body.appendChild(overlay);

            overlay.addEventListener('click', () => overlay.remove());
        });
    });

    // === INITIALIZE AOS ANIMATIONS ===
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 1200,
            once: true,
            offset: 100
        });
    }

    // === CONTACT FORM SUBMISSION HANDLER ===
    const contactForm = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    if (contactForm && successMessage) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault(); // prevent default form submission

            // Show success message
            successMessage.style.display = "block";

            // Optional: fade in animation
            successMessage.style.opacity = 0;
            let opacity = 0;
            const fadeIn = setInterval(() => {
                opacity += 0.05;
                successMessage.style.opacity = opacity;
                if (opacity >= 1) clearInterval(fadeIn);
            }, 20);

            // Reset form fields
            contactForm.reset();
        });
    }

});
