import Image from "next/image";
import { Card } from "./ui/card";
import Marquee from "./ui/marquee";

const reviews = [
  {
    name: "Stephen Ewan",
    role: "Ceo & founder",
    review:
      "Her skills in the management of portfolio as well as her advice on the type of investments one can engage in within a short time duration without incurring any loss and attaining so much profits in the end is really impressive and her knowledge in crypto currency investments are top notch. ",
    image: "/testimonials-1.jpg",
  },
  {
    name: "Sara Wilson",
    role: "Designer",
    image: "/testimonials-2.jpg",

    review:
      "I have invested into my Roth accounts for about 5 years but I didn’t actually see any benefits in the long run because the stock market doesn’t have that much yield but through Mrs. wesley shirley christian, I was able to earn through various means by investing through her directives in back door IRAs to boost my portfolio. ",
  },
  {
    name: "Jena Karlis",
    role: "Store Owner",
    image: "/testimonials-3.jpg",
    review:
      "wesley shirley christian has proven to be one of the very best when it comes to finance world. My success rate rose over 75% in the last months while working with her. ",
  },
  {
    name: "Matt Brandon",
    role: "Freelancer",
    image: "/testimonials-4.jpg",

    review:
      "Working with wesley shirley christian has been the turning point for me, her experience and work ethics has yielded more in my portfolio. ",
  },
  {
    name: "john Larson",
    role: "Entrepreneur",
    image: "/testimonials-5.jpg",

    review:
      "I have been investing into stocks for a long time and made the decision of diversifying my income on other investment out there. But knowing the ups and downs of the market, I didn’t want to lose my money or make a mistake. So I seek for my friend’s opinion who’s also an investor. He recommended I work with a professional and introduced me to wesley shirley christian Services. Four years already of consistently investing with her and diversifying my income into crypto currency, I was able to secure an apartment in Texas with and made a lot of money working with her. Maria is the best in time and space and I’m glad I met her . ",
  },
];
const Testimonials = () => {
  return (
    <section className="">
      <div className="">
        <Marquee pauseOnHover className="[--duration:20s]">
          {reviews.map((item, index) => (
            <Card className="w-full shadow-md max-w-sm p-5" key={index}>
              <div className="flex items-center justify-center flex-col my-5">
                <Image
                  src={item.image}
                  height={50}
                  width={50}
                  className="size-20 rounded-full object-cover"
                  alt={item.name}
                />
                <h3 className="font-semibold my-1">{item.name}</h3>
                <p className="capitalize">{item.role}</p>
              </div>
              <div className="">
                {item.review}
              </div>
            </Card>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonials;
