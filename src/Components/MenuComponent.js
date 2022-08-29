import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

function MenuComponent() {
    return (
        <Menu mode="horizontal">
            <Menu.Item key="mail" icon={<MailOutlined />}>
                Navigation One
            </Menu.Item>
            <Menu.Item key="two" icon={<MailOutlined />}>
                Navigation Two
            </Menu.Item>
            <Menu.SubMenu key="SubMenu" title="Navigation Two - Submenu" icon={<SettingOutlined />}>
                <Menu.Item key="two" icon={<AppstoreOutlined />}>
                    1º Geração
                </Menu.Item>
                <Menu.Item key="three" icon={<AppstoreOutlined />}>
                    2º Geração
                </Menu.Item>
                <Menu.ItemGroup title="Item Group">
                    <Menu.Item key="four" icon={<AppstoreOutlined />}>
                        Navigation Four
                    </Menu.Item>
                    <Menu.Item key="five" icon={<AppstoreOutlined />}>
                        Navigation Five
                    </Menu.Item>
                </Menu.ItemGroup>
            </Menu.SubMenu>
        </Menu>
    );
}

export default MenuComponent;