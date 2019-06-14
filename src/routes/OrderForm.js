import React from 'react';
import {Form,Modal,Input} from 'antd'

class OrderForm extends React.Component {

  render(){
    // 父组件传递给子组件值
    const { visible, onCancel, onCreate, form } = this.props;
    const { getFieldDecorator } = form;
    getFieldDecorator("id");
    getFieldDecorator("coustomer_id");
    getFieldDecorator("waiter_id");
    getFieldDecorator("address_id");
    return (
      <Modal
          visible={visible}
          title="添加订单管理信息"
          okText="提交"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="订单总量">
              {getFieldDecorator('total', {
                rules: [{ required: true, message: '请输入订单总量!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="顾客号">
              {getFieldDecorator('customer_id', {
                rules: [{ required: true, message: '请输入顾客号!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="服务员号">
              {getFieldDecorator('waiter_id', {
                rules: [{ required: true, message: '请输入服务员号!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="地址号">
              {getFieldDecorator('address_id', {
                rules: [{ required: true, message: '请输入地址号!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="订单时间">
              {getFieldDecorator('order_time', {
                rules: [{ required: true, message: '请输入订单时间!' }],
              })(<Input />)}
            </Form.Item>
    
         </Form>
        </Modal>
    );
  }
}
//将通过props从父组件中获取的值拿出来设置到表单元素上
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
})(OrderForm);