"use client";
import Footer from "@/src/components/footer";
import TopNavbar from "@/src/components/top-navbar";
import { CaretDownIcon, CaretRightIcon, UserIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

const Linkedin = ({children, username}: {children: React.ReactNode, username: string}) => <Link href={`https://www.linkedin.com/in/${username}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">{children}</Link>
const MateriCard = ({title, date, category, description, image, link}: {title: string, date: string, category: string, description: string, image: string, link: string}) => (
  <div className="flex gap-4 border-b border-b-gray-300 py-4">
    <Image src={image} alt={title} width={144} height={144} className="w-36 aspect-square bg-gray-500 rounded-lg object-cover" />
    <div className="my-2">
      <div className="flex gap-2 items-center">
        <div className="w-fit py-1 px-2 bg-gray-300 text-sm">{category}</div>
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      <h3 className="font-bold my-1 font-serif text-xl">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
      <Link href={link} className="underline text-sm font-serif flex items-baseline mt-4">
        <span>Baca Selengkapnya</span>
        <CaretRightIcon size={12} />
      </Link>
    </div>
  </div>
);

export default function Page() {
  return (
    <>
      <TopNavbar />
      <div className="w-full h-screen flex items-center justify-center relative">
        <div className="w-1/2 flex flex-col items-center justify-center gap-2">
          <p className="text-gray-500">Latihan Kepemimpinan Mahasiswa Informatika 2026</p>
          <h1 className="font-serif text-7xl font-bold">Kelompok 14</h1>
          <div className="text-gray-500 mt-12 text-center">
            <p className="mb-2 text-gray-400">Oleh:</p>
            <span><Linkedin username="faisal-affandi-80b755306">Faisal Affandi</Linkedin> ⋅ <Linkedin username="hardiana-hardiana-938818405">Hardiana</Linkedin> ⋅ <Linkedin username="rizka-fitriya-471058406">Rizka Fitriya Anwar</Linkedin> ⋅ <Linkedin username="rafi-abdullah-512bb6405">Muhammad Rafi Abdullah</Linkedin> ⋅ <Linkedin username="muhammad-nasikha-rahman-a8630b407">Muhammad Nasikha Rahman</Linkedin> ⋅ <Linkedin username="salma-fauziah-91bb7a278">Salma Fauziah</Linkedin> ⋅ <Linkedin username="fahmi-miftahudin-b33764392">Fahmi Miftahudin</Linkedin> ⋅ <Linkedin username="lalita-b-a70314325">Lalita Bela</Linkedin> ⋅ <Linkedin username="mutaqinmi">Muhammad Ilham Mutaqin</Linkedin> ⋅ <Linkedin username="wildan-nurohim-93338038a">Wildan Nurohim</Linkedin></span>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center gap-1 animate-bounce">
          <span className="text-sm text-gray-400">Lihat Selengkapnya</span>
          <CaretDownIcon size={16} className="text-gray-400" />
        </div>
      </div>
      <div className="w-3/4 m-auto my-12">
        <h2 className="inline-block text-2xl font-serif font-semibold pb-2 border-b border-b-gray-400">Tech Stack</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-bold">React JS</h3>
            <p className="text-sm text-gray-500">Library JavaScript yang digunakan untuk membangun antarmuka pengguna</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-bold">Next JS</h3>
            <p className="text-sm text-gray-500">Framework JavaScript yang digunakan untuk membangun aplikasi web dengan performa tinggi</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-bold">Tailwind CSS</h3>
            <p className="text-sm text-gray-500">Framework CSS yang digunakan untuk membangun antarmuka pengguna dengan cepat</p>
          </div>
        </div>
      </div>
      <div id="materi" className="w-3/4 m-auto my-12">
        <h2 className="inline-block text-2xl font-serif font-semibold border-b border-b-gray-400">Materi</h2>
        <div className="mt-4">
          <MateriCard
            title="Analisis dan Pengembangan Masyarakat"
            date="25 April 2026"
            category="Sosial"
            description="Materi ini membahas tentang bagaimana menganalisis dan mengembangkan masyarakat dengan pendekatan yang berkelanjutan dan inklusif."
            image="/analisis-dan-pengembangan-masyarakat.jpg"
            link="/analisis-dan-pengembangan-masyarakat"
          />
          <MateriCard
            title="Dinamika Sosial dan Politik"
            date="25 April 2026"
            category="Sosial"
            description="Materi ini membahas tentang dinamika sosial dan politik yang terjadi di masyarakat, serta bagaimana memahami dan menghadapinya dengan bijak."
            image="/sosial-politik.jpg"
            link="/sosial-politik"
          />
          <MateriCard
            title="Manajemen Aksi"
            date="25 April 2026"
            category="Aksi"
            description="Materi ini membahas tentang bagaimana merencanakan, mengorganisir, dan melaksanakan aksi yang efektif untuk mencapai tujuan yang diinginkan."
            image="/manajemen-aksi.jpg"
            link="/manajemen-aksi"
          />
          <MateriCard
            title="Otoritas Informasi"
            date="2 Mei 2026"
            category="Teknologi"
            description="Materi ini membahas tentang bagaimana mengelola dan memanfaatkan informasi dengan bijak, serta memahami konsep otoritas informasi dalam era digital."
            image="/otoritas-informasi.jpg"
            link="/otoritas-informasi"
          />
          <MateriCard
            title="Retorika"
            date="2 Mei 2026"
            category="Karakter"
            description="Materi ini membahas tentang bagaimana menggunakan retorika untuk menyampaikan pesan dengan efektif, serta memahami etika dalam berkomunikasi."
            image="/retorika.jpg"
            link="/retorika"
          />
          <MateriCard
            title="Analisis Organisasi"
            date="3 Mei 2026"
            category="Sosial"
            description="Materi ini membahas tentang bagaimana menganalisis struktur, budaya, dan dinamika organisasi untuk meningkatkan efektivitas dan kinerja organisasi."
            image="/analisis-organisasi.jpg"
            link="/analisis-organisasi"
          />
          <MateriCard
            title="Pengembangan dan Pembangunan Organisasi"
            date="3 Mei 2026"
            category="Sosial"
            description="Materi ini membahas tentang bagaimana mengembangkan dan membangun organisasi secara berkelanjutan dan inklusif."
            image="/pengembangan-dan-pembangunan-organisasi.jpg"
            link="/pengembangan-dan-pembangunan-organisasi"
          />
          <MateriCard
            title="Kekeluargaan"
            date="3 Mei 2026"
            category="Sosial"
            description="Materi ini membahas tentang bagaimana membangun dan mengembangkan kekeluargaan dalam masyarakat."
            image="/kekeluargaan.jpg"
            link="/kekeluargaan"
          />
        </div>
      </div>
      <div id="tentang" className="w-3/4 m-auto my-12">
        <h2 className="inline-block text-2xl font-serif font-semibold border-b border-b-gray-400">Anggota</h2>
        <div className="grid grid-cols-3 mt-4">
          <div className="w-full flex flex-col border border-gray-100 p-4">
            <div className="w-8 h-8 bg-gray-100 rounded-full mb-2 flex items-center justify-center"><UserIcon/></div>
            <span className="font-serif font-semibold">Faisal Affandi</span>
            <span className="text-sm text-gray-500">257006111124</span>
          </div>
          <div className="w-full flex flex-col border border-gray-100 p-4">
            <div className="w-8 h-8 bg-gray-100 rounded-full mb-2 flex items-center justify-center"><UserIcon/></div>
            <span className="font-serif font-semibold">Hardiana</span>
            <span className="text-sm text-gray-500">257006111150</span>
          </div>
          <div className="w-full flex flex-col border border-gray-100 p-4">
            <div className="w-8 h-8 bg-gray-100 rounded-full mb-2 flex items-center justify-center"><UserIcon/></div>
            <span className="font-serif font-semibold">Rizka Fitriya Anwar</span>
            <span className="text-sm text-gray-500">257006111140</span>
          </div>
          <div className="w-full flex flex-col border border-gray-100 p-4">
            <div className="w-8 h-8 bg-gray-100 rounded-full mb-2 flex items-center justify-center"><UserIcon/></div>
            <span className="font-serif font-semibold">Muhammad Rafi Abdullah</span>
            <span className="text-sm text-gray-500">257006111055</span>
          </div>
          <div className="w-full flex flex-col border border-gray-100 p-4">
            <div className="w-8 h-8 bg-gray-100 rounded-full mb-2 flex items-center justify-center"><UserIcon/></div>
            <span className="font-serif font-semibold">Muhammad Nasikha Rahman</span>
            <span className="text-sm text-gray-500">257006111058</span>
          </div>
          <div className="w-full flex flex-col border border-gray-100 p-4">
            <div className="w-8 h-8 bg-gray-100 rounded-full mb-2 flex items-center justify-center"><UserIcon/></div>
            <span className="font-serif font-semibold">Salma Fauziah</span>
            <span className="text-sm text-gray-500">257006111020</span>
          </div>
          <div className="w-full flex flex-col border border-gray-100 p-4">
            <div className="w-8 h-8 bg-gray-100 rounded-full mb-2 flex items-center justify-center"><UserIcon/></div>
            <span className="font-serif font-semibold">Fahmi Miftahudin</span>
            <span className="text-sm text-gray-500">257006111146</span>
          </div>
          <div className="w-full flex flex-col border border-gray-100 p-4">
            <div className="w-8 h-8 bg-gray-100 rounded-full mb-2 flex items-center justify-center"><UserIcon/></div>
            <span className="font-serif font-semibold">Lalita Bela</span>
            <span className="text-sm text-gray-500">257006111101</span>
          </div>
          <div className="w-full flex flex-col border border-gray-100 p-4">
            <div className="w-8 h-8 bg-gray-100 rounded-full mb-2 flex items-center justify-center"><UserIcon/></div>
            <span className="font-serif font-semibold">Muhammad Ilham Mutaqin</span>
            <span className="text-sm text-gray-500">257006111006</span>
          </div>
          <div className="w-full flex flex-col col-span-3 border border-gray-100 p-4">
            <div className="w-8 h-8 bg-gray-100 rounded-full mb-2 flex items-center justify-center"><UserIcon/></div>
            <span className="font-serif font-semibold">Wildan Nurohim</span>
            <span className="text-sm text-gray-500">257006111026</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}