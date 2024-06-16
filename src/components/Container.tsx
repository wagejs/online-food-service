import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return (
    <div className="bg-brand-white-yellow font-poppins px-[100px]">{children}</div>
  )
}

export default Container;
