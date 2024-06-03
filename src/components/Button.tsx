// interface Props{
//     name:string
// }


// function handle(){
// console.log('clicked')
// }
// const Button = ({name}:Props) => {
//   return (
//     <button 
//     className="btn btn-primary" 
//     onClick={handle} //or this can be added to props and then pass the function in app.tsx
//     >{name}</button>
//   )
// }

// export default Button



// using props to handle event and color of button
// interface Props{
//     name:string
//     color?:'primary'|'secondary'|'danger'
//     onClick:()=>void
// }


// const Button = ({name,color,onClick}:Props) => {
//   return (
//     <button 
//     className={"btn btn-"+color }
//     onClick={onClick}
//     >{name}
//     </button>
//   )
// }

// export default Button


//when button clicked then alert
interface Props{
    name:string
    color?:'primary'|'secondary'|'danger'
    onClick:()=>void
}


const Button = ({name,color,onClick}:Props) => {
  return (
    <button 
    className={"btn btn-"+color }
    onClick={onClick}
    >{name}
    </button>
  )
}

export default Button





