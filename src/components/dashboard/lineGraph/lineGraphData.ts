interface LDataItem {
  x: string;
  y: number;
}

export interface LData {
  id: string;
  color: string;
  data: LDataItem[];
}

export const lineData: LData[] = [
  {
    id: 'japan',
    color: 'rgb(79, 209, 197)',
    data: [
      {
        x: 'Jan',
        y: 180,
      },
      {
        x: 'Feb',
        y: 220,
      },
      {
        x: 'Mar',
        y: 200,
      },
      {
        x: 'Apr',
        y: 350,
      },
      {
        x: 'May',
        y: 340,
      },
      {
        x: 'Jun',
        y: 480,
      },
      {
        x: 'Jul',
        y: 400,
      },
      {
        x: 'Aug',
        y: 320,
      },
      {
        x: 'Sep',
        y: 350,
      },
      {
        x: 'Oct',
        y: 250,
      },
      {
        x: 'Nov',
        y: 300,
      },
      {
        x: 'Dec',
        y: 420,
      },
    ],
  },
  {
    id: 'France',
    color: '#a1d99b',
    data: [
      {
        x: 'Jan',
        y: 500,
      },
      {
        x: 'Feb',
        y: 180,
      },
      {
        x: 'Mar',
        y: 300,
      },
      {
        x: 'Apr',
        y: 350,
      },
      {
        x: 'May',
        y: 280,
      },
      {
        x: 'Jun',
        y: 250,
      },
      {
        x: 'Jul',
        y: 190,
      },
      {
        x: 'Aug',
        y: 250,
      },
      {
        x: 'Sep',
        y: 190,
      },
      {
        x: 'Oct',
        y: 110,
      },
      {
        x: 'Nov',
        y: 140,
      },
      {
        x: 'Dec',
        y: 190,
      },
    ],
  },
];
