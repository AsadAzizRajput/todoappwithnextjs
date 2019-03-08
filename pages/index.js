import React from 'react';
import { message,Layout,List,Icon,Button,Row,Col  } from 'antd';
import fetch from 'isomorphic-unfetch'
import Router from 'next/router'
const {
  Header, Content,
} = Layout;

import Link from 'next/link'

const axios = require('axios');

 class AllTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state={AllTodos:[]}
    this.delete = this.delete.bind(this);
  }
  


 

delete(record){
  let recordId = record.id;
  fetch('https://todo-backend-rails.herokuapp.com/'+recordId, {
    method: 'DELETE',
    headers:{
      'Accept':'application/json',
      'Content-Type': 'application/json'
    }
  }).then(response => Router.push('/'))
  .catch(error => console.error('Error:', error))
}  
  render() {
    return (
      <div>     
      <Layout>
      <Header  style={{'backgroundColor':'#ff4d4f'}}>All Todos <span className="add-todo-btn">
      <Link href="/addtodo"><a>+</a></Link>
      </span></Header>
      <Content> 
        <List
        bordered
        dataSource={this.props.todo}
        renderItem={(item,index) => (
         
        <List.Item key={index}>
            <Row>
          <Col span={24}>
          <Link href={`/edittodo?id=${item.id}`} as={`/edittodo/${item.id}`}>
          <a>{item.title}</a>
          </Link>
         
          <Button type="danger"  onClick={this.delete.bind(this, item)} >Delete</Button>
          </Col>
          
        </Row>
      
      

        </List.Item>
      
        )} />
      
    </Content>
    </Layout>
      </div>
    );
  }
}

AllTodo.getInitialProps = async function() {
  const res = await fetch('http://todo-backend-rails.herokuapp.com/')
  const data = await res.json()
  console.log(`Show data fetched. Count: ${data.length}`)
  return {
    todo: data
  }
}
  

export default AllTodo