/* ======================
   PEOPLE IMAGES
   ====================== */
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

/* ======================
   CAR GALLERIES
   ====================== */
/* Sub-galleries defined first so overview can reference them */
var carGalleries = {
  porsche: {
    label:    'Porsche Boxster GTS',
    cover:    'images/cars/porsche boxster gts/gts-1.jpg',
    images: [
      { src: 'images/cars/porsche boxster gts/gts-1.jpg', caption: 'Boxster GTS — 01' },
      { src: 'images/cars/porsche boxster gts/gts-2.jpg', caption: 'Boxster GTS — 02' },
      { src: 'images/cars/porsche boxster gts/gts-3.jpg', caption: 'Boxster GTS — 03' },
      { src: 'images/cars/porsche boxster gts/gts-4.jpg', caption: 'Boxster GTS — 04' },
      { src: 'images/cars/porsche boxster gts/gts-5.jpg', caption: 'Boxster GTS — 05' },
      { src: 'images/cars/porsche boxster gts/gts-6.jpg', caption: 'Boxster GTS — 06' },
      { src: 'images/cars/porsche boxster gts/gts-7.jpg', caption: 'Boxster GTS — 07' }
    ]
  },
  lamborghini: {
    label:    'Lamborghini STO',
    cover:    'images/cars/lamborghini sto/sto-1.jpg',
    images: [
      { src: 'images/cars/lamborghini sto/sto-1.jpg',  caption: 'Lamborghini STO — 01' },
      { src: 'images/cars/lamborghini sto/sto-2.jpg',  caption: 'Lamborghini STO — 02' },
      { src: 'images/cars/lamborghini sto/sto-3.jpg',  caption: 'Lamborghini STO — 03' },
      { src: 'images/cars/lamborghini sto/sto-4.jpg',  caption: 'Lamborghini STO — 04' },
      { src: 'images/cars/lamborghini sto/sto-5.jpg',  caption: 'Lamborghini STO — 05' },
      { src: 'images/cars/lamborghini sto/sto-6.jpg',  caption: 'Lamborghini STO — 06' },
      { src: 'images/cars/lamborghini sto/sto-7.jpg',  caption: 'Lamborghini STO — 07' },
      { src: 'images/cars/lamborghini sto/sto-8.jpg',  caption: 'Lamborghini STO — 08' },
      { src: 'images/cars/lamborghini sto/sto-9.jpg',  caption: 'Lamborghini STO — 09' },
      { src: 'images/cars/lamborghini sto/sto-10.jpg', caption: 'Lamborghini STO — 10' },
      { src: 'images/cars/lamborghini sto/sto-11.jpg', caption: 'Lamborghini STO — 11' },
      { src: 'images/cars/lamborghini sto/sto-12.jpg', caption: 'Lamborghini STO — 12' },
      { src: 'images/cars/lamborghini sto/sto-13.jpg', caption: 'Lamborghini STO — 13' },
      { src: 'images/cars/lamborghini sto/sto-14.jpg', caption: 'Lamborghini STO — 14' },
      { src: 'images/cars/lamborghini sto/sto-15.jpg', caption: 'Lamborghini STO — 15' },
      { src: 'images/cars/lamborghini sto/sto-16.jpg', caption: 'Lamborghini STO — 16' },
      { src: 'images/cars/lamborghini sto/sto-17.jpg', caption: 'Lamborghini STO — 17' }
    ]
  },
  alfaromeo: {
    label:    'Alfa Romeo',
    cover:    'images/cars/alfa romeo/alfaromeo-1.jpg',
    images: [
      { src: 'images/cars/alfa romeo/alfaromeo-1.jpg', caption: 'Alfa Romeo — 01' },
      { src: 'images/cars/alfa romeo/alfaromeo-2.jpg', caption: 'Alfa Romeo — 02' },
      { src: 'images/cars/alfa romeo/alfaromeo-3.jpg', caption: 'Alfa Romeo — 03' },
      { src: 'images/cars/alfa romeo/alfaromeo-4.jpg', caption: 'Alfa Romeo — 04' },
      { src: 'images/cars/alfa romeo/alfaromeo-5.jpg', caption: 'Alfa Romeo — 05' },
      { src: 'images/cars/alfa romeo/alfaromeo-6.jpg', caption: 'Alfa Romeo — 06' },
      { src: 'images/cars/alfa romeo/alfaromeo-7.jpg', caption: 'Alfa Romeo — 07' }
    ]
  }
};

/* Build overview using interleave pattern:
   2 overview, 2 gallery-1, 2 overview, 2 gallery-2, 2 overview, 2 gallery-3 */
(function() {
  var base = [
    { src: 'images/cars/image-1.jpg', caption: 'ferrari-1' },
    { src: 'images/cars/image-2.jpg', caption: 'ferrari-2' },
    { src: 'images/cars/image-3.jpg', caption: 'ferrari-3' },
    { src: 'images/cars/image-4.jpg', caption: 'ferrari-4' },
    { src: 'images/cars/image-5.jpg', caption: 'ferrari-5' },
    { src: 'images/cars/image-6.jpg', caption: 'ferrari-6' },
    { src: 'images/cars/image-7.jpg', caption: 'ferrari-7' },
    { src: 'images/cars/image-8.jpg', caption: 'ferrari-8' },
    { src: 'images/cars/image-9.jpg', caption: 'ferrari-9' }
  ];
  var subs = [
    carGalleries.porsche.images,
    carGalleries.lamborghini.images,
    carGalleries.alfaromeo.images
  ];
  var mixed = [];
  var bi    = 0;
  subs.forEach(function(sub) {
    mixed.push(base[bi], base[bi + 1]);
    bi += 2;
    mixed.push(sub[0], sub[1]);
  });
  /* append any remaining base images */
  while (bi < base.length) { mixed.push(base[bi++]); }

  carGalleries.overview = {
    label:  'Overview',
    cover:  'images/cars/image-1.jpg',
    images: mixed
  };
})();

/* Default carImages still used by the original people-page path */
var carImages    = carGalleries.overview.images;
var currentIndex = 0;

/* ======================
   PAGE DETECTION
   ====================== */
var isCarPage  = document.body.getAttribute('data-page') === 'cars';
var images     = isCarPage ? carImages : peopleImages;

/* ======================
   BUILD MASONRY GALLERY  (people page)
   ====================== */
var grid = document.getElementById('galleryGrid');
if (grid && !isCarPage) {
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

/* ======================
   BUILD MARQUEE  (people page)
   ====================== */
var track = document.getElementById('marqueeTrack');
if (track && !isCarPage) {
  images.concat(images).forEach(function(img) {
    var el = document.createElement('img');
    el.src = img.src; el.alt = img.caption;
    track.appendChild(el);
  });
}

/* ======================
   ABOUT PAGE ANIMATIONS
   ====================== */
document.querySelectorAll('.about-animate').forEach(function(el) {
  var obs = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting) {
      entries[0].target.classList.add('visible');
      obs.disconnect();
    }
  }, { threshold: 0.12 });
  obs.observe(el);
});

/* ======================
   GALLERY SCROLL REVEAL
   ====================== */
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

/* ======================
   LIGHTBOX
   ====================== */
function openLightbox(index) {
  currentIndex = index;
  var lb  = document.getElementById('lightbox');
  var img = document.getElementById('lightbox-img');
  var cap = document.getElementById('lightbox-caption');
  if (!lb) return;
  img.src         = images[index].src;
  cap.textContent = images[index].caption;
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

var lbImg = document.getElementById('lightbox-img');
if (lbImg) lbImg.style.transition = 'opacity 0.16s ease, transform 0.16s ease';

var lb = document.getElementById('lightbox');
if (lb) {
  lb.addEventListener('click', function(e) {
    if (e.target === lb) closeLightbox();
  });
}
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowRight') changeSlide(1);
  if (e.key === 'ArrowLeft')  changeSlide(-1);
});

/* ======================
   NAV SHRINK ON SCROLL
   ====================== */
window.addEventListener('scroll', function() {
  var nav = document.getElementById('navbar');
  if (!nav) return;
  nav.style.padding = window.scrollY > 60 ? '0.85rem 4rem' : '1.5rem 4rem';
}, { passive: true });
