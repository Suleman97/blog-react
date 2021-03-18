import React from 'react'

export default class Forms extends React.Component{
    constructor(){
        super();
        this.state ={
            user:"",
            password: "",
            nameError: "",
            passwordError:""
        }
    }
    valid()
  {
    if(!this.state.user.includes("@") && this.state.password.length<5)
    {
      this.setState({nameError: "Invalid Name", passwordError: "Password can not be less than 5"})
    }
    else if(!this.state.user.includes("@") )
    {
      this.setState({nameError: "Invalid Name"})
    }
    else if(this.state.password.length<5)
    {
      this.setState({ passwordError: "Password can not be less than 5"})
    }
    else{
      return true;
    }
  }
  
  submit() {
    this.setState({nameError: "", passwordError: ""})
    if(this.valid()){
       alert("form has submited")
    }
    
  }
    render(){
        return(
            <div>
                <h1>Form </h1>
                <input type="text" name="User Name" onChange={(e)=>{this.setState({user:e.target.value})}} /> 
                <br/><br/>
                <p>{this.state.nameError}</p>
                <br/><br/>
                <input type="password" name="Password" onChange={(e)=>{this.setState({password:e.target.value})}} /> 
                <br/><br/>
                <p>{this.state.passwordError}</p>
                <br/><br/>
                <button onClick={()=> this.submit()} >Submit</button>
            </div>
        )
    }
}