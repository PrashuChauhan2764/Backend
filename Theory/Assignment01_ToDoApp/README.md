# L07 Notes App — LocalStorage, SessionStorage and JSON

This is the final task from the UPES Backend Development Unit 1 lecture:
"Web Storage API Tutorial — localStorage & sessionStorage".

## Required assignment features implemented

- Add a new note with text
- Display saved notes on page load
- Delete individual notes
- Edit existing notes
- Persist notes after page refresh using localStorage
- Each note contains:
  - id
  - text
  - createdAt
  - updatedAt

## Additional small features

- Search/filter notes
- Character count
- Clear all notes
- Basic empty-input validation
- Responsive layout

## File structure

Backend_L07_Notes_App/
├── index.html
├── style.css
├── script.js
└── README.md

## How to run

1. Open `index.html` in Chrome or Edge.
2. Add a few notes.
3. Refresh the page. The notes should still exist.
4. Edit and delete notes.
5. Open DevTools (F12).
6. Go to Application → Storage → Local Storage.
7. Open the page's origin and verify the `notes` key.
8. In Console, you can verify:
   JSON.parse(localStorage.getItem("notes"))

## Important concepts demonstrated

localStorage.setItem()
localStorage.getItem()
localStorage.removeItem()
JSON.stringify()
JSON.parse()
CRUD operations
DOM rendering
