// import Message from "./Message"
// function App()
// {
//   return <div><Message/></div>
// }
// export default App


// import ListGroup from "./components/ListGroup"
// function App()
// {
//   let items=[
//     'new york',
//     'India',
//     'usa',
//     'japan'
// ];
// const handleSelectItem=(item:string)=>{console.log(item)}
 
//   return <div><ListGroup items={items} heading="cities"
//   onSelectItem={handleSelectItem}/></div>

// }
// export default App



//now passing text value like this is not good as what if we want to pass html so we use children property  of props to do so

//using text props
// function App(){
//   return <div>
//     <Alert>
//      text= "hello world"
//     </></div>
// }


//when using children we do not have to use a var to pass value
// import Alert from "./components/Alert"
// function App(){
//   return <div>
//     <Alert>
//       hello<span>world</span>
//     </Alert></div>
// }

// export default App



// import Button from "./components/Button"
// function App(){
  
//   return <div>
//     <Button name="ris"
//     color='danger'
//     onClick={()=>console.log('clicked')}>
     
//     </Button></div>
// }

// export default App


// alerting when button is clicked
import Button from "./components/Button"
import Alert from "./components/Alert"
import { useState } from "react" //to handle that alert appears only when button clicked
function App(){
  const [alertVisible,setVisibility]=useState(false)
  return <div>
    {alertVisible&&<Alert onClose={()=>setVisibility(false)}>My Alert</Alert>}
    <Button name="ris"
    color='danger'
    onClick={()=>{setVisibility(true)}}>
     
    </Button></div>
}

export default App