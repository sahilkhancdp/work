// ========== PROJECT DATA ==========
const projectsData = {
    "chadha-residency": {
        title: "Chadha Residency",
        category: "Residential",
        hero: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070",
        overview: "Chadha Residency is a landmark residential project designed to offer a perfect blend of luxury, comfort, and modern living. With thoughtfully crafted apartments and world-class amenities, it caters to families seeking a premium lifestyle in the heart of Mumbai.",
        quickFacts: [
            { label: "Status", value: "Completed" },
            { label: "Location", value: "Mumbai, Maharashtra" },
            { label: "Type", value: "Residential" },
            { label: "Units", value: "200+ Premium Units" }
        ],
        amenities: ["Landscaped Gardens", "Clubhouse & Gym", "Swimming Pool", "Children's Play Area", "24/7 Security", "Ample Parking"],
        highlights: ["Spacious 2 BHK & 3 BHK apartments", "Prime location with excellent connectivity", "Vaastu-compliant design", "Earthquake-resistant RCC structure", "Close to schools, hospitals & malls"],
        floors: [
            { name: "Property Overview", sections: [{ title: "Project Scope", items: ["Premium residential development", "Located in prime Mumbai suburb", "Designed for modern families"] }] },
            { name: "Ground Floor", sections: [{ title: "Reception", items: ["Grand entrance lobby", "Waiting area", "Concierge desk"] }, { title: "Amenities", items: ["Fitness center", "Community hall", "Indoor games"] }] },
            { name: "Typical Floors", sections: [{ title: "Configuration", items: ["2 BHK: 950-1150 sq.ft.", "3 BHK: 1350-1650 sq.ft."] }, { title: "Design Highlights", items: ["Cross ventilation", "Premium flooring", "Modular kitchen"] }] },
            { name: "Terrace", sections: [{ title: "Leisure", items: ["Rooftop garden", "Jogging track", "Yoga zone"] }] }
        ]
    },
    "canton-residency": {
        title: "Canton Residency",
        category: "Residential",
        hero: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2070",
        overview: "Canton Residency is a premium residential development that redefines modern urban living. Located in a prime area of Mumbai, the project offers beautifully designed homes with state-of-the-art amenities.",
        quickFacts: [
            { label: "Status", value: "Ongoing" },
            { label: "Location", value: "Mumbai, Maharashtra" },
            { label: "Type", value: "Premium Residential" },
            { label: "Units", value: "150+ Units" }
        ],
        amenities: ["Rooftop Garden", "Fitness Center", "Swimming Pool", "Children's Play Area", "Multipurpose Hall", "24/7 Security"],
        highlights: ["Premium 1, 2 & 3 BHK residences", "Rooftop landscaped garden", "Modern clubhouse", "Metro connectivity", "Smart home features"],
        floors: [
            { name: "Property Overview", sections: [{ title: "Project Scope", items: ["Premium residential development", "Modern architecture", "150+ units"] }] },
            { name: "Ground Floor", sections: [{ title: "Reception", items: ["Double-height lobby", "Visitor lounge", "Concierge"] }] },
            { name: "Typical Floors", sections: [{ title: "Configuration", items: ["1 BHK: 650-750 sq.ft.", "2 BHK: 950-1150 sq.ft.", "3 BHK: 1350-1550 sq.ft."] }] },
            { name: "Terrace", sections: [{ title: "Leisure", items: ["Rooftop pool", "Terrace garden", "Sun deck"] }] }
        ]
    },
    "chadha-heights": {
        title: "Chadha Heights",
        category: "Residential",
        hero: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2070",
        overview: "Chadha Heights is a luxury residential project offering spacious apartments with panoramic city views. The project features modern architecture, premium fittings, and a range of lifestyle amenities.",
        quickFacts: [
            { label: "Status", value: "Completed" },
            { label: "Location", value: "Delhi NCR" },
            { label: "Type", value: "Luxury Apartments" },
            { label: "Units", value: "180+ Units" }
        ],
        amenities: ["Infinity Pool", "Premium Clubhouse", "Spa & Wellness", "Landscaped Gardens", "Concierge Services", "Valet Parking"],
        highlights: ["Ultra-luxury 3 BHK & 4 BHK", "Panoramic Delhi skyline views", "Imported marble flooring", "5-tier security", "Concierge & valet services"],
        floors: [
            { name: "Property Overview", sections: [{ title: "Scope", items: ["Ultra-luxury development", "Prime Delhi NCR", "180+ apartments"] }] },
            { name: "Grand Lobby", sections: [{ title: "Reception", items: ["Triple-height lobby", "Marble flooring", "24/7 concierge"] }] },
            { name: "Residences", sections: [{ title: "Configuration", items: ["3 BHK: 1850-2250 sq.ft.", "4 BHK: 2600-3200 sq.ft."] }] },
            { name: "Rooftop", sections: [{ title: "Leisure", items: ["Infinity pool", "Sky lounge", "Yoga deck"] }] }
        ]
    },
    "business-park": {
        title: "Chadha Business Park",
        category: "Commercial",
        hero: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2070",
        overview: "Chadha Business Park is a modern commercial development offering premium office spaces, retail outlets, and business amenities. Designed for enterprises of all sizes.",
        quickFacts: [
            { label: "Status", value: "Completed" },
            { label: "Location", value: "Delhi NCR" },
            { label: "Type", value: "Commercial" },
            { label: "Area", value: "5 Lakh Sq.Ft." }
        ],
        amenities: ["Premium Office Spaces", "Retail Outlets", "Conference Facilities", "High-Speed Elevators", "Food Court", "Ample Parking"],
        highlights: ["Grade-A commercial spaces", "Near major highways", "Modern glass facade", "Multi-level parking", "24/7 power backup"],
        floors: [
            { name: "Property Overview", sections: [{ title: "Scope", items: ["Grade-A commercial", "5 Lakh sq.ft.", "Multi-tenant"] }] },
            { name: "Ground Floor", sections: [{ title: "Retail", items: ["Retail outlets", "Food court", "Central atrium"] }] },
            { name: "Office Floors", sections: [{ title: "Config", items: ["25,000 sq.ft. floor plate", "Flexible sizes", "Column-free"] }] },
            { name: "Basement", sections: [{ title: "Parking", items: ["3-level basement", "500+ cars", "Visitor parking"] }] }
        ]
    },
    "corporate-hub": {
        title: "Chadha Corporate Hub",
        category: "Commercial",
        hero: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070",
        overview: "Chadha Corporate Hub is a premium business center located in the heart of Mumbai. With state-of-the-art facilities, smart workspaces, and strategic connectivity.",
        quickFacts: [
            { label: "Status", value: "Ongoing" },
            { label: "Location", value: "Mumbai, Maharashtra" },
            { label: "Type", value: "Business Center" },
            { label: "Area", value: "3 Lakh Sq.Ft." }
        ],
        amenities: ["Smart Workspaces", "Conference Rooms", "Business Lounge", "High-Speed Internet", "Cafeteria", "Valet Parking"],
        highlights: ["Premium corporate offices", "Central Mumbai location", "Smart automation", "Flexible lease terms", "Rooftop business lounge"],
        floors: [
            { name: "Property Overview", sections: [{ title: "Scope", items: ["Premium business center", "3 Lakh sq.ft.", "For corporates & startups"] }] },
            { name: "Ground Floor", sections: [{ title: "Lounge", items: ["Grand reception", "Business lounge", "Visitor area"] }] },
            { name: "Office Floors", sections: [{ title: "Config", items: ["1000-25,000 sq.ft.", "Plug-and-play", "Smart access"] }] },
            { name: "Terrace", sections: [{ title: "Amenities", items: ["Open-air lounge", "Sky cafe", "Networking area"] }] }
        ]
    },
    "chadha-township": {
        title: "Chadha Township",
        category: "Township",
        hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
        overview: "Chadha Township is an integrated township project offering residential, commercial, and recreational spaces within a single community. Designed for self-sustained living.",
        quickFacts: [
            { label: "Status", value: "Ongoing" },
            { label: "Location", value: "Pune, Maharashtra" },
            { label: "Type", value: "Integrated Township" },
            { label: "Area", value: "100+ Acres" }
        ],
        amenities: ["Schools & Colleges", "Multi-Specialty Hospital", "Shopping Centers", "Parks & Gardens", "Sports Complex", "Community Center"],
        highlights: ["Self-sustained township", "Residential + commercial mix", "Wide roads & greenery", "24/7 water & power", "Smart city features"],
        floors: [
            { name: "Property Overview", sections: [{ title: "Scope", items: ["100+ acre township", "Residential + commercial", "Self-sustained"] }] },
            { name: "Residential Zone", sections: [{ title: "Housing", items: ["1, 2, 3 BHK apartments", "Row houses", "Villas"] }] },
            { name: "Commercial Zone", sections: [{ title: "Shops", items: ["Retail showrooms", "Offices", "Food courts"] }] },
            { name: "Amenities", sections: [{ title: "Community", items: ["Schools", "Hospital", "Sports complex"] }] }
        ]
    },
    "green-city": {
        title: "Chadha Green City",
        category: "Township",
        hero: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070",
        overview: "Chadha Green City is a smart township project focused on sustainable living. With eco-friendly infrastructure, green spaces, and modern amenities.",
        quickFacts: [
            { label: "Status", value: "Upcoming" },
            { label: "Location", value: "Punjab" },
            { label: "Type", value: "Smart Township" },
            { label: "Area", value: "75+ Acres" }
        ],
        amenities: ["Solar Power Grid", "Smart Water Management", "EV Charging Stations", "Green Parks", "Cycling Tracks", "Community Farming"],
        highlights: ["100% sustainable design", "Solar-powered areas", "Smart waste management", "Extensive green cover", "IoT infrastructure"],
        floors: [
            { name: "Property Overview", sections: [{ title: "Scope", items: ["75+ acre smart township", "Sustainable design", "IoT-enabled"] }] },
            { name: "Residential Zone", sections: [{ title: "Housing", items: ["Eco apartments", "Green villas", "Smart homes"] }] },
            { name: "Green Infra", sections: [{ title: "Eco Features", items: ["Solar power", "Rainwater harvesting", "Sewage treatment"] }] },
            { name: "Amenities", sections: [{ title: "Lifestyle", items: ["Community farming", "Cycling tracks", "Amphitheater"] }] }
        ]
    },
    "best-western-hotel": {
        title: "Best Western Hotel & Banquet",
        category: "Hospitality",
        hero: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2070",
        overview: "Best Western Hotel & Banquet is a branded hospitality project located in Moga, Punjab. Designed as a premium wedding and business hotel, it features luxury rooms, a large-scale banquet facility, a restaurant and bar, rooftop leisure amenities, and immense basement parking.",
        quickFacts: [
            { label: "Location", value: "Moga, Punjab" },
            { label: "Banquet Area", value: "7,318 sq.ft." },
            { label: "Parking", value: "14,147 sq.ft." },
            { label: "Type", value: "Hospitality" }
        ],
        amenities: ["Best Western Branded", "7,318 sq.ft. Banquet Hall", "Dedicated Dual Kitchens", "Rooftop Pool, Gym & Spa", "Event Circulation", "Basement Parking"],
        highlights: ["Branded hospitality project", "Wedding & business model", "Tier-2 city location", "Hosts 400-500+ guests", "Strong NRI market"],
        floors: [
            { name: "Property Overview", sections: [{ title: "Scope", items: ["Branded hospitality", "Moga, Punjab", "Wedding & business hotel"] }] },
            { name: "Basement 1", sections: [{ title: "Banquet Hall", items: ["7,318 sq.ft. column-free", "Stage & DJ area", "Buffet zones"] }] },
            { name: "Ground Floor", sections: [{ title: "Reception & Dining", items: ["Reception: 43'2\" x 26'9\"", "Restaurant: 1,592 sq.ft.", "Bar: 26'4\" x 20'3\""] }] },
            { name: "Terrace", sections: [{ title: "Leisure", items: ["Swimming pool 20'x12'", "Gym 18'x25'", "Spa 15'x30'"] }] }
        ]
    },
    "chadha-grand-hotel": {
        title: "Chadha Grand Hotel",
        category: "Hospitality",
        hero: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2070",
        overview: "Chadha Grand Hotel is a luxury hospitality project offering world-class accommodation, dining, and event facilities. Located in Mumbai.",
        quickFacts: [
            { label: "Status", value: "Ongoing" },
            { label: "Location", value: "Mumbai, Maharashtra" },
            { label: "Type", value: "Luxury Hotel" },
            { label: "Rooms", value: "200+ Luxury Rooms" }
        ],
        amenities: ["Luxury Rooms & Suites", "Fine Dining Restaurants", "Rooftop Pool", "Spa & Wellness", "Banquet Halls", "Valet Parking"],
        highlights: ["5-star luxury hotel", "200+ rooms and suites", "Multiple restaurants", "State-of-art banquet", "Airport connectivity"],
        floors: [
            { name: "Property Overview", sections: [{ title: "Scope", items: ["5-star hotel", "200+ rooms", "Premium destination"] }] },
            { name: "Ground Floor", sections: [{ title: "Lobby & Dining", items: ["Grand lobby", "Multi-cuisine restaurant", "Bar & lounge"] }] },
            { name: "Guest Floors", sections: [{ title: "Rooms", items: ["Deluxe: 350-450 sq.ft.", "Executive: 550-750 sq.ft.", "Presidential: 1200+ sq.ft."] }] },
            { name: "Terrace", sections: [{ title: "Leisure", items: ["Infinity pool", "Sky bar", "Spa"] }] }
        ]
    }
};

// ========== HERO SLIDER ==========
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dots .dot');
let autoSlideInterval;

function goToSlide(index) {
    if (slides.length === 0) return;
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    resetAutoSlide();
}

function autoSlide() {
    if (slides.length === 0) return;
    autoSlideInterval = setInterval(() => {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }, 5000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlide();
}

function pauseAutoSlide() {
    clearInterval(autoSlideInterval);
}

autoSlide();

// ========== NAVBAR SCROLL ==========
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('solid');
    } else {
        navbar.classList.remove('solid');
        
        // Agar top par wapas aaye, toh menu band ho jaye
        if (window.innerWidth > 900) {
            closeMenu();
        }
    }
});

// ========== SCROLL TO TOP ==========
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (scrollBtn) {
        if (window.scrollY > 400) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    }
});

// ========== SCROLL REVEAL ==========
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

function observeHiddenElements() {
    document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));
}

observeHiddenElements();

// ========== FILTER PROJECTS ==========
function filterProjects(category, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.project-card').forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
            card.classList.remove('hide');
        } else {
            card.classList.add('hide');
        }
    });
}

// ========== SHOW PROJECT ==========
function showProject(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    document.getElementById('mainPage').style.display = 'none';
    const projectPage = document.getElementById('projectPage');
    projectPage.classList.add('active');

    document.getElementById('detailHero').style.backgroundImage = `url('${data.hero}')`;
    document.getElementById('detailTag').textContent = data.category;
    document.getElementById('detailTitle').textContent = data.title;
    document.getElementById('detailOverview').textContent = data.overview;

    document.getElementById('quickFactsList').innerHTML = data.quickFacts.map(fact =>
        `<div class="quick-fact-row"><span class="quick-fact-label">${fact.label}</span><span class="quick-fact-value">${fact.value}</span></div>`
    ).join('');

    document.getElementById('detailAmenities').innerHTML = data.amenities.map(a =>
        `<div class="amenity-item"><span class="amenity-icon">✦</span><span class="amenity-text">${a}</span></div>`
    ).join('');

    document.getElementById('detailHighlights').innerHTML = data.highlights.map(h =>
        `<div class="highlight-item"><span class="highlight-check">✓</span><span class="highlight-text">${h}</span></div>`
    ).join('');

    document.getElementById('detailFloors').innerHTML = data.floors.map(floor =>
        `<div class="floor-item">
            <div class="floor-header" onclick="toggleFloor(this)">
                <span>${floor.name}</span>
                <span class="floor-arrow">▸</span>
            </div>
            <div class="floor-content">
                <div class="floor-content-inner">
                    ${floor.sections.map(sec =>
                        `<h5>${sec.title}</h5>
                        <ul>${sec.items.map(item => `<li>${item}</li>`).join('')}</ul>`
                    ).join('')}
                </div>
            </div>
        </div>`
    ).join('');

    window.location.hash = projectId;
    window.scrollTo(0, 0);

    setTimeout(observeHiddenElements, 100);
}

// ========== SHOW HOME ==========
function showHome() {
    document.getElementById('projectPage').classList.remove('active');
    document.getElementById('mainPage').style.display = 'block';
    window.location.hash = '';
    window.scrollTo(0, 0);
}

// ========== NEW: GO TO HOME PAGE (Logo Click) ==========
function goToHomePage() {
    const projectPage = document.getElementById('projectPage');
    if (projectPage.classList.contains('active')) {
        showHome();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========== SCROLL TO SECTION ==========
function scrollToSection(id) {
    if (document.getElementById('projectPage').classList.contains('active')) {
        showHome();
        setTimeout(() => {
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        }, 200);
    } else {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }
}

// ========== TOGGLE FLOOR ==========
function toggleFloor(header) {
    header.parentElement.classList.toggle('open');
}

// ========== GALLERY IMAGES ==========
const galleryImages = [
    "images/progress-1.jpg.jpeg",
    "images/progress-2.jpg.jpeg",
    "images/progress-3.jpg.jpeg",
    "images/progress-4.jpg.jpeg",
    "images/progress-5.jpg.jpeg",
    "images/progress-6.jpg.jpeg",
    "images/progress-7.jpg.jpeg",
    "images/progress-8.jpg.jpeg",
    "images/progress-9.jpg.jpeg",
    "images/progress-10.jpg.jpeg",
    "images/progress-11.jpg.jpeg",
    "images/progress-12.jpg.jpeg",
    "images/progress-13.jpg.jpeg",
    "images/progress-14.jpg.jpeg",
    "images/progress-15.jpg.jpeg",
    "images/progress-16.jpg.jpeg",
    "images/progress-17.jpg.jpeg",
    "images/progress-18.jpg.jpeg",
    "images/progress-19.jpg.jpeg",
    "images/progress-20.jpg.jpeg"
];

// ========== LIGHTBOX ==========
let currentLightboxIndex = 0;

function openLightbox(index) {
    currentLightboxIndex = index;
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.add('active');
    updateLightboxImage();
    document.body.style.overflow = 'hidden';
    pauseAutoSlide();
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
    autoSlide();
}

function updateLightboxImage() {
    document.getElementById('lightboxImage').src = galleryImages[currentLightboxIndex];
    document.getElementById('lightboxCounter').textContent =
        (currentLightboxIndex + 1) + " / " + galleryImages.length;
}

window.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox || !lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
});

// ========== MOBILE & DESKTOP SCROLL MENU ==========
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.querySelector('.menu-toggle');
    
    navLinks.classList.toggle('open');
    menuToggle.classList.toggle('active');

    if (window.innerWidth > 900) {
        if (navLinks.classList.contains('open')) {
            navLinks.style.opacity = '1';
            navLinks.style.visibility = 'visible';
            navLinks.style.pointerEvents = 'auto';
        } else {
            navLinks.style.opacity = '';
            navLinks.style.visibility = '';
            navLinks.style.pointerEvents = '';
        }
    }
}

function closeMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.querySelector('.menu-toggle');
    navLinks.classList.remove('open');
    menuToggle.classList.remove('active');
    
    if (window.innerWidth > 900) {
        navLinks.style.opacity = '';
        navLinks.style.visibility = '';
        navLinks.style.pointerEvents = '';
    }
}

document.addEventListener('click', (e) => {
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.querySelector('.menu-toggle');
    if (navLinks.classList.contains('open') &&
        !navLinks.contains(e.target) &&
        !menuToggle.contains(e.target)) {
        closeMenu();
    }
});

// ========== CHECK URL ON LOAD ==========
window.addEventListener('load', () => {
    const hash = window.location.hash.replace('#', '');
    if (hash && projectsData[hash]) {
        showProject(hash);
    }
});

// ========== STATS COUNTER ANIMATION ==========
(function () {
    function initCounters() {
        const counters = document.querySelectorAll('[data-count]');
        if (!counters.length) return;

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                if (el.dataset.done === 'true') return;
                el.dataset.done = 'true';

                const target = parseInt(el.dataset.count, 10);
                const suffix = el.dataset.suffix || '';
                const duration = 1800;
                const startTime = performance.now();

                function updateCount(now) {
                    const elapsed = now - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    const current = Math.floor(eased * target);

                    el.textContent = current + suffix;

                    if (progress < 1) {
                        requestAnimationFrame(updateCount);
                    } else {
                        el.textContent = target + suffix;
                    }
                }

                requestAnimationFrame(updateCount);
            });
        }, { threshold: 0.3 });

        counters.forEach(c => counterObserver.observe(c));
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCounters);
    } else {
        initCounters();
    }
})();