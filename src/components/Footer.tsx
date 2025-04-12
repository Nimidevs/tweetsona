const Footer = () => {
  return (
    <footer className="flex justify-center">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
          <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
            <a
              className="text-[#a2a5b9] text-base font-normal leading-normal min-w-40"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-[#a2a5b9] text-base font-normal leading-normal min-w-40"
              href="#"
            >
              Terms of Service
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="https://x.com/NimiDevs" target="__blank">
              <div
                className="text-[#a2a5b9]"
                data-icon="XLogo"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.205 2.25h3.675l-8.025 9.15L23.25 21.75h-7.395l-5.79-7.575-6.63 7.575H.75l8.595-9.81L.75 2.25h7.575l5.22 6.885 6.66-6.885zm-1.26 17.325h2.04L5.67 4.425H3.51l13.435 15.15z" />
                </svg>
              </div>
            </a>
            <a href="https://github.com/NimiDevs" target="__blank">
              <div
                className="text-[#a2a5b9]"
                data-icon="GitHubLogo"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.04c-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.625-5.48 5.922.43.372.823 1.102.823 2.222v3.293c0 .32.218.694.825.576C20.565 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com/in/NimiDevs" target="__blank">
              <div
                className="text-[#a2a5b9]"
                data-icon="LinkedInLogo"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.024-3.036-1.848-3.036-1.849 0-2.132 1.444-2.132 2.937v5.668h-3.554v-11.5h3.414v1.571h.049c.477-.9 1.637-1.848 3.372-1.848c3.605 0 4.271 2.372 4.271 5.455v6.322zm-14.693-13c-1.144 0-2.07-.928-2.07-2.07c0-1.142.926-2.07 2.07-2.07c1.144 0 2.07.928 2.07 2.07c0 1.142-.926 2.07-2.07 2.07zm1.777 13h-3.554v-11.5h3.554v11.5zm16.469-20h-22c-.736 0-1.333.597-1.333 1.333v22c0 .736.597 1.333 1.333 1.333h22c.736 0 1.333-.597 1.333-1.333v-22c0-.736-.597-1.333-1.333-1.333z" />
                </svg>
              </div>
            </a>
          </div>
          <p className="text-[#a2a5b9] text-base font-normal leading-normal">
            © 2025{" "}
            <a
              href="https://github.com/Nimidevs"
              target="_blank"
              className="inline-flex items-center gap-1"
            >
              Nimidevs
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.6.5.5 5.7.5 12c0 5.1 3.3 9.5 7.8 11c.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.5-3.9-1.5c-.5-1.2-1.1-1.5-1.1-1.5c-.9-.6.1-.6.1-.6c1 .1 1.5 1 1.5 1c.9 1.6 2.4 1.1 3 .9c.1-.7.4-1.1.7-1.4c-2.6-.3-5.3-1.3-5.3-5.7c0-1.3.5-2.4 1.2-3.3c-.1-.3-.5-1.5.1-3.1c0 0 1-.3 3.3 1.2c1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2c.6 1.6.2 2.8.1 3.1c.8.9 1.2 2 1.2 3.3c0 4.5-2.7 5.4-5.3 5.7c.4.3.7 1 .7 2v3c0 .3.2.7.8.6c4.5-1.5 7.8-5.9 7.8-11c0-6.3-5.1-11.5-11.5-11.5Z" />
              </svg>
            </a>{" "}
            All Rights Reserved
          </p>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;
