import { useNavigate, useSearchParams } from "react-router";
import { userDetailsStore } from "../store/store";
import { useEffect } from "react";

const AuthCallback = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const { addUsername, addProfileImage, authenticate } = userDetailsStore(
    (state) => state
  );
  useEffect(() => {
    const username = params.get("username");
    const profileImage = params.get("profile_image_url");
    if (username && profileImage) {
      addUsername(username);
      addProfileImage(profileImage);
      authenticate();
    }
    navigate("/");
  }, [addProfileImage, addUsername, authenticate, navigate, params]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col items-center space-y-4 animate-fade-in">
          <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          <h1 className="text-2xl font-bold text-white">Connecting to X...</h1>
          <p className="text-gray-400">
            Please wait while we authenticate you 🔄
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthCallback;
