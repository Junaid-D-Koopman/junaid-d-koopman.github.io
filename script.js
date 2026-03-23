/* ================================================
   YOUR PHOTOS
   ------------------------------------------------
   By default, placeholder images from picsum.photos
   are used so the site works immediately.

   To use YOUR own photos:
   1. Upload your images to GitHub inside folders:
        images/people/   ← for portrait photos
        images/cars/     ← for car photos
   2. Replace the src values below with the file paths
      For example:
        src: 'images/people/portrait1.jpg'
        src: 'images/cars/ferrari.jpg'
   ================================================ */

var peopleImages = [
  { src: 'https://picsum.photos/seed/pp1/600/800', caption: 'Portrait Series'  },
  { src: 'https://picsum.photos/seed/pp2/800/600', caption: 'Street Portrait'  },
  { src: 'https://picsum.photos/seed/pp3/600/900', caption: 'Studio Session'   },
  { src: 'https://picsum.photos/seed/pp4/700/700', caption: 'Natural Light'    },
  { src: 'https://picsum.photos/seed/pp5/600/750', caption: 'Candid Moment'    },
  { src: 'https://picsum.photos/seed/pp6/800/550', caption: 'Urban Life'       },
  { src: 'https://picsum.photos/seed/pp7/600/800', caption: 'Emotions'         },
  { src: 'https://picsum.photos/seed/pp8/700/500', caption: 'Close Up'         },
  { src: 'https://picsum.photos/seed/pp9/600/850', caption: 'Silhouette'       }
];

var carImages = [
  { src: 'https://picsum.photos/seed/cp1/900/600', caption: 'Classic Chrome'   },
  { src: 'https://picsum.photos/seed/cp2/600/800', caption: 'Detail Shot'      },
  { src: 'https://picsum.photos/seed/cp3/800/500', caption: 'Night Drive'      },
  { src: 'https://picsum.photos/seed/cp4/700/700', caption: 'Interior'         },
  { src: 'https://picsum.photos/seed/cp5/900/550', caption: 'Speed Blur'       },
  { src: 'https://picsum.photos/seed/cp6/600/750', caption: 'Engine Bay'       },
  { src: 'https://picsum.photos/seed/cp7/800/600', caption: 'Track Day'        },
  { src: 'https://picsum.photos/seed/cp8/700/500', caption: 'Wheel Detail'     },
  { src: 'https://picsum.photos/seed/cp9/600/900', caption: 'Sunset Cruise'    }
];

/* ================================================
   PAGE DETECTION
   cars.html has  data-page="cars"  on its <body>
   everything else defaults to the people gallery
   ================================================ */
var isCarPage    = document.body.getAttribute('data-page') === 'cars';
var images       = isCarPage ? carImages : peopleImages;
var currentIndex = 0;

/* ================================================
   BUILD MASONRY GALLERY
   ================================================ */
var grid = document.getElementById('galleryGrid');
if (grid) {
  images.forEach(function(img, i) {
    var item = document.createElement('div');
    item.className = 'gallery-item';
    item.innerHTML =
      '<img src="' + img.src + '" alt="' + img.caption + '" loading="lazy">' +
      '<div class="gallery-overlay"><div class="overlay-icon">+</div></div>';
    item.addEventListener('click', function() { openLightbox(i); });
    grid.appendChild(item);
  });
  initScrollObserver();
}

/* ================================================
   BUILD AUTO-SCROLLING MARQUEE STRIP
   Images are duplicated for a seamless infinite loop
   ================================================ */
var track = document.getElementById('marqueeTrack');
if (track) {
  images.concat(images).forEach(function(img) {
    var el    = document.createElement('img');
    el.src    = img.src;
    el.alt    = img.caption;
    track.appendChild(el);
  });
}

/* ================================================
   ABOUT PAGE — fade in elements on scroll
   ================================================ */
document.querySelectorAll('.about-animate').forEach(function(el) {
  var obs = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting) {
      entries[0].target.classList.add('visible');
      obs.disconnect();
    }
  }, { threshold: 0.12 });
  obs.observe(el);
});

/* ================================================
   GALLERY SCROLL REVEAL — staggered fade-up
   ================================================ */
function initScrollObserver() {
  var items = document.querySelectorAll('.gallery-item');
  var obs   = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry, i) {
      if (entry.isIntersecting) {
        setTimeout(function() {
          entry.target.classList.add('visible');
        }, i * 70);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  items.forEach(function(item) { obs.observe(item); });
}

/* ================================================
   LIGHTBOX — open, close, navigate
   ================================================ */
function openLightbox(index) {
  currentIndex = index;
  var lb  = document.getElementById('lightbox');
  var img = document.getElementById('lightbox-img');
  var cap = document.getElementById('lightbox-caption');
  if (!lb) return;
  img.src          = images[index].src;
  cap.textContent  = images[index].caption;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  var lb = document.getElementById('lightbox');
  if (lb) lb.classList.remove('open');
  document.body.style.overflow = '';
}

function changeSlide(dir) {
  currentIndex = (currentIndex + dir + images.length) % images.length;
  var img = document.getElementById('lightbox-img');
  var cap = document.getElementById('lightbox-caption');
  if (!img) return;
  img.style.opacity   = '0';
  img.style.transform = 'scale(0.97)';
  setTimeout(function() {
    img.src         = images[currentIndex].src;
    cap.textContent = images[currentIndex].caption;
    img.style.opacity   = '1';
    img.style.transform = 'scale(1)';
  }, 160);
}

/* Smooth transition on slide change */
var lbImg = document.getElementById('lightbox-img');
if (lbImg) {
  lbImg.style.transition = 'opacity 0.16s ease, transform 0.16s ease';
}

/* Click outside image to close */
var lb = document.getElementById('lightbox');
if (lb) {
  lb.addEventListener('click', function(e) {
    if (e.target === lb) closeLightbox();
  });
}

/* Keyboard: Escape = close, Arrow keys = navigate */
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowRight')  changeSlide(1);
  if (e.key === 'ArrowLeft')   changeSlide(-1);
});

/* ================================================
   NAV — shrinks slightly on scroll
   ================================================ */
window.addEventListener('scroll', function() {
  var nav = document.getElementById('navbar');
  if (!nav) return;
  nav.style.padding = window.scrollY > 60
    ? '0.85rem 4rem'
    : '1.5rem 4rem';
}, { passive: true });
