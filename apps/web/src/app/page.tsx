import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 md:p-16 xl:p-24 gap-16">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <div>
            <span className="bg-black text-white p-2 rounded">Beta</span>
            <h1 className="text-3xl font-bold mt-4">
              Embark on the referral hiring of early crypto startups
            </h1>
            <p className="mt-4">
              Harness the boundless network of Web3 social.
            </p>
            <p className="mt-4">
              Request referrals with rewards to friends and even beyond, and discover the qualified talents to invite to your team.
            </p>
            <div className="mt-4">
              <a href="#waitlistSection">
                <button className="px-6 py-3 rounded-full text-white bg-green-700 hover:bg-green-900">
                  Join Waitlist
                </button>
              </a>
            </div>
          </div>
          <div className="relative min-h-[300px]">
            <Image
              alt="Hero Image"
              height={400}
              src="/images/lp/Hero.svg"
              width={600}
            />
          </div>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
          <div className="order-1 xl:order-2">
            <h2 className="text-2xl font-bold">Ask Web3 Frens for Referrals</h2>
            <p className="mt-4">
              Leverage Web3 social like Farcaster and Lens to request referrals from crypto specialists and their networks.
            </p>
            <p className="mt-4">
              Offer reward incentives to broaden your reach to talents, filtering candidates based on location, tags, and interests.
            </p>
          </div>
          <div className="flex justify-center items-center min-h-[300px] order-2 xl:order-1">
            <Image
              alt="Make connections meaningful"
              height={400}
              src="/images/lp/Web3Connections.svg"
              width={600}
            />
          </div>
        </div>

        <div className="grid gap-8 grid-cols-1 xl:grid-cols-2">
          <div className="order-1">
            <h2 className="text-2xl font-bold">AI-Powered Personalization</h2>
            <p className="mt-4">
              Capture hearts with tailored messages for each individual.
            </p>
            <p className="mt-4">
              Let AI craft the perfect DM for you, and instantly provide qualified recommendations incorporating the voice of the referrer.
            </p>
            <p className="mt-4">
              Without taking time and request limits, ask many friends for help.
            </p>
          </div>
          <div className="flex justify-center items-center min-h-[300px] order-2">
            <Image
              alt="AI-Powered Personalization"
              height={400}
              src="/images/lp/AiPoweredPersonalization.svg"
              width={600}
            />
          </div>
        </div>

        <div className="grid gap-8 grid-cols-1 xl:grid-cols-2 mt-8">
          <div className="order-1 xl:order-2">
            <h2 className="text-2xl font-bold">
              Tokenized Rewards & Recommendations
            </h2>
            <p className="mt-4">
              Referrers can further request referrals from their network and split the rewards within.
            </p>
            <p className="mt-4">
              With AI, compare job requirements with recommendations, creating a vetted recommendation that assesses the candidate&rsquo;s suitability.
            </p>
            <p className="mt-4">
              This recommendation then becomes an NFT, a prestigious item shaping the reputation of the referred individual.
            </p>
          </div>
          <div className="flex justify-center items-center min-h-[300px] order-2 xl:order-1">
            <Image
              alt="Tokenized Rewards & Recommendations"
              height={400}
              src="/images/lp/TokenizedRewardsRecommendations.svg"
              width={600}
            />
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold mt-4">Demo of Referral Request</h1>
        </div>
        <div
          style={{
            position: "relative",
            paddingBottom: "calc(48.854166666666664% + 41px)",
            height: "0",
            width: "100%",
          }}
        >
          <iframe
            src="https://demo.arcade.software/YgzwYiSZSPKZinHQV30K?embed"
            frameBorder="0"
            loading="lazy"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              colorScheme: "light",
            }}
            title="Refid β Demo"
          ></iframe>
        </div>
        <div
          id="waitlistSection"
          style={{
            width: "100%",
          }}
        >
          <div className="text-center">
            <h1 className="text-3xl font-bold mt-4">Join Waitlist</h1>
            <p className="my-4">
              Be a pioneer in reshaping the future of referral hiring.
            </p>
          </div>
          <iframe
            className="airtable-embed"
            src="https://airtable.com/embed/appdLxjtpRsDMtX9y/shr8Cd3CHKXg0fhvm?backgroundColor=blue"
            frameBorder="0"
            width="100%"
            height="533"
            style={{ background: "transparent", border: "1px solid #ccc" }}
          ></iframe>
        </div>
      </main>
      <Footer />
    </>
  );
}
