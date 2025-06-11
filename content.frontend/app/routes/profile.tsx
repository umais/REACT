
import { ProfileCard } from "../components/ProfileCard";
import { Users } from "../services/userService";

export default function Profile() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Profile</h1>

      {/* Grid layout for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Users.map(user => (
          <ProfileCard
         
            name={user.name}
            title={user.title}
            avatarUrl={user.avatarUrl}
            bio={user.bio}
          />
        ))}
      </div>
    </div>
  );
}

