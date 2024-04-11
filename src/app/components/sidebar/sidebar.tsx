import React from "react";
import { Layout, Menu } from "antd";
import { MenuItemType } from "antd/es/menu/hooks/useItems";

const { Sider } = Layout;

interface SideBarProps {
  items: MenuItemType[];
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const SideBar: React.FC<SideBarProps> = ({
  items,
  collapsed,
  setCollapsed,
}) => {
  return (
    <Sider
      breakpoint="lg"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
        setCollapsed(collapsed);
      }}
      collapsed={collapsed}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={items}
      />
    </Sider>
  );
};

export default SideBar;
