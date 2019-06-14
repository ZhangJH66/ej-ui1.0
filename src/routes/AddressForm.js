import React from 'react';
import {Form,Modal,Input} from 'antd'

class AddressForm extends React.Component {

  render(){
    // 父组件传递给子组件值
    const { visible, onCancel, onCreate, form } = this.props;
    const { getFieldDecorator } = form;
    getFieldDecorator("id");
    getFieldDecorator("coustomer_id");
    return (
      <Modal
          visible={visible}
          title="添加地址信息"
          okText="提交"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="省份">
              {getFieldDecorator('province', {
                rules: [{ required: true, message: '请输入省份!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="城市">
              {getFieldDecorator('city', {
                rules: [{ required: true, message: '请输入城市!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="区域">
              {getFieldDecorator('area', {
                rules: [{ required: true, message: '请输入街区!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="详细地址">
              {getFieldDecorator('address', {
                rules: [{ required: true, message: '请输入详细地址!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="电话">
              {getFieldDecorator('telephone', {
                rules: [{ required: true, message: '请输入电话!' }],
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
})(AddressForm);