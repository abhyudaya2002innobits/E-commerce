
import HeaderComponent from "./Header"
import Sider from "antd/es/layout/Sider"
import { Menu } from "antd"

const Layout=()=>{

    return (
        <>
        <HeaderComponent/>
        <Sider trigger={null} collapsible >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: '',
              label: 'nav 1',
            },
            {
              key: '2',
              icon: '',
              label: 'nav 2',
            },
            {
              key: '3',
              icon: '',
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
    
        </>
    )
}

export default Layout