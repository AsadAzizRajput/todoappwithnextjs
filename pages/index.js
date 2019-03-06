import React from 'react';
import { message,Layout,List,Icon  } from 'antd';
import fetch from 'isomorphic-unfetch'
const {
  Header, Content,
} = Layout;

import Link from 'next/link'

const axios = require('axios');



 class AllTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state={AllTodos:[]}
  }
  static async getInitialProps({ req }) {
    const res = await fetch('http://todo-backend-rails.herokuapp.com/')
    const data = await res.json()
  
    console.log(`Show data fetched. Count: ${data.length}`)
  
    return {
      todo: data
    }
  }


//   componentDidMount(){
      
//     axios({
//         url: 'http://todo-backend-rails.herokuapp.com/',
//         method: 'GET',
//         headers: {
//           'Accept':'application/json',
//           'Content-Type': 'application/json'
//       }
//       }).then((response) => {
//         if(response.data){
//           message.success("Fetch Successfully");
//           this.setState({
//               AllTodos:response.data
//           })
//         }
//         else{
//           message.error("Error Fetching Todos");
//         }
//         console.log(response.data);
        
//       }).catch((error)=>{
//             console.log(error);
//       }) 

//     }
  
  
 
  render() {
    return (
      <div >     
      <Layout>
      <Header  style={{'backgroundColor':'#ff4d4f'}}>All Todos <span className="add-todo-btn"><Link href="/addtodo"><a>+</a></Link></span></Header>
      <Content> 
        <List
        bordered
        dataSource={this.props.todo}
        renderItem={(item,index) => (<List.Item key={index}>{item.title}
                
        </List.Item>
        )} />
    </Content>
    </Layout>
      </div>
    );
  }
}


  

export default AllTodo