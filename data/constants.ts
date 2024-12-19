type FundingMethod = {
    image: string;
    name: string;
    tag: string;
}
  
export const fundingMethods: FundingMethod[] = [
  {
    image: "/btc.png",
    name: "Bitcoin",
    tag: "btc",
  },
  {
    image: "/ltc.png",
    name: "Litecoin",
    tag: "ltc",
  },
  {
    image: "/eth.png",
    name: "Ethereum",
    tag: "eth",
  },
  {
    image: "/pmo.png",
    name: "Perfect Money",
    tag: "pmo",
  },
  {
    image: "/bch.png",
    name: "Bitcoin Cash",
    tag: "bch",
  },
  {
    image: "/tet.png",
    name: "Tether",
    tag: "tet",
  },
  {
    image: "/trx.png",
    name: "Tron",
    tag: "trx",
  },
  {
    image: "/transfer.png",
    name: "Bank Transfer",
    tag: "transfer",
  },
  {
    image: "/net.png",
    name: "Neteller",
    tag: "net",
  },
  {
    image: "/wes.png",
    name: "Western union",
    tag: "wes",
  },
];

export type PaymentType = FundingMethod['name']
