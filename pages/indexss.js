import React from 'react';
import { message,Layout,List,Icon  } from 'antd';
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
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



  
  
 
  render() {
    return (
      <div>
         <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>     
      
      </div>
    );
  }
}


  

export default AllTodo