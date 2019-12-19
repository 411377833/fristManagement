import React, { useState, useEffect } from 'react';
import { Menu, Layout, Icon } from 'antd';
const { SubMenu } = Menu;
import { config } from './menu-cofig'
import SubRoutes from './subRoutes'
import history from './history'
const { Header, Content, Footer, Sider } = Layout;
import './index.less'
const MenuConfig = (props) => {
    const [collapsed,setCollapsed]= useState(false)
    const handleClick = item => {
        history.push(item.key)
    }
    return (<Layout>

        <Sider
            
            trigger={null} 
            collapsible 
            collapsed={collapsed}
            style={{
                // overflow: 'auto',
                // overflowX: 'hidden', 
                // overflowY: 'auto'
                // height: '100vh',
                // position: 'fixed',
                // left: 0,
                height:'100%'
            }}
        >
            {collapsed?<div className="logo" ></div>:<div className="logo" >店铺后台管理</div>}
            <Menu
                theme="dark" 
                mode="inline"
                className='siderScrolle'
            >
                {
                    config.map(el => (
                            <SubMenu
                                key={el.title}
                                title={
                                    <span>
                                        {/* <Icon type="mail" /> */}
                                        <span>{el.title}</span>
                                    </span>
                                }
                            >
                                {
                                    el.children.map(ele => (
                                        <SubMenu key={ele.title} title={ele.title}>
                                            {
                                                ele.children&&ele.children.map(item=>(
                                                    <Menu.Item onClick={() => handleClick(item)} key={item.title}>{item.title}</Menu.Item>
                                                ))
                                            }
                                        </SubMenu>
                                    ))
                                }
                            </SubMenu>
                    ))
                }
                {/* {
                    config.map(el => (
                        el.children ?
                            <SubMenu
                                key={el.title}
                                title={
                                    <span>
                                        <span>{el.title}</span>
                                    </span>
                                }
                            >
                                {
                                    el.children.map(ele => (
                                        <Menu.Item onClick={() => handleClick(ele)} key={ele.title}>{ele.title}</Menu.Item>
                                    ))
                                }
                            </SubMenu>
                            :
                            <Menu.Item onClick={() => handleClick(ele)} key={el.title}>{el.title}</Menu.Item>
                    ))
                } */}
            </Menu>
        </Sider>
        <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                    className="trigger"
                    type={collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={()=>setCollapsed(!collapsed)}
                />
            </Header>
            <Content 
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    background: '#fff',
                    minHeight: 'initial',
                }}
            >
                <SubRoutes />
            </Content>
            {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
        </Layout>
    </Layout>
    )
}
export default MenuConfig