import { Menu } from 'react-admin';

export const MyMenu = () => (
    <Menu>
        <Menu.DashboardItem />
        <Menu.ResourceItem name="demands" />
    </Menu>
);