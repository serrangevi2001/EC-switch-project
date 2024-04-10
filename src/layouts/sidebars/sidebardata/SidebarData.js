import * as Icon from 'react-feather';

const SidebarData = [
  { caption: 'Home' },
  {
    title: 'Dashboards',
    href: '/dashboards',
    id: 1,
    suffix: '',
    suffixColor: 'bg-info text-dark-white',
    icon: <Icon.Home />,
    collapisble: true,
    
  },
  { caption: 'Users' },
  {
    title: 'UserList',
    href: '/apps/userlist',
    icon: <Icon.Users />,
    id: 2.1,
    collapisble: false,
  },
  { caption: 'Devices' },
  {
    title: 'DeviceList',
    href: '/apps/deviceList',
    icon: <Icon.PhoneIncoming />,
    id: 3.1,
    collapisble: false,
  },
  
];

export default SidebarData;
