import React from 'react';
import {updateNameInput, updatePassInput, loginUser, logoutUser, fetchUsers} from '../actions/creators.js';
import {connect} from 'react-redux';
import { throwStatement } from '@babel/types';

class FormInputs extends React.Component{

    componentDidMount(){

        this.props.fetchUsers();

    }
    //input submit input after
    render(){

        return(
            this.props.currentUser ? (
            <div className="bigDiv">
                <p>Logged In!</p>
                <p>Username: {this.props.currentUser}</p>
                <input type="submit" name="logout" placeholder="logout" value="Logout"
                onClick={this.props.logoutUser}></input>
            </div>) : (   <div className="bigDiv"><div className="stack"><input
                type="text"
                name="userName"
                placeholder="userName"
                onChange={(event) => this.props.updateNameInput(event.target.value)}>
            </input>
            <input
                type="password"
                name="password"
                placeholder="password"
                onChange={(event) => this.props.updatePassInput(event.target.value)}>
            </input>
            <input type="submit"
             name="submit"
              placeholder="submit" 
              onClick={this.props.loginUser}></input>
              </div>
            <p>{this.props.nameInput}</p>
            <p>{this.props.passInput}</p>
            <p>{this.props.tryAgain ? "Try again" : ""}</p>
            <p>{this.props.users}</p>
        </div>)
    );
    }
}

const mapDispatchToProps = {
    updateNameInput,
    updatePassInput,
    loginUser,
    logoutUser,
    fetchUsers
}

function mapStateToProps(state) {
    return {
      //name : state.name,
      nameInput : state.nameInput,
      passInput: state.passInput,
      currentUser : state.currentUser,
      tryAgain : state.tryAgain,
    }
  }




export default connect(mapStateToProps, mapDispatchToProps)(FormInputs);