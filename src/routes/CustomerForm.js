import React from 'react'
import {Form,Modal,Input,Radio} from 'antd'

class CustomerForm extends React.Component {

  render(){
    // 父组件传递给子组件值
    const { visible, onCancel, onCreate, form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Modal
          visible={visible}
          title="添加顾客信息"
          okText="提交"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="姓名">
              {getFieldDecorator('realname', {
                rules: [{ required: true, message: '请输入姓名!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="手机号">
              {getFieldDecorator('telephone', {
                rules: [{ required: true, message: '请输入手机号!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="密码">
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }],
              })(<Input.Password />)}
            </Form.Item>
           
          </Form>
        </Modal>
    );
  }
}
export default Form.create()(CustomerForm);