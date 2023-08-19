import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/",
  },
});

//protected routes define
export const config = {
  matcher: ["/users/:path*"], //wildcard matcher
};
