import { useState } from "react";
import ReactDOM from "react-dom/client";

const Dashboard = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => {
      console.log(values);
      return {...values, [name]: value};
     
    });
  
    // console.log(inputs);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <>
  {/* BEGIN: Content*/}
  <div className="app-content content ">
    <div className="content-overlay" />
    <div className="header-navbar-shadow" />
    <div className="content-wrapper container-xxl p-0">
      <div className="content-header row"></div>
      <div className="content-body">
      <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter your Email:
        <input 
          type="email" 
          name="email" 
          value={inputs.email || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
      </div>
    </div>
  </div>
  {/* END: Content*/}
</>

  )
}

export default Dashboard