/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu, Icon, Badge } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function RightMenu(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth ) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="home">
          <a href="/">Home</a>
        </Menu.Item>
        <Menu.Item key="trips">
          <a href="/trips">Trips</a>
        </Menu.Item>
        <Menu.Item key="about">
          <a href="/">About</a>
        </Menu.Item>
        <Menu.Item key="contact">
          <a href="/">Contact</a>
        </Menu.Item>
        <Menu.Item key="mail">
          <a href="/login"><Icon type="user" style={{fontSize:'22px'}} /></a>
        </Menu.Item>
      </Menu>
    )
  } else {

    if (user.userData && user.userData.isAuth && !user.userData.isAdmin ) {
      return (
        <Menu mode={props.mode}>
          <Menu.Item key="home">
            <a href="/">Home</a>
          </Menu.Item>
          <Menu.Item key="trips">
            <a href="/trips">Trips</a>
          </Menu.Item>
          <Menu.Item key="about">
            <a href="/">About</a>
          </Menu.Item>
          <Menu.Item key="contact">
            <a href="/">Contact</a>
          </Menu.Item>
          <SubMenu title={<span><Icon type="user" style={{fontSize:'22px'}} /></span>}>
            <MenuItemGroup>
            <Menu.Item key="orders">
                <a href="/orders">My Orders</a>
              </Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup>
              <Menu.Item key="logout">
                <a onClick={logoutHandler}>Logout</a>
              </Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <Menu.Item key="cart" style={{ paddingBottom: 6 }}>
          <Badge count={user.userData && user.userData.cart.length}>            
              <a href="/user/cart" style={{ color:'#6420F7', margin:'0', padding:'0'}}>
                <Icon type="shopping-cart" style={{ fontSize:'30px' }} />
              </a>
          </Badge>
          </Menu.Item>
        </Menu>
      )
    } else {
      return (
        <Menu mode={props.mode}>
          <Menu.Item key="home">
            <a href="/">Home</a>
          </Menu.Item>
          <Menu.Item key="trips">
            <a href="/trips">Trips</a>
          </Menu.Item>
          <Menu.Item key="about">
            <a href="/">About</a>
          </Menu.Item>
          <Menu.Item key="contact">
            <a href="/">Contact</a>
          </Menu.Item>
          <SubMenu title={<span><Icon type="user" style={{fontSize:'22px'}} /></span>}>
            <MenuItemGroup>
            <Menu.Item key="orders">
                <a href="/orders">My Orders</a>
              </Menu.Item>
              <Menu.Item key="upload">
                <a href="/product/upload">Upload</a>
              </Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup>
              <Menu.Item key="logout">
                <a onClick={logoutHandler}>Logout</a>
              </Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <Menu.Item key="cart" style={{ paddingBottom: 6 }}>
          <Badge count={user.userData && user.userData.cart.length}>            
              <a href="/user/cart" style={{ color:'#6420F7', margin:'0', padding:'0'}}>
                <Icon type="shopping-cart" style={{ fontSize:'30px' }} />
                
              </a>
          </Badge>
          </Menu.Item>
        </Menu>
      )
    }

  
  }
}

export default withRouter(RightMenu);

