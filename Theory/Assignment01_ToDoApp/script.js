const STORAGE_KEY = "notes";

const noteInput = document.getElementById("noteInput");
const addNoteBtn = document.getElementById("addNoteBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const notesList = document.getElementById("notesList");
const emptyState = document.getElementById("emptyState");
const noteCount = document.getElementById("noteCount");
const searchInput = document.getElementById("searchInput");
const charCount = document.getElementById("charCount");
const statusMessage = document.getElementById("statusMessage");

// READ: get notes from localStorage
function getNotes() {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) {
        return [];
    }

    try {
        const notes = JSON.parse(raw);
        return Array.isArray(notes) ? notes : [];
    } catch (error) {
        console.error("Could not parse saved notes:", error);
        return [];
    }
}

// SAVE: store the complete notes array as JSON
function saveNotes(notes) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

// CREATE
function addNote() {
    const text = noteInput.value.trim();

    if (!text) {
        showStatus("Please enter a note.");
        noteInput.focus();
        return;
    }

    const notes = getNotes();

    const newNote = {
        id: Date.now(),
        text: text,
        completed: false,
        createdAt: new Date().toISOString(),
        updatedAt: null
    };

    notes.push(newNote);
    saveNotes(notes);

    noteInput.value = "";
    updateCharCount();
    renderNotes();
    showStatus("Note added.");
}

// UPDATE
function editNote(id) {
    const notes = getNotes();
    const note = notes.find(function (item) {
        return item.id === id;
    });

    if (!note) {
        return;
    }

    const newText = prompt("Edit your note:", note.text);

    if (newText === null) {
        return;
    }

    const trimmedText = newText.trim();

    if (!trimmedText) {
        showStatus("Note cannot be empty.");
        return;
    }

    note.text = trimmedText;
    note.updatedAt = new Date().toISOString();

    saveNotes(notes);
    renderNotes();
    showStatus("Note updated.");
}

// DELETE
function deleteNote(id) {
    const confirmed = confirm("Delete this note?");

    if (!confirmed) {
        return;
    }

    const notes = getNotes().filter(function (note) {
        return note.id !== id;
    });

    saveNotes(notes);
    renderNotes();
    showStatus("Note deleted.");
}

// RENDER notes to the page
function renderNotes() {
    const notes = getNotes();
    const searchTerm = searchInput.value.trim().toLowerCase();

    const filteredNotes = notes.filter(function (note) {
        return note.text.toLowerCase().includes(searchTerm);
    });

    notesList.innerHTML = "";

    filteredNotes.forEach(function (note) {
        const card = document.createElement("article");
        card.className = "note-card";

        const text = document.createElement("p");
        text.className = "note-text";
        text.textContent = note.text;

        const meta = document.createElement("p");
        meta.className = "note-meta";

        const created = formatDate(note.createdAt);
        const updated = note.updatedAt
            ? " • Updated " + formatDate(note.updatedAt)
            : "";

        meta.textContent = "Created " + created + updated;

        const actions = document.createElement("div");
        actions.className = "note-actions";

        const editButton = document.createElement("button");
        editButton.type = "button";
        editButton.textContent = "Edit";
        editButton.addEventListener("click", function () {
            editNote(note.id);
        });

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";
        deleteButton.addEventListener("click", function () {
            deleteNote(note.id);
        });

        actions.appendChild(editButton);
        actions.appendChild(deleteButton);

        card.appendChild(text);
        card.appendChild(meta);
        card.appendChild(actions);

        notesList.appendChild(card);
    });

    updateCount(notes.length);

    emptyState.classList.toggle("hidden", filteredNotes.length !== 0);

    if (notes.length > 0 && filteredNotes.length === 0) {
        emptyState.querySelector("h3").textContent = "No matching notes";
        emptyState.querySelector("p").textContent =
            "Try a different search term.";
    } else {
        emptyState.querySelector("h3").textContent = "No notes yet";
        emptyState.querySelector("p").textContent =
            "Add your first note above. It will remain after a page refresh.";
    }
}

function updateCount(count) {
    noteCount.textContent = count === 1 ? "1 note" : count + " notes";
}

function formatDate(isoString) {
    return new Date(isoString).toLocaleString();
}

function updateCharCount() {
    charCount.textContent = noteInput.value.length + " / 500";
}

function showStatus(message) {
    statusMessage.textContent = message;

    clearTimeout(showStatus.timer);

    showStatus.timer = setTimeout(function () {
        statusMessage.textContent = "";
    }, 2000);
}

function clearAllNotes() {
    const notes = getNotes();

    if (notes.length === 0) {
        showStatus("There are no notes to clear.");
        return;
    }

    const confirmed = confirm("Delete all saved notes?");

    if (!confirmed) {
        return;
    }

    localStorage.removeItem(STORAGE_KEY);
    renderNotes();
    showStatus("All notes deleted.");
}

addNoteBtn.addEventListener("click", addNote);

noteInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
        addNote();
    }
});

noteInput.addEventListener("input", updateCharCount);

clearAllBtn.addEventListener("click", clearAllNotes);

searchInput.addEventListener("input", renderNotes);

// Initial page load
updateCharCount();
renderNotes();
