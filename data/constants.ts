type FundingMethod = {
    image: string;
    name: string;
    tag: string;
    wallet: string;
}
  
export const fundingMethods: FundingMethod[] = [
  {
    image: "/btc.png",
    name: "Bitcoin",
    tag: "btc",
    wallet: "bc1qxn859lwg2qpg3q2v7x8tf86p77577yh8vlrz2q"
  },
  // {
  //   image: "/ltc.png",
  //   name: "Litecoin",
  //   tag: "ltc",
  // },
  {
    image: "/eth.png",
    name: "Ethereum",
    tag: "eth",
    wallet: "0xB1a9aCf4DC468347Fa66aBC547Aef87618F7f4B0"
  },
  // {
  //   image: "/pmo.png",
  //   name: "Perfect Money",
  //   tag: "pmo",
  // },
  // {
  //   image: "/bch.png",
  //   name: "Bitcoin Cash",
  //   tag: "bch",
  // },
  {
    image: "/tet.png",
    name: "Tether",
    tag: "tet",
    wallet: "0xB1a9aCf4DC468347Fa66aBC547Aef87618F7f4B0"
  },
  // {
  //   image: "/trx.png",
  //   name: "Tron",
  //   tag: "trx",
  // },
  // {
  //   image: "/transfer.png",
  //   name: "Bank Transfer",
  //   tag: "transfer",
  // },
  // {
  //   image: "/net.png",
  //   name: "Neteller",
  //   tag: "net",
  // },
  // {
  //   image: "/wes.png",
  //   name: "Western union",
  //   tag: "wes",
  // },
];

export type PaymentType = FundingMethod['name']
