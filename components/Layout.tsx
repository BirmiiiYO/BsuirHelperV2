import Aside from "./Aside";
import Authorization from "./Authorization";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

const Layout = ({children}) =>(
    <div className='app'>
      <div className='container'>
      <div className='top-container'>
      <Header/>
      
      {/* <Authorization/> */}
      
     <Nav/>
      </div>
     <div className='main-container'>
     <Aside/>
<main>
{children}
</main>
     </div>
     <Footer/>
    </div>
    </div>
  )

  export default Layout;