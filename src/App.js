import "./App.css";
import { useEffect, useState } from "react";
import data from "./db.json"
// import data from db.json
import UserDetails from "./components/UserDetails";
function App() {
  const [users,setUsers] = useState(data)
  const handleAscending = ()=>{

    let data = users.sort((a,b)=>{
      if(a.first_name < b.first_name){
        return -1
      }else{
        return 1
      }
    })

    setUsers([...data])

  }

  const handleDescending = ()=>{
    let data = users.sort((a,b)=>{
      if(a.first_name < b.first_name){
        return 1
      }else{
        return -1
      }
    })

    setUsers([...data])


  }

  useEffect(()=>{
    setUsers(data)
  },[users])


  return (
    <div className="App" data-testid = 'app'>
      <button className="btn" onClick={handleAscending}  data-testid = 'sort-asc-btn'>Sort by Asc</button>
      <button className="btn" onClick={handleDescending} data-testid = 'sort-desc-btn'>Sort by Desc</button>
      {/*  map through the users data and pass props to the Userdetails component */}
      {users.map((user)=>{
        return <UserDetails key={user.id} user={user}/>
      })}
    </div>
  );
}

export default App;
