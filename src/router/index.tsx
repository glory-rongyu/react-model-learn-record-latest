import React, {lazy} from 'react'
import type {RouteObject} from 'react-router-dom'
import {createBrowserRouter, Navigate} from 'react-router-dom'

/* 路由页面 */
// import Layout from '@@/src/layout';
// import Home from '@/pages/home';

// const Layout = lazy(() => import('@@/src/layout'))
// 快速导入工具函数
const lazyLoad = (name: string) => {
    // const url = src.includes('layout') ? `@@/src/${src}` : `@/pages/${src}`
    if (name.includes('layout')) {
        const Module = lazy(() => import(`@@/src/${name}`));
        return <Module/>;
    }
    const Module = lazy(() => import(`@/pages/${name}`));
    return <Module/>;
};

// const Authorization = ({children}: any) => {
//     const token = localStorage.getItem("token");
//     return token ? children : <Navigate to="/login"/>;
// };

const routers: RouteObject[] = [
    {
        path: '/',
        // title: '首页',
        // element: <Authorization>{lazyLoad('layout')}</Authorization>,
        element: lazyLoad('layout'),
        children: [
            // {
            //     index: true,
            //     key: 'home-index',
            //     element: <Home/>,
            // },
            {
                index: true,
                element: <Navigate to="/home" replace/>,
            },
            {
                path: '/home',
                element: lazyLoad('home'),
            },
            {
                path: '/about',
                element: lazyLoad('about'),
            },
        ]
    },
    {
        path: '/login',
        element: lazyLoad('login'),
    },
    // {
    //     path: "*",
    //     element: lazyLoad("not-found"),
    // },
]

export const router = createBrowserRouter(routers, {
    basename: '/',
})

