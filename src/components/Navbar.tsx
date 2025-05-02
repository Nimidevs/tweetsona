import { Link } from "react-router";
import { userDetailsStore } from "../store/store";

const Navbar = () => {
  const { authenticated, profile_image, username } = userDetailsStore(
    (state) => state
  );
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#323543] px-10 py-3 bg-[#1a1b23]">
      <Link to={"/"}>
        <div className="flex items-center gap-4 text-white">
          <div className="size-4">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
            Tweetsona
          </h2>
        </div>
      </Link>
      {authenticated && (
        <a href={`https://x.com/${username}`} target='_blank'>
          <div className="flex gap-2 items-center">
            <img
              src={profile_image}
              alt="Profile"
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="text-gray-100 font-bold text-base">{username}</span>
          </div>
        </a>
      )}
    </header>
  );
};

export default Navbar;
