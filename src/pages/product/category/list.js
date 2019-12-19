import React, { useState, useEffect } from 'react';
import { Button, PageHeader, Table } from 'antd';
import history from '../../../router/history'
import IndexModel from './models/indexModle'
import {observer} from "mobx-react-lite"
const CategoryList = observer((props) => {
    const {categoryList} =IndexModel
    useEffect(()=>{
        IndexModel.getCategoryList()
    },[])
    const columns = [
        {
            title: '分类名称',
            dataIndex: 'categoryName',
            key: 'categoryName',
        },
        {
            title: '上级分类',
            dataIndex: 'topCategory',
            key: 'topCategory',
        },
        {
            title: '数量单位',
            dataIndex: 'unit',
            key: 'unit',
        },
        {
            title: '是否显示',
            dataIndex: 'visible',
            key: 'visible',
            render:(text,record,index)=>(<div>{text===0?'是':'否'}</div>)
        },
        {
            title: '是否显示在导航栏',
            dataIndex: 'visibleTab',
            key: 'visibleTab',
            render:(text,record,index)=>(<div>{text===0?'是':'否'}</div>)
        },
        {
            title: '关键词',
            dataIndex: 'antistop',
            key: 'antistop',
        },
        {
            title: '分类描述',
            dataIndex: 'categoryDescription',
            key: 'categoryDescription',
        },
        {
            title: '操作',
            dataIndex: 'operation',
            render:(text,record,index)=><div>
                <span style={{cursor: 'pointer'}} onClick={()=>addCategory(record.id)}>编辑</span>
                <span style={{marginLeft:'10px',cursor: 'pointer'}}>删除</span>
            </div>
        },
    ];
    const addCategory = (id)=>{
        console.log(1)
        history.push(`/add-category/${id}`)
    }
    return (<PageHeader
        title="商品分类"
        // subTitle="数据列表"
        extra={[
            <Button onClick={()=>addCategory(0)}>添加</Button>
        ]}
    >
        <Table dataSource={categoryList} columns={columns} />
    </PageHeader>
    )
})
export default CategoryList