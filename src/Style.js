import React from 'react'
import './Custom.css'

 function Style(prop){

    const h2={
        color: 'orangered',
        textAlign: 'center',
        fontSize: '50px'
    }
    const h3={
        color: 'red',
        textAlign: 'center',
        fontSize: '30px'
    }
     return(
         <div>
             <h1 className="header">Style in React</h1>
             <h2 style={prop.data==="apply" ? h2:h3}>
                 React inline style
             </h2>

         </div>
     )

 }

 export default Style;