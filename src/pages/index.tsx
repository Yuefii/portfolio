import Bio from "@/components/Bio";
import Header from "@/components/Header";
import Profile from "@/components/Profile";
import MoreInfo from "@/components/MoreInfo";
import Accordions from "@/components/Accordions";
import SocialMedia from "@/components/SocialMedia";

const App = () => {
  return (
    <main className="bg-[#111111] pt-10">
      <Profile />
      <div className="h-full p-3 bg-[#111111]">
        <div className="h-screen max-w-lg mx-auto bg-[#111111] pt-14">
          <div>
            <Header />
            <div>
              <Bio />
              <SocialMedia />
            </div>
            <div className="mt-5 space-y-2">
              {/* <MoreInfo /> */}
              <Accordions />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
