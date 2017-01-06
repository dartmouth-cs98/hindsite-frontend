import React, { PropTypes, Component } from 'react'
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import {render} from 'react-dom';
import * as CategoryActions from '../../actions/Category/CategoryActions.js';
import * as LookbackActions from '../../actions/App/LookbackActions.js';

class PageBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="page-bar"
        style={this.props.style}
        onMouseOver={() => {
          if(this.props.currentPage == undefined || (this.props.page.page.url !== this.props.currentPage.url)){
            this.props.lookback_actions.setCurrentPage(this.props.page, true);
          }
        }}>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
    currentPage: state.currentPage,
})

let mapDispatchToProps = (dispatch) => ({
  lookback_actions: bindActionCreators(LookbackActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(PageBar);