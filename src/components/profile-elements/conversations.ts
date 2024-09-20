import avatarOne from "../../assets/images/Credits to Unsplash.com.png";
import avatarTwo from "../../assets/images/Credits to Unsplash.com one.png";
import avatarThree from "../../assets/images/Credits to Unsplash.com two.png";
import avatarFour from "../../assets/images/Credits to Unsplash.com three.png";

export type ConversationContent = {
  imgSrc: string;
  username: string;
  content: string;
};

export const conversations: ConversationContent[] = [
  {
    imgSrc: avatarOne,
    username: "Esthera Jackson",
    content: "Hi! I need more informations...",
  },
  {
    imgSrc: avatarTwo,
    username: "Doraemon",
    content: "Awesome work, can you change...",
  },

  {
    imgSrc: avatarThree,
    username: "Nobi Nobita",
    content: "Have a great afternoon...",
  },
  {
    imgSrc: avatarFour,
    username: "Shizuka",
    content: "About files I can...",
  },
];
