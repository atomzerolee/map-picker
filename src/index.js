import Event from 'events';

class MapPick extends Event {
  constructor() {
    super();
    this.initialize();
    // this.districtSearch();
  }
  initialize() {
    this.map = new AMap.Map("container", {
      resizeEnable: true,
      center: [117.190182, 39.125596], // 天津市
      zoom: 15
    });
    AMapUI.load(['ui/geo/DistrictExplorer', 'lib/$', 'ui/misc/PointSimplifier'], function(DistrictExplorer, $, PointSimplifier) {
      var districtExplorer = window.districtExplorer = new DistrictExplorer({
        map: this.map,
        eventSupport: false, 
        preload: [120110]
      });
    }.bind(this));
  }
}

new MapPick;