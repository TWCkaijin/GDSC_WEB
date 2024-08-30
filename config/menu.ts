interface MenuT {
  link: string;
  title: string;
}

export const menu: MenuT[] = [
  { link: '/activities', title: 'Activities' },
  { link: '/courses', title: 'Courses' },
  { link: '/group-projects', title: 'Group Projects' },
];

export const accountMenu: MenuT[] = [
  { link: '/profile', title: 'Profile' },
  { link: '/billing', title: 'Billing' },
];
