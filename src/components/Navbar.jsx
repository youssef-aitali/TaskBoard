import { UserCircleIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-violet-200 px-4 w-full">
      <img src="/logo.svg" style={{ width: 80, height: 80 }} alt="TaskBoard" />
      <div className="text-lg font-semibold">TaskBoard</div>
      <div className="flex gap-2">
        <UserCircleIcon className="size-6" /> Project Manager
      </div>
    </nav>
  );
};

export default Navbar;
