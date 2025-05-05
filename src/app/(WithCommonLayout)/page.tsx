import Banner from "@/src/components/modules/home/Banner/Banner";
import DisplayProducts from "@/src/components/modules/home/DisplayProducts";
import BreadCrumb from "@/src/components/UI/BreadCrumb";

export default function Home() {
  return (
    <div className="py-20">
      <BreadCrumb />
      <Banner />
      <DisplayProducts />
    </div>
  );
}
