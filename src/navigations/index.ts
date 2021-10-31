import { connect } from 'react-redux';
import StackNavigation from './Main';

const mapStateToProps = state => ({
  isConnected: state.network.isConnected,
});

export default connect(mapStateToProps)(StackNavigation);
