export default function Footer() {
    return (
        <footer className="bg-gray-300 w-full py-8">
            <div className="w-3/4 m-auto flex justify-between items-center">
            <span className="font-serif">Kelompok 14 - Latihan Kepemimpinan Mahasiswa Informatika 2026</span>
            <span className="text-sm text-gray-500">© {new Date().getFullYear()} Kelompok 14. All rights reserved.</span>
            </div>
        </footer>
    );
}