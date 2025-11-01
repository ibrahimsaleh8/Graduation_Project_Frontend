import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return <div className="container mx-auto sm:px-8 px-2 py-6">{children}</div>;
}
