import {
  DiscordIcon,
  FacebookIcon,
  InstagramIcon,
  MediumIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  YoutubeIcon,
} from 'assets/icons';
import { SocialProps } from './types';

const items: Array<SocialProps> = [
  {
    name: 'Twitter',
    Icon: TwitterIcon,
    href: 'https://twitter.com/iCrossChain',
  },
  {
    name: 'Telegram Chanel',
    Icon: TelegramIcon,
    href: 'https://t.me/iCrosschainchannel',
  },
  {
    name: 'Telegram Global',
    Icon: TelegramIcon,
    href: 'https://t.me/iCrosschain',
  },
  {
    name: 'Youtube',
    Icon: YoutubeIcon,
    href: 'https://www.youtube.com/channel/UCcVt8N5ioGxSMf833xYYxYw',
  },
  {
    name: 'Reddit',
    Icon: RedditIcon,
    href: 'https://www.reddit.com/user/icrosschain',
  },
  {
    name: 'Discord',
    Icon: DiscordIcon,
    href: 'https://discord.com/invite/wrmzAExT9X',
  },
  {
    name: 'Medium',
    Icon: MediumIcon,
    href: 'https://medium.com/@icrosschain',
  },

  {
    name: 'Instagram',
    Icon: InstagramIcon,
    href: 'https://www.instagram.com/icrosschain/',
  },
  {
    name: 'Facebook',
    Icon: FacebookIcon,
    href: 'https://www.facebook.com/iCrossChain',
  },
];

export default items;
