import { HeroBanner, AboutUs } from "../sections";
import { LeafPattern } from "@assets/images";

function LandingScreen() {
  return (
    <div className={`bg-[url('${LeafPattern}')] bg-no-repeat`}>
      <HeroBanner />
      <AboutUs />
    </div>
  )
}
export default LandingScreen;