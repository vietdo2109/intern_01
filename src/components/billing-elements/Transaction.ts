export interface Transaction {
  company: string;
  time: string;
  value: number;
  status: "plus" | "minus" | "pending";
}

export const transactionList: Transaction[] = [
  {
    company: "Netflix",
    time: "27 March 2020, at 12:30 PM",
    value: 2500,
    status: "minus",
  },
  {
    company: "Apple",
    time: "27 March 2020, at 12:30 PM",
    value: 2500,
    status: "plus",
  },
  {
    company: "Stripe",
    time: "26 March 2020, at 13:45 PM",
    value: 800,
    status: "plus",
  },
  {
    company: "Netflix",
    time: "27 March 2020, at 12:30 PM",
    value: 2500,
    status: "minus",
  },
  {
    company: "HubSpot",
    time: "26 March 2020, at 12:30 PM",
    value: 1700,
    status: "plus",
  },
  {
    company: "Webflow",
    time: "26 March 2020, at 05:00 AM",
    value: 2500,
    status: "pending",
  },

  {
    company: "Microsoft",
    time: "25 March 2020, at 16:30 PM ",
    value: 987,
    status: "minus",
  },
];
