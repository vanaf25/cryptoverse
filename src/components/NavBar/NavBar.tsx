import React from 'react';
import {Avatar, Menu, Row} from "antd";
import logo from "../../images/cryptocurrency.png";
import {Link, NavLink, useLocation} from "react-router-dom";
import {BulbOutlined, FundOutlined, HomeOutlined} from "@ant-design/icons/lib";
import Sider from 'antd/lib/layout/Sider';
import styles from './NavBar.module.css'
const NavBar:React.FC<{isMobileOpen:boolean}> = ({isMobileOpen}) => {
    const {pathname}=useLocation()
    return (
        <Sider style={{padding:"30px 15px"}} className={`${styles.navBar} ${isMobileOpen ? styles.open:""}`}>
            <div className="logo" >
                <Row>
                    <Avatar style={{marginRight:"10px"}} size={"large"} src={logo}/>
                    <h1 style={{fontSize:"30px"}}><Link to={"/"}>Cryptoverse</Link></h1>
                </Row>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[pathname ? pathname :"/"]}>
                <Menu.Item key="/" icon={<HomeOutlined />}>
                    <NavLink to={"/"}>Home</NavLink>
                </Menu.Item>
                <Menu.Item key="/cryptocurrencies" icon={<FundOutlined />}>
                    <NavLink to={"/cryptocurrencies"}>CryptoCurencies</NavLink>
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default NavBar;
