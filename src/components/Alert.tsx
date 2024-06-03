// import { ReactNode } from "react"

// interface Props{
//     children:ReactNode
// }
// //value of props is passed in app.tsx

// const Alert = ({children}:Props) => {
//   return (
//     <div className="alert alert-primary">{children}</div>
//   )
// }

// export default Alert


//when button clicked then alert
import { ReactNode } from "react"

interface Props{
    children:ReactNode
    onClose:()=>void
}
//value of props is passed in app.tsx

const Alert = ({children,onClose}:Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">{children}
     <button type="button" className="btn-close" 
     onClick={onClose}
     data-bs-dismiss="alert" aria-label="Close"></button>

    </div>
  )
}

export default Alert

