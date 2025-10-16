import { Searcher } from "@/components/home/varSearcher";
import { Main } from "@/components/home/main";
import { SlugKey } from "@/components/home/main/types";
import { notFound } from "next/navigation";
import menu from "@/app/api/menu/menu.json";

export async function generateStaticParams() {
  return menu.menuItems.map(item => ({
    slug: item.slug.replace("/", ""), 
  }));
}

export default async function SectionPage({ params }: { params: { slug: SlugKey } }) {

  const {slug} = await params;

  const pageData = menu.menuItems.find(item => item.slug === `/${slug}`);

  if (!pageData) {
    notFound();
  }
  return (
    <section>
      <Searcher params={{ slug }} />
      <Main slug={slug} />

    </section>
  );
}
