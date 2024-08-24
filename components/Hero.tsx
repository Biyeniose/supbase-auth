import { AuthButtons } from "./AuthButtons";
import TeamForm from "./TeamForm";
import Image from "next/image";

export const Hero = () => {
  return (
    <div>
      <div className="relative isolate px-6 lg:px-8">
        <div
          className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl "
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div className="mx-auto max-w-2xl lg:py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
              Make Predictions for upcoming sports matches
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Sign Up and compete with your friends to see who accumulates the
              most points each week Lock in your Predictions then check back to
              see the outcomes
            </p>

            <p className="mt-6 py-4  text-lg leading-8 text-gray-300">
              Lock in your Predictions then check back to see the outcomes
            </p>

            <div className="justify-center flex gap-3">
              <Image
                src="/league_logos/epl.png" // Corrected path
                alt="Description of the image" // Alt text for accessibility
                width={100} // Desired width of the image
                height={100} // Desired height of the image
              />

              <Image
                src="/league_logos/fr.png" // Corrected path
                alt="Description of the image" // Alt text for accessibility
                width={100} // Desired width of the image
                height={100} // Desired height of the image
                className=""
              />

              <Image
                src="/league_logos/gr.png" // Corrected path
                alt="Description of the image" // Alt text for accessibility
                width={100} // Desired width of the image
                height={100} // Desired height of the image
                className=""
              />

              <Image
                src="/league_logos/ita.png" // Corrected path
                alt="Description of the image" // Alt text for accessibility
                width={100} // Desired width of the image
                height={100} // Desired height of the image
                className=""
              />
            </div>

            <AuthButtons />
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-10rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
