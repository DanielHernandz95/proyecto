import { useSession } from "next-auth/react";
import Nav from "@/components/Nav";

export default function Layout({ children }) {
  const { data: session } = useSession();
  if (!session) {
    return <div></div>;
  }

  return (
    <div className="bg-white min-h-screen  flex">
      <Nav />
      <div className="bg-[#f5f5f9] flex-grow mt-2 mr-2 mb-0 rounded-r-lg p-4">
        {children}
      </div>
    </div>
  );
}
