import React,{useState,useEffect} from 'react'
import './signup.css'
import {Link} from 'react-router-dom'



function Signup(){
    // const [login,setLogin] = useState(document.getElementById("form-login"));
 
useEffect(()=> {
    window.addEventListener("resize", handleLogin)
    window.addEventListener("resize", handleRegister)
})
    const handleLogin = ()=> {
        var login = document.getElementById("form-login");
        var register = document.getElementById("form-register");
        var underline = document.getElementById("underline");
        let size = window.innerWidth;
     
        if(size <= 500 ){
            register.style.transform = "translateX(300px)";
            login.style.transform = "translateX(350px)"
            underline.style.transform = "translateX(-10px)"
     }else{
        register.style.transform = "translateX(370px)";
        login.style.transform = "translateX(380px)"
        underline.style.transform = "translateX(0px)" 
     }
        
    }
    const handleRegister = ()=>{
        var login = document.getElementById("form-login");
        var register = document.getElementById("form-register");
        var underline = document.getElementById("underline");
        let size = window.innerWidth;
      
        if(size <= 500 ){
            register.style.transform = "translateX(0px)"
            login.style.transform = "translateX(0px)"
            underline.style.transform = "translateX(90px)" 
        }else{
          register.style.transform = "translateX(0px)"
         login.style.transform = "translateX(0px)"
         underline.style.transform = "translateX(150px)" 
        }

    }
   
   
    return(
        <>
            <div className="main-signup">
                <main>
                    <div className="signup">
                        <div className="form-container">
                            <div className="form-btn">
                                <span onClick={handleLogin}>Login</span>
                                <span onClick={handleRegister}>Register</span>
                                <hr id="underline"  />
                            </div>
                            <form id="form-login" >
                                <input type="text" placeholder="Username" />
                                <input type="password" placeholder="Password" />
                                <button type="submit" className="log-btn">Login</button>
                                <Link>Forgot password</Link>
                            </form>
                            <form id="form-register" >
                                <input type="text" placeholder="Username" />
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Password" />
                                <button type="submit" className="log-btn">Register</button>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}


export default Signup