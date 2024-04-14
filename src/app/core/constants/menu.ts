import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Stats',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Overview',
          route: '/dashboard',
        },
      ],
    },
    {
      group: 'Config',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/cog.svg',
          label: 'Configurations',
          route: '/dashboard/settings',
          children: [
            { label: 'Your Profile', route: '/dashboard/profile' },
            { label: 'Settings', route: '/dashboard/settings' },
          ],
        },
      ],
    },
  ];
}
