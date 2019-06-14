import React from 'react';
import {Form,Modal,Input} from 'antd'

class OrderLineForm extends React.Component {

  render(){
    // 父组件传递给子组件值
    const { visible, onCancel, onCreate, form } = this.props;
    const { getFieldDecorator } = form;
    getFieldDecorator("id");
    getFieldDecorator("product_id");
    getFieldDecorator("order_id");
    return (
      <Modal
          visible={visible}
          title="添加订单显示信息"
          okText="提交"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="订单数量">
              {getFieldDecorator('number', {
                rules: [{ required: true, message: '请输入订单数量!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="产品号">
              {getFieldDecorator('product_id', {
                rules: [{ required: true, message: '请输入产品号!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="订单号">
              {getFieldDecorator('order_id', {
                rules: [{ required: true, message: '请输入订单号号!' }],
              })(<Input />)}
            </Form.Item>
           
          </Form>
        </Modal>
    );
  }
}
// 将通过props从父组件中获取的值拿出来设置到表单元素上
const mapPropsToFields = (props)=>{
  let obj = {};
  for(let key in props.initData){
    let val = props.initData[key];
    obj[key] = Form.createFormField({value:val})
  }
  return obj;
}

export default Form.create({
  mapPropsToFields
})(OrderLineForm);
