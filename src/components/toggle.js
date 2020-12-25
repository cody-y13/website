import React,{useState} from 'react';

const Toggle =({children}) =>{
    const [toggle, settoggle] = useState(true);
    return(
        <div onClick={()=> settoggle(!toggle)}>
            {toggle ? children:''}
        </div>
    )
}

export default Toggle