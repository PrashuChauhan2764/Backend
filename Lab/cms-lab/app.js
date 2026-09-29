const express = require("express");

const { MongoClient, ObjectId } = require("mongodb");

const app = express();
const PORT = 3000;

// MongoDB connection URL
const mongoURL = "mongodb://127.0.0.1:27017";

// Create one MongoDB client for the application
const client = new MongoClient(mongoURL);

let postsCollection;

async function connectDB() {
    // Connect Node.js to MongoDB
    await client.connect();

    // Select the cms_lab database
    const database = client.db("cms_lab");

    // Select the posts collection
    postsCollection = database.collection("posts");

    console.log("Connected to MongoDB");
}

// Tell Express to use EJS for server-side HTML
app.set("view engine", "ejs");

// Parse data submitted through HTML forms
app.use(express.urlencoded({ extended: true }));

// Serve CSS and other static files from public folder
app.use(express.static("public"));

// Display all posts from MongoDB
app.get("/", async (req, res) => {

    // Get all posts and show newest posts first
    const posts = await postsCollection
        .find()
        .sort({ createdAt: -1 })
        .toArray();

    // Send posts to the EJS template
    res.render("posts", { posts });
});

// Display the create-post form
app.get("/posts/new", (req, res) => {
    res.render("new-post");
});

// Create a new post and save it to MongoDB
app.post("/posts", async (req, res) => {

    // Get data submitted from the form
    const { title, content, author } = req.body;

    // Validate that all required fields are filled
    if (!title.trim() || !content.trim() || !author.trim()) {
        return res.send("Title, content and author are required.");
    }

    // Insert the post into MongoDB
    await postsCollection.insertOne({
        title: title.trim(),
        content: content.trim(),
        author: author.trim(),

        // Generate creation date automatically on the server
        createdAt: new Date()
    });

    // Go back to the post list after creating the post
    res.redirect("/");
});

// Display one complete post using its MongoDB ID
app.get("/posts/:id", async (req, res) => {

    // Convert the URL ID into a MongoDB ObjectId
    const post = await postsCollection.findOne({
        _id: new ObjectId(req.params.id)
    });

    // Show an error if the post does not exist
    if (!post) {
        return res.status(404).send("Post not found");
    }

    // Send the selected post to the EJS template
    res.render("post", { post });
});

// Start database connection and server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
});