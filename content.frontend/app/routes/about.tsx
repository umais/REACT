import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us - React Router App" },
    { name: "description", content: "Learn more about us!" },
  ];
}

export default function About() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="text-lg text-gray-700">
        Welcome to our company! We are dedicated to providing excellent services
        and building amazing web applications with React Router.
      </p>
    </div>
  );
}
