import React from 'react';
// 使用 CSS Module 的方式引入 App.less
import './App.less';
// import style from './App.less'
// Loading 提示
import MenuConfig from './router/menu'

export default (props) => {
    return (
        // <div>
        <div className='app'>
            <MenuConfig />
        </div>
    )
}
