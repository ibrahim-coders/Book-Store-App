import { connectDB } from '@/lib/db';
import User from '@/models/User';
import { currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const user = await currentUser();

    if (!user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    await connectDB();

    const existingUser = await User.findOne({ clerkId: user.id });

    if (!existingUser) {
      await User.create({
        clerkId: user.id,
        name: user.fullName || `${user.firstName} ${user.lastName}`,
        email: user.emailAddresses[0]?.emailAddress ?? '',
        image: user.imageUrl,
      });
    }

    return new NextResponse('User saved successfully', { status: 200 });
  } catch (error) {
    console.error('Error saving user:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
