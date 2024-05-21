import { Avatar, AvatarImage } from "./ui/avatar";

const Profile = () => {
  return (
    <>
      <div className="w-full flex justify-center mb-24">
        <div className="absolute p-1.5 max-w-2xl mx-auto rounded-t-md bg-gradient-to-b from-white  w-full flex justify-center">
          <Avatar className="-mb-10 mt-10">
            <AvatarImage src="/profile.jpg" />
          </Avatar>
        </div>
      </div>
    </>
  );
};

export default Profile;
