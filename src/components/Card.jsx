import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Card = ({icon, image, title, desc,name}) => {
    const Inner = ()=>(
        <span>
            {icon &&(
                <>
                    <h4>{title}</h4>
                    <FontAwesomeIcon icon={icon}/>
                    <div>{desc}</div>
                </>

            )}
            {image &&(
                <>
                    <div><img src={image} alt={name}/></div>
                    <p>{desc}</p>
                    <p>{name}</p>
                </>
            )}
        </span>
    )
    return (
        <div><Inner/></div>
    )
}
export default Card
