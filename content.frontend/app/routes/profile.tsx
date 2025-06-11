
import { ProfileCard } from "../components/ProfileCard";


export default function Profile() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Profile</h1>
      <ProfileCard
        name="John Doe"
        title="Software Engineer"
        avatarUrl="https://via.placeholder.com/150"
        bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </div>
  );
}
