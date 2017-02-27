import React, { PropTypes, Component } from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import * as UserActions from '../../actions/User/UserActions.js';
import * as PasswordConstants from '../../constants/PasswordConstants.js'

function getState() {
	return {
    current_password: "",
    new_password: "",
    confirm_password: "",
	}
}

class ChangeMyPassword extends Component {
  constructor(props) {
      super(props);
  }

  updateField(event){
    this.setState({ [event.target.id]: event.target.value });
  }

  changePassword(){
    if(this.state.new_password == this.state.confirm_password){
      this.props.user_actions.changeMyPassword(this.state.current_password, this.state.new_password, this.props.currentUser.token);
    } else {
      this.props.user_actions.changeMyPasswordToggle(PasswordConstants.Nonmatch);
    }
  }

  render () {

    return (
      <div>
        <div className ="row">
          <div className="col-xs-12">
            <div className="input-group">
              <input type="password" className="form-control" id="current_password" placeholder="Current Password" onChange={this.updateField.bind(this)} />
              <input type="password" className="form-control" id="new_password" placeholder="New Password" onChange={this.updateField.bind(this)} />
              <input type="password" className="form-control" id="confirm_password" placeholder="Confirm New Password" onChange={this.updateField.bind(this)} />
            </div>
            <br/>
            <span className="input-group-btn">
            <button className="btn btn-primary canteloupe add-category-btn" type="button" onClick={this.changePassword.bind(this)}>Submit</button>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
	currentUser : state.currentUser
})

let mapDispatchToProps = (dispatch) => ({
    user_actions: bindActionCreators(UserActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ChangeMyPassword);
