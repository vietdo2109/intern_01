import { IconType } from 'react-icons';
import { FaHtml5 as htmlIcon } from 'react-icons/fa';
import { IoNotifications as notificationIcon } from 'react-icons/io5';
import { FaShoppingCart as shoppingCartIcon } from 'react-icons/fa';
import { BsCreditCardFill as creditCardIcon } from 'react-icons/bs';
import { FaDropbox as dropboxIcon } from 'react-icons/fa';
import adobeIcon from '@assets/svgs/adobeLogo.svg';

export interface Oder {
  icon: IconType | string;
  title: string;
  time: string;
  color: string;
}

export const oders: Oder[] = [
  {
    icon: notificationIcon,
    title: '$2400, Design changes',
    time: '22 DEC 7:20 PM',
    color: '#4FD1C5',
  },
  {
    icon: htmlIcon,
    title: 'New order #4219423',
    time: '21 DEC 11:21 PM',
    color: '#E53E3E',
  },
  {
    icon: shoppingCartIcon,
    title: 'Server Payments for April',
    time: '21 DEC 9:28 PM',
    color: '#4299E1',
  },
  {
    icon: creditCardIcon,
    title: 'New card added for order #3210145',
    time: '20 DEC 3:52 PM',
    color: '#F6AD55',
  },
  {
    icon: dropboxIcon,
    title: 'Unlock packages for Development',
    time: '19 DEC 11:35 PM',
    color: '#9F7AEA',
  },
  {
    icon: adobeIcon,
    title: 'New order #9851258',
    time: '18 DEC 4:41 PM',
    color: '',
  },
];
