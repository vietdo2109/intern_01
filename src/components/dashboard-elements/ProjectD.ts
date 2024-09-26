import icon1 from "../../assets/SVGs/Adobe_XD_CC_icon 1.svg";
import icon2 from "../../assets/SVGs/Group 3.svg";
import icon3 from "../../assets/SVGs/slack-new-logo 1.svg";
import icon4 from "../../assets/SVGs/spotify-2 1.svg";
import icon5 from "../../assets/SVGs/jira-3 1.svg";
import icon6 from "../../assets/SVGs/In Icon.svg";

import author2 from "../../assets/images/authorTwo.png";
import author3 from "../../assets/images/authorThree.png";
import author4 from "../../assets/images/authorFive.png";
import author5 from "../../assets/images/authorFive.png";
import author6 from "../../assets/images/authorSix.png";

export interface ProjectD {
  iconSVG: string;
  projectName: string;
  budget: number;
  member: string[];
  completionRate: number;
}

export const projectDList: ProjectD[] = [
  {
    iconSVG: icon1,
    projectName: "Chakra Soft UI Version",
    budget: 14000,
    member: [author2, author3, author4, author5, author6],
    completionRate: 60,
  },
  {
    iconSVG: icon2,
    projectName: "Add Progress Track",
    budget: 3000,
    member: [author2, author3],
    completionRate: 10,
  },
  {
    iconSVG: icon3,
    projectName: "Fix Platform Errors",
    budget: 0,
    member: [author2, author3, author4],
    completionRate: 100,
  },
  {
    iconSVG: icon4,
    projectName: "Launch our Mobile App",
    budget: 32000,
    member: [author2, author3, author4, author5],
    completionRate: 100,
  },
  {
    iconSVG: icon5,
    projectName: "Add the New Pricing Page",
    budget: 400,
    member: [author2, author3, author4, author5, author6],
    completionRate: 25,
  },
  {
    iconSVG: icon6,
    projectName: "Redesign New Online Shop",
    budget: 7600,
    member: [author2, author3, author6],
    completionRate: 40,
  },
];
