import twilio from 'twilio';

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export async function sendTwilioSMSToken(token: string) {
  await client.messages.create({
    body: `Your nvrthlss market verification code is: ${token}`,
    from: process.env.TWILIO_PHONE_NUMBER!,
    to: process.env.TWILIO_MY_PHONE_NUMBER!
  })
}