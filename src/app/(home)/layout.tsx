import { Hero } from "@/components/home/hero";
import { Searcher } from "@/components/home/varSearcher";
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <main>

      {children}
      <Hero />

    </main>
  );
}
