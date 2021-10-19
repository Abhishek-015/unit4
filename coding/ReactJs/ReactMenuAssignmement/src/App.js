// import ContactUs from "./component/contactUs"
// import Download from "./component/download"
// import Help from "./component/help"
// import Home from "./component/home"
// import JoinUs from "./component/joinUs"
// import Login from "./component/login"
// import Search from "./component/search"
// import Setting from "./component/setting"



import {ContactUs,Download,Help,Home,JoinUs,Login,Search,Setting} from "./component/singleComponent" // all the fuctions in single component file
import "./App.css"

function App() {
  return (
  <>
  <div className="division">
  <ContactUs/>
   <Download/>
   <Help/>
   <Home/>
   <JoinUs/>
   <Login/>
   <Search/>
   <Setting/>
  </div>
   
  </>
  )
}

export default App;
