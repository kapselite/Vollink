
/* =========================================
   VoLLiink CONTACT PAGE
   Brand colours:
   Deep Blue: #3C319F
   Bright Red: #F60400
   Cyan Blue: #00A5D8
========================================= */

.contact-page {
  --deep-blue: #3C319F;
  --bright-red: #F60400;
  --cyan-blue: #00A5D8;
  --navy: #031333;
  --navy-light: #071d42;
  --text-light: #f6f8ff;
  --muted-light: #c3d2ed;

  width: 100%;
  min-height: 100vh;
  overflow: clip;
  color: var(--text-light);
  background: var(--navy);
  font-family: Inter, "Segoe UI", Arial, sans-serif;
}

.contact-page *,
.contact-page *::before,
.contact-page *::after {
  box-sizing: border-box;
}

.contact-page a {
  color: inherit;
}

.contact-page a:focus-visible,
.contact-page button:focus-visible,
.contact-page input:focus-visible,
.contact-page select:focus-visible,
.contact-page textarea:focus-visible {
  outline: 3px solid var(--cyan-blue);
  outline-offset: 4px;
}

.contact-page button,
.contact-page input,
.contact-page select,
.contact-page textarea {
  font: inherit;
}

.contact-page button {
  cursor: pointer;
}

/* NAVIGATION */

.contact-navbar {
  min-height: 76px;
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  padding: 12px 6.5%;
  background: rgba(3, 19, 51, 0.96);
  border-bottom: 1px solid rgba(0, 165, 216, 0.65);
  backdrop-filter: blur(16px);
}

.contact-brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  text-decoration: none;
}

.brand-mark {
  position: relative;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  color: #fff;
  font-size: 32px;
  font-weight: 900;
  line-height: 1;
}

.brand-mark-v {
  transform: skew(-9deg);
}

.brand-mark-dot {
  position: absolute;
  right: 0;
  bottom: 0;
  color: var(--cyan-blue);
  font-size: 21px;
  font-weight: 900;
}

.brand-word {
  color: #fff;
  font-size: clamp(21px, 2.4vw, 30px);
  font-weight: 800;
  letter-spacing: -1.3px;
  white-space: nowrap;
}

.brand-word > span,
.footer-logo > span {
  color: var(--cyan-blue);
}

.contact-navigation {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: clamp(18px, 3vw, 42px);
}

.contact-navigation > a:not(.nav-contact-button) {
  position: relative;
  padding: 12px 0;
  color: #e2eaff;
  font-size: 14px;
  font-weight: 650;
  text-decoration: none;
  transition: color 0.2s ease;
}

.contact-navigation > a:not(.nav-contact-button)::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 4px;
  width: 0;
  height: 3px;
  background: var(--cyan-blue);
  border-radius: 5px;
  transition: width 0.25s ease;
}

.contact-navigation > a:not(.nav-contact-button):hover,
.contact-navigation > a.nav-current {
  color: white;
}

.contact-navigation > a:not(.nav-contact-button):hover::after,
.contact-navigation > a.nav-current::after {
  width: 100%;
}

.nav-contact-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px 20px;
  border-radius: 11px;
  background: var(--bright-red);
  color: #fff;
  font-size: 14px;
  font-weight: 750;
  text-decoration: none;
  box-shadow: 0 5px 20px rgba(246, 4, 0, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.nav-contact-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(246, 4, 0, 0.35);
}

.nav-contact-button span {
  font-size: 19px;
}

/* MOBILE MENU BUTTON */

.contact-menu-toggle {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  border: 1px solid rgba(0, 165, 216, 0.5);
  border-radius: 10px;
  background: rgba(0, 165, 216, 0.1);
}

.contact-menu-toggle span {
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 4px;
  background: white;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.contact-menu-toggle.is-open span:first-child {
  transform: translateY(7px) rotate(45deg);
}

.contact-menu-toggle.is-open span:nth-child(2) {
  opacity: 0;
}

.contact-menu-toggle.is-open span:last-child {
  transform: translateY(-7px) rotate(-45deg);
}

/* HERO */

.contact-hero {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 325px;
  padding: 46px 6.5%;
  overflow: hidden;
  isolation: isolate;
  border-bottom: 1px solid rgba(0, 165, 216, 0.5);
  background:
    radial-gradient(
      ellipse at 80% 20%,
      rgba(0, 165, 216, 0.22),
      transparent 48%
    ),
    linear-gradient(115deg, #031333 0%, #071d42 65%, #052752 100%);
}

.hero-photo {
  position: absolute;
  z-index: -2;
  inset: 0 0 0 40%;
  background-image: url(
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=85"
  );
  background-position: center 38%;
  background-size: cover;
  opacity: 0.83;
}

.hero-overlay {
  position: absolute;
  z-index: -1;
  inset: 0;
  background:
    linear-gradient(
      90deg,
      #031333 0%,
      #031333 34%,
      rgba(3, 19, 51, 0.88) 46%,
      rgba(3, 19, 51, 0.25) 75%,
      rgba(3, 19, 51, 0.12) 100%
    ),
    linear-gradient(
      0deg,
      rgba(0, 165, 216, 0.12),
      transparent 45%
    );
}

.hero-content {
  position: relative;
  z-index: 2;
  width: min(560px, 62%);
}

.contact-eyebrow,
.section-eyebrow,
.form-eyebrow {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #04d8ff;
  font-size: 12px;
  font-weight: 850;
  letter-spacing: 0.6px;
}

.contact-eyebrow > span,
.eyebrow-line {
  display: inline-block;
  width: 35px;
  height: 3px;
  flex-shrink: 0;
  background: var(--cyan-blue);
}

.hero-content h1 {
  margin: 16px 0 12px;
  color: #fff;
  font-size: clamp(43px, 5.5vw, 72px);
  font-weight: 900;
  line-height: 1.03;
  letter-spacing: -3px;
}

.hero-content h1 > span {
  color: #04c8ed;
}

.hero-content h1 > b {
  color: var(--bright-red);
}

.hero-content > p {
  max-width: 465px;
  margin: 0;
  color: #e1eafa;
  font-size: 15px;
  line-height: 1.75;
}

.hero-shortcuts {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 18px;
  margin-top: 22px;
}

.hero-shortcuts > a {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: #f0f6ff;
  font-size: 11px;
  font-weight: 650;
  text-decoration: none;
  transition: color 0.2s ease;
}

.hero-shortcuts > a:hover {
  color: #04d8ff;
}

.shortcut-icon {
  display: grid;
  place-items: center;
  width: 43px;
  height: 43px;
  flex-shrink: 0;
  color: #05d4ff;
  border: 2px solid var(--cyan-blue);
  border-radius: 50%;
  background: rgba(0, 165, 216, 0.08);
  box-shadow: inset 0 0 15px rgba(0, 165, 216, 0.08);
}

.hero-message {
  position: absolute;
  top: 26%;
  right: 8%;
  display: flex;
  flex-direction: column;
  color: white;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(23px, 3vw, 40px);
  font-style: italic;
  line-height: 1.15;
  transform: rotate(-7deg);
  text-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
}

.hero-message span:nth-child(2) {
  margin-left: 20px;
}

.hero-message b {
  color: #04d8ff;
  font-weight: 500;
}

.hero-message i {
  width: 145px;
  height: 5px;
  margin: 12px 0 0 26px;
  border-radius: 100%;
  background: var(--bright-red);
  transform: rotate(-12deg);
}

.hero-dots {
  position: absolute;
  top: 18px;
  right: 3%;
  color: #00d7ff;
  font-size: 14px;
  line-height: 1.05;
  letter-spacing: 5px;
  opacity: 0.9;
  transform: rotate(5deg);
}

/* MAIN CONTACT LAYOUT */

.contact-main {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.08fr);
  align-items: stretch;
  gap: 22px;
  padding: 22px 6.5% 30px;
  background:
    radial-gradient(
      ellipse at 50% 0%,
      rgba(0, 165, 216, 0.06),
      transparent 65%
    ),
    var(--navy);
}

.contact-details-card,
.contact-form-card {
  min-width: 0;
  border-radius: 17px;
  overflow: hidden;
}

.contact-details-card {
  padding: 27px 30px 23px;
  border: 1px solid #00d5ff;
  background:
    radial-gradient(
      ellipse at 100% 100%,
      rgba(0, 165, 216, 0.13),
      transparent 45%
    ),
    linear-gradient(145deg, #071d42, #031333 75%);
  box-shadow:
    0 0 0 1px rgba(0, 165, 216, 0.12),
    0 8px 30px rgba(0, 165, 216, 0.07);
}

.section-eyebrow {
  font-size: 10px;
}

.contact-details-card h2,
.contact-form-card h2 {
  margin: 7px 0 5px;
  font-size: clamp(25px, 2.6vw, 34px);
  font-weight: 850;
  line-height: 1.15;
  letter-spacing: -1px;
}

.card-intro {
  margin: 0 0 20px;
  color: #d2def4;
  font-size: 13px;
  line-height: 1.65;
}

.contact-method {
  display: flex;
  align-items: flex-start;
  gap: 13px;
  margin: 19px 0;
}

.method-icon {
  display: grid;
  place-items: center;
  width: 43px;
  height: 43px;
  flex: 0 0 43px;
  color: white;
  border: 2px solid var(--cyan-blue);
  border-radius: 50%;
  background:
    linear-gradient(
      135deg,
      rgba(0, 165, 216, 0.32),
      rgba(60, 49, 159, 0.45)
    );
  box-shadow: inset 0 0 10px rgba(0, 165, 216, 0.13);
}

.contact-method > div:last-child {
  min-width: 0;
}

.contact-method h3 {
  margin: 2px 0 4px;
  color: white;
  font-size: 13px;
  font-weight: 800;
}

.contact-method p,
.contact-method > div > a {
  display: block;
  margin: 0;
  color: #dce7fa;
  font-size: 12px;
  line-height: 1.6;
  text-decoration: none;
  overflow-wrap: anywhere;
}

.contact-method > div > a:hover,
.map-link:hover {
  color: #04d8ff;
}

.contact-method .map-link {
  display: inline-block;
  margin-top: 5px;
  color: #03c8f0;
  font-size: 11px;
  font-weight: 750;
}

.department-divider {
  height: 1px;
  margin: 18px 0;
  background: linear-gradient(
    90deg,
    rgba(0, 165, 216, 0.8),
    rgba(0, 165, 216, 0.1)
  );
}

.department-heading {
  margin-bottom: 12px;
}

.department-heading p {
  color: #b9cce8;
}

.department-list {
  display: grid;
  gap: 5px;
  padding-left: 56px;
}

.department-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 6px 0;
  color: #05d8ff !important;
  text-decoration: none;
  transition: transform 0.2s ease, color 0.2s ease;
}

.department-item:hover {
  color: #fff !important;
  transform: translateX(4px);
}

.department-item > span:nth-child(2) {
  display: grid;
  gap: 3px;
  min-width: 0;
}

.department-item strong {
  color: #eaf2ff;
  font-size: 12px;
  font-weight: 650;
}

.department-item small {
  color: #b8cbea;
  font-size: 11px;
  line-height: 1.45;
  overflow-wrap: anywhere;
}

.department-arrow {
  margin-left: auto;
  color: #05d8ff;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.department-item:hover .department-arrow {
  opacity: 1;
}

.response-note {
  display: flex;
  align-items: center;
  gap: 13px;
  margin-top: 19px;
  padding-top: 17px;
  border-top: 1px solid rgba(0, 165, 216, 0.55);
  color: #00d8ff;
}

.response-note p {
  margin: 0;
  color: #d8e5fa;
  font-size: 11px;
  line-height: 1.6;
}

/* FORM CARD */

.contact-form-card {
  padding: 28px 27px 22px;
  color: #112b58;
  border: 1px solid #d5e7ff;
  background:
    radial-gradient(
      ellipse at 100% 0%,
      rgba(0, 165, 216, 0.1),
      transparent 38%
    ),
    linear-gradient(145deg, #ffffff, #eef6ff);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.12);
}

.form-eyebrow {
  color: #007ba8;
  font-size: 10px;
}

.form-eyebrow .eyebrow-line {
  width: 27px;
  height: 3px;
}

.contact-form-card h2 {
  color: #102957;
}

.contact-form-card h2 span {
  color: #008fc8;
}

.form-intro {
  margin: 10px 0 18px;
  color: #506b96;
  font-size: 13px;
  line-height: 1.65;
}

.contact-form-card form {
  display: grid;
  gap: 10px;
}

.form-field {
  display: flex;
  align-items: center;
  gap: 13px;
  min-width: 0;
  min-height: 54px;
  padding: 9px 12px;
  border: 1px solid #c6dcff;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.55);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.form-field:focus-within {
  border-color: #00a5d8;
  box-shadow: 0 0 0 3px rgba(0, 165, 216, 0.1);
}

.field-icon {
  display: grid;
  place-items: center;
  flex: 0 0 28px;
  color: #164d9d;
}

.field-content {
  display: grid;
  gap: 3px;
  min-width: 0;
  flex: 1;
}

.field-content > span {
  color: #42618f;
  font-size: 10px;
  font-weight: 650;
}

.field-content > span b {
  color: var(--bright-red);
}

.field-content input,
.field-content select,
.field-content textarea {
  width: 100%;
  min-width: 0;
  padding: 2px 0;
  border: 0;
  outline: none;
  color: #142e59;
  background: transparent;
  font-size: 12px;
}

.field-content input::placeholder,
.field-content textarea::placeholder {
  color: #91a8cb;
  opacity: 1;
}

.field-content select {
  cursor: pointer;
}

.field-content select:invalid {
  color: #7890b5;
}

.field-content select option {
  color: #142e59;
  background: white;
}

.select-arrow {
  display: grid;
  place-items: center;
  color: #17468d;
  pointer-events: none;
}

.message-field {
  align-items: flex-start;
  min-height: 105px;
}

.message-field .field-icon {
  padding-top: 4px;
}

.field-content textarea {
  min-height: 70px;
  resize: vertical;
  line-height: 1.55;
}

.submit-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  min-height: 47px;
  margin-top: 3px;
  padding: 12px 16px;
  border: 0;
  border-radius: 11px;
  color: #fff;
  background: linear-gradient(100deg, #f60400, #df0500);
  box-shadow: 0 6px 18px rgba(246, 4, 0, 0.17);
  font-size: 12px;
  font-weight: 800;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.submit-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(246, 4, 0, 0.25);
}

.submit-button > span {
  font-size: 20px;
}

.form-feedback {
  margin: 0;
  padding: 10px;
  border: 1px solid #8adbb4;
  border-radius: 8px;
  color: #145b39;
  background: #eafff2;
  font-size: 12px;
  line-height: 1.6;
}

.privacy-note {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  margin: 4px 0 0;
  color: #55739d;
  font-size: 10px;
  line-height: 1.5;
  text-align: center;
}

.privacy-note > span {
  color: #1970bc;
  font-size: 13px;
}

/* SERVICE STRIP */

.service-strip {
  position: relative;
  display: grid;
  grid-template-columns: 1.35fr repeat(4, minmax(0, 1fr));
  align-items: center;
  gap: 20px;
  padding: 25px 6.5%;
  overflow: hidden;
  border-top: 1px solid rgba(0, 165, 216, 0.35);
  border-bottom: 1px solid rgba(0, 165, 216, 0.35);
  background:
    radial-gradient(
      ellipse at 100% 50%,
      rgba(0, 165, 216, 0.12),
      transparent 30%
    ),
    #061737;
}

.service-tagline {
  padding-right: 18px;
  border-right: 1px solid rgba(0, 165, 216, 0.55);
}

.service-tagline h2 {
  margin: 0;
  color: #f4f7ff;
  font-size: 17px;
  line-height: 1.45;
}

.service-tagline p {
  margin: 7px 0 0;
  color: #05d8ff;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 18px;
  font-style: italic;
}

.service-item {
  display: flex;
  align-items: center;
  gap: 11px;
  min-width: 0;
}

.service-icon {
  display: grid;
  place-items: center;
  flex: 0 0 46px;
  width: 46px;
  height: 46px;
  border: 2px solid #125cb2;
  border-right-color: #00d8ff;
  border-radius: 50%;
  color: #fff;
  background: rgba(0, 165, 216, 0.06);
}

.service-item > span:last-child {
  display: grid;
  gap: 5px;
  min-width: 0;
}

.service-item strong {
  color: #edf4ff;
  font-size: 11px;
  font-weight: 750;
}

.service-item small {
  color: #b7c9e8;
  font-size: 10px;
  line-height: 1.4;
}

/* FOOTER */

.contact-footer {
  display: flex;
  align-items: center;
  gap: 24px;
  min-height: 72px;
  padding: 17px 6.5%;
  background: #03102a;
}

.footer-logo {
  color: #fff;
  font-size: 24px;
  font-weight: 850;
  letter-spacing: -1px;
  text-decoration: none;
  white-space: nowrap;
}

.footer-divider {
  width: 1px;
  height: 28px;
  background: rgba(0, 165, 216, 0.6);
}

.contact-footer > p {
  margin: 0;
  color: #b8c9e4;
  font-size: 10px;
}

.footer-links {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-left: auto;
}

.footer-links a {
  display: grid;
  place-items: center;
  min-width: 25px;
  height: 25px;
  color: #f4f7ff;
  font-size: 12px;
  font-weight: 800;
  text-decoration: none;
  transition: color 0.2s ease, transform 0.2s ease;
}

.footer-links a:hover {
  color: #04d8ff;
  transform: translateY(-2px);
}

/* TABLET */

@media (max-width: 1050px) {
  .contact-navbar {
    padding-inline: 4%;
  }

  .contact-navigation {
    gap: 20px;
  }

  .contact-main {
    padding-inline: 4%;
    gap: 16px;
  }

  .contact-details-card {
    padding: 23px 20px;
  }

  .contact-form-card {
    padding: 24px 20px;
  }

  .department-list {
    padding-left: 0;
  }

  .service-strip {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 20px;
    padding-inline: 4%;
  }

  .service-tagline {
    grid-column: 1 / -1;
    padding: 0 0 15px;
    border-right: 0;
    border-bottom: 1px solid rgba(0, 165, 216, 0.4);
  }
}

/* SMALL TABLETS AND MOBILE */

@media (max-width: 760px) {
  .contact-navbar {
    min-height: 70px;
    padding: 10px 5%;
  }

  .contact-menu-toggle {
    display: flex;
    flex-shrink: 0;
  }

  .contact-navigation {
    position: absolute;
    top: calc(100% + 1px);
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
    max-height: 0;
    padding: 0 5%;
    overflow: hidden;
    visibility: hidden;
    opacity: 0;
    background: #031333;
    border-bottom: 1px solid rgba(0, 165, 216, 0.6);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    transition:
      max-height 0.3s ease,
      opacity 0.2s ease,
      padding 0.3s ease,
      visibility 0.3s ease;
  }

  .contact-navigation.menu-open {
    max-height: 420px;
    padding: 14px 5% 22px;
    visibility: visible;
    opacity: 1;
  }

  .contact-navigation > a:not(.nav-contact-button) {
    padding: 13px 10px;
    border-radius: 8px;
  }

  .contact-navigation > a:not(.nav-contact-button):hover {
    background: rgba(0, 165, 216, 0.1);
  }

  .contact-navigation > a:not(.nav-contact-button)::after {
    display: none;
  }

  .nav-contact-button {
    margin-top: 8px;
    padding: 14px;
  }

  .contact-hero {
    min-height: auto;
    padding: 45px 6% 40px;
  }

  .hero-photo {
    inset: 0;
    background-position: center;
    opacity: 0.48;
  }

  .hero-overlay {
    background: linear-gradient(
      90deg,
      rgba(3, 19, 51, 0.98),
      rgba(3, 19, 51, 0.83)
    );
  }

  .hero-content {
    width: 100%;
    max-width: 560px;
  }

  .hero-content h1 {
    font-size: clamp(43px, 9vw, 62px);
    letter-spacing: -2px;
  }

  .hero-content > p {
    max-width: 500px;
  }

  .hero-message {
    top: 15px;
    right: 5%;
    font-size: 22px;
    opacity: 0.7;
  }

  .hero-message i {
    width: 80px;
  }

  .hero-dots {
    display: none;
  }

  .hero-shortcuts {
    gap: 13px;
  }

  .hero-shortcuts > a {
    font-size: 11px;
  }

  .shortcut-icon {
    width: 39px;
    height: 39px;
  }

  .contact-main {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 22px 5% 28px;
  }

  .contact-details-card,
  .contact-form-card {
    padding: 25px;
  }

  .contact-details-card h2,
  .contact-form-card h2 {
    font-size: 30px;
  }

  .department-list {
    padding-left: 10px;
  }

  .service-strip {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 22px 15px;
    padding: 24px 5%;
  }

  .service-tagline {
    grid-column: 1 / -1;
  }

  .contact-footer {
    flex-wrap: wrap;
    gap: 13px;
    padding: 20px 5%;
  }

  .footer-links {
    gap: 8px;
  }
}

/* SMALL PHONES */

@media (max-width: 420px) {
  .brand-mark {
    width: 37px;
    height: 37px;
    font-size: 28px;
  }

  .brand-word {
    font-size: 22px;
  }

  .contact-hero {
    padding: 38px 5% 32px;
  }

  .contact-eyebrow {
    font-size: 10px;
  }

  .hero-content h1 {
    font-size: clamp(39px, 10vw, 48px);
    letter-spacing: -1.8px;
  }

  .hero-content > p {
    font-size: 13px;
    line-height: 1.8;
  }

  .hero-message {
    display: none;
  }

  .hero-shortcuts {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .hero-shortcuts > a {
    font-size: 12px;
  }

  .contact-main {
    padding-inline: 4%;
  }

  .contact-details-card,
  .contact-form-card {
    padding: 21px 16px;
    border-radius: 14px;
  }

  .contact-details-card h2,
  .contact-form-card h2 {
    font-size: 27px;
  }

  .card-intro,
  .form-intro {
    font-size: 12px;
  }

  .department-item {
    gap: 9px;
  }

  .department-item small {
    font-size: 10px;
  }

  .form-field {
    gap: 9px;
    padding-inline: 9px;
  }

  .field-icon {
    flex-basis: 24px;
  }

  .field-icon svg {
    width: 21px;
    height: 21px;
  }

  .service-strip {
    gap: 20px 10px;
  }

  .service-item {
    gap: 8px;
  }

  .service-icon {
    width: 38px;
    height: 38px;
    flex-basis: 38px;
  }

  .service-icon svg {
    width: 21px;
    height: 21px;
  }

  .service-item small {
    font-size: 9px;
  }

  .contact-footer {
    justify-content: center;
    text-align: center;
  }

  .contact-footer > p {
    width: 100%;
    order: 3;
  }

  .footer-divider {
    height: 22px;
  }

  .footer-links {
    margin-left: 0;
  }
}

/* ACCESSIBILITY */

@media (prefers-reduced-motion: reduce) {
  .contact-page *,
  .contact-page *::before,
  .contact-page *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
