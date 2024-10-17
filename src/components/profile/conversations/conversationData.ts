import avatarOne from '../../../assets/images/conversationAvtZero.png';
import avatarTwo from '../../../assets/images/conversationAvtOne.png';
import avatarThree from '../../../assets/images/conversationAvtTwo.png';
import avatarFour from '../../../assets/images/conversationAvtThree.png';

export type ConversationContent = {
  imgSrc: string;
  username: string;
  content: string;
};

export const conversations: ConversationContent[] = [
  {
    imgSrc: avatarOne,
    username: 'Esthera Jackson',
    content: 'Hi! I need more informations...',
  },
  {
    imgSrc: avatarTwo,
    username: 'Doraemon',
    content: 'Awesome work, can you change...',
  },

  {
    imgSrc: avatarThree,
    username: 'Nobi Nobita',
    content: 'Have a great afternoon...',
  },
  {
    imgSrc: avatarFour,
    username: 'Shizuka',
    content: 'About files I can...',
  },
];
