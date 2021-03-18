import React, { Component } from 'react';

class API extends Component {
    constructor() {
        super();
        this.state = {
          users: null
        }
      }
      componentDidMount() {
        fetch('https://reqres.in/api/users?page=2').then((resp) => {
          resp.json().then((result) => {
            this.setState({ users:result.data })
          })
        })
      }
    render() {
        return (
            <div>
               <h1>API Fetch</h1>
        {
          this.state.users ?
            this.state.users.map((item, i)=>
              <div>
                <p>{i}--- {item.first_name}</p>
              </div> 
            )
            :
            null
        } 
            </div>
        );
    }
}

export default API;