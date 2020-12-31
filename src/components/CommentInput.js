import React, { Component } from "react";
import PropTypes from "prop-types";

export default class CommentInput extends Component {
  static propTypes = {
    username: PropTypes.any,
    onSubmit: PropTypes.func,
    onUserNameInputBlur: PropTypes.func,
  };

  static defaultProps = {
    username: "",
    content: "",
  };

  constructor(props) {
    super(props);
    this.state = {
      username: props.username,
    };
  }

  //focus on the content area automatically
  componentDidMount() {
    this.textarea.focus();
  }

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

  handleUsernameBlur = (e) => {
    if (this.props.onUserNameInputBlur) {
      this.props.onUserNameInputBlur(e.target.value);
    }
  };

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
