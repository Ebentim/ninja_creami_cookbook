const Button = ({children, icon, href, onClick, additionalClassName}) => {
    const Inner = ()=>(
        <span>
            {icon &&(
                <img src={icon} alt="icon"/>
            )}
            <span>{children}</span>
        </span>
    )
    return (
       href?(
           <a href={href}>
               <Inner/>
           </a>
       ):(
           <Button onClick={onClick}><Inner/></Button>
       )
    )
}
export default Button
