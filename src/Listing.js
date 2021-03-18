import React from 'react'

class Listing extends React.Component{
    constructor(){
        super();
        this.state={
            list:[
                {name: "bilal", phone: "03356692500", email: "bilal@gmail.com"},
                {name: "Suleman", phone: "03326692500", email: "suleman98@gmail.com"},
                {name: "Amna", phone: "03136692592", email: "anna1995@gmail.com"},
                {name: "Mian", phone: "03006692592", email: "miansuleman198@gmail.com"},
                {name: "Kinza", phone: "03436692592", email: "kinoo2005@gmail.com"},
                {name: "Kinza Sameen", phone: "03362552233", email: "kinzasameen@gmail.com"},
                {name: "Sajjad Anwar", phone: "03366692592", email: "sajjadanwar@gmail.com"},
                {name: "Ahmed Bilal", phone: "03356692592", email: "bilal0202@gmail.com"}
            ]

        }
    }

    render(){
        return(
            <div>
                <h1>Listing with Map</h1>
                {
                this.state.list.map((i)=>
                <div>
                    <span>Name: {i.name} Phone: {i.phone}  Email:{i.email}</span>
                    
                </div>)}
            </div>
        )
    }
}

export default Listing;