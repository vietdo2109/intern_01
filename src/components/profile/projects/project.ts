import PjImage1 from '@assets/images/profilePrjOne.png';
import PjImage2 from '@assets/images/profilePrjTwo.png';
import PjImage3 from '@assets/images/profilePrjThree.png';

export type Project = {
  imgSrc: string;
  projectId: number;
  projectName: string;
  projectDesc: string;
};

export const projects: Project[] = [
  {
    imgSrc: PjImage1,
    projectId: 1,
    projectName: 'Modern',
    projectDesc: 'As Uber works through a huge amount of internal management turmoil.',
  },
  {
    imgSrc: PjImage2,
    projectId: 2,
    projectName: 'Scandinavian',
    projectDesc: 'AMusic is something that every person has his or her own specific opinion about.',
  },
  {
    imgSrc: PjImage3,
    projectId: 3,
    projectName: 'Minimalist',
    projectDesc: 'Different people have different taste, and various types of music.',
  },
];
