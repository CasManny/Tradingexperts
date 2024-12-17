import HomepageNavbar from "./homepage-navbar";
import MobileNavbar from "./mobile-navbar";
import Globe from "./ui/globe";

const Hero = () => {
  return (
    <section className="relative h-screen w-full z-100">
      <div
        className="bg-no-repeat -z-10 absolute bg-center"
        style={{ backgroundImage: "url('/profile2.jpeg')" }}
      ></div>
      <div className="inset-0 bg-neutral-900/80 absolute" />
      <div className="fixed top-0 z-50 left-0 right-0">
        <HomepageNavbar />
        <MobileNavbar />
      </div>
      <div className="relative flex items-center justify-center h-full w-full">
        <div className="text-white">
          <h1 className="text-6xl font-extrabold capitalize">
            wesley shirley christian
          </h1>
          <p>
            I believe that the value of professional advice is about more than
            just investment returns.
          </p>
        </div>
      </div>
      <Globe className="bottom-0 lg:top-28 -z-10" />
    </section>
  );
};

export default Hero;
