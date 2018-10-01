import { Components, registerComponent, withMessages } from 'meteor/vulcan:core';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withVote, hasVotedClient } from 'meteor/vulcan:voting';
import { FormattedMessage, intlShape } from 'meteor/vulcan:i18n';

class Vote extends PureComponent {

  constructor() {
    super();
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
    this.getActionClass = this.getActionClass.bind(this);
    this.hasUpVoted = this.hasUpVoted.bind(this);
    this.hasDownVoted = this.hasDownVoted.bind(this);

  }

  upVote(e) {

    e.preventDefault();

    const document = this.props.document;
    const collection = this.props.collection;
    const user = this.props.currentUser;

    if(!user){
      this.props.flash({id: 'users.please_log_in'});
    } else {
      this.props.vote({document, voteType: 'upvote', collection, currentUser: this.props.currentUser});
    } 
  }

  downVote(e) {

    e.preventDefault();

    const document = this.props.document;
    const collection = this.props.collection;
    const user = this.props.currentUser;

    if(!user){
      this.props.flash({id: 'users.please_log_in'});
    } else {
      this.props.vote({document, voteType: 'downvote', collection, currentUser: this.props.currentUser});
    } 
  }

  hasUpVoted() {
    return hasVotedClient({document: this.props.document, voteType: 'upvote'})
  }

  hasDownVoted() {
    return hasVotedClient({document: this.props.document, voteType: 'downvote'})
  }

  getActionClass() {

    const actionsClass = classNames(
      'vote-button',
      {upvoted: this.hasUpVoted()},
      {downvoted: this.hasDownVoted()},
    );

    return actionsClass;
  }

  render() {
    return (
      <div className={this.getActionClass()}>
        <a className="upvote-button" onClick={this.upVote}>
          <Components.Icon name="upvote" />
          <div className="sr-only"><FormattedMessage id="voting.upvote"/></div>
        </a>
        <div className="vote-count">{this.props.document.baseScore || 0}</div>
        <a className="downvote-button" onClick={this.downVote}>
          <Components.Icon name="downvote" />
          <div className="sr-only"><FormattedMessage id="voting.downvote"/></div>
        </a>
      </div>
    )
  }

}

Vote.propTypes = {
  document: PropTypes.object.isRequired, // the document to upvote
  collection: PropTypes.object.isRequired, // the collection containing the document
  vote: PropTypes.func.isRequired, // mutate function with callback inside
  currentUser: PropTypes.object, // user might not be logged in, so don't make it required
};

Vote.contextTypes = {
  intl: intlShape
};

registerComponent({ name: 'Vote', component: Vote, hocs: [withMessages, withVote] });
