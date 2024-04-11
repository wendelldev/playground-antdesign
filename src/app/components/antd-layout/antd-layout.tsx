"use client";

import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Button, theme } from "antd";
import SideBar from "../sidebar/sidebar";
import { MenuItemType } from "antd/es/menu/hooks/useItems";
import { useRouter } from "next/navigation";

const { Header, Content, Footer } = Layout;

interface AntdLayoutProps {
  children: React.ReactNode;
}

const AntdLayout: React.FC<AntdLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const router = useRouter();

  const items: MenuItemType[] = [
    {
      key: "1",
      icon: <DashboardOutlined />,
      label: "Dashboard",
      onClick: () => router.push("/"),
    },
    {
      key: "2",
      icon: <LoginOutlined />,
      label: "Sign-In",
      onClick: () => router.push("/auth/signin"),
    },
    {
      key: "3",
      icon: <LogoutOutlined />,
      label: "Sign-Up",
      onClick: () => router.push("/auth/signup"),
    },
  ];

  return (
    <Layout
      style={{
        minHeight: "100vh",
        background: colorBgContainer,
      }}
    >
      <SideBar
        items={items}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>

        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AntdLayout;
