import adobeLogo from '@assets/svgs/adobeLogo.svg';
import blueALogo from '@assets/svgs/blueALogo.svg';
import slackLogo from '@assets/svgs/slackLogo.svg';
import spotifyLogo from '@assets/svgs/spotifyLogo.svg';
import jiraLogo from '@assets/svgs/jiraLogo.svg';
import inLogo from '@assets/svgs/inLogo.svg';

import author2 from '@assets/images/authorTwo.png';
import author3 from '@assets/images/authorThree.png';
import author4 from '@assets/images/authorFive.png';
import author5 from '@assets/images/authorFive.png';
import author6 from '@assets/images/authorSix.png';

export interface Project {
  iconSVG: string;
  projectName: string;
  budget: number;
  member: string[];
  completionRate: number;
}

export const projectList: Project[] = [
  {
    iconSVG: adobeLogo,
    projectName: 'Chakra Soft UI Version',
    budget: 14000,
    member: [author2, author3, author4, author5, author6],
    completionRate: 60,
  },
  {
    iconSVG: blueALogo,
    projectName: 'Add Progress Track',
    budget: 3000,
    member: [author2, author3],
    completionRate: 10,
  },
  {
    iconSVG: slackLogo,
    projectName: 'Fix Platform Errors',
    budget: 0,
    member: [author2, author3, author4],
    completionRate: 100,
  },
  {
    iconSVG: spotifyLogo,
    projectName: 'Launch our Mobile App',
    budget: 32000,
    member: [author2, author3, author4, author5],
    completionRate: 100,
  },
  {
    iconSVG: jiraLogo,
    projectName: 'Add the New Pricing Page',
    budget: 400,
    member: [author2, author3, author4, author5, author6],
    completionRate: 25,
  },
  {
    iconSVG: inLogo,
    projectName: 'Redesign New Online Shop',
    budget: 7600,
    member: [author2, author3, author6],
    completionRate: 40,
  },
];
