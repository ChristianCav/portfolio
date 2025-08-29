interface NavbarProps {
  onProjectsClick: () => void;
  onAboutMeClick: () => void;
}

const Navbar = ({ onProjectsClick, onAboutMeClick }: NavbarProps) => {
  return (
    <div className="flex items-center justify-center gap-x-2 pt-4">
      <button
        className="btn btn-sm bg-neutral-900 text-gray-300 hover:bg-neutral-800 hover:scale-110 
            transition-transform
            duration-300 ease-out"
      >
        Home
      </button>
      <button
        className="btn btn-sm bg-neutral-900 text-gray-300 hover:bg-neutral-800 hover:scale-110 
            transition-transform
            duration-300 ease-out"
        onClick={onProjectsClick}
      >
        Projects
      </button>
      <button
        className="btn btn-sm bg-neutral-900 text-gray-300 hover:bg-neutral-800 hover:scale-110 
            transition-transform
            duration-300 ease-out"
        onClick={onAboutMeClick}
      >
        About Me
      </button>
    </div>
  );
};

export default Navbar;
