interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  
  {
    title: true,
    name: 'Sondages'
  },
  {
    name: 'Sondages',
    url: '/sondages',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Creation Sondage',
        url: '/sondages/addsondage',
        icon: 'icon-puzzle'
      },
      {
        name: 'List Sondages',
        url: '//sondages',
        icon: 'icon-puzzle'
      },
    ]
  }
];
