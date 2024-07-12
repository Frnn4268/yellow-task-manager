import mongoose from 'mongoose'

const dbConnection = async () => {
    try {
        // Attempt to connect to MongoDB using the URI from environment variables
        await mongoose.connect(process.env.MONGODB_URI)
        
        // Log a success message if the connection is successful
        console.log('Successful connection to MongoDB')
    } catch (error) {
        // Log an error message if the connection fails
        console.log('Error connecting to MongoDB: ' + error)
    }
}

export default dbConnection
