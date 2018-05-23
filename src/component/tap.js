export default class Tab extends Component {
  renderItem = (route, index) => {
    const {
      navigation,
      jumpToIndex,
    } = this.props;

    const focused = index === navigation.state.index;
    const color = focused ? this.props.activeTintColor : this.props.inactiveTintColor;
    let TabScene = {
      focused:focused,
      route:route,
      tintColor:color
    };
    return (
      <TouchableOpacity
        key={route.key}
        style={styles.tabItem}
        onPress={() => jumpToIndex(index)}
      >
        <View
          style={styles.tabItem}>
          {this.props.renderIcon(TabScene)}
          <Text style={{ ...styles.tabText,marginTop:SCALE(10),color }}>{this.props.getLabel(TabScene)}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  render(){
    const {navigation,} = this.props;
    const {routes,} = navigation.state;
    return (
      <View style={styles.tab}>
        {routes && routes.map((route,index) => this.renderItem(route, index))}
      </View>
    );
  }
}
const styles = {
  tab: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: Color.dddddd,
    width: WIDTH,
    height: Platform.OS === 'ios' ? SCALE(90) : SCALE(100),
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  tabItem: {
    width: SCALE(100),
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabText: {
    marginTop: SCALE(13),
    fontSize: FONT(10),
    color: Color.C7b7b7b
  },
  tabTextChoose: {
    color: Color.f3474b
  },
  tabImage: {
    width: SCALE(42),
    height: SCALE(42),
  },
}
