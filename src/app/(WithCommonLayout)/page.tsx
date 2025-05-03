import Banner from "@/src/components/modules/home/Banner/Banner";
import DisplayProducts from "@/src/components/modules/home/DisplayProducts";

export default function Home() {
  return (
    <div className="pt-18">
      <Banner />
      <DisplayProducts />
    </div>
  );
}
