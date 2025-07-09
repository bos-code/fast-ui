# Fast UI

A modern, responsive landing page built with **Tailwind CSS** and **SwiperJS**, featuring animated sections, grid layouts, and mobile sliders. Fast UI delivers sleek design and smooth UX, built for performance.

🌐 **Live Preview**: [https://fast-ui-murex.vercel.app](https://fast-ui-murex.vercel.app)

---

## 📸 Screenshots

### 💻 Desktop View
![Desktop Screenshot](https://fast-ui-murex.vercel.app/desktop-preview.png)

### 📱 Mobile View
![Mobile Screenshot](https://fast-ui-murex.vercel.app/mobile-preview.png)

---

## ✨ Features

- ⚡ Fast-loading Tailwind-based layout
- 📱 Responsive grid turns into mobile slider using **SwiperJS**
- 🎯 Clean UI with glassmorphism nav and button effects
- 🧠 Modular sections (Hero, Features, Testimonials, CTA, Footer)
- 🌗 Dark background with subtle gradients
- 📸 Lazy image support and vector assets
- 🧩 Scalable and reusable BEM-like structure

---

## 🚀 Tech Stack

- **Tailwind CSS**
- **SwiperJS**
- HTML5 + CSS3
- Hosted on **Vercel**

---

## 📦 Folder Structure

```
fast-ui/
├── index.html
├── style.css (Tailwind @apply)
├── asset/
│   ├── svg/
│   └── image/
└── js/
    └── swiper-init.js
```

---

## 📲 Mobile Slider Integration

From `md` breakpoint and below, the **Feature grid** becomes a SwiperJS slider.

```js
const swiper = new Swiper(".swiper-2", {
  slidesPerView: 1,
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
```

---

## 🛠️ Setup Instructions

```bash
git clone https://github.com/YOUR_USERNAME/fast-ui.git
cd fast-ui
# Open index.html in your browser
```

Or just deploy with:

```bash
vercel
```

---

## 📜 License

MIT © [Chidera](https://fast-ui-murex.vercel.app)

---

## 🙌 Acknowledgments

- Tailwind CSS
- SwiperJS
- Figma inspiration
- Open Source icons & illustrations

---

## 💡 Author

**Chidera** – Frontend Developer  
🔗 [fast-ui-murex.vercel.app](https://fast-ui-murex.vercel.app)