import React from "react";
import { Form, Input, Button } from "antd";

const {  TextArea } = Input;

export default function Editor({ onChange, onSubmit, submitting, value }) {
  return (
    <div>
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          loading={submitting}
          onClick={onSubmit}
          type="primary"
        >
          Add Comment
        </Button>
      </Form.Item>
    </div>
  );
}
