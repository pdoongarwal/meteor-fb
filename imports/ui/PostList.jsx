import React from "react";
import { List, Comment } from "antd";

export default function PostList({ comments }) {
  return (
    <List
      dataSource={comments}
      header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
      itemLayout="horizontal"
      renderItem={props => <Comment {...props} />}
    />
  );
}
