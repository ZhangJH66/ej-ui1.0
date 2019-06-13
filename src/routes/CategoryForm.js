import React from 'react';
import {Form,Modal,Input} from 'antd'

class CategoryForm extends React.Component {

  render(){
    // 父组件传递给子组件值
    const { visible, onCancel, onCreate, form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Modal
          visible={visible}
          title="添加衣服类别信息"
          okText="提交"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="衣服类别">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入衣服名称!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="衣服数量">
              {getFieldDecorator('num', {
                rules: [{ required: true, message: '请输入衣服数量!' }],
              })(<Input />)}
            </Form.Item>
            
           
          </Form>
        </Modal>
    );
  }
}
export default Form.create()(CategoryForm);