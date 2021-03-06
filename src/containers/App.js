import App from '../components/App';
import {connect} from 'react-redux';
import {addTodo} from '../actions/index';

const mapStateToProps = (state)=>({
    todo:state
});

const mapDispatchToProps = (dispatch) => ({
    handlePress: dispatch(addTodo())
});

export default connect(mapStateToProps,mapDispatchToProps)(App);