/* ================================================
   ONEDRIVE LINK CONVERTER
   Converts a 1drv.ms sharing link into a direct
   image URL via the OneDrive shares API.
   ================================================ */
function oneDriveUrl(shareUrl) {
  var encoded = btoa(shareUrl)
    .replace(/=/g, '')
    .replace(/\//g, '_')
    .replace(/\+/g, '-');
  return 'https://api.onedrive.com/v1.0/shares/u!' + encoded + '/root/content';
}

/* ================================================
   YOUR PHOTOS
   ------------------------------------------------
   Add/remove sharing links from OneDrive freely.
   Caption = what shows on hover.
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
  { src: oneDriveUrl('https://1drv.ms/i/c/0d77267083a5f2c1/IQBNe4--SCXVT6sGNWSFerRAAbwSSdf8xEXqqYcqKus0kOs?e=qWISPT'), caption: 'Ferrari' },
  { src: oneDriveUrl('https://1drv.ms/i/c/0d77267083a5f2c1/IQCCJ4LfDX-UQLWcZXJMKbLIAUYk0W8FuY5kCQDPjkg2SLA?e=t1FeQI'), caption: 'Ferrari' },
  { src: oneDriveUrl('https://1drv.ms/i/c/0d77267083a5f2c1/IQBy0wJRnLkaQYvPppUzoPHuAdBsUJhJMTeZ05_YxnuXfRk?e=LKla9Q'), caption: 'Ferrari' },
  { src: oneDriveUrl('https://1drv.ms/i/c/0d77267083a5f2c1/IQD5Wi5ZcsQYSI2QLtq886oJAdbk-SAQ6H-VyKgiCPuV-bY?e=r4N6zF'), caption: 'Ferrari' },
  { src: oneDriveUrl('https://1drv.ms/i/c/0d77267083a5f2c1/IQAY_a88HI14QrjJyEsioRvdAW4g_Cqmmy7ERS4z-uOBsZE?e=gws6ln'), caption: 'Ferrari' },
  { src: oneDriveUrl('https://1drv.ms/i/c/0d77267083a5f2c1/IQBWa-gGnjcaTKP5kOEg-7CtAZzhCwrLqmYF6YApk9Y2mpY?e=lQazFV'), caption: 'Ferrari' },
  { src: oneDriveUrl('https://1drv.ms/i/c/0d77267083a5f2c1/IQBB1TMoq7S0T5Vrm-_uIJTNAZotj40z-9IKsdmFDK16N98?e=m1wZjj'), caption: 'Ferrari' },
  { src: oneDriveUrl('https://1drv.ms/i/c/0d77267083a5f2c1/IQBe8j-wha7RQ7CxIIcZkiaaAaEf5_mPpKSFOBHHn5JjsQs?e=QWAacY'), caption: 'Ferrari' },
  { src: oneDriveUrl('https://1drv.ms/i/c/0d77267083a5f2c1/IQD4NviFumJxQJYLLfYS0CwwAUoWswN3q8m5v3hsrpiuPzY?e=xpTJfb'), caption: 'Ferrari' },
  { src: oneDriveUrl('https://1drv.ms/i/c/0d77267083a5f2c1/IQCb2OlxFAUTT5VkmbOI9QVuAbORPZZcZZ0-9TZRfk24UnM?e=Tldbe6'), caption: 'Ferrari' },
  { src: oneDriveUrl('https://1drv.ms/i/c/0d77267083a5f2c1/IQDDZbNKKCDRRqXBmnhWy236AWwDfzw7vkyDo-cWSvC63jc?e=PM13Ic'), caption: 'Ferrari' }
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
   Images use natural aspect ratios — portrait and
   landscape shots both lay out correctly because
   each img is width:100% / height:auto in CSS.
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
