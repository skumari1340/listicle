# 🍽️ Hidden Gems

A web app that highlights underrated local restaurants flying under the radar — loved by locals, unknown to tourists.

## 📸 Walkthrough

<!-- GIF -->

![App Walkthrough](walkthrough.gif)
szw2




## ✅ Required Features

- [x] The web app uses only HTML, CSS, and JavaScript without a frontend framework
- [x] Front page of web app is functional and appropriately styled
- [x] The web app displays a title
- [x] Website displays at least five unique list items
- [x] Each list item includes at least three displayed attributes (cuisine, price range, vibe, neighborhood, must-try dish)
- [x] Each list item has a corresponding detail page (e.g., `localhost:3000/restaurants/mamas-kitchen`)
- [x] The web app serves an appropriate 404 page when no matching route is defined
- [x] The webpage is styled with Picocss

## 🌟 Stretch Features

- [x] List items are displayed as cards in a responsive grid layout

## 🚀 How to Run

```bash
npm install
npm start
```

Then open http://localhost:3000

## 🛠️ Tech Stack

- **Backend:** Node.js + Express
- **Frontend:** Vanilla HTML, CSS, JavaScript
- **Styling:** Picocss + custom CSS


2. Create a `.env` file in the project root with your Render PostgreSQL connection string: postgresql://hidden_gems_user:ovHMfU2zyTjtJmer8T9jAzb67c4NUG9A@dpg-d8no0ohkh4rs73fdevo0-a/hidden_gems

3. Set up and seed the database (run once):

```bash
   node server/config/setupDB.js
```

4. Start the server:

```bash
   npm start
```

5. Open [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

- **Backend:** Node.js + Express
- **Database:** PostgreSQL (hosted on Render)
- **Frontend:** Vanilla HTML, CSS, JavaScript
- **Styling:** Picocss + custom CSS

## 📂 Project Structure
Claude finished the responseYou said: hihi11:06 AMClaude responded: Hi!Hi! What can I help with?You said: Unit 2: Project 2 - Listicle Part 2Unit 2: Project 2 - Listicle Part 2
Overview
In this project, you'll refactor the list-based web app you developed in Unit 1 to serve data from a database. You'll need to create the database schema from scratch and seed the table with the data from each list item you choose. You'll then modify the frontend of your web app, still without using a frontend framework, to display data retrieved from the database.
If you structured your Unit 1 project well, you shouldn't need to change your list items. You should only need to create your database and hook your app up to it.
🎯 Goals
By the end of this assignment you will be able to...Create a PostgreSQL database and tableDisplay data from a PostgreSQL database in a web app
Required FeaturesThe web app uses only HTML, CSS, and JavaScript without a frontend frameworkData is supplied to the app using a Render PostgreSQL database
 The web app is connected to a Render PostgreSQL databaseThe database contains an appropriately structured table for the list items
Screenshot
View an exemplar of the project [here](https://hollow-knight-v2.onrender.com/)!
A simple version of the app with all the required features implemented: Stretch FeaturesUsers can search for items with a specific attribute
Resources[PostgreSQL Documentation](https://www.postgresql.org/docs/)[MDN Web Docs: JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
💡 HintsHelp! I don't know where to start!
 Look at this week's lab for examples on how to implement similar applications. What code will be similar? What do you need to change?How should I organize my project files?
 It's best to separate our backend files from our frontend files. Create a client folder that contains the files for your frontend and a server folder to contain the files for your backend.
 In your client folder, you might have a src folder that contains:
 an assets folder with any images or assets used in your web appa css folder with any CSS filesa folder containing files to handle retrieving data from the databaseIn your server folder, you might have
 a server file that sets up your backend servera config folder that contains the data for your database and setup files for your databasea routes folder that contains files for routesI'm stuck on something!
 Don't just skip the Resources section.Review the AI debugging tips in the box below!Still need a little extra help getting started or running into an error? Try posting in the [Class Slack Channel](http://codepath.slack.com/).📣 Submission Guidelines: For more details on submission instructions, follow the guidelines on the [Submitting Coursework](https://courses.codepath.org/courses/web103/pages/submitting_coursework) page.
 Make sure you are adding and committing files in git as you complete features and milestones.Be sure to include a README containing a GIF walkthrough of your project.Use this [README TEMPLATE](https://courses.codepath.org/snippets/web103/readme_templates/project2_readme_template?raw=true).
 It is important that you follow the same layout as the README template so that we can easily access your work.Be sure to check off each feature that is implemented in your submission by changing [ ]to [x]. We won't be able to assign points if a feature is unchecked.
Note: We highly encourage you submit your project in any state (even if it is not done) by Monday, June 15th at 2:59AM EDT. You can continue to work on your project with our 48-hour extension* in which your project will be graded once more once the extension deadline has passed (see "Coursework Submissions" in Syllabus for details). Don't forget to resubmit through the course portal with your updated GIF recording! I am working on this assignments aka project which is based on unit one I ma sending you both my folder so far what I have done could you please help me with th project.Show more11:08 AMClaude responded: I don't see any files or folders attached to your message — could you upload your Unit 1 project folder (or share the relevant files)?I don't see any files or folders attached to your message — could you upload your Unit 1 project folder (or share the relevant files)? Once I can see what you have, I can help you set up the Postgres database, schema, seed data, and connect your frontend to it.You said: I ma giving you one mint also I ma doing in vs code aI ma giving you one mint also I ma doing in vs code a11:08 AMClaude responded: Sounds good, take your time — just upload the folder/files (or zip it) when ready and I'll take a look.Sounds good, take your time — just upload the folder/files (or zip it) when ready and I'll take a look.listicle.zipzip11:10 AMClaude responded: OK, I see the project structure now.Ran 2 commandsRan 2 commandsOK, I see the project structure now. Let me look at the relevant source files (excluding node_modules).View key project filesView key project filesThis is in excellent shape already! Let me check the README and client files too.Check README, 404, and client filesCheck README, 404, and client filesGood — I have a clear picture now. Here's where you stand and what's left:
What's already done (and done well):

server.js is already refactored to query Postgres (SELECT * FROM restaurants) instead of a hardcoded array — both the homepage and detail pages
server/config/setupDB.js creates the restaurants table and seeds it with 6 items
.env has a DATABASE_URL pointing to a Render Postgres instance
.gitignore correctly excludes .env and node_modules
404 page exists

What needs fixing/finishing:

Two bugs in server.js's 404 route and CSS link in 404.html — let me check those paths
Run setupDB.js to actually create/seed the table on Render (have you run this yet?)
README needs to be updated to the Unit 2 template — it's still the Unit 1 README, missing the required checklist for "database connected", "table structured", etc.
.env was committed? — your .gitignore excludes it now, but it's sitting in your zip; if it was ever committed to git history, that's a security issue (exposed DB password)
Stretch feature — search by attribute — not yet implemented

Let me check a couple things first.Check git history for .envCheck git history for .envGood news — .env was never committed to git, so your DB credentials aren't exposed in history. That's clean.
Now let's go through the remaining items.
1. The 404.html CSS path bug
In server/views/404.html, the stylesheet link is /style.css, but your CSS actually lives at /client/src/css/style.css and is served at /css/style.css (per how server.js does app.use(express.static(...client/src))). The homepage and detail pages correctly use /css/style.css, but 404.html still has the old /style.css. Let me fix that.Edited 2 filesEdited 2 filesNow let's verify the rest of server.js and check whether the database has actually been set up on Render.Check node availabilityCheck node availabilityNetwork access is disabled in this sandbox, so I can't run setupDB.js here to actually create the table on your Render Postgres instance — that part needs to happen on your machine in VS Code. But here's exactly what to do, plus the remaining pieces.
Step-by-step to finish the project
1. Run the DB setup script (on your machine)
In VS Code's terminal, in the listicle folder:
bashnode server/config/setupDB.js
This connects using your .env's DATABASE_URL, drops/creates the restaurants table, and seeds it with your 6 restaurants. You should see ✅ Table created and ✅ Seeded 6 restaurants. Run this once — you don't need to run it again unless you want to reset the data.
2. Start the server and test
bashnpm start
Visit http://localhost:3000 — it should now pull from Postgres instead of the hardcoded array. Click into a restaurant detail page, and test a bad URL (e.g. /nonsense) to confirm the 404 page now loads its CSS correctly (fixed above).
3. Required features — status check
FeatureStatusHTML/CSS/JS only, no framework✅Connected to Render Postgres✅ (.env has DATABASE_URL)Appropriately structured table✅ (restaurants table with all needed columns)
You're functionally done with the required features once you run setupDB.js.
4. Stretch feature — search by attribute
Would you like me to implement search (e.g. search by cuisine or neighborhood)? I can add:

A search form on the homepage (HTML)
A /search?cuisine=... or /search?q=... route in server.js that runs a WHERE query

5. README update
Your current README is the Unit 1 template. The Unit 2 template requires checking off the new database-related items. Want me to fetch the template and update your README to match, with the Unit 1 items still checked plus the new Unit 2 ones?
Let me know if you want me to go ahead with the search feature and/or README update — those are the main things left.You said: yes we have to continue so far according to the instructions also  GitHub and all requimrvtsyes we have to continue so far according to the instructions also  GitHub and all requimrvts11:12 AMClaude responded: I'll go through this systematically: add the search stretch feature, update the README to the Unit 2 template, and check the GitHub/submission requirements.I'll go through this systematically: add the search stretch feature, update the README to the Unit 2 template, and check the GitHub/submission requirements. Let me first grab the README template.Failed to fetch: https://courses.codepath.org/snippets/web103/readme_templates/project2_readme_template?raw=trueFailed to fetch: https://courses.codepath.org/snippets/web103/readme_templates/project2_readme_template?raw=trueThat site blocks automated fetches, so I'll build the README based on the standard CodePath WEB103 Project 2 template structure (matching what your Project 1 README already followed, plus the new database-related checkboxes from the assignment description you gave me).
Let's tackle things in order:
1. Add the search stretch feature (cuisine search)
I'll add a search bar on the homepage and a /search route on the server that filters restaurants by cuisine or neighborhood.View current server.js to plan editsView current server.js to plan editsFirst, let's clean up the file by removing all that commented-out dead code, then add the search feature.Ran a command, viewed a fileRan a command, viewed a fileNow let's plan the search feature. I'll add:

A search form on the homepage that searches by cuisine (a dropdown of distinct cuisines, plus a "show all" option)
A /search?cuisine=... route that filters and re-renders the same card layout

First, let's remove all the dead commented-out code at the top of the file (lines 1-228).Ran 2 commandsRan 2 commandsNow let's view the cleaned-up file to plan the search feature additions.View cleaned server.jsView cleaned server.jsNow I'll refactor to add search. I'll extract a shared renderHomePage helper to avoid duplicating the page template, then add a search form and a / route that handles an optional ?cuisine= query param, plus a /search route (form action) that does the same thing via query string — simplest approach is to make the homepage itself handle the query param so both initial load and search results share one route.Edited 2 filesEdited 2 filesNow let's add CSS styling for the search form so it looks decent.Ran a command, viewed a file, edited a fileRan a command, viewed a file, edited a fileLet's verify the syntax of server.js is valid.Check server.js syntaxCheck server.js syntax2. Update the README to the Unit 2 template
Now let's write the README using the standard CodePath WEB103 Project 2 structure, combining your existing Unit 1 checklist items with the new Unit 2 requirements.Ran 2 commands, created a fileRan 2 commands, created a file3. Clean up extra files
Let's remove the duplicate gif and the leftover .docx since they're not needed in the submission, and double-check .gitignore is solid.Check extra files and gitignoreCheck extra files and gitignore"walkthrough copy.gif" is an exact duplicate (same size) of "walkthrough.gif" — fine to leave or delete, I'll leave that decision to you since I can't push to your repo anyway. The .gitignore looks correct.
4. Package up the updated files for you
Let me copy just the files I changed (and the new README) to outputs so you can drop them into your VS Code project.Ran a command, read a fileRan a command, read a fileWhat to do next (in VS Code)

Replace these 4 files in your project with the updated versions above:

server/server.js — added cuisine search (stretch feature) and removed dead commented-out code
server/views/404.html — fixed the CSS path bug
client/src/css/style.css — added search form styling
README.md — updated to Project 2 template with all checkboxes


Run the DB setup (only needed once, or again if you want to reset data):

bash   node server/config/setupDB.js

Start the app and test:

bash   npm start
Try the cuisine dropdown on the homepage — it filters via /?cuisine=Mexican etc.

GitHub / submission checklist:

Commit and push these changes: git add . && git commit -m "Connect to Render Postgres, add search, update README" && git push
Your .env is already gitignored and was never committed — good.
Re-record your walkthrough GIF showing the homepage, a detail page, the new search feature, and the 404 page, then replace walkthrough.gif.
Resubmit the GitHub repo link through the course portal before the deadline.



Want me to also build the /restaurants/:id detail page styling check, or walk through testing locally with you?ServerJS Download404Code · HTML DownloadStyleCode · CSS DownloadReadmeDocument · MD DownloadDownload allYou said: can we go step by step and unit 2 have to donecan we go step by step and unit 2 have to done11:15 AMClaude responded: Sure — let's go step by step.Sure — let's go step by step. Here's the plan, one step at a time:
Step 1 – Replace the 4 updated files in your VS Code project

Step 2 – Set up your .env (verify it's correct)

Step 3 – Install dependencies

Step 4 – Run setupDB.js to create/seed the database on Render

Step 5 – Start the server and test in browser

Step 6 – Test the search feature

Step 7 – Update README checkboxes (already done, just verify)

Step 8 – Record walkthrough GIF

Step 9 – Git commit & push to GitHub

Step 10 – Submit through course portal
Let's start with Step 1.

Step 1: Replace the updated files
In your VS Code project (listicle folder), replace these 4 files with the versions I gave you:

server/server.js
server/views/404.html
client/src/css/style.css
README.md

You can either:

Open each file I shared and copy-paste the content over your existing file, or
Download them and drag-drop into the corresponding folders in VS Code (overwriting).

Once you've replaced all 4 files, let me know and we'll move to Step 2 (checking your .env).You said: no not like that run one command then see th output the go to next and see the output like that maybeno not like that run one command then see th output the go to next and see the output like that maybe11:16 AMClaude responded: Got it — we'll go one terminal command at a time, and you tell me the output before we move on.Got it — we'll go one terminal command at a time, and you tell me the output before we move on. Let's start.

Step 1: Check you're in the right folder
In your VS Code terminal, run:
bashpwd
Paste the output here. We need to make sure you're inside the listicle project folder (the one containing package.json, server/, client/, etc.) before we run anything else.You said: shwetakumari@shwetas-MacBook-Pro listicle % pwdshwetakumari@shwetas-MacBook-Pro listicle % pwd
/Users/shwetakumari/Desktop/WEB103_CodePath/listicle
shwetakumari@shwetas-MacBook-Pro listicle %11:16 AMClaude responded: Good, you're in the right folder.Good, you're in the right folder. Let's confirm package.json and the server file exist as expected.
Step 2: Confirm project structure
Run:
bashls server/
Paste the output.You said: shwetakumari@shwetas-MacBook-Pro listicle % ls server/shwetakumari@shwetas-MacBook-Pro listicle % ls server/
config        routes        server.js    views
shwetakumari@shwetas-MacBook-Pro listicle %11:17 AMClaude responded: Good — there's a routes folder I haven't seen yet.Good — there's a routes folder I haven't seen yet. Let's check what's in it before we replace server.js, since it might contain code I'm not aware of.
Step 3: Check the routes folder
Run:
bashls server/routes/ && cat server/routes/*
Paste the output.You said: shwetakumari@shwetas-MacBook-Pro listicle % ls server/routes/ && cat server/routes/*shwetakumari@shwetas-MacBook-Pro listicle % ls server/routes/ && cat server/routes/*
zsh: no matches found: server/routes/*
shwetakumari@shwetas-MacBook-Pro listicle %11:17 AMClaude responded: The routes folder is empty (just an empty placeholder folder, no files in it).The routes folder is empty (just an empty placeholder folder, no files in it). Good — nothing to worry about there.
Step 4: Check current server.js
Let's compare your current server.js with the version I prepared, to make sure nothing important is different. Run:
bashcat server/server.js
Paste the output (or just the first ~30 lines if it's very long).You said: </section></section>
    </div>
  </main>  <footer class="site-footer">
    <div class="container">
      <p>Made with ❤️ for food lovers everywhere</p>
    </div>
  </footer>
</body>
</html>`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Database error");
  }
});// ─── 404 — catch all unmatched routes ───────────────────────────────────────
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});// ─── Start Server ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(🍽️  Hidden Gems running at http://localhost:${PORT});
});%                                                                            shwetakumari@shwetas-MacBook-Pro listicle %Show more11:19 AMClaude responded: Good, that matches the structure I expected (just the tail end of the file).Good, that matches the structure I expected (just the tail end of the file). This looks like the same server.js we worked from. Now let's update it.
Step 5: Open server.js in VS Code to edit
Run this to open the file directly in VS Code's editor:
bashcode server/server.js
Once it opens, let me know — then I'll give you the exact content to replace the homepage route with (the version that adds cuisine search).11:19 AMClaude responded: I see — your server.I see — your server.js is opened, and it has all that old commented-out code at the top (lines 1-228 in the version I worked from). The easiest approach: select everything in this file and replace it with the full new content at once, rather than editing piece by piece.
Step 6: Select all and delete
In the server.js editor (make sure your cursor is clicked inside it), press:

Cmd+A (select all)
Delete (or Backspace)

This should leave you with a completely empty file. Let me know once it's empty, and I'll give you the full replacement code to paste in.You said: I have this one I server.// require("dotenv").config();
// const express = require("express");
// const path = require("path");
// const { Pool } = require("pg");
// const app = express();
// const PORT = process.env.PORT || 3000;

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: { rejecpastedI have this one I server.js11:20 AMClaude responded: Good, that confirms exactly the file content I expected.Good, that confirms exactly the file content I expected. Now let's replace it with the cleaned-up version that adds the cuisine search feature.
Step 7: Select all and delete the current content
In the server.js editor in VS Code:

Click inside the editor
Press Cmd+A to select everything
Press Delete to clear it

Let me know once it's empty (or just say "done"), and I'll give you the full new code to paste in.You said: ok doneok done11:21 AMClaude responded: Now paste this entire block into the empty server.Now paste this entire block into the empty server.js file:
javascriptrequire("dotenv").config();
const express = require("express");
const path = require("path");
const { Pool } = require("pg");
const app = express();
const PORT = process.env.PORT || 3000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

app.use(express.static(path.join(__dirname, "..", "client", "src")));

// ─── Helper — render the home page (with optional search/filter) ────────────
function renderHomePage(restaurants, allCuisines, selectedCuisine, intro) {
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
              <span class="tag price">${r.price_range}</span>
              <span class="tag vibe">${r.vibe}</span>
            </div>
            <p class="neighborhood">📍 ${r.neighborhood}</p>
            <p class="must-try">⭐ Must Try: <strong>${r.must_try}</strong></p>
          </div>
        </a>
      </article>`
    )
    .join("");

  const cuisineOptions = allCuisines
    .map(
      (c) =>
        `<option value="${c}" ${c === selectedCuisine ? "selected" : ""}>${c}</option>`
    )
    .join("");

  const noResults = restaurants.length === 0
    ? `<p class="no-results">No hidden gems found for that cuisine. Try a different search!</p>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Hidden Gems 🍽️</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"/>
  <link rel="stylesheet" href="/css/style.css"/>
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
      <p>${intro}</p>
    </section>

    <form class="search-form" action="/" method="GET">
      <label for="cuisine">Search by cuisine:</label>
      <select name="cuisine" id="cuisine">
        <option value="">All cuisines</option>
        ${cuisineOptions}
      </select>
      <button type="submit">Search</button>
      ${selectedCuisine ? `<a href="/" role="button" class="clear-search">Clear</a>` : ""}
    </form>

    ${noResults}
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
</html>`;
}

// ─── Home page — list all restaurants (with optional cuisine search) ────────
app.get("/", async (req, res) => {
  try {
    const { cuisine } = req.query;

    const allCuisinesResult = await pool.query(
      "SELECT DISTINCT cuisine FROM restaurants ORDER BY cuisine ASC"
    );
    const allCuisines = allCuisinesResult.rows.map((r) => r.cuisine);

    let result;
    let intro;

    if (cuisine) {
      result = await pool.query(
        "SELECT * FROM restaurants WHERE cuisine = $1 ORDER BY name ASC",
        [cuisine]
      );
      intro = `Showing <strong>${result.rows.length} spot${result.rows.length === 1 ? "" : "s"}</strong> for <strong>${cuisine}</strong> cuisine.`;
    } else {
      result = await pool.query("SELECT * FROM restaurants ORDER BY name ASC");
      intro = `Skip the tourist traps. These <strong>${result.rows.length} spots</strong> are loved by locals and flying under the radar — for now.`;
    }

    res.send(renderHomePage(result.rows, allCuisines, cuisine || "", intro));
  } catch (err) {
    console.error(err);
    res.status(500).send("Database error");
  }
});

// ─── Detail page — single restaurant ────────────────────────────────────────
app.get("/restaurants/:id", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM restaurants WHERE id = $1", [req.params.id]);
    const restaurant = result.rows[0];

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
  <link rel="stylesheet" href="/css/style.css"/>
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
        <span class="tag price">${restaurant.price_range}</span>
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
          <span>${restaurant.price_range}</span>
        </div>
        <div class="detail-item">
          <span class="label">🍴 Must Try</span>
          <span>${restaurant.must_try}</span>
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
  } catch (err) {
    console.error(err);
    res.status(500).send("Database error");
  }
});

// ─── 404 — catch all unmatched routes ───────────────────────────────────────
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// ─── Start Server ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🍽️  Hidden Gems running at http://localhost:${PORT}`);
});
After pasting, save the file with Cmd+S. Let me know once it's saved.You said: ok doneok done11:22 AMClaude responded: Now let's update 404.Now let's update 404.html — fixing the CSS path bug.
Step 8: Open 404.html
Run:
bashcode server/views/404.html
Then tell me when it's open.You said: okok11:23 AMClaude responded: Find this line in the file:Find this line in the file:
html<link rel="stylesheet" href="/style.css"/>
Change it to:
html<link rel="stylesheet" href="/css/style.css"/>
That's the only change needed in this file. Save with Cmd+S, then let me know once done.You said: nextnext11:24 AMClaude responded: Now let's update client/src/css/style.Now let's update client/src/css/style.css — adding styles for the search form.
Step 9: Open style.css
Run:
bashcode client/src/css/style.css
Then tell me when it's open.You said: yy11:25 AMClaude responded: Find this section in the file (it should be near the top):Find this section in the file (it should be near the top):
css.intro {
  text-align: center;
  padding: 2rem 0 1rem;
  color: #555;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  padding-bottom: 3rem;
}
Replace it with this (it adds new search-form and no-results styles between .intro and .card-grid):
css.intro {
  text-align: center;
  padding: 2rem 0 1rem;
  color: #555;
}

.search-form {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin: 0 0 2rem;
}

.search-form label {
  margin: 0;
  font-weight: 600;
  white-space: nowrap;
}

.search-form select,
.search-form button,
.search-form .clear-search {
  margin: 0;
  width: auto;
}

.search-form .clear-search {
  background: transparent;
  border-color: var(--accent);
  color: var(--accent);
}

.no-results {
  text-align: center;
  color: #888;
  padding: 1rem 0 2rem;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  padding-bottom: 3rem;
}
Save with Cmd+S, then let me know when done.You said: :root {:root {
  --accent: #e07b39;
--accent-light: #fdf0e6;
--card-radius: 12px;
--shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}
body {
background: #fafaf8;
color: #2d2d2d;
}
.site-header {
background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
color: white;
padding: 2.5rem 0 2rem;
text-align: center;
border-bottom: 4px solid var(--accent);
}
.site-header h1 {
font-size: 2.8rem;
font-weight: 800;
margin: 0;
color: white;
letter-spacing: -1px;
}
.tagline {
color: #a0aec0;
margin: 0.4rem 0 0;
font-size: 1rem;
}
.back-link {
color: #a0aec0;
text-decoration: none;
font-size: 0.95rem;
transition: color 0.2s;
}
.back-link:hover { color: var(--accent); }
.intro {
text-align: center;
padding: 2rem 0 1rem;
color: #555;
}
.card-grid {
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
gap: 1.5rem;
padding-bottom: 3rem;
}
.restaurant-card {
background: white;
border-radius: var(--card-radius);
box-shadow: var(--shadow);
overflow: hidden;
transition: transform 0.25s ease, box-shadow 0.25s ease;
border: 1px solid #f0ede8;
}
.restaurant-card:hover {
transform: translateY(-5px);
box-shadow: 0 10px 30px rgba(0, 0, 0, 0.13);
}
.restaurant-card a {
text-decoration: none;
color: inherit;
display: block;
}
.restaurant-card img {
width: 100%;
height: 200px;
object-fit: cover;
display: block;
}
.card-body {
padding: 1.2rem 1.4rem 1.4rem;
}
.card-body h2 {
font-size: 1.25rem;
font-weight: 700;
margin: 0 0 0.6rem;
color: #1a1a2e;
}
.neighborhood {
font-size: 0.85rem;
color: #777;
margin: 0.5rem 0 0.3rem;
}
.must-try {
font-size: 0.9rem;
color: #444;
margin: 0.2rem 0 0;
}
.tags {
display: flex;
flex-wrap: wrap;
gap: 0.4rem;
margin-bottom: 0.5rem;
}
.tag {
font-size: 0.75rem;
font-weight: 600;
padding: 0.2rem 0.6rem;
border-radius: 999px;
text-transform: uppercase;
letter-spacing: 0.04em;
}
.tag.cuisine { background: #e8f4f8; color: #2980b9; }
.tag.price { background: #e8f8e8; color: #27ae60; }
.tag.vibe { background: var(--accent-light); color: var(--accent); }
.detail-page {
max-width: 800px;
padding-top: 2rem;
padding-bottom: 3rem;
}
.detail-hero {
border-radius: var(--card-radius);
overflow: hidden;
margin-bottom: 2rem;
box-shadow: var(--shadow);
}
.detail-img {
width: 100%;
height: 380px;
object-fit: cover;
display: block;
}
.detail-content h1 {
font-size: 2.2rem;
font-weight: 800;
color: #1a1a2e;
margin-bottom: 0.6rem;
}
.detail-grid {
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 1rem;
background: white;
border: 1px solid #f0ede8;
border-radius: var(--card-radius);
padding: 1.4rem;
margin: 1.5rem 0;
box-shadow: var(--shadow);
}
.detail-item {
display: flex;
flex-direction: column;
gap: 0.2rem;
}
.detail-item .label {
font-size: 0.8rem;
font-weight: 700;
text-transform: uppercase;
letter-spacing: 0.06em;
color: #999;
}
.detail-item span:last-child {
font-size: 1rem;
font-weight: 600;
color: #1a1a2e;
}
.detail-description {
background: white;
border-radius: var(--card-radius);
padding: 1.5rem;
box-shadow: var(--shadow);
border: 1px solid #f0ede8;
}
.detail-description h2 {
font-size: 1.1rem;
font-weight: 700;
color: var(--accent);
margin-bottom: 0.7rem;
}
.detail-description p {
line-height: 1.75;
color: #444;
}
.site-footer {
background: #1a1a2e;
color: #a0aec0;
text-align: center;
padding: 1.5rem 0;
font-size: 0.9rem;
}
.not-found {
text-align: center;
padding: 5rem 1rem;
}
.not-found h1 {
font-size: 6rem;
color: var(--accent);
margin: 0;
line-height: 1;
}
.not-found h2 { font-size: 1.8rem; color: #1a1a2e; }
.not-found p { color: #777; margin-bottom: 2rem; }
@media (max-width: 600px) {
.site-header h1 { font-size: 2rem; }
.detail-grid { grid-template-columns: 1fr; }
.detail-img { height: 240px; }
} its like thtShow more11:26 AMClaude responded: Got it — that's the full current file.Got it — that's the full current file. Let's add the new search-form styles. Find this part in the file:
css.intro {
text-align: center;
padding: 2rem 0 1rem;
color: #555;
}
.card-grid {
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
gap: 1.5rem;
padding-bottom: 3rem;
}
Replace it with:
css.intro {
text-align: center;
padding: 2rem 0 1rem;
color: #555;
}
.search-form {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin: 0 0 2rem;
}
.search-form label {
  margin: 0;
  font-weight: 600;
  white-space: nowrap;
}
.search-form select,
.search-form button,
.search-form .clear-search {
  margin: 0;
  width: auto;
}
.search-form .clear-search {
  background: transparent;
  border-color: var(--accent);
  color: var(--accent);
}
.no-results {
  text-align: center;
  color: #888;
  padding: 1rem 0 2rem;
}
.card-grid {
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
gap: 1.5rem;
padding-bottom: 3rem;
}
Save with Cmd+S, then let me know once done.You said: I don't have that partI don't have that part11:27 AMClaude responded: No problem — instead of finding and replacing a specific chunk, let's just add the new CSS to the end of the file.No problem — instead of finding and replacing a specific chunk, let's just add the new CSS to the end of the file. That works just as well.
Step: Add to end of style.css
Scroll to the very bottom of style.css (after the @media (max-width: 600px) { ... } block), and add this new block at the end:
css
.search-form {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin: 0 0 2rem;
}
.search-form label {
  margin: 0;
  font-weight: 600;
  white-space: nowrap;
}
.search-form select,
.search-form button,
.search-form .clear-search {
  margin: 0;
  width: auto;
}
.search-form .clear-search {
  background: transparent;
  border-color: var(--accent);
  color: var(--accent);
}
.no-results {
  text-align: center;
  color: #888;
  padding: 1rem 0 2rem;
}
Save with Cmd+S, then let me know once done.You said: okok11:28 AMClaude responded: Now let's update the README.Now let's update the README. Let's open it.
Step 10: Open README.md
Run:
bashcode README.md
Then tell me when it's open.You said: yuoyuo11:29 AMClaude responded: Got it.Got it. Select everything in the README (Cmd+A, then Delete) so it's empty, then let me know.You said: kk11:29 AMClaude responded: Now paste this entire block into the empty README.Now paste this entire block into the empty README.md:
markdown# 🍽️ Hidden Gems

A web app that highlights underrated local restaurants flying under the radar — loved by locals, unknown to tourists. Now powered by a PostgreSQL database hosted on Render!

## 📸 Walkthrough

<!-- GIF -->

![App Walkthrough](walkthrough.gif)

## ✅ Required Features

- [x] The web app uses only HTML, CSS, and JavaScript without a frontend framework
- [x] Data is supplied to the app using a Render PostgreSQL database
  - [x] The web app is connected to a Render PostgreSQL database
  - [x] The database contains an appropriately structured table for the list items

## ✅ Project 1 Features (carried over)

- [x] Front page of web app is functional and appropriately styled
- [x] The web app displays a title
- [x] Website displays at least five unique list items
- [x] Each list item includes at least three displayed attributes (cuisine, price range, vibe, neighborhood, must-try dish)
- [x] Each list item has a corresponding detail page (e.g., `localhost:3000/restaurants/mamas-kitchen`)
- [x] The web app serves an appropriate 404 page when no matching route is defined
- [x] The webpage is styled with Picocss

## 🌟 Stretch Features

- [x] List items are displayed as cards in a responsive grid layout
- [x] Users can search for items with a specific attribute (search restaurants by cuisine)

## 🚀 How to Run

1. Install dependencies:

```bash
   npm install
```

2. Create a `.env` file in the project root with your Render PostgreSQL connection string:
DATABASE_URL=your_render_postgres_connection_string

PORT=3000

3. Set up and seed the database (run once):

```bash
   node server/config/setupDB.js
```

4. Start the server:

```bash
   npm start
```

5. Open [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

- **Backend:** Node.js + Express
- **Database:** PostgreSQL (hosted on Render)
- **Frontend:** Vanilla HTML, CSS, JavaScript
- **Styling:** Picocss + custom CSS

## 📂 Project Structure
listicle/

├── client/

│   └── src/

│       └── css/

│           └── style.css

├── server/

│   ├── config/

│   │   └── setupDB.js

│   ├── views/

│   │   └── 404.html

│   └── server.js

├── .env (not committed)

├── .gitignore

├── package.json

└── README.md

## 🗄️ Database Schema

**Table: `restaurants`**

| Column        | Type           | Description                       |
|---------------|----------------|------------------------------------|
| id            | TEXT (PK)      | Unique slug identifier              |
| name          | TEXT           | Restaurant name                     |
| cuisine       | TEXT           | Type of cuisine                     |
| price_range   | TEXT           | Price range ($, $$, $$$)            |
| neighborhood  | TEXT           | Neighborhood/location                |
| must_try      | TEXT           | Recommended dish                    |
| vibe          | TEXT           | Atmosphere/vibe description          |
| rating        | NUMERIC(2,1)   | Rating out of 5.0                   |
| description   | TEXT           | Full description of the restaurant  |
| image         | TEXT           | URL of restaurant image              |

## 💭 Notes / Reflection

Refactoring the app to use a database mainly involved replacing the hardcoded `restaurants` array in `server.js` with PostgreSQL queries via the `pg` library, and creating a `setupDB.js` script to create and seed the `restaurants` table on a Render-hosted Postgres instance. The frontend markup and styling stayed largely the same since the data shape (column names) was kept consistent with the original list item structure.