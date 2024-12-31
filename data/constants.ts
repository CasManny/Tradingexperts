type FundingMethod = {
    image: string;
    name: string;
    tag: string;
}
  
export const fundingMethods: FundingMethod[] = [
  {
    image: "/btc.png",
    name: "Bitcoin",
    tag: "btc"
  },
  {
    image: "/eth.png",
    name: "Ethereum",
    tag: "eth"
  },
  {
    image: "/tet.png",
    name: "Tether",
    tag: "tet"
  },
];

export type PaymentType = FundingMethod['name']
