import Link from "next/link";
import { getNoticias } from "@/lib/get-carrousel";
import NoticiasModal from "./NoticiasModal";

export default async function Noticias() {
  const noticias = await getNoticias();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-blue-950">Noticias del Valle</h2>
          <Link
            href="/noticias"
            className="text-blue-950 hover:text-amber-600 inline-flex items-center"
          >
            <span>Ver todas</span>
            <svg
              className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>

        <NoticiasModal noticias={noticias} />
      </div>
    </section>
  );
}
