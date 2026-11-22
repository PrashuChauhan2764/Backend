# Experiment 9, 10 & 11: AJAX, XML, JSON and jQuery

**Course:** Backend Development Laboratory (CSFS3008P)

A simple Student Directory website that loads student records asynchronously
(without reloading the page) from JSON and XML files.

## Project Structure

```
Experiment09_11/
├── index.html      # Page structure (buttons, status message, table)
├── style.css       # Styling
├── app.js          # AJAX logic (jQuery for JSON, Fetch + DOMParser for XML)
├── students.json   # Student data in JSON format
└── students.xml    # Same student data in XML format
```

## How to Run

1. Open the `Experiment09_11` folder in Visual Studio Code.
2. Install the **Live Server** extension.
3. Right-click `index.html` and choose **Open with Live Server**.
4. The page opens at a local address such as `http://127.0.0.1:5500/`.

> Do not open `index.html` by double-clicking it. Browsers block AJAX/Fetch
> requests on `file://` pages, so a local HTTP server is required.
> An internet connection is also needed to load jQuery from the CDN.

## How to Use

- Click **Load JSON Students** to load data from `students.json` using jQuery `$.ajax()`.
- Click **Load XML Students** to load data from `students.xml` using `fetch()` and `DOMParser`.
- The status message shows loading, success or error states.

## Things to Try

- Open DevTools, go to the **Network** tab and inspect the requests.
- Rename `students.json` temporarily to see the error message.
- Break the XML (e.g. remove a closing tag) to see the "invalid XML" error.
- In `app.js`, switch between the jQuery and Fetch JSON handlers
  (keep only one active at a time).

## Technologies

HTML5, CSS3, JavaScript, AJAX, Fetch API, XML, JSON, jQuery 3.7.1
