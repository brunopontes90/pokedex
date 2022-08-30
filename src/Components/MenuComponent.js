import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import "./MenuComponent.scss";

function MenuComponent(props) {
    const {pokemon} = props
    //console.log(pokemon)
    return (
        <Menu mode="horizontal" className='menu'>
            <Menu.Item key="mail">
                <Link to="/pokedex">Home</Link>
            </Menu.Item>
            <Menu.SubMenu key="SubMenu" title="Gerações de Pokemon">
                <Menu.Item key="two">
                    <Link to={"/gemone"}>1º Geração</Link>
                </Menu.Item>
                <Menu.Item key="three">
                    <Link to={"/gemtwo"}>2º Geração</Link>
                </Menu.Item>
            </Menu.SubMenu>
        </Menu>
    );
}

export default MenuComponent;