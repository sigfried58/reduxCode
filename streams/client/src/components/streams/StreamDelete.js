import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream } from '../../actions';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    return (
      <Fragment>
        <button className="ui button negative">Delete</button>
        <button className="ui button">Cancel</button>
      </Fragment>
    );
  }

  renderContent() {
    if (!this.props.streams) {
      return 'Are you sure you want to delete this stream?';
    }

    return `Are you sure you want to delete this stream with title ${
      this.props.streams.title
    }`;
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    streams: state.streams[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamDelete);
