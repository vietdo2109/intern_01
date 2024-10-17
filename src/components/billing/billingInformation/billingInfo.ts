export type Bill = {
  user: string;
  companyName: string;
  email: string;
  vatNumber: string;
};

export const BillingInfomation: Bill[] = [
  {
    user: 'Oliver Liam',
    companyName: 'Viking Burito',
    email: 'oliver@burrito.com',
    vatNumber: 'FRb123456',
  },
  {
    user: 'Nobi Nobita',
    companyName: 'Time machine',
    email: 'nobitanobi@gmail.com',
    vatNumber: 'FRb678900',
  },
  {
    user: 'Doraemon',
    companyName: 'Time machine',
    email: 'radoemon@gmail.com',
    vatNumber: 'FRb124689',
  },
];
