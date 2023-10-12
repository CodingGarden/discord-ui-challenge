import ArrowDownIcon from '@/components/icons/ArrowDownIcon.vue';
import BellIcon from '@/components/icons/BellIcon.vue';
import CirclePlusIcon from '@/components/icons/CirclePlusIcon.vue';
import CircleQuestionIcon from '@/components/icons/CircleQuestionIcon.vue';
import CompassIcon from '@/components/icons/CompassIcon.vue';
import CreateInviteIcon from '@/components/icons/CreateInviteIcon.vue';
import DiscordLogoIcon from '@/components/icons/DiscordLogoIcon.vue';
import DownloadIcon from '@/components/icons/DownloadIcon.vue';
import GifIcon from '@/components/icons/GifIcon.vue';
import GiftIcon from '@/components/icons/GiftIcon.vue';
import HashIcon from '@/components/icons/HashIcon.vue';
import HeadphonesIcon from '@/components/icons/HeadphonesIcon.vue';
import InboxIcon from '@/components/icons/InboxIcon.vue';
import MessageThreadIcon from '@/components/icons/MessageThreadIcon.vue';
import MuteIcon from '@/components/icons/MuteIcon.vue';
import PencilIcon from '@/components/icons/PencilIcon.vue';
import PinIcon from '@/components/icons/PinIcon.vue';
import PlusIcon from '@/components/icons/PlusIcon.vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';
import SettingsIcon from '@/components/icons/SettingsIcon.vue';
import SpeakerIcon from '@/components/icons/SpeakerIcon.vue';
import StickerIcon from '@/components/icons/StickerIcon.vue';
import UsersIcon from '@/components/icons/UsersIcon.vue';
import XIcon from '@/components/icons/XIcon.vue';
import type { Component } from 'vue';

export type IconType = 'ArrowDown' |
  'Bell' |
  'CirclePlus' |
  'CircleQuestion' |
  'Compass' |
  'CreateInvite' |
  'DiscordLogo' |
  'Download' |
  'Gif' |
  'Gift' |
  'Hash' |
  'Headphones' |
  'Inbox' |
  'MessageThread' |
  'Mute' |
  'Pencil' |
  'Pin' |
  'Plus' |
  'Search' |
  'Settings' |
  'Speaker' |
  'Sticker' |
  'Users' |
  'X';

export const Icons = new Map<IconType, Component>([
  ['ArrowDown', ArrowDownIcon],
  ['Bell', BellIcon],
  ['CirclePlus', CirclePlusIcon],
  ['CircleQuestion', CircleQuestionIcon],
  ['Compass', CompassIcon],
  ['CreateInvite', CreateInviteIcon],
  ['DiscordLogo', DiscordLogoIcon],
  ['Download', DownloadIcon],
  ['Gif', GifIcon],
  ['Gift', GiftIcon],
  ['Hash', HashIcon],
  ['Headphones', HeadphonesIcon],
  ['Inbox', InboxIcon],
  ['MessageThread', MessageThreadIcon],
  ['Mute', MuteIcon],
  ['Pencil', PencilIcon],
  ['Pin', PinIcon],
  ['Plus', PlusIcon],
  ['Search', SearchIcon],
  ['Settings', SettingsIcon],
  ['Speaker', SpeakerIcon],
  ['Sticker', StickerIcon],
  ['Users', UsersIcon],
  ['X', XIcon],
]);
