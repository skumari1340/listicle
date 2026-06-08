const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

const restaurants = [
  {
    id: "mamas-kitchen",
    name: "Mama's Kitchen",
    cuisine: "Soul Food",
    priceRange: "$",
    neighborhood: "Eastside",
    mustTry: "Smothered Pork Chops",
    vibe: "Cozy & Home-style",
    rating: 4.8,
    description:
      "A family-run spot that has been feeding the neighborhood for over 30 years. Everything is made from scratch daily — the cornbread alone is worth the trip.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
  },
  {
    id: "spice-trail",
    name: "Spice Trail",
    cuisine: "Ethiopian",
    priceRange: "$$",
    neighborhood: "Midtown",
    mustTry: "Doro Wat with Injera",
    vibe: "Cultural & Communal",
    rating: 4.7,
    description:
      "Authentic Ethiopian cuisine served on a giant shared platter of injera. Perfect for groups who love exploring bold, aromatic flavors together.",
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=800&q=80",
  },
  {
    id: "pho-corner",
    name: "Phở Corner",
    cuisine: "Vietnamese",
    priceRange: "$",
    neighborhood: "West End",
    mustTry: "Beef Phở Đặc Biệt",
    vibe: "Quick & Casual",
    rating: 4.6,
    description:
      "Tucked behind a laundromat, this tiny 12-seat spot serves the most deeply flavored broth in the city. Locals have kept it secret for years.",
    image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=800&q=80",
  },
  {
    id: "el-rincon",
    name: "El Rincón",
    cuisine: "Mexican",
    priceRange: "$",
    neighborhood: "Southside",
    mustTry: "Birria Tacos",
    vibe: "Lively & Festive",
    rating: 4.9,
    description:
      "A no-frills taqueria with a cult following for their slow-cooked birria. The consommé dipping broth is absolutely addictive — order extra napkins.",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80",
  },
  {
    id: "harbor-dumpling",
    name: "Harbor Dumpling House",
    cuisine: "Chinese",
    priceRange: "$",
    neighborhood: "Chinatown",
    mustTry: "Xiao Long Bao",
    vibe: "Bustling & Authentic",
    rating: 4.7,
    description:
      "Handmade dumplings folded right in front of you. The soup dumplings are delicate, juicy, and dangerously easy to eat by the dozen.",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80",
  },
  {
    id: "olive-grove",
    name: "Olive Grove",
    cuisine: "Greek",
    priceRange: "$$",
    neighborhood: "Uptown",
    mustTry: "Lamb Souvlaki Platter",
    vibe: "Relaxed & Romantic",
    rating: 4.5,
    description:
      "A charming Mediterranean hideaway with a rooftop patio and live bouzouki music on weekends. The mezze spreads are perfect for sharing over good conversation.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
  },
];

app.get("/", (req, res) => {
  const cards = restaurants
    .map(
      (r) => `
    <article class="restaurant-card">
      <a href="/restaurants/${r.id}">
        <img src="${r.image}" alt="${r.name}" />
        <div class="card-body">
          <h2>${r.name}</h2>
          <div class="tags">
            <span class="tag cuisine">${r.cuisine}</span>
            <span class="tag price">${r.priceRange}</span>
            <span class="tag vibe">${r.vibe}</span>
          </div>
          <p class="neighborhood">📍 ${r.neighborhood}</p>
          <p class="must-try">⭐ Must Try: <strong>${r.mustTry}</strong></p>
        </div>
      </a>
    </article>`
    )
    .join("");

  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Hidden Gems 🍽️</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"/>
  <link rel="stylesheet" href="/style.css"/>
</head>
<body>
  <header class="site-header">
    <div class="container">
      <h1>🍽️ Hidden Gems</h1>
      <p class="tagline">Underrated restaurants your city doesn't want you to know about</p>
    </div>
  </header>
  <main class="container">
    <section class="intro">
      <p>Skip the tourist traps. These <strong>${restaurants.length}</strong> spots are loved by locals and flying under the radar — for now.</p>
    </section>
    <div class="card-grid">
      ${cards}
    </div>
  </main>
  <footer class="site-footer">
    <div class="container">
      <p>Made with ❤️ for food lovers everywhere</p>
    </div>
  </footer>
</body>
</html>`);
});

app.get("/restaurants/:id", (req, res) => {
  const restaurant = restaurants.find((r) => r.id === req.params.id);

  if (!restaurant) {
    return res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  }

  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${restaurant.name} | Hidden Gems</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"/>
  <link rel="stylesheet" href="/style.css"/>
</head>
<body>
  <header class="site-header">
    <div class="container">
      <a href="/" class="back-link">← Back to all gems</a>
    </div>
  </header>
  <main class="container detail-page">
    <div class="detail-hero">
      <img src="${restaurant.image}" alt="${restaurant.name}" class="detail-img" />
    </div>
    <div class="detail-content">
      <h1>${restaurant.name}</h1>
      <div class="tags">
        <span class="tag cuisine">${restaurant.cuisine}</span>
        <span class="tag price">${restaurant.priceRange}</span>
        <span class="tag vibe">${restaurant.vibe}</span>
      </div>
      <div class="detail-grid">
        <div class="detail-item">
          <span class="label">📍 Neighborhood</span>
          <span>${restaurant.neighborhood}</span>
        </div>
        <div class="detail-item">
          <span class="label">⭐ Rating</span>
          <span>${restaurant.rating} / 5.0</span>
        </div>
        <div class="detail-item">
          <span class="label">💰 Price Range</span>
          <span>${restaurant.priceRange}</span>
        </div>
        <div class="detail-item">
          <span class="label">🍴 Must Try</span>
          <span>${restaurant.mustTry}</span>
        </div>
      </div>
      <section class="detail-description">
        <h2>About this spot</h2>
        <p>${restaurant.description}</p>
      </section>
    </div>
  </main>
  <footer class="site-footer">
    <div class="container">
      <p>Made with ❤️ for food lovers everywhere</p>
    </div>
  </footer>
</body>
</html>`);
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => {
  console.log(`🍽️  Hidden Gems running at http://localhost:${PORT}`);
});