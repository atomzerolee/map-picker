import { Component } from 'react';

import { Layout } from 'antd';
import style from '../style.css';

const { Header, Content } = Layout;

class App extends Component {
  componentDidMount() {
    this.map = new AMap.Map("map-container", {
      resizeEnable: true,
      center: [116.397428, 39.90923],//地图中心点
      zoom: 10 //地图显示的缩放级别
    });
    AMap.service('AMap.DistrictSearch', this.onDistrictInit.bind(this));
  }

  onDistrictInit() {
    const options = {
      subdistrict: 1,
      extensions: 'all',
      level: 'city'
    }
    this.district = new AMap.DistrictSearch(options);
    this.district.setLevel('district');
    this.district.search('东丽区', this.onDistrictSearch.bind(this));
  }

  onDistrictSearch(result) {
    console.log(result);
  }

  render() {
    return (
      <Layout className={style.layout} >
        <Header></Header>
        <Content id="map-container">
        </Content>
      </Layout>
    )
  }
}

export default App;