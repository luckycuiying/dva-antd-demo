import React, { Component } from 'react'
import { Layout, Form, Input, Icon, Cascader, Select, Row, Col, Button, Checkbox ,AutoComplete,message} from 'antd'
import styled from 'styled-components';
import { connect } from 'dva'
import { addressOptions } from './constants'
const { Footer, Content } = Layout;
const FormItem = Form.Item
const { Option } = Select
const AutoCompleteOption = AutoComplete.Option;

class Login extends Component {
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.loginForm.props.form.getFieldValue())
        this.loginForm.props.form.validateFields([],(error,values)=>{
            console.log(values)
            if(error){
                message.error('表单字段输入不合法')
            }else{
                this.props.dispatch({
                    type:"login/signup",
                    payload:values
                })
            }
        });
    }
    render() {
        return (
            <Layout>
                <Content>
                    <LoginForm 
                    handleSubmit={this.handleSubmit} 
                    wrappedComponentRef={instance=>this.loginForm=instance}
                    />
                </Content>
            </Layout>
        )
    }
}
@Form.create()
class LoginForm extends Component {
    state={
        autoCompleteResult:[],
        rePasswordDirty:false
    }
    handleRepasswordBlur =(event)=>{
        this.setState({
            rePasswordDirty:this.state.rePasswordDirty || event.target.value
        })
    }
    handleWebsiteSearch=(value)=>{
        let result;
        if(!value ||value.indexOf('@')>=0){
            result =[]
        }else{
            result =['gmail.com', '163.com', 'qq.com'].map(domain=>`${value}@${domain}`)
        }
        this.setState({
            autoCompleteResult:result
        })
    }
    // 自定义校验方法
    comparePassword=(rule,value,callback)=>{
        let password =  this.props.form.getFieldValue('password')
        if(value ==password){
            callback()
        }else{
            callback('密码不一致')
        }
    }
    validateRepassword=(rule,value,callback)=>{
        this.state.rePasswordDirty&&this.props.form.validateFields(['repassword'],{force:true})
    }
    render() {
        let { getFieldDecorator } = this.props.form
        let {autoCompleteResult } =this.state;
        let { handleSubmit} = this.props
        const children = autoCompleteResult.map((email)=>{
            return <Option key ={email}>{email}</Option>
        })
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
            },
        }
        const lastFormItemLayout = {
            wrapperCol: {
               span:24
            },
        };

        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86'
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        )
        const websiteOptions = autoCompleteResult.map((website)=>{
            return <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        })
        return (
            <FormWrapper>
                <Form onSubmit={handleSubmit} style={{ width: '500px' }} {...formItemLayout}>
                    <h3>欢迎注册</h3>
                    <FormItem label="用户名" >
                        {
                            getFieldDecorator('username', {
                                rules: [{ required: true, message: '用户名必须输入' }]
                            })(<Input prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} />)
                        }
                    </FormItem>
                    <FormItem label="密码">
                        {
                            getFieldDecorator('password', {
                                rules: [{ required: true, message: '密码必须输入' },{
                                    validator:this.validateRepassword
                                }]
                            })(<Input prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />} />)
                        }
                    </FormItem>
                    <FormItem label="确认密码">
                        {
                            getFieldDecorator('repassword', {
                                rules: [{ required: true, message: '确认密码必须输入' },
                                // 自定义校验规则
                                {validator:this.comparePassword}
                            ]
                            })(<Input onBlur={this.handleRepasswordBlur} prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />} />)
                        }
                    </FormItem>
                    <FormItem label="邮箱" >
                        {
                            getFieldDecorator('email', {
                                rules: [{ required: true, message: '邮箱必须输入' }]
                            })(<Input prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />} />)
                        }
                    </FormItem>
                    <FormItem label="地址">
                        {
                            getFieldDecorator('address', {
                                initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                                rules: [
                                    { type: 'array', required: true, message: 'Please select your habitual residence!' },
                                ],
                            })(<Cascader options={addressOptions} />)
                        }
                    </FormItem>
                    <FormItem label="手机号">
                        {
                            getFieldDecorator('phone', {
                                rules: [{ required: true, message: '手机号必须输入' }]
                            })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)
                        }
                    </FormItem>
                    <Form.Item label="个人主页">
                        {getFieldDecorator('website', {
                            rules: [{ required: true, message: 'Please input website!' }],
                        })(
                            <AutoComplete
                                dataSource={websiteOptions}
                                onSearch={this.handleWebsiteSearch}
                                placeholder="website"
                            >{
                                children
                            }
                            </AutoComplete>,
                        )}
                    </Form.Item>
                    <Form.Item label="Captcha" extra="We must make sure that your are a human.">
                        <Row gutter={8}>
                            <Col span={12}>
                                {getFieldDecorator('captcha', {
                                    rules: [{ required: false, message: 'Please input the captcha you got!' }],
                                })(<Input />)}
                            </Col>
                            <Col span={12}>
                                <Button>Get captcha</Button>
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('agreement', {
                            valuePropName: 'checked',
                        })(
                            <Checkbox>
                                I have read the <a href="">agreement</a>
                            </Checkbox>,
                        )}
                    </Form.Item>
                    <Form.Item {...lastFormItemLayout}>
                        <Button type="primary" htmlType="submit" style={{width:'100%'}}>
                            Register
                        </Button>
                        已有账号？<a onClick={this.props.handleChangeIsLogin}>立刻登录</a>
                    </Form.Item>
                </Form>
            </FormWrapper>
        )
    }
}


const FormWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:calc(100vh-70px);
    h3{
        text-align:center;
    }
    form{
        border:1px solid #999;
        boder-radius:5px;
        padding:20px
    }
`
export default connect()(Login)