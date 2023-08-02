import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./Mobile-Sidebar";

const Navbar = async () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />M
      </div>
    </div>
  );
};

export default Navbar;