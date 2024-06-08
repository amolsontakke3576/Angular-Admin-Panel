import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Stats',
      separator: false,
      items: [
        {
          icon: 'pi pi-chart-pie',
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
          icon: 'pi pi-cog',
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
