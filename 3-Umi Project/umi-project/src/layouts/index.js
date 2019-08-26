import React, { Component } from 'react'
import { Layout } from 'antd'

class BasicLayout extends Component {
  render () {
    return (
      <Layout>
        <Layout.Sider width={256} style={{ minHeight: '100vh', color: 'white'}}>Sider</Layout.Sider>
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