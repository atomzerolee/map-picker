import { Component } from 'react';

import { Layout } from 'antd';
import style from '../style.css';

const { Header, Content } = Layout;

class App extends Component {
  componentDidMount() {
    this.map = new AMap.Map("map-container", {
      resizeEnable: true,
      center: [117.190182, 39.125596],//地图中心点
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
    this.district.search('天津市', this.onDistrictSearch.bind(this));
  }

  onDistrictSearch(status, res) {
    const bounds = res && res.districtList[0].boundaries;
    let polygons = [];
    if(bounds) {
      for (let i = 0, l = bounds.length; i < l; i++) {
        const polygon = new AMap.Polygon({
          map: this.map,
          strokeWeight: 1,
          path: bounds[i],
          fillOpacity: 0.7,
          fillColor: '#CCF3FF',
          strokeColor: '#CC66CC'
        });
        polygons.push(polygon);
      }
    }
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