
import { Component, useRef, useState } from "react";


export const Dashboard = (props) => {
   const ref = useRef(null)
    return (
        <>
            <h1>{props.title.username}</h1>
            <h1>{props.title.password}</h1>
        </>

    )
}
// export class Dashboard extends Component {
//     state= {
//         username: 'User'
//     }
//     render() {
//         return (
//             <>
//                 <h1>{this.props.title.username}</h1>
//                 <h1>{this.props.title.password}</h1>
//                 <input type="text" value={this.state.username} />
//                 <button type="button" onClick={() => {
//                   this.setState({username:'New User'})
//                 }} >Click Me</button>
//             </>

//         )
//     }
// }