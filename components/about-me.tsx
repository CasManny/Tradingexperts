import { Award, Clock, Clock7, Smile } from "lucide-react";
import Image from "next/image";
import NumberTicker from "./ui/number-ticker";
import { cn } from "@/lib/utils";
import { Progress } from "./ui/progress";

const aboutdata: { title: string; figure: number }[] = [
  {
    title: "Cryptocurrency",
    figure: 98,
  },
  {
    title: "Real estate",
    figure: 94,
  },
  {
    title: "stock",
    figure: 92,
  },
  {
    title: "Nft's",
    figure: 90,
  },
];
const testimony = [
  {
    title: "Happy clients",
    count: 20000,
    icon: Smile,
    color: "text-green-500",
  },
  {
    title: "profitable trades",
    count: 400000,
    icon: Clock,
    color: "text-blue-400",
  },
  {
    title: "years of experience",
    count: 17,
    icon: Clock7,
    color: "text-blue-500",
  },
  {
    title: "awards",
    count: 16,
    icon: Award,
    color: "text-brand-1",
  },
];
const AboutMe = () => {
  return (
    <section className="py-10 px-10 sm:py-24">
      <h1 className="text-center text-4xl font-bold mb-5">About me</h1>
      <div className="flex gap-5 flex-col sm:flex-row w-full">
        <div className="flex-shrink-0">
          <Image src={"/profile.jpeg"} alt="profile" width={500} height={500} />
        </div>
        <div className="">
          <p>
            Wesley Shirley Christian is a financial consultant who understands
            that there’s more to financial planning than helping you decide how
            to invest. Because those decisions aren’t just about money, they’re
            about what that money can do–for you, your family and your
            community. I recommend reputable investment opportunities which
            would enable you create a stable income. I am committed in helping
            my clients achieve financial freedom. In the learning stages I do
            not think it’s possible to approach anything with a part time
            attitude and get an awesome results. Even if you fully commit
            yourself to something new it doesn’t guarantee you will get the
            results others are getting. So imagine if you don’t even really
            bother trying. Learning to trade has been the hardest thing I have
            ever had to do if you are looking to do the same I strongly suggest
            you should go all in or better don’t try. My main focus will
            continue to increase in trading and investing. This is what lights a
            fire within me, that gets me giddy like nothing else because it’s
            something I’m very good at and I love to do it. No matter the
            business, we believe if we do what’s right for clients, we’ll help
            them to achieve success while also realizing our own. It’s that
            simple. We don’t only teach you how to become a successful trader,
            but also expands your mind in ways you’d never expect.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
            {testimony.map((item, index) => (
              <div className="flex items-center gap-5" key={index}>
                <item.icon className={cn(item.color, "size-10")} />
                <div className="">
                  <NumberTicker
                    className="font-extrabold text-2xl"
                    value={item.count}
                  />
                  <p className="font-medium capitalize text-xl">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 space-y-2">
            {aboutdata.map((data, index) => (
              <div className="" key={index}>
                <div className="flex justify-between items-center mb-1">
                  <p className="font-medium">{data.title}</p>
                  <p>{data.figure}%</p>
                </div>
                <Progress value={data.figure} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
