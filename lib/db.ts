import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) return;

  if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
  }

  try {
    await mongoose.connect(MONGODB_URI);
    isConnected = true;
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};
