import Bio from "@/components/Bio";
import Head from "next/head";
import Header from "@/components/Header";
import Profile from "@/components/Profile";
import Accordions from "@/components/Accordions";
import SocialMedia from "@/components/SocialMedia";
import CardShowcase from "@/components/CardShowcase";
import * as TechStack from "@/components/showcase/DetailShowcases";

const App = () => {
  return (
    <main className="bg-[#111111] pt-2">
      <Head>
        <title>Yuefii Portfolio - Content Creator & Developer</title>
        <meta
          name="description"
          content="Portfolio Yuefii, seorang content creator sekaligus developer yang berfokus pada pengembangan aplikasi web."
        />
        <meta
          name="keywords"
          content="Yuefii, developer, designer, portfolio, web development, software enginner, content creator"
        />
        <meta
          property="og:title"
          content="Yuefii Portfolio - Content Creator & Developer"
        />
        <meta
          property="og:description"
          content="Portfolio Yuefii, seorang content creator sekaligus developer yang berfokus pada pengembangan aplikasi web."
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
        <div className="h-auto max-w-2xl mx-auto bg-[#111111] pt-14">
          <div>
            <Header />
            <div>
              <Bio />
              <SocialMedia />
            </div>
            <div className="my-5 space-y-2">
              <CardShowcase
                header="Showcase Projects"
                title="API NUSANTARA KITA"
                title_url="nusantara-kita.yuefii.my.id"
                description="API Nusantara Kita menyediakan data lengkap mengenai wilayah
              Indonesia, termasuk provinsi, kabupaten/kota, kecamatan dan desa."
                url="https://nusantara-kita.yuefii.my.id"
                url_show="/nusantara-kita"
                url_source_code="https://github.com/Yuefii/api-nusantara-kita"
              >
                <TechStack.DetailsNusantaraKita />
              </CardShowcase>
              <Accordions title="Project On Development">
                <CardShowcase
                  title="Ecommerce_api"
                  description="API ini dibuat bertujuan untuk membuat sebuah ecommerce dan masih sedang dalam tahap pengembangan hingga saat ini."
                  url_source_code="https://github.com/Yuefii/ecommerce__api"
                >
                  <TechStack.DetailsEcommerce />
                </CardShowcase>
              </Accordions>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
