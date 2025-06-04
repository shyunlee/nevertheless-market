import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';

interface SessionContent {
  id?: number;
}

export async function getSession() {
  return getIronSession<SessionContent>(await cookies(), {
      cookieName: 'user-auth',
      password: process.env.SESSION_SECRET!
    })
}

export async function saveSessionId(id: number) {
  const session = await getSession()
  session.id = id
  return await session.save();
}