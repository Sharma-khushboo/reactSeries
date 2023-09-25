import { useState } from "react";

function Form (){
let [name, setName]= useState('');
let [email, setEmail]= useState('');
let [phone, setPhone]= useState('');

 return (
<>
<form>
    <input
    type="text"
    placeholder="enter your name"

    /><br/>
    <input
    type="email"
    placeholder="enter your email"

    /><br/>
    <input
    type="number"
    placeholder="enter your phone no."

    /><br/>
    <button type="submit" >submit</button>
    <br/>
    <span>this is your name :{name} no. :{phone} and email :{email}</span>
</form>
</>
 )
};

export default Form;
