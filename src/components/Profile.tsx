import { Avatar, AvatarImage } from "./ui/avatar";

const Profile = () => {
  return (
    <>
      <div className="w-full flex justify-center mb-16">
        <div className="absolute p-1 rounded-md">
          <Avatar>
            <AvatarImage src="/profile.jpg" />
          </Avatar>
        </div>
      </div>
    </>
  );
};

export default Profile;
