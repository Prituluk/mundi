import { Main } from "@/components/home/main";
import { Searcher } from "@/components/home/varSearcher";

interface Rute {
  slug: string;
};
export default function SearcherSection() {
  return (
    <>
      <Searcher params={{ slug: '/vuelos' }} />
    </>
  )
}