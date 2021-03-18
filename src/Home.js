import React from 'react'

export default class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            name: "suleman",
            email: "suleman@react.com"
        }
    }

    
     
    render()
    {
        return(
            <div>
                
                <h1>{this.state.name}</h1>
                <h1>{this.state.email}</h1>
                {/* <button onClick={()=>{this.updateName()}}>update Name</button> */}
            </div>

        )
    }
}