import Navbar from '../components/Navbar';
import Head from 'next/head'

const Layout = (props) =>(
    <div>
        <Head>
            <title>testing app</title>
            <link rel="https://bootswatch.com/4/cerulean/bootstrap.min.css" />
        </Head>
        <Navbar />
        {props.children}
    </div>
)
export default Layout;