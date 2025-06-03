import { getSession } from "@/lib/session";
import { createNewUser } from "@/service/user";
import { notFound, redirect } from "next/navigation";
import { NextRequest } from "next/server";

 export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get('code');
  if (!code) {
    notFound();
  }
  const accessTokenParams = new URLSearchParams({
    client_id: process.env.GITHUB_CLIENT_ID!,
    client_secret: process.env.GITHUB_CLIENT_SECRET!,
    code
  }).toString();
  const accessTokenUrl = `https://github.com/login/oauth/access_token?${accessTokenParams}`;
  const {error, access_token} = await fetch(accessTokenUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
    }
  }).then(res => res.json());
  if (error) {
    return new Response(null, {status: 400})
  }
  const {id, avatar_url, login, email } = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${access_token}`
    },
    cache: "no-cache"
  }).then(res => res.json())
  const newUser = await createNewUser({
    github_id: id + '',
    username: login,
    email,
    avatar: avatar_url
  })
  const session = await getSession()
  session.id = newUser.id
  await session.save();

  return redirect('/profile')
 }