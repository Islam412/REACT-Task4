import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Post from './Post';
import SideMenu from './SideMenu';


const showCategories = true;
function App() {
  return (
    <div className="App">
      <Header />

      
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* post and side menu container */}
        <div style={{ display: "flex", width: "60%" }}>
          <div style={{ width: "70%" }}>
            {/* post  */}
            <Post />
            <Post postName="Code Acadmy" postBody="This Acadmy is the best off learn code" />
            <Post postName="Learn Code" postBody="This Acadmy is the best off learn code for easy" />
            <Post postName="Code Acadmy Children" postBody="This Acadmy is the best off learn code for children" />
            <Post postName="اكادمية تعلم" postBody="تعمل علي استخدام افضل وسائل التعلم بصورة مرحة" />
            <Post postName="اكادمية فنون" postBody="تعمل علي تعلم الاطفال الهتمام بذاتهم وتلوين حياتهم" />
            <Post postName="Code Acadmy" postBody="This Acadmy is the best off learn code" />
            <Post postName="Code Acadmy" postBody="This Acadmy is the best off learn code" />
            <Post postName="Code Acadmy" postBody="This Acadmy is the best off learn code" />
            <Post postName="Code Acadmy" postBody="This Acadmy is the best off learn code" />
            <Post postName="Code Acadmy" postBody="This Acadmy is the best off learn code" />
            <Post postName="Code Acadmy" postBody="This Acadmy is the best off learn code" />
            <Post postName="Code Acadmy" postBody="This Acadmy is the best off learn code" />
            <Post postName="Code Acadmy" postBody="This Acadmy is the best off learn code" />
            <Post postName="Code Acadmy" postBody="This Acadmy is the best off learn code" />
            <Post postName="Code Acadmy" postBody="This Acadmy is the best off learn code" />
            {/* ==post== */}
          </div>
          {/* ==post and side menu container== */}

          {/* side menu */}
          <div style={{ width: "30%" }}>
            <AppSideMenu/>
          </div>
          {/* ==side menu== */}
        </div>
        
      </div>


    </div>
  );
}


function AppSideMenu(){
  if(showCategories == true){
    return (<SideMenu />);
  }else {
    return null;
  }
  
}

export default App;
