import author1 from "../../assets/images/Credits to Unsplash.com.png";
import author2 from "../../assets/images/authorTwo.png";
import author3 from "../../assets/images/authorThree.png";
import author4 from "../../assets/images/authorFive.png";
import author5 from "../../assets/images/authorFive.png";
import author6 from "../../assets/images/authorSix.png";

export interface Author {
  profileImg: string;
  username: string;
  email: string;
  func1: string;
  func2: string;
  status: "Online" | "Offline";
  employedDate: string;
}

export const authorList: Author[] = [
  {
    profileImg: author1,
    username: "Esthera Jackson",
    email: "esthera@simmmple.com",
    func1: "Manager",
    func2: "Organization",
    status: "Online",
    employedDate: "14/06/21",
  },
  {
    profileImg: author2,
    username: "Alexa Liras",
    email: "alexa@simmmple.com",
    func1: "Programmer",
    func2: "Developer",
    status: "Offline",
    employedDate: "14/06/21",
  },
  {
    profileImg: author3,
    username: "Laurent Michael",
    email: "laurent@simmmple.com",
    func1: "Executive",
    func2: "Projects",
    status: "Online",
    employedDate: "14/06/21",
  },
  {
    profileImg: author4,
    username: "Freduardo Hill",
    email: "freduardo@simmmple.com",
    func1: "Manager",
    func2: "Organization",
    status: "Online",
    employedDate: "14/06/21",
  },
  {
    profileImg: author5,
    username: "Daniel Thomas",
    email: "daniel@simmmple.com",
    func1: "Programmer",
    func2: "Developer",
    status: "Offline",
    employedDate: "14/06/21",
  },
  {
    profileImg: author6,
    username: "Mark Wilson",
    email: "mark@simmmple.com",
    func1: "Designer",
    func2: "UI/UX Design",
    status: "Offline",
    employedDate: "14/06/21",
  },
];
