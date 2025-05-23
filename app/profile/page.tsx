import { getSession } from "@/lib/session"
import { findUniqUserByid } from "@/service/user";

async function getUserDataById() {
  const session = await getSession();
  if (session.id) {
    return await findUniqUserByid(session.id)
  }
}

export default async function Profile() {
  const user = await getUserDataById();
  return (
    <>
      {user?.username}
    </>
  )
};