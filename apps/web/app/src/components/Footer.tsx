import { FaTwitter, FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="border-t-2 border-gray-400 px-8 py-8">
      <div className="flex justify-between items-center">
        <p className="font-bold text-xl">Refid</p>
        <div className="space-y-4">
          <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-5">
            {/* <a
              href="https://docs.refid.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-5"
            >
              Resource Docs
            </a> */}
            <a
              href="https://amplified-abrosaurus-249.notion.site/Privacy-Policy-bc869e77c8f448bb98e921c9b430a9db"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-5"
            >
              Privacy Policy
            </a>
            {/* <a
              href="https://www.notion.so/Cookie-Policy-f6f3810d3a5b4612920ec493387f9e7c"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-5"
            >
              Cookie Policy
            </a>
            <a
              href="https://www.notion.so/Term-of-service-3a5eec354c2e48dbb0ace3996390b624"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-5"
            >
              User Terms
            </a> */}
          </div>
          <div className="flex space-x-5">
            <a
              href="https://twitter.com/Refidentity"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-5"
            >
              <FaTwitter />
            </a>
            <a
              href="https://discord.gg/ZpmSdDhYA3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-5">
        <hr className="w-full my-5" />
        <p>&copy; All Rights Reserved. Refid</p>
      </div>
    </div>
  );
}
