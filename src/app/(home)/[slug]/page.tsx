import { Searcher } from "@/components/home/varSearcher";
import { Main } from "@/components/home/main";
import { SlugKey } from "@/components/home/main/types";
export default function SectionPage({ params }: { params: { slug: SlugKey } }) {

  return (
    <section>
      <Searcher params={{ slug: params.slug }} />
      <Main slug={params.slug} />

    </section>
  );
}
