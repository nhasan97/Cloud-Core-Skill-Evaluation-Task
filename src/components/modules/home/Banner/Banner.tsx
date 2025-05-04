import MobileSmallDeviceView from "./MobileSmallDeviceView";
import TabPCView from "./TabPCView";
import "../../../../styles/button.css";

const Banner = () => {
  return (
    <div>
      <TabPCView />

      <MobileSmallDeviceView />
    </div>
  );
};

export default Banner;
