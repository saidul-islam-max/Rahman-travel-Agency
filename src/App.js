import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import { Route, Router, Switch } from 'react-router';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Packag from './Component/Packag/Packag';
import Login from './Component/Login/Login';
import Contact from './Component/Contact/Contact';
import { BrowserRouter } from 'react-router-dom';
import NotFound from './Component/NotFound/NotFound';
import AuthProvider from './Context/AuthProvider';
import Footer from './Component/Footer/Footer';
import PackagDetails from './Component/PackagDetails/PackagDetails';
import AddPackage from './Component/AddPackage/AddPackage';
import ManagAllOrder from './Component/ManageAllOrder/ManagAllOrder';
import Order from './Component/Order/Order';
import PrivateRouter from './Component/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="  ">
      <AuthProvider>
      <BrowserRouter>
          <Header></Header>
        <Switch>
          <Route exact path="/">
             <Home></Home>
          </Route>
          <Route path="/home">
             <Home></Home>
          </Route>
          <Route path="/about">
             <About></About>
          </Route>
          <Route path="/package">
             <Packag></Packag>
          </Route>
          <Route path="/managpackege">
             <ManagAllOrder></ManagAllOrder>
          </Route>
          <Route path="/myOrder">
             <Order></Order>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          
          <PrivateRouter path="/packageDetails/:packagId">
               <PackagDetails></PackagDetails>
          </PrivateRouter>
          <Route path="/addpackage">
              <AddPackage></AddPackage>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>
          
          <Route path="*">
             <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
     
    </div>
  );
}

export default App;
