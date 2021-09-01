import { connect } from 'react-redux';
import { signInUser } from './actions/user.actions';
import './App.css';

function App(props){
  return (
    <div className="App">
      <button onClick={() => props.signInUser()}>click</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { signInUser })(App);
