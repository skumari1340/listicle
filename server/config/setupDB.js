require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const restaurants = [
  {
    id: "mamas-kitchen",
    name: "Mama's Kitchen",
    cuisine: "Soul Food",
    price_range: "$",
    neighborhood: "Eastside",
    must_try: "Smothered Pork Chops",
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
    price_range: "$$",
    neighborhood: "Midtown",
    must_try: "Doro Wat with Injera",
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
    price_range: "$",
    neighborhood: "West End",
    must_try: "Beef Phở Đặc Biệt",
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
    price_range: "$",
    neighborhood: "Southside",
    must_try: "Birria Tacos",
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
    price_range: "$",
    neighborhood: "Chinatown",
    must_try: "Xiao Long Bao",
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
    price_range: "$$",
    neighborhood: "Uptown",
    must_try: "Lamb Souvlaki Platter",
    vibe: "Relaxed & Romantic",
    rating: 4.5,
    description:
      "A charming Mediterranean hideaway with a rooftop patio and live bouzouki music on weekends. The mezze spreads are perfect for sharing over good conversation.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
  },
];

async function setup() {
  try {
    // Drop table if it exists (clean slate)
    await pool.query("DROP TABLE IF EXISTS restaurants;");

    // Create table
    await pool.query(`
      CREATE TABLE restaurants (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        cuisine TEXT NOT NULL,
        price_range TEXT NOT NULL,
        neighborhood TEXT NOT NULL,
        must_try TEXT NOT NULL,
        vibe TEXT NOT NULL,
        rating NUMERIC(2,1) NOT NULL,
        description TEXT NOT NULL,
        image TEXT NOT NULL
      );
    `);

    console.log("✅ Table created");

    // Seed data
    for (const r of restaurants) {
      await pool.query(
        `INSERT INTO restaurants (id, name, cuisine, price_range, neighborhood, must_try, vibe, rating, description, image)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
        [r.id, r.name, r.cuisine, r.price_range, r.neighborhood, r.must_try, r.vibe, r.rating, r.description, r.image]
      );
    }

    console.log("✅ Seeded 6 restaurants");
    await pool.end();
  } catch (err) {
    console.error("❌ Error setting up database:", err);
    await pool.end();
  }
}

setup();