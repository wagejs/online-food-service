import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return (
    <div className="bg-brand-white-yellow font-poppins">{children}</div>
  )
}

export default Container;
