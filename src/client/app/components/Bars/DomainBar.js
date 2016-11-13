import React, { PropTypes, Component } from 'react'
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import {render} from 'react-dom';
import * as CategoryActions from '../../actions/Category/CategoryActions.js';
import * as LookbackActions from '../../actions/App/LookbackActions.js';

class DomainBar extends Component {

  constructor(props) {
    super(props);
    //TODO: favicon
  }

  displayDetails(){
    this.props.lookback_actions.updateDomainDetailsDisplay(this.props.domain);
  }

  render() {
    var id_code = this.props.tab_id + "-" + this.props.domain.pk;
    return (
      <div
        id = {id_code}
        className="domain-bar"
        style= {this.props.style}
        width = {this.props.width}
        onMouseOver={() => {
          this.displayDetails();
          this.highlight_previous();
        }}
        onMouseLeave={() => {
          this.unhighlight_previous();
        }}>
        <img id="domain-favicon" src={this.props.favicon_url}/>
        <label htmlFor='domainBar'> {this.props.domain.title} </label>

      </div>
    )
  }

  highlight_previous() {
    if(this.props.domain.opened_from_domain){
      document.getElementById(this.props.domain.opened_from_tabid + "-" + this.props.domain.opened_from_domain).classList.add('previousPath');
    }
  }
  unhighlight_previous() {
    if(this.props.domain.opened_from_domain){
      document.getElementById(this.props.domain.opened_from_tabid + "-" + this.props.domain.opened_from_domain).classList.remove('previousPath');
    }
  }
}

let mapStateToProps = (state) => ({
    currentPage : state.currentPage,
    domainDetails: state.domainDetails
})

let mapDispatchToProps = (dispatch) => ({
  lookback_actions: bindActionCreators(LookbackActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(DomainBar);
