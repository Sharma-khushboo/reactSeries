import { useEffect, useState } from "react";

function Home(){
    const [data, setData] = useState([]);
    const [isloaded, setIsLoaded] = useState(true);

    useEffect(()=>{
        getTodos('https://jsonplaceholder.typicode.com/todos');
    },[]);

    const getTodos =(url)=>{
        fetch(url,{ 
            method:'GET', 
            headers:{
                'Content-Type': 'application/json',
        }
    }).then((res)=>res.json())
    .then((result)=>{
        console.log('result of todos', result);
        if(result.length > 0 ){
            setData(result);
            setIsLoaded(false);

        }else{
            setIsLoaded(true);

        }
    });
    }

    return (
        <div>
        {/* <h1>This is Home page</h1> */}
        {
            isloaded?(
                <h1>Your content is loading........... please wait........</h1>
            ):(
                <div>
                    {data.map((item,index)=>{
                        const color = {
                            color : item.completed ? 'green':'red',
                        };
                        return(
                            <div key={index} style={{
                                 border:'2px solid yellow',
                                 margin:'0 auto', 
                                 width: '400px', 
                                 marginBlock:'30px', 
                                 padding:'30px',
                                 }}>

                            <h1>{item.userId}</h1>
                            <h2>{item.id}</h2>
                            <h2>{item.title}</h2>
                            <p>completed <span style={color}>{item.completed?("true"):("false ") }</span></p>

                            </div>
                        );
                    })}
                </div>
            )
        }
        
        </div>
    );
}

export default Home;