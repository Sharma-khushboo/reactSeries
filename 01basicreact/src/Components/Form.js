import { useEffect, useState } from "react";

function Form (){
const [name, setName]= useState('');
const [email, setEmail]= useState('');
const [phone, setPhone]= useState('');
const [userdata, setUserData]= useState({});

useEffect(()=>{
 console.log('this is name' , name);
 console.log('this is email', email);
 console.log('this is phone', phone);

},[name, email, phone]);

const submitHandler =(e)=>{
 e.preventDefault();
 if(
    name.trim().length !== 0 &&
    email.trim().length !== 0 &&
    phone.trim().length !== 0 
 ){
    const inputdetails ={
        name : name,
        email: email,
        phone: phone,
    };
    console.log(inputdetails);
    setUserData(inputdetails);

    alert('done!');
    setName('');
    setEmail('');
    setPhone('');
 }else{
    alert('please fill all input details');
 }
};


 return (
<>
<form onSubmit={(e)=> submitHandler(e)}>
    <input
    type="text"
    placeholder="enter your name"
    value={name}
    onChange={(e)=> setName(e.target.value)}

    /><br/>
    <input
    type="email"
    placeholder="enter your email"
    value={email}
    onChange={(e)=> setEmail(e.target.value)}

    /><br/>
    <input
    type="number"
    placeholder="enter your phone no."
    value={phone}
    onChange={(e)=> setPhone(e.target.value)}

    /><br/>
    <button type="submit"  >submit</button>
    <br/>
    <span>this is your name : {name} no. :{phone} and email :{email}</span>
</form>

{Object.getOwnPropertyNames(userdata).length !== 0 ?(
    <div>
        <p>Name : {userdata.name}</p>
        <p>Email : {userdata.email}</p>
        <p>phone : {userdata.phone}</p>

</div>
):('')

}
</>
 )
};

export default Form;
