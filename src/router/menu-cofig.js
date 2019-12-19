import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
export const config = [
    // {
    //     title: '店铺',
    //     key: '',
    //     children: [
    //         {
    //             title: '店铺概况',
    //             key: '',
    //         }
    //     ]
    // },
    {
        title: '商品',
        key: '',
        children: [
            {
                title: '商品列表',
                key: ``,
                children: [
                    {
                        title: '商品列表',
                        key: `category-list`,
                    },
                    {
                        title: '商品日志',
                        key: '',
                    },
                ]
            },
            {
                title: '添加商品',
                key: '',
                children: [
                    {
                        title: '选择商品分类',
                        key: `product-management`,
                    },
                    {
                        title: '填写商品信息',
                        key: '',
                    },
                    {
                        title: '填写商品属性',
                        key: '',
                    },
                    {
                        title: '选择商品关联',
                        key: '',
                    },
                ]
            },
            {
                title: '商品审核',
                key: '',
                children: [
                    {
                        title: '商品审核',
                        key: `product-management`,
                    },
                ]
            },
            {
                title: '商品回收站',
                key: '',
                children: [
                    {
                        title: '商品回收站',
                        key: `product-management`,
                    },
                ]
            },
            {
                title: '商品批量修改',
                key: '',
                children: [
                    {
                        title: '修改基本信息',
                        key: `product-management`,
                    },
                    {
                        title: '修改商品详情',
                        key: `product-management`,
                    },
                    {
                        title: '图片批量处理',
                        key: `product-management`,
                    },
                    {
                        title: '批量自动上下架',
                        key: `product-management`,
                    },
                ]
            },
            {
                title: '商品评价',
                key: '',
                children: [
                    {
                        title: '商品评价',
                        key: `product-management`,
                    },
                    {
                        title: '评价详情',
                        key: `product-management`,
                    },
                ]
            },
            {
                title: '商品分类',
                key: '',
                children: [
                    {
                        title: '商品分类',
                        key: `category-list`,
                    },
                    {
                        title: '二级分类',
                        key: `product-management`,
                    },
                    {
                        title: '添加分类',
                        key: `product-management`,
                    },
                ]
            },
            {
                title: '商品类型',
                key: '',
                children: [
                    {
                        title: '商品类型',
                        key: `product-management`,
                    },
                    {
                        title: '属性列表',
                        key: `product-management`,
                    },
                    {
                        title: '参数列表',
                        key: `product-management`,
                    },
                    {
                        title: '添加属性',
                        key: `product-management`,
                    },
                    {
                        title: '添加参数',
                        key: `product-management`,
                    },
                    {
                        title: '属性颜色',
                        key: `product-management`,
                    },
                ]
            },
            {
                title: '品牌管理',
                key: '',
                children: [
                    {
                        title: '品牌管理',
                        key: `product-management`,
                    },
                    {
                        title: '添加新品牌',
                        key: `product-management`,
                    },
                ]
            },
            {
                title: '图片库管理',
                key: '',
                children: [
                    {
                        title: '图片库管理',
                        key: `product-management`,
                    },
                    {
                        title: '相册列表',
                        key: `product-management`,
                    },
                    {
                        title: '新建相册',
                        key: `product-management`,
                    },
                ]
            },
        ]
    },
    {
        title: '订单',
        key: '',
        children: [
            {
                title: '订单概况',
                key: '',
            },
            {
                title: '所有订单',
                key: '',
               
            },
            {
                title: '加星订单',
                key: '',
            },
            {
                title: '退款维权',
                key: '',
            },
            {
                title: '订单详情',
                key: '',
            },
        ]
    },
    {
        title: '客户',
        key: '',
        children: [
            {
                title: '客户管理',
                key: '',
            },
            {
                title: '客户运营',
                key: '',
            },
            {
                title: '会员管理',
                key: '',
            },
            {
                title: '会员卡',
                key: '',
            },
            {
                title: '新建会员',
                key: '',
            },
            {
                title: '添加客户',
                key: '',
            },
        ]
    },
    {
        title: '设置',
        key: '',
        children: [
            {
                title: '店铺信息',
                key: '',
            },
            {
                title: '员工管理',
                key: '',
            },
            {
                title: '联系我们',
                key: '',
            },
        ]
    },
]