import Aside from "./Aside";
import Authorization from "./Authorization";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

const Layout = ({children}) =>(
  
    <div className='app'>
      <div className='container'>
      <Authorization/>
      <div className='top-container'>
      <Header/>
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