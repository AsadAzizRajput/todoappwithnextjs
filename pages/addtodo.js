import React from 'react';
import Router from 'next/router'
import fetch from 'isomorphic-unfetch'
import { message,Layout,List,Form,Input,Icon,Button  } from 'antd';


const {
  Header, Content,
} = Layout;

const FormItem = Form.Item

const axios = require('axios');


 class AddTodoSetup extends React.Component {
  constructor(props) {
    super(props);
  }

  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let data = {
          title:values.name,
          order:values.order,
          completed:false
        }

        console.log(values);
        fetch('http://todo-backend-rails.herokuapp.com', {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(data),
          headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
        .then(response =>  Router.push('/alltodo'))
        .catch(error => console.error('Error:', error));
      

        
      }
    });
  }


  render() {
    
    const { getFieldDecorator } = this.props.form;
    return (
      <div >
      <Layout>
      <Header style={{'backgroundColor':'#ff4d4f'}}> 
      Add Todos</Header>
      <Content> 
      <Form onSubmit={this.handleSubmit}>
        
          <FormItem>
            {getFieldDecorator('name', {
              rules: [{ required: true, message:'' }],
            })(
              <Input  type="text" placeholder='Type Todo...' />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('order', {
              rules: [{ required: true, message:'' }],
            })(
              <Input  type="text" placeholder='Type order...' />
            )}
          </FormItem>
          <FormItem>
          <Button type="primary" htmlType="submit" className="signup-form-button">
             Add
          </Button>
          </FormItem>
       </Form>  
    </Content>
    <style jsx>{`
      h1, a {
        font-family: "Arial";
        color:red;
        background-color:"blue";
            }
   
    `}</style>
    </Layout>
      </div>
    );
  }
}



const addtodo = Form.create()(AddTodoSetup);

export default addtodo;

