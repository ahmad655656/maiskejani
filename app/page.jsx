import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container h-full mx-auto">
        <div className="flex flex-col items-center justify-between xl:pt-8 xl:flex-row xl:pb-24">
          {/* text */}
          <div className="order-2 text-center xl:text-left xl:order-none">
            <span className="text-xl">FrontEnd Devloper</span>
            <h1 className="mb-6 mt-3 h1">
              Hello I'm <br />
              <span className="text-accent-Default">Haedara Salloum</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 ">
              I am a software engineer with a great passion for programming and
              the web in particular. I have about two years of experience in the
              field of front-end website design.{" "}
            </p>
            {/* btn and socials */}
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <a href="/cv.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center text-lg p-5 uppercase"
                >
                  Download CV
                  <FiDownload />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles={"flex gap-6"}
                  iconStyles={
                    "w-9 h-9 border border-accent-Default rounded-full flex justify-center items-center text-accent-Default text-base hover:bg-accent-Default hover:text-primary hover:transition-all duration-500"
                  }
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
