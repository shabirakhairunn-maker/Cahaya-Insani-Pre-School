/* ========================================
   CAHAYA INSANI — script.js
   ======================================== */

// ── MOBILE MENU ──
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  const btn  = document.querySelector('.hamburger');
  const isOpen = menu.classList.toggle('open');
  btn.textContent = isOpen ? '✕' : '☰';
  // Prevent body scroll when menu open
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

// Close mobile menu when a link is clicked
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.remove('open');
    document.querySelector('.hamburger').textContent = '☰';
    document.body.style.overflow = '';
  });
});

// Close menu on outside tap
document.addEventListener('click', function(e) {
  const menu = document.getElementById('mobile-menu');
  const hamburger = document.querySelector('.hamburger');
  if (menu.classList.contains('open') && !menu.contains(e.target) && !hamburger.contains(e.target)) {
    menu.classList.remove('open');
    hamburger.textContent = '☰';
    document.body.style.overflow = '';
  }
});


// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const navH = document.querySelector('nav').offsetHeight;
      const top  = target.getBoundingClientRect().top + window.scrollY - navH - 8;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});


// ══════════════════════════════════════════
//   PROGRAM DATA — Syarat & Ketentuan
// ══════════════════════════════════════════
const PROGRAM_DATA = {
  daycare: {
    title: 'Daycare',
    emoji: '🍼',
    age: '1 – 6 Tahun',
    desc: 'Penitipan anak harian dengan pengasuhan penuh kasih sayang, stimulasi tumbuh kembang, dan suasana aman layaknya rumah sendiri.',
    requirements: [
      'Anak berusia 1–6 tahun dan dalam kondisi sehat jasmani & rohani.',
      'Mengisi formulir pendaftaran Daycare secara lengkap.',
      'Melampirkan fotokopi Akta Kelahiran dan Kartu Keluarga.',
      'Melampirkan fotokopi KTP orang tua/wali.',
      'Menyerahkan pas foto anak terbaru (ukuran 3x4, 2 lembar).',
      'Melengkapi informasi riwayat kesehatan & alergi (jika ada).',
      'Membayar biaya pendaftaran dan biaya bulanan sesuai ketentuan sekolah.',
      'Bersedia mengikuti tata tertib dan program pengasuhan Cahaya Insani.'
    ]
  },
  toddler: {
    title: 'Toddler Class',
    emoji: '🧩',
    age: '2 – 3 Tahun',
    desc: 'Kelompok Bermain interaktif yang membantu anak mengembangkan motorik, bahasa, kreativitas, dan kemampuan bersosialisasi.',
    requirements: [
      'Anak berusia 2–3 tahun pada saat mendaftar.',
      'Mengisi formulir pendaftaran Toddler Class secara lengkap.',
      'Melampirkan fotokopi Akta Kelahiran dan Kartu Keluarga.',
      'Melampirkan fotokopi KTP orang tua/wali.',
      'Menyerahkan pas foto anak terbaru (ukuran 3x4, 2 lembar).',
      'Anak sudah dapat mulai beradaptasi ditinggal beberapa jam dengan pendampingan guru.',
      'Membayar biaya pendaftaran sesuai ketentuan sekolah.',
      'Mengikuti sesi observasi/trial sebelum resmi terdaftar.'
    ]
  },
  kb: {
    title: 'KB (Kelompok Bermain)',
    emoji: '🌱',
    age: '3 – 4 Tahun',
    desc: 'Pendidikan anak usia dini yang fokus pada perkembangan sosial-emosional dan kognitif melalui bermain dan aktivitas interaktif.',
    requirements: [
      'Anak berusia 3–4 tahun pada saat tahun ajaran dimulai.',
      'Mengisi formulir pendaftaran KB secara lengkap.',
      'Melampirkan fotokopi Akta Kelahiran, Kartu Keluarga, dan KTP orang tua/wali.',
      'Melampirkan fotokopi Kartu Imunisasi/KMS anak.',
      'Menyerahkan pas foto anak terbaru (ukuran 3x4, 2 lembar).',
      'Anak sudah mampu berkomunikasi dasar dan mengikuti instruksi sederhana.',
      'Membayar biaya pendaftaran dan seragam sesuai ketentuan sekolah.'
    ]
  },
  ra: {
    title: 'RA (Raudhatul Athfal)',
    emoji: '📖',
    age: '4 – 6 Tahun',
    desc: 'Pendidikan pra-sekolah berbasis Al-Quran dan nilai Islami, mempersiapkan anak secara akademik dan spiritual menuju SD.',
    requirements: [
      'Anak berusia 4–6 tahun pada saat tahun ajaran dimulai.',
      'Mengisi formulir pendaftaran RA secara lengkap.',
      'Melampirkan fotokopi Akta Kelahiran, Kartu Keluarga, dan KTP orang tua/wali.',
      'Melampirkan fotokopi Kartu Imunisasi/KMS anak.',
      'Menyerahkan pas foto anak terbaru (ukuran 3x4, 4 lembar).',
      'Mengikuti sesi wawancara/observasi kesiapan sekolah bersama orang tua.',
      'Membayar biaya pendaftaran, seragam, dan SPP sesuai ketentuan sekolah.',
      'Bersedia mengikuti kurikulum berbasis Al-Qur\u2019an dan nilai-nilai Islami.'
    ]
  }
};

// ── PROGRAM MODAL ──
function openProgramModal(key) {
  const data = PROGRAM_DATA[key];
  if (!data) return;

  document.getElementById('programModalEmoji').textContent = data.emoji;
  document.getElementById('programModalTitle').textContent = data.title;
  document.getElementById('programModalAge').textContent = data.age;
  document.getElementById('programModalDesc').textContent = data.desc;

  const list = document.getElementById('programModalList');
  list.innerHTML = '';
  data.requirements.forEach(req => {
    const li = document.createElement('li');
    li.textContent = req;
    list.appendChild(li);
  });

  showModal('programModal');
}

function closeProgramModal() {
  hideModal('programModal');
}

// ── GENERIC MODAL HELPERS ──
function showModal(id) {
  const modal = document.getElementById(id);
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function hideModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  const anyOpen = document.querySelector('.modal-overlay.open');
  if (!anyOpen) document.body.style.overflow = '';
}

// Expose functions used via inline onclick handlers
window.openProgramModal = openProgramModal;
window.closeProgramModal = closeProgramModal;

// Attach click / keyboard handlers to program cards
document.querySelectorAll('.prog-card[data-program]').forEach(card => {
  const key = card.getAttribute('data-program');
  card.addEventListener('click', () => openProgramModal(key));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openProgramModal(key);
    }
  });
});

// Close modal on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) hideModal(overlay.id);
  });
});

// Close modal on ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => hideModal(m.id));
  }
});


// ── ACTIVE NAV LINK on scroll ──
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id], div[id]');
  const links    = document.querySelectorAll('.nav-links a');

  function updateActive() {
    const scrollY = window.scrollY + 80;
    sections.forEach(sec => {
      if (scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight) {
        links.forEach(a => {
          a.style.color = a.getAttribute('href') === `#${sec.id}` ? 'var(--green)' : '';
        });
      }
    });
  }

  window.addEventListener('scroll', updateActive, { passive: true });
})();


// ══════════════════════════════════════════
//   SLIDER — bergulir otomatis
// ══════════════════════════════════════════
class TouchSlider {
  constructor(root, { autoplay = true } = {}) {
    this.root = root;
    this.track = root.querySelector('.slider-track');
    this.slides = Array.from(this.track ? this.track.children : []);
    if (!this.track || this.slides.length < 2) return;
 
    this.index = 0;
    this.interval = parseInt(root.dataset.interval, 10) || 3500;
    this.autoplay = autoplay;
    this.timer = null;
    this.width = 0;
 
    this.updateWidth();
    window.addEventListener('resize', () => this.updateWidth());
 
    if (this.autoplay) this.play();
  }
 
  updateWidth() {
    this.width = this.root.clientWidth;
    this.setPosition(false);
  }
 
  play() {
    this.stop();
    this.timer = setInterval(() => this.goTo(this.index + 1), this.interval);
  }
 
  stop() {
    if (this.timer) clearInterval(this.timer);
  }
 
  goTo(i, animate = true) {
    this.index = (i + this.slides.length) % this.slides.length;
    this.setPosition(animate);
  }
 
  setPosition(animate = true) {
    this.track.style.transition = animate ? 'transform .6s ease' : 'none';
    this.track.style.transform = `translateX(-${this.index * this.width}px)`;
  }
}
 
// Galeri — semua foto bergulir BERSAMAAN lewat satu timer
const GALLERY_SLIDE_INTERVAL = 3000;
const gallerySliders = Array.from(document.querySelectorAll('.gal-item.js-slider'))
  .map(root => new TouchSlider(root, { autoplay: false }))
  .filter(slider => slider.track);
 
if (gallerySliders.length) {
  setInterval(() => {
    gallerySliders.forEach(slider => slider.goTo(slider.index + 1));
  }, GALLERY_SLIDE_INTERVAL);
}

// ── DISCLOSURE TRIANGLE: Visi / Misi / Tujuan ──
document.querySelectorAll('.vm-card').forEach(card => {
  const btn = card.querySelector('.vm-card-header');
  btn.addEventListener('click', () => {
    const isOpen = card.getAttribute('data-open') === 'true';
    card.setAttribute('data-open', String(!isOpen));
    btn.setAttribute('aria-expanded', String(!isOpen));
  });
});