import { getSession } from '@/lib/session';
import { findUniqUserByid } from '@/service/user';
import { notFound, redirect } from 'next/navigation';

async function getUserDataById() {
  const session = await getSession();
  if (session.id) {
    const user = await findUniqUserByid(session.id);
    if (user) {
      return user;
    }
  }
  notFound();
}

export default async function Profile() {
  const user = await getUserDataById();
  const logout = async () => {
    'use server'
    const session = await getSession();
    session.destroy();
    redirect('/')
  }
  return (
    <div>
      {user?.username}
      <form action={logout}>
        <button>Logout</button>
      </form>
    </div>
  );
}
