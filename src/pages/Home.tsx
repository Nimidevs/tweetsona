import { useNavigate } from "react-router";
import { userDetailsStore } from "../store/store";
const Home = () => {
  const navigate = useNavigate()
  const routeToAnalysisPage = () => {
    navigate('/analyse')
  }
  const authenticated = userDetailsStore((state) => state.authenticated);
  
  function redirect() {
    window.location.href = `${
      import.meta.env.VITE_BACKEND_BASE_URL
    }/auth/twitter`;
  }

  return (
    <div>
      <div className="@container">
        <div className="@[480px]:p-4 h-[95vh] flex justify-center items-center">
          <div
            className="flex min-h-[500px] w-5xl flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://cdn.usegalileo.ai/sdxl10/12e5a2bf-f6ec-40d1-9d14-f6a7f271eeda.png')",
            }}
          >
            <div
              className="flex flex-col gap-2 text-center bg-transparent"
              style={{
                backgroundColor: "transparent",
              }}
            >
              <h1
                style={{
                  backgroundColor: "transparent",
                }}
                className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
              >
                Unleash Your Twitter Vibes!
              </h1>
              <h2
                style={{
                  backgroundColor: "transparent",
                }}
                className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
              >
                Transform your tweets into vibrant, personalized profile
                pictures.
              </h2>
            </div>
            {authenticated ? (
              <button onClick={routeToAnalysisPage} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#30344d] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                <span className="truncate">Analyze tweets</span>
              </button>
            ) : (
              <button
                onClick={redirect}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#30344d] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
              >
                <span className="truncate">Connect X</span>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mb-20">
        <div className="w-5xl flex flex-col gap-3">
          <h2 className="text-white text-[22px] text-center font-bold leading-tight tracking-[-0.015em]">
            How It Works
          </h2>
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-white tracking-light text-[28px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
              Your X Posts, Your Style!
            </h1>
            <p className="text-white text-base font-normal leading-normal max-w-[720px] text-center">
              We analyze your posts to create unique, fun profile pictures that
              represent your personality.
            </p>
          </div>
          <div className="grid mt-2 grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
            <div className="flex flex-1 gap-3 rounded-lg border border-[#44475a] bg-[#252731] p-4 flex-col">
              <div
                className="text-white"
                data-icon="MinusCircle"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M176,128a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,128Zm56,0A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-white text-base font-bold leading-tight">
                  Connect X
                </h2>
                <p className="text-[#a2a5b9] text-sm font-normal leading-normal">
                  Easily connect your X account.
                </p>
              </div>
            </div>
            <div className="flex flex-1 gap-3 rounded-lg border border-[#44475a] bg-[#252731] p-4 flex-col">
              <div
                className="text-white"
                data-icon="ChartPieSlice"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M100,116.43a8,8,0,0,0,4-6.93v-72A8,8,0,0,0,93.34,30,104.06,104.06,0,0,0,25.73,147a8,8,0,0,0,4.52,5.81,7.86,7.86,0,0,0,3.35.74,8,8,0,0,0,4-1.07ZM88,49.62v55.26L40.12,132.51C40,131,40,129.48,40,128A88.12,88.12,0,0,1,88,49.62Zm130.34,26.9c-.09-.18-.18-.37-.29-.55s-.2-.33-.31-.49A104.05,104.05,0,0,0,128,24a8,8,0,0,0-8,8v91.83l-78.81,45.9a8,8,0,0,0-2.87,11A104,104,0,0,0,232,128,103.34,103.34,0,0,0,218.34,76.52ZM136,40.36A88.05,88.05,0,0,1,199.89,77.3L136,114.51ZM128,216a88.45,88.45,0,0,1-71.49-36.68l75.4-43.91.22-.14L207.9,91.14A88,88,0,0,1,128,216Z"></path>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-white text-base font-bold leading-tight">
                  Analyze Vibes
                </h2>
                <p className="text-[#a2a5b9] text-sm font-normal leading-normal">
                  We analyze your post vibes.
                </p>
              </div>
            </div>
            <div className="flex flex-1 gap-3 rounded-lg border border-[#44475a] bg-[#252731] p-4 flex-col">
              <div
                className="text-white"
                data-icon="Download"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M240,136v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V136a16,16,0,0,1,16-16H72a8,8,0,0,1,0,16H32v64H224V136H184a8,8,0,0,1,0-16h40A16,16,0,0,1,240,136Zm-117.66-2.34a8,8,0,0,0,11.32,0l48-48a8,8,0,0,0-11.32-11.32L136,108.69V24a8,8,0,0,0-16,0v84.69L85.66,74.34A8,8,0,0,0,74.34,85.66ZM200,168a12,12,0,1,0-12,12A12,12,0,0,0,200,168Z"></path>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-white text-base font-bold leading-tight">
                  Get Your Profile Pics
                </h2>
                <p className="text-[#a2a5b9] text-sm font-normal leading-normal">
                  Download custom profile pictures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
