import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    }
})

export default mongoose.model("Users", userSchema);

// This code defines a Mongoose schema for a User model in a MongoDB database.
// The schema includes fields for name, email, and address, all of which are required.
// The model is then exported for use in other parts of the application.
// The schema is used to create a collection named "Users" in the MongoDB database.
// Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js,
// which provides a straightforward way to model application data.
// It allows for defining schemas, creating models, and interacting with the database in an object-oriented manner.
// The `mongoose.model` function creates a model from the schema, which can be used to
// perform CRUD operations on the "Users" collection in the database.
