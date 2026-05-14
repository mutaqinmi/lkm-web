"use client";
import { CaretDownIcon, CaretRightIcon } from "@phosphor-icons/react";

export default function Page(){
  return (
    <>
      <div className="w-full fixed top-0 flex justify-center bg-white/50 backdrop-blur-lg z-10">
        <div className="w-3/4 flex py-4 items-center justify-between">
          <div className="font-serif">Kelompok 14</div>
          <ul className="flex gap-6 font-serif">
            <li><a href="" className="hover:underline">Beranda</a></li>
            <li><a href="" className="hover:underline">Materi</a></li>
            <li><a href="" className="hover:underline">Tentang</a></li>
          </ul>
        </div>
      </div>
      <div className="w-full h-screen flex items-center justify-center relative">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text text-gray-500">Latihan Kepemimpinan Mahasiswa Informatika 2026</p>
          <h1 className="font-serif text-7xl font-bold">Kelompok 14</h1>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center gap-1">
          <span className="text-sm text-gray-400">Lihat Selengkapnya</span>
          <CaretDownIcon size={16} className="text-gray-400" />
        </div>
      </div>
      <div className="w-3/4 m-auto my-8">
        <h2 className="inline-block text-2xl font-serif font-semibold pb-2 border-b border-b-gray-400">Tech Stack</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-bold">React</h3>
            <p className="text-sm text-gray-500">A JavaScript library for building user interfaces</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-bold">TypeScript</h3>
            <p className="text-sm text-gray-500">Typed superset of JavaScript that compiles to plain JavaScript</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-bold">Tailwind CSS</h3>
            <p className="text-sm text-gray-500">A utility-first CSS framework for rapidly building custom user interfaces</p>
          </div>
        </div>
      </div>
      <div className="w-3/4 m-auto my-8">
        <h2 className="inline-block text-2xl font-serif font-semibold border-b border-b-gray-400">Materi</h2>
        <div className="mt-4">
          <div className="flex gap-4 border-b border-b-gray-300 py-4">
            <div className="w-36 aspect-square bg-gray-500 rounded-lg"></div>
            <div className="my-2">
              <div className="flex gap-2 items-center">
                <div className="w-fit py-1 px-2 bg-gray-300 text-sm">Kategori</div>
                <span className="text-sm text-gray-500">15 Mei 2023</span>
              </div>
              <h3 className="font-bold my-1 font-serif text-xl">Pengenalan React</h3>
              <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a href="" className="underline text-sm font-serif flex items-baseline mt-4">
                <span>Baca Selengkapnya</span>
                <CaretRightIcon size={12} />
              </a>
            </div>
          </div>
          <div className="flex gap-4 border-b border-b-gray-300 py-4">
            <div className="w-36 aspect-square bg-gray-500 rounded-lg"></div>
            <div className="my-2">
              <div className="flex gap-2 items-center">
                <div className="w-fit py-1 px-2 bg-gray-300 text-sm">Kategori</div>
                <span className="text-sm text-gray-500">15 Mei 2023</span>
              </div>
              <h3 className="font-bold my-1 font-serif text-xl">Pengenalan React</h3>
              <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a href="" className="underline text-sm font-serif flex items-baseline mt-4">
                <span>Baca Selengkapnya</span>
                <CaretRightIcon size={12} />
              </a>
            </div>
          </div>
          <div className="flex gap-4 border-b border-b-gray-300 py-4">
            <div className="w-36 aspect-square bg-gray-500 rounded-lg"></div>
            <div className="my-2">
              <div className="flex gap-2 items-center">
                <div className="w-fit py-1 px-2 bg-gray-300 text-sm">Kategori</div>
                <span className="text-sm text-gray-500">15 Mei 2023</span>
              </div>
              <h3 className="font-bold my-1 font-serif text-xl">Pengenalan React</h3>
              <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a href="" className="underline text-sm font-serif flex items-baseline mt-4">
                <span>Baca Selengkapnya</span>
                <CaretRightIcon size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}