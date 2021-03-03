import * as queryString from "query-string";

const stringifiedParams = queryString.stringify({
  client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  redirect_uri: "http://localhost:3000/google-authentication",
  scope: [
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/userinfo.profile",
  ].join(" "), // space separated string
  response_type: "code",
  access_type: "offline",
  prompt: "consent",
});

const googleLoginLink = `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`;

export default googleLoginLink;
