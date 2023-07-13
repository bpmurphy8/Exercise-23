import { useEffect, useState } from "react";

const Check1 = () => {

    let [counter,setCounter] = useState(0);
    let [title,setTitle] = useState(" My title");

    useEffect(() => {
        console.log("hello from use effect");
    });

    let changeTitleHandler = () => {
        setTitle("changed title");
    }
    useEffect( () => {
        document.title = title;
    },[title])
    

    // useEffect(() => {
    //     console.log("hello counter changed");
    //     if(counter%2==0){
    //         document.body.style.backgroundColor = "pink";
    //     }else{
    //         document.body.style.backgroundColor = "white";
    //     }
    // }), [counter];

    //     useEffect(() => {
    //     console.log("hello from use effect empty array");
    // }, []);

    let clickHandler1 = () => {
        counter++;
        setCounter(counter);
        // if(counter%2==0){
        //     document.body.style.backgroundColor = "pink";
        // }else{
        //     document.body.style.backgroundColor = "white"
        // }
    }

    let clickHandler2 = () => {
        counter = counter+2;
        setCounter(counter);
        if(counter%2==0){
            document.body.style.backgroundColor = "pink";
        }else{
            document.body.style.backgroundColor = "white"
        }
    }

    return ( 
        <div>
            <h2> Check 1 </h2>
            <button onClick={clickHandler1}> Click to increment</button><br/>
            <button onClick={clickHandler2}> Click to increment</button><br/>
            <button onClick={changeTitleHandler}>Click to change title </button><br/>
            {counter}
        </div>
     );
}
 
export default Check1;