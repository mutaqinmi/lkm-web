import { CaretLeftIcon } from "@phosphor-icons/react";
import Link from "next/link";

export default function BackButton() {
  return (
    <Link href="/" className="flex items-center gap-2 text-sm text-gray-500 mb-4">
      <CaretLeftIcon size={14} />
      <span>Kembali ke Beranda</span>
    </Link>
  );
}