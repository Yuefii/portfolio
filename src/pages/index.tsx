import Bio from "@/components/Bio";
import Head from "next/head";
import Header from "@/components/Header";
import Profile from "@/components/Profile";
import Accordions from "@/components/Accordions";
import SocialMedia from "@/components/SocialMedia";

const App = () => {
  return (
    <main className="bg-[#111111] pt-10">
      <Head>
        <title>Yuefii Portfolio - Developer & Designer</title>
        <meta
          name="description"
          content="Portfolio Yuefii, seorang content creator sekkaligus developer yang berfokus pada pengembangan aplikasi web."
        />
        <meta
          name="keywords"
          content="Yuefii, developer, designer, portfolio, web development, software enginner, content creator"
        />
        <meta
          property="og:title"
          content="Yuefii Portfolio - Developer & Designer"
        />
        <meta
          property="og:description"
          content="Portfolio Yuefii, seorang content creator sekkaligus developer yang berfokus pada pengembangan aplikasi web."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yuefii.my.id" />
        <meta property="og:image" content="https://yuefii.my.id/profile.jpg" />
        <link rel="canonical" href="https://yuefii.my.id" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Yuefii",
            "url": "https://yuefii.my.id",
            "sameAs": [
              "https://www.tiktok.com/@yuefii_",
              "https://www.instagram.com/yuefii_",
              "https://www.linkedin.com/in/muhamad-mupid-ahmadiawan-3b2a95292/",
              "https://github.com/Yuefii"
            ],
            "jobTitle": "Content Creator & Developer",
            "image": "https://yuefii.my.id/profile.jpg"
          }
        `}
        </script>
      </Head>
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
