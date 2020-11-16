import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentList from "./CommentList";

class CommentInput extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      content: "",
    };
  }

  //focus on the content area automatically and return the username in the local storage
  componentDidMount() {
    this.textarea.focus();
    this._loadUsername();
  }

  // //render the username in the local storage
  // UNSAFE_componentWillMount = () => {
  //   this._loadUsername();
  // };

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handleContentChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleSubmit = () => {
    if (this.props.onSubmit) {
      this.props.onSubmit({
        username: this.state.username,
        content: this.state.content,
        createdTime: +new Date(),
      });
    }
    this.setState({ content: "" });
  };

  //private function
  _saveUsername(username) {
    localStorage.setItem("username", username);
  }

  handleUsernameBlur = (e) => {
    this._saveUsername(e.target.value);
  };

  _loadUsername() {
    const username = localStorage.getItem("username");
    if (username) {
      this.setState({ username });
    }
  }

  render() {
    return (
      <div className="comment-inptut">
        <div className="comment-field">
          <span className="comment-field-name">用户名：</span>
          <div className="comment-field-input">
            <input
              value={this.state.username}
              onBlur={this.handleUsernameBlur}
              onChange={this.handleUsernameChange}
            />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-field-input">
            <textarea
              ref={(textarea) => (this.textarea = textarea)}
              value={this.state.content}
              onChange={this.handleContentChange}
            />
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.handleSubmit}>发布</button>
        </div>
      </div>
    );
  }
}

CommentList.propTypes = {
  onSubmit: PropTypes.func,
};

export default CommentInput;
