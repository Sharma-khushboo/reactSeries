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
const [userid, setUserId] = useState();
// crud - create read update delete
// adduser..........
const addUser =()=>{
    const user ={
    id:userdata.length+1,
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
//edituser.........
const edituser = (id)=>{
    setEditUserField(true);
    console.log(id);
    console.log(userdata[id]);
    setName(userdata[id].name);
    setEmail(userdata[id].email);
    setPassword(userdata[id].password);
    setPhone(userdata[id].phone);
//setUserId(id.id);
}
// const edituser = (id)=>{
//     setEditUserField(true);
//     console.log(id);
//     //console.log(userdata[id]);
//     setName(id.name);
//     setEmail(id.email);
//     setPassword(id.password);
//     setPhone(id.phone);
//     setUserId(id.id);
// }
const saveEdit = ()=>{
    let user = {
        id: userid,
        name: name,
        phone: phone,
        password: password,
        email: email,
    };
    console.log(user);
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
        <button onClick={saveEdit()}>Edit User</button>
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
                
               <h3>Id : {item.id}</h3>
              <p >{item.name}</p>
              <p>{item.email}</p>
              <p>{item.phone}</p>
              <p>{item.password}</p>
              {/* <button onClick={()=> edituser(index)}> edit </button> */}
              <button onClick={()=> edituser(index)}> edit </button>
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
