import { useEffect, useState } from "react";

const inputstyle = {
    border: "red 1px solid",
    width: "70%",
    marginLeft:"15%",
    padding:"5px"
}
function Demoform (){
const [name, setName]= useState('');
const [email, setEmail]= useState('');
const [phone , setPhone]=useState('');
const [password, setPassword]= useState('');
const [ userdata, setUserData]= useState([]);
const [edituserfield, setEditUserField]= useState(false);


// adduser..........
const addUser =()=>{
    const user ={
    name: name,
    email:email,
    password:password,
    phone:phone
};
console.log(user);
setUserData((prev)=> [...prev,user]);

setName("");
setEmail("");
setPhone("");
setPassword("");
};
// edituser.........
// const edituser = (id)=>{
//     setEditUserField(true);
//     console.log(id);
//     console.log(userdata[id]);
//     setName(userdata[id].name);
//     setEmail(userdata[id].email);
//     setPassword(userdata[id].password);
//     setPhone(userdata[id].phone);
// }
const edituser = (id)=>{
    setEditUserField(true);
    console.log(id);
    //console.log(userdata[id]);
    setName(id.name);
    setEmail(id.email);
    setPassword(id.password);
    setPhone(id.phone);
}
//usereffect............
useEffect(()=>{
    console.log(userdata);
},[userdata]);

return (
    <>

    <input
    type="text"
    placeholder="enter your name"
    value={name}
    onChange={(e)=> setName(e.target.value)}
    style={inputstyle}
    />
    <br/><br/>
     <input
    type="email"
    placeholder="enter your email"
    value={email}
    onChange={(e)=> setEmail(e.target.value)}
    style={inputstyle}
    />
    <br/><br/>
     <input
    type="number"
    placeholder="enter your number"
    value={phone}
    onChange={(e)=> setPhone(e.target.value)}
    style={inputstyle}
    />
    <br/><br/>
     <input
    type="password"
    placeholder="enter your pasword"
    value={password}
    onChange={(e)=> setPassword(e.target.value)}
    style={inputstyle}
    />
    <br/><br/>

    {!edituserfield ? (<button style={inputstyle} onClick={addUser}>add</button>
    ) : (
        <button>Edit User</button>
    )}
    

<div>
    <h2 style={{textAlign: "center"}}>Users {userdata.length}</h2>
    {userdata.length !== 0 ?
    userdata.map((item,index)=>{
        return (
            <>
            <div style={{
                      textAlign: "center",
                      border: "1px solid grey",
                      width: "40%",
                      margin: "40px auto",
                    }}>
                
               <h3>user : {index}</h3>
              <p >{item.name}</p>
              <p>{item.email}</p>
              <p>{item.phone}</p>
              <p>{item.password}</p>
              {/* <button onClick={()=> edituser(index)}> edit </button> */}
              <button onClick={()=> edituser(item)}> edit </button>
            </div>
            </>
        )
    })
     : " no data"
    }


</div>
    </>
)

};

export default Demoform;
