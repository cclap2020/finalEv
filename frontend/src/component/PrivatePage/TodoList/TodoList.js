import React from "react";
import { connect } from "react-redux";
import axios from "axios";

//TodoList should send user email and uid back to server

class TodoList extends React.Component {

    componentDidMount(
        
    )



    render(){
        return
        <>

        </>
    }

}

const mapStateToProp = (state) => ({
  isAuth: state.isAuth.isAuth,
  userUid: state.userUid.userUid,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProp)(TodoList);
