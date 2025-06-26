import { connectDB } from '@/lib/db';
import User from '@/models/User';

export const saveUserToDB = async (userData: {
  clerkId: string;
  name: string;
  email: string;
  image: string;
}) => {
  await connectDB();

  const existingUser = await User.findOne({ clerkId: userData.clerkId });

  if (!existingUser) {
    await User.create({
      clerkId: userData.clerkId,
      name: userData.name,
      email: userData.email,
      image: userData.image,
    });
  }
};
