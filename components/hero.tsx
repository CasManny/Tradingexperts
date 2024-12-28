import HomepageNavbar from "./homepage-navbar";
import Globe from "./ui/globe";
import classes from "./styles.module.css";

const Hero = () => {
  return (
    <section className={`${classes.colored} relative h-screen w-full z-100`}>
      <div className="inset-0 bg-neutral-900/80 absolute" />
      <div className="fixed top-0 z-50 left-0 right-0">
        <HomepageNavbar />
      </div>
      <div className="relative flex items-center justify-center h-full w-full p-5">
        <div className="text-white">
          <h1 className="text-5xl font-extrabold capitalize flex justify-center">
            wesley shirley christian
          </h1>
          <p className="uppercase m-3">
            I believe that the value of professional advice is about more than
            just investment returns.
          </p>
        </div>
      </div>
      {/* <Globe className="-z-10 top-24" /> */}
    </section>
  );
};

export default Hero;
