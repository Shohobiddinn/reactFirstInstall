
import { Component, createRef, useRef, useState } from "react";

export const Dashboard = () => {
    console.log('render');
    const ref = useRef(null)
    const array = ['q', 'w', 'e', 'r']
    const array1 = [5, 8, 130, 44];
    const refs = useRef(null)
    return (
        <>
            <button className="btn"
                ref={ref}
                onClick={() => {
                    console.log(ref.current);
                    if (ref.current.textContent == 'New content') {
                        ref.current.textContent = 'Click Me'

                    } else if (ref.current.textContent = 'Click Me') {
                        ref.current.textContent = 'New content'
                    }
                }}>Button</button>
            <button disabled ref={ref}>BTN1</button>
            <button disabled ref={ref}>BTN2</button>
            <button disabled ref={ref}>BTN3</button>
            <button disabled ref={ref}>BTN4</button>
            <button disabled ref={ref}>BTN5</button>
            <button ref={refs} onClick={() => {
                const found = array.find((e,i) => i == 2);

                console.log(found);
            }} >BTN6</button>



        </>

    )
}
// export class Dashboard extends Component {
//     ref = createRef();
//     render() {
//         return (
//             <>
//                 <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ex nostrum laboriosam labore exercitationem, repudiandae sed dolor, unde non animi voluptatem architecto ut ducimus quisquam vel, natus nobis incidunt voluptatibus.</h1>
//                 <button ref={this.ref} onClick={()=>{
//                     this.ref.current.textContent = 'Click Me'
//                     console.log(this.ref.current.textContent);
//                 }}>REF</button>
//             </>

//         )
//     }
// }