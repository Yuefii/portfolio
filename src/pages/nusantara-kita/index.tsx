import { toast } from "react-toastify";
import { baseUrl } from "@/utils/env";
import { fetchData } from "@/lib/axios";

import { useProvincesStore } from "@/hooks/useProvinces";
import { useRegenciesStore } from "@/hooks/useRegencies";
import { useDistrictsStore } from "@/hooks/useDistricts";
import { useVillagesStore } from "@/hooks/useVillages";

import Provinces from "./sections/provinces";
import Regencies from "./sections/regencies";
import Districts from "./sections/districts";
import Villages from "./sections/villages";
import Header from "./components/Header";
import Head from "next/head";

const App = () => {
  const { provinces, showProvinces, setProvinces, setShowProvinces } =
    useProvincesStore();
  const {
    regencies,
    showRegencies,
    setRegencies,
    setShowRegencies,
    provincesCode,
    setProvincesCode,
  } = useRegenciesStore();

  const {
    districts,
    setDistricts,
    regencyCode,
    setRegencyCode,
    showDistricts,
    setShowDistricts,
  } = useDistrictsStore();

  const {
    districtCode,
    setDistrictCode,
    villages,
    setVillages,
    showVillages,
    setShowVillages,
  } = useVillagesStore();

  const onClickShowProvinces = async () => {
    try {
      const result = await fetchData({
        url: baseUrl + "/api/nusantara/provinces",
      });
      setProvinces(result.data);
      setShowProvinces(true);
    } catch (error) {
      console.error("Terjadi kesalahan saat mengambil data :", error);
    }
  };

  const onClickShowRegencies = async () => {
    try {
      const result = await fetchData({
        url: baseUrl + `/api/nusantara/${provincesCode}/regencies`,
      });
      setRegencies(result.data);
      setShowRegencies(true);
    } catch (error) {
      console.error("Terjadi kesalahan saat mengambil data :", error);
      toast.error("Kode Provinsi tidak ada. Silakan coba lagi.");
    }
  };

  const onClickShowDistricts = async () => {
    try {
      const result = await fetchData({
        url: baseUrl + `/api/nusantara/${regencyCode}/districts`,
      });
      setDistricts(result.data);
      setShowDistricts(true);
    } catch (error) {
      console.error("Terjadi kesalahan saat mengambil data :", error);
      toast.error("Kode Kabupaten/kota tidak ada. Silakan coba lagi.");
    }
  };

  const onClickShowVillages = async () => {
    try {
      const result = await fetchData({
        url: baseUrl + `/api/nusantara/${districtCode}/villages`,
      });
      setVillages(result.data);
      setShowVillages(true);
    } catch (error) {
      console.error("Terjadi kesalahan saat mengambil data :", error);
      toast.error("Kode Kecamatan tidak ada. Silakan coba lagi.");
    }
  };

  return (
    <main className="bg-[#111111] pb-10">
      <Head>
        <title>Nusantara Kita - Dokumentasi API Wilayah Indonesia</title>
        <meta
          name="description"
          content="Dokumentasi API Nusantara Kita menyediakan data lengkap mengenai wilayah Indonesia, termasuk provinsi, kabupaten/kota, kecamatan dan desa."
        />
        <meta
          name="keywords"
          content="Nusantara Kita, API Indonesia, data wilayah Indonesia, provinsi, kabupaten/kota, kecamatan, desa, wilayah indonesia"
        />
        <meta
          property="og:title"
          content="Nusantara Kita - Dokumentasi API Wilayah Indonesia"
        />
        <meta
          property="og:description"
          content="Dokumentasi API Nusantara Kita menyediakan data lengkap mengenai wilayah Indonesia, termasuk provinsi, kabupaten/kota, kecamatan dan desa."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yuefii.my.id/nusantara-kita" />
        <meta property="og:image" content="https://yuefii.my.id/profile.jpg" />
        <link rel="canonical" href="https://yuefii.my.id/nusantara-kita" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Nusantara Kita",
            "url": "https://yuefii.my.id/nusantara-kita",
            "description": "Dokumentasi API Nusantara Kita menyediakan data lengkap mengenai wilayah Indonesia, termasuk provinsi, kabupaten/kota, kecamatan dan desa.",
            "image": "https://yuefii.my.id/profile.jpg"
          }
        `}
        </script>
      </Head>
      <div className="h-auto p-3 bg-[#111111]">
        <div className="h-auto max-w-2xl mx-auto bg-[#111111] space-y-2 pt-14">
          <Header />
          <p className="text-white font-semibold">Endpoint :</p>
          <Provinces
            data={provinces}
            show={showProvinces}
            setShow={setShowProvinces}
            onClick={onClickShowProvinces}
          />
          <Regencies
            data={regencies}
            show={showRegencies}
            setShow={setShowRegencies}
            onClick={onClickShowRegencies}
            value={provincesCode}
            onChange={setProvincesCode}
          />
          <Districts
            data={districts}
            show={showDistricts}
            setShow={setShowDistricts}
            onClick={onClickShowDistricts}
            value={regencyCode}
            onChange={setRegencyCode}
          />
          <Villages
            data={villages}
            show={showVillages}
            setShow={setShowVillages}
            onClick={onClickShowVillages}
            value={districtCode}
            onChange={setDistrictCode}
          />
        </div>
      </div>
    </main>
  );
};

export default App;
