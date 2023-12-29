import './App.css';
import Footer from './component/footer';
import Header from './component/header';
import Forgetpassword from './pages/Forgetpassword';
import Index from './pages/Index';
import LoginForm from './pages/LoginForm';
import Singup from './pages/Singup';
import AllBlog from './pages/AllBlog';
import OtpVerfy from './pages/OtpVerfy';
import ResetPassword from './pages/ResetPassword';
import Succesfull from './pages/Succesfull';
import EditProfile from './pages/EditProfile';
import './Styles.css'


function App() {
  return (
    <>
      <Header/>
      <Index/>
      <br />
      <LoginForm/>
      <br />
      <Singup /><br/> 
      <Forgetpassword /><br />
      <OtpVerfy /> <br />
      <ResetPassword /> <br/>
      <Succesfull /><br/>
      <AllBlog /> <br/>
      <EditProfile />    
          
      <Footer/>
    </>
  );
}

export default App;

