import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import Link from 'umi/link'

class BasicLayout extends Component {
  render () {
    return (
      <Layout>
        <Layout.Sider width={256} style={{ minHeight: '100vh', color: 'white'}}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/helloWorld">
                <Icon type="pie-chart" />
                <span>Hellowold</span>
              </Link>
              
            </Menu.Item>
            <Menu.SubMenu key="sub1" title={
              <span><Icon type="dashboard" /><span>Dashboard</span></span>
            }>
              <Menu.Item key="2"><Link to="/dashboard/analysis">分析页</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/dashboard/monitor">监控页</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/dashboard/workplace">工作台</Link></Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Layout.Sider>
        <Layout>
          <Layout.Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>
            Header
          </Layout.Header>
          <Layout.Content style={{ margin: '24px 0', padding: '0 16px', background: '#fff'}}>
            {this.props.children || 'content'}
          </Layout.Content>
          <Layout.Footer style={{ textAlign: 'center' }}>
            Footer
          </Layout.Footer>
        </Layout>
      </Layout>
    )
  }
}

export default BasicLayout