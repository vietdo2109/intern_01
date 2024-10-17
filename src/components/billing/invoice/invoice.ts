export type Invoice = {
  date: string;
  id: string;
  cost: number;
};

export const invoicesData: Invoice[] = [
  {
    date: 'March, 01, 2020',
    id: '#MS-415646',
    cost: 180,
  },
  {
    date: 'February, 10, 2021',
    id: '#RV-126749',
    cost: 250,
  },
  {
    date: 'April, 05, 2020',
    id: '#FB-212562',
    cost: 560,
  },
  {
    date: 'June, 25, 2019',
    id: '#QW-103578',
    cost: 120,
  },
  {
    date: 'March, 01, 2019',
    id: '#AR-803481',
    cost: 300,
  },
];
