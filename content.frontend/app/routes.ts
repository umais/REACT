import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/about", "routes/about.tsx"),
  route("/register", "routes/register.tsx"),
  route("/profile", "routes/profile.tsx"),
  route("/playground", "routes/playground.tsx"),

  route("/contactus", "routes/contactus.tsx"),
] satisfies RouteConfig;
