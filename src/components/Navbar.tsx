import { EnFlag, Logo } from "@assets/images";

function Navbar() {
  return (
    <nav className="w-full pt-10">
      <div className="flex justify-between content-center border-b border-b-dark/[.12] pb-4">
        <div className="logo">
          <img src={Logo} alt="brand-logo" width={128} height={64} />
        </div>
        <div className="flex self-center">
          <img src={EnFlag} width={36} height={24} alt="en-flag" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
