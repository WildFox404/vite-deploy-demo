import React, { useEffect, useState } from 'react';
import { Button, Menu } from 'antd';
import { replace, useNavigate } from 'react-router-dom';

const items = [
  
  {
    key: '1',
    label: '个人博客',
    children: [
      {
        key: '/product/myweb',
        label: '项目描述',
      }
    ]
  },
  {
    key: '2',
    label: 'AUST课表APP',
    children: [
      {
        key: '/product/app',
        label: '项目描述',
      },
      {
        key: '/product/appdisplay',
        label: '项目展示',
      }
    ]
  },
  {
    key: '3',
    label: '自动校园网链接',
    children: [
      {
        key: '/product/wifi',
        label: '项目描述',
      },
      {
        key: '/product/wifidisplay',
        label: '项目展示',
      },
      {
        key: '/product/wifiuse',
        label: '项目使用',
      },
    ],
  },
  {
    key: '4',
    label: 'Electron(计划中)',
    children: [
      {
        key: '/product/electron',
        label: '项目描述',
      }
    ]
  },
  {
    key: '5',
    label: 'UNITY_GAME',
    children: [
      {
        key: '/product/gamerain',
        label: '雨天',
      },
      {
        key: '/product/gamewantopen',
        label: '想开了',
      }
    ]
  },
  {
    key: '6',
    label: '3D_MODEL',
    children: [
      {
        key: '/product/model',
        label: '建模作品',
      }
    ]
  }
];

const MenuBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const onClick = (e) => {
    navigate(e.key,{replace:true})
  }

  useEffect(() => {
    onClick({key:'/product/myweb'})
  },[]);

  return (
    <div className='w-full h-full overflow-auto border-r-2 border-white'>
      <Menu
        onClick={onClick}
        defaultSelectedKeys={['/product/myweb']}
        defaultOpenKeys={['/product/myweb']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};
export default MenuBar;