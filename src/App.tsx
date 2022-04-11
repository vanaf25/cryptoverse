import React, {useState} from 'react'
import {Layout} from 'antd';
import 'antd/dist/antd.css'
import styles from './App.module.css'
import {Route, Routes} from 'react-router-dom';
import Home from "./components/Home/Home";
import News from "./components/News/News";
import NavBar from "./components/NavBar/NavBar";
import Coins from "./components/Coins/Coins";
import CoinPage from "./components/Coins/CoinPage/CoinPage";
import { MenuUnfoldOutlined } from '@ant-design/icons';
const { Footer, Content } = Layout;
const App=()=>{
    const [isMobileMenuOpen,setIsMobileMenu]=useState<boolean>(false);
        return (
            <div className={styles.app}>
                <NavBar isMobileOpen={isMobileMenuOpen}/>
                <div style={{flex:"1 1 auto"}}>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 10,
                            minHeight: 280,
                        }}
                    >
                        <Routes>
                            <Route path="/" element={<Home />}/>
                            <Route path="/cryptocurrencies/">
                                <Route path=":id" element={<CoinPage/>} />
                                <Route path="" element={<Coins/>} />
                            </Route>
                            <Route path={"/news"} element={<News/>}/>
                        </Routes>
                    </Content>
                    <Footer className={styles.footer}>All right received</Footer>
                </div>
              <div onClick={()=>setIsMobileMenu(prevState => !prevState)} className={styles.openMenu}>
                    <MenuUnfoldOutlined />
                </div>
            </div>
        );
}
export default App
