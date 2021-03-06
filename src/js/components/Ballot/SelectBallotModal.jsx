import React, { Component, PropTypes } from "react";
import { Modal } from "react-bootstrap";
import BallotElectionList from "./BallotElectionList";


export default class SelectBallotModal extends Component {
  // This modal will show a users ballot guides from previous and current elections.

  static propTypes = {
    show: PropTypes.bool,
    toggleFunction: PropTypes.func.isRequired,
    ballotElectionList: PropTypes.array.isRequired,
};

  constructor (props) {
    super(props);
    this.state = {};
  }


  render () {
    return <Modal show onHide={this.props.toggleFunction} className="ballot-election-list ballot-election-list__modal">
      <Modal.Header closeButton>
        <Modal.Title className="ballot-election-list__h1">See Ballot from Another Election</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <BallotElectionList ballotElectionList={this.props.ballotElectionList}
                            toggleFunction={this.toggleFunction}/>
      </Modal.Body>
    </Modal>;
  }
}
