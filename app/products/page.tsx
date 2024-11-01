"use client";
import { APP_ROUTES } from "@/constants";
import { BUCKET } from "@/constants/config";
import Image from "next/image";
import Link from "next/link";

export default function Products() {
  return (
    <main className="flex flex-col min-h-full">
      <div className="flex-1 flex flex-col h-full items-center justify-end text-center p-12">
        <h1 className="text-4xl font-bold text-gray-800">Nombre empresa</h1>
        <p className="text-lg text-gray-500 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          augue nisl, rhoncus at sollicitudin dapibus, dignissim id eros. Donec
          ac odio ullamcorper, porttitor lacus id, pellentesque ex. Nunc nec
          consectetur ipsum. Vestibulum elit nisi, semper quis hendrerit vitae,
          ultrices vitae nisl. Phasellus felis purus, facilisis non semper vel,
          pellentesque at leo. Vivamus posuere nisl vitae finibus luctus.
          Vivamus facilisis egestas maximus.
        </p>
        <button className="mt-6 px-8 py-3 bg-blue-500 rounded-full text-white font-semibold shadow-md hover:bg-gray-400 transition">
          <Link href={APP_ROUTES.PRODUCT_LIST}>Quiero Comprar</Link>
        </button>
      </div>

      <div className="absolute -bottom-10 right-0">
        <Image
          src={BUCKET + "landing-sofa.png"}
          alt="landing"
          width={700}
          height={600}
        />
      </div>
    </main>
  );
}
