import { Component } from 'react';

import { Layout } from 'antd';
import style from '../style.css';

const { Header, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className={style.layout} >
        <Header>
          
        </Header>
        <Content>
        </Content>
      </Layout>
    )
  }
}

export default App;