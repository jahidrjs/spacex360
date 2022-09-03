import React from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;
import { RocketOutlined } from '@ant-design/icons';

function Nav() {
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo">
        <h2 style={{ fontSize: '26px', color: '#08c' }}>
          <a href="/">
            <RocketOutlined />
            Spacex360
          </a>
        </h2>
      </div>
      {/* <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(3).fill(null).map((_, index) => ({
          key: String(index + 1),
          label: `nav ${index + 1}`,
        }))}
      /> */}
    </Header>
  );
}

export default Nav;
