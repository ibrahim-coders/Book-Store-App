import { connectDB } from '@/lib/db';
import User from '@/models/User';
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    let user = await User.findOne({ clerkId: userId });

    if (!user) {
      const response = await fetch(`https://api.clerk.dev/v1/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${process.env.CLERK_SECRET_KEY!}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user data from Clerk');
      }

      const clerkUser = await response.json();

      user = await User.create({
        clerkId: userId,
        name: `${clerkUser.first_name} ${clerkUser.last_name}`,
        email: clerkUser.email_addresses[0]?.email_address,
        image: clerkUser.image_url,
        role: 'user',
        createdAt: new Date(),
      });
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.error('Error saving user:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
