const tableBody = document.querySelector("#studentTable");
const statusMessage = document.querySelector("#status");

// Build table rows from trusted data using textContent.
function displayStudents(students) {
    tableBody.replaceChildren();

    students.forEach(student => {
        const row = document.createElement("tr");

        [student.id, student.name, student.course].forEach(value => {
            const cell = document.createElement("td");

            // textContent treats values as text rather than HTML.
            cell.textContent = value;
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });
}

// ---------------------------------------------------------------
// JSON loading using jQuery AJAX (Part E).
// To use the Fetch API version instead (Part C), comment this block
// out and uncomment the fetch block below. Never keep both active.
// ---------------------------------------------------------------
$("#loadJson").on("click", function () {
    $("#status").text("Loading JSON data...");

    // Perform an asynchronous HTTP GET request.
    $.ajax({
        url: "students.json",
        method: "GET",
        dataType: "json",

        // Execute this callback when valid JSON is received.
        success: function (data) {
            displayStudents(data.students);
            $("#status").text("JSON data loaded using jQuery.");
        },

        // Handle network, HTTP and parsing failures.
        error: function (xhr, status, error) {
            $("#status").text(`Request failed: ${error || status}`);
        }
    });
});

/* ---- Fetch API version of the JSON handler (Part C) ----
document.querySelector("#loadJson").addEventListener("click", async () => {
    statusMessage.textContent = "Loading JSON data...";

    try {
        const response = await fetch("students.json");

        // fetch() does not reject automatically for HTTP 404 or 500.
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        displayStudents(data.students);
        statusMessage.textContent = "JSON data loaded successfully.";
    } catch (error) {
        statusMessage.textContent = `Error: ${error.message}`;
    }
});
---------------------------------------------------------- */

// Fetch XML data and parse its document structure (Part D).
document.querySelector("#loadXml").addEventListener("click", async () => {
    statusMessage.textContent = "Loading XML data...";

    try {
        const response = await fetch("students.xml");

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const xmlText = await response.text();

        // Convert the received text into an XML document.
        const xmlDocument = new DOMParser().parseFromString(
            xmlText,
            "application/xml"
        );

        // Detect malformed XML before reading student records.
        if (xmlDocument.querySelector("parsererror")) {
            throw new Error("The XML document is invalid.");
        }

        const students = Array.from(
            xmlDocument.querySelectorAll("student")
        ).map(student => ({
            id: student.getAttribute("id"),
            name: student.querySelector("name").textContent,
            course: student.querySelector("course").textContent
        }));

        displayStudents(students);
        statusMessage.textContent = "XML data loaded successfully.";
    } catch (error) {
        statusMessage.textContent = `Error: ${error.message}`;
    }
});
