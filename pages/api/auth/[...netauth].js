import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "6dde8880d65559e2749f",
      clientSecret: "eb0b9d857d5839c597c127e5b709a8af8e532463",
    }),
  ],
  secret: "",
};
export default NextAuth(authOptions);
