import icon1 from "../../assets/SVGs/Adobe_XD_CC_icon 1.svg";
import icon2 from "../../assets/SVGs/Group 3.svg";
import icon3 from "../../assets/SVGs/slack-new-logo 1.svg";
import icon4 from "../../assets/SVGs/spotify-2 1.svg";
import icon5 from "../../assets/SVGs/jira-3 1.svg";

export interface Project {
  iconSVG: string;
  projectName: string;
  budget: number;
  status: "Working" | "Canceled" | "Done";
  completionRate: number;
}

export const projectList: Project[] = [
  {
    iconSVG: icon1,
    projectName: "Chakra Soft UI Version",
    budget: 14000,
    status: "Working",
    completionRate: 60,
  },
  {
    iconSVG: icon2,
    projectName: "Add Progress Track",
    budget: 3000,
    status: "Canceled",
    completionRate: 10,
  },
  {
    iconSVG: icon3,
    projectName: "Fix Platform Errors",
    budget: 0,
    status: "Done",
    completionRate: 100,
  },
  {
    iconSVG: icon4,
    projectName: "Launch our Mobile App",
    budget: 32000,
    status: "Done",
    completionRate: 100,
  },
  {
    iconSVG: icon5,
    projectName: "Add the New Pricing Page",
    budget: 400,
    status: "Working",
    completionRate: 25,
  },
];
