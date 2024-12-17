import {
    BadgeDollarSign,
    Bitcoin,
    ChartBarStacked,
    ChartCandlestick,
    ChartNoAxesCombined,
    ChartSpline,
    DollarSign,
    Headset
} from "lucide-react";
import { GiFamilyHouse } from "react-icons/gi";
import { BorderBeam } from "./ui/border-beam";
import { Card } from "./ui/card";
const myservices = [
  {
    title: "Stock",
    Icon: ChartSpline,
    desc: "Stocks are bought and sold predominantly on stock exchanges, though there can be private sales as well, and they are the foundation of nearly every portfolio. Historically, they have outperformed most other investments.",
  },
  {
    title: "Reit-Fund",
    Icon: ChartCandlestick,
    desc: "Trades on Market, passes Rental Income % to you as Dividend. REITs own Real Estate under Brokerage management.",
  },
  {
    title: "Investment planning",
    Icon: ChartNoAxesCombined,
    desc: "Starting up an investment plan involves more than just choosing a few stocks to put money in. You need to consider your current financial situation and your goals. It’s also important to define your timeline and how much risk you’re willing to take on in order to determine your optimal asset allocation. This is why we’re here for you, let’s help you start the plan.",
  },
  {
    title: "Bonds",
    Icon: ChartBarStacked,
    desc: "Bonds are debt securities that are issued by corporations and governments to raise funds. Investors purchase bonds by putting an upfront amount as an initial investment—called the principal. When the bond expires or matures—called the maturity date—the investors are paid back their principal. In return, investors usually receive a fixed, periodic interest payment from the entity that issued the bond.",
  },
  {
    title: "consultation",
    Icon: Headset,
    desc: "Have a chat and call with the expert on Investment options and opportunities to suit your financial goals.",
  },
  {
    title: "Cryptocurrency",
    Icon: Bitcoin,
    desc: "It’s hard to evaluate the exact number of cryptocurrencies, especially since new ones are probably being created as we speak, but current estimations stand at nearly a thousand. Let’s make your crypto experience an easy one for you.",
  },
  {
    title: "Mutual Funds",
    Icon: DollarSign,
    desc: "Pool of Investment Equity, Traded in the financial market on consistent %ROI, on a Brokerage management.",
  },
  {
    title: "Porfolio Management",
    Icon: BadgeDollarSign,
    desc: "Professional portfolio management on investments equity on consistent returns and avoiding leverage risk .",
  },
  {
    title: "Algo Mining",
    Icon: BadgeDollarSign,
    desc: "Genetic algorithms are unique ways to solve complex problems by harnessing the power of nature. By applying these methods to predicting security prices, traders can optimize trading rules by identifying the best values to use for each parameter for a given security.",
  },
  {
    title: "Real Estate",
    Icon: GiFamilyHouse,
    desc: "Buying, Owning and selling a home can sometimes feel like an emotional roller coaster. There are new processes to navigate and seemingly endless roadblocks to overcome. We are here to help!",
  },
];
const Services = () => {
  return (
    <section className="py-10 px-5 sm:px-10  sm:py-24">
      <div className="">
        <h1 className="text-center text-4xl font-bold mb-5">Services</h1>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {myservices.map((service, index) => (
            <Card className="relative shadow-lg" key={index}>
              <div className="p-5">
                <div className="center flex-col">
                  <div className="center size-20 bg-brand-4/30 rounded-full">
                    <service.Icon className="text-gray-900 size-6" />
                  </div>
                  <p className="font-bold my-5 text-lg">{service.title}</p>
                </div>
                <p>{service.desc}</p>
              </div>
              <BorderBeam  />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
