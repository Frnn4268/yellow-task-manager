import mongoose, { mongo } from 'mongoose'

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)

        console.log('Successful connection to MongoDB')
    } catch (error) {
        console.log('Error connecting MongoDB ' + error)
    }
}

export default dbConnection
