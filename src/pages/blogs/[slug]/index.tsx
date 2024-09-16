import Image from 'next/image'
import React from 'react'
import Layout from '@/layouts/blogs'
import Menu from '@/components/blogs/Menu'
import Comments from '@/components/blogs/Comments'

const Page = () => {
  return (
    <Layout>
      <div className="mx-5 md:mx-0">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-6xl">Daily use with Linux</h1>
            <div className="flex items-center gap-4">
              <div className="w-[50px] h-[50px] relative">
                <Image
                  src="/profile.jpg"
                  alt=""
                  fill
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col gap-1 my-5">
                <span className="text-xl font-medium">Yuefii</span>
                <span>14 september 2024</span>
              </div>
            </div>
          </div>

          <div className="flex-1 h-[350px] relative hidden lg:block">
            <Image
              src="/de.png"
              alt=""
              fill
              className="object-cover rounded-md w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-12 mt-16">
          <div className="flex-5 mt-16">
            <div className="text-lg text-justify space-y-2 font-light lg:w-[1000px] mb-5">
              <p>
                Untuk aktivitas coding saya sehari-hari, Arch Linux adalah
                pilihan utama saya. Saya telah menyesuaikan sistem ini dengan
                kebutuhan dan preferensi pribadi, menciptakan lingkungan kerja
                yang sangat ideal untuk pengembangan perangkat lunak.
              </p>
              <p>
                Dengan Arch Linux yang disesuaikan khusus, setiap hari saya
                merasa lebih produktif dan terinspirasi. Sistem operasi ini
                menawarkan cara kerja yang efisien dan memuaskan. Jika Anda
                mencari platform yang sepenuhnya dapat disesuaikan dan
                menawarkan performa optimal, Arch Linux adalah pilihan yang
                sangat tepat.
              </p>
              <p>
                Bagi saya, Linux menawarkan kemudahan penggunaan yang luar biasa
                untuk para developer tanpa repot dalam menginstal paket yang
                diperlukan. Dengan performa tinggi dan tampilan yang sederhana
                serta minimalis, Linux juga memberikan kebebasan untuk
                menyesuaikan desktop sesuai dengan keinginan kita. Ini adalah
                pengalaman yang sangat memuaskan dan efisien.
              </p>
            </div>
            <Comments />
          </div>
          <Menu />
        </div>
      </div>
    </Layout>
  )
}

export default Page
