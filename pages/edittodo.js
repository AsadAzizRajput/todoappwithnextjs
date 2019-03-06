import React from 'react';
import Router from 'next/router'
import fetch from 'isomorphic-unfetch'
import { message,Layout,List,Form,Input,Icon,Button  } from 'antd';


const {
  Header, Content,
} = Layout;

const FormItem = Form.Item

const axios = require('axios');


 class edittodo extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let data = {
          title:values.name,
          order:values.order,
          completed:true
        }

        console.log(values);
        fetch('https://todo-backend-rails.herokuapp.com/'+this.props.show.id, {
          method: 'PATCH', // or 'PUT'
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
              initialValue:this.props.show.title
            })(
              <Input  type="text" placeholder='Type Todo...' />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('order', {
              rules: [{ required: true, message:'' }],
              initialValue:this.props.show.order
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

    </Layout>
      </div>
    );
  }
}






edittodo.getInitialProps = async function (context) {
    const { id } = context.query
    const res = await fetch(`https://todo-backend-rails.herokuapp.com/${id}`)
    const show = await res.json()
  
    console.log(`Fetched show: ${show.title}`)
  
    return { show }
  }

edittodo = Form.create()(edittodo);

export default edittodo;

