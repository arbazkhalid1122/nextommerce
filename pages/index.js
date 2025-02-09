import { useRouter } from "next/router";
import { useEffect } from "react";

function App() {
    const router = useRouter();
      useEffect(() => {
          if(!localStorage.getItem("isAdmin") && !localStorage.getItem("buyer") || router.pathname === '/') {
            localStorage.removeItem("isAdmin");
            localStorage.removeItem("buyer"); 
            router.push("/auth/login");
          }
      
      
        }, []);
    
    return (
        <div>
            <h1>Hello, World!</h1>
        </div>
    )
}
export default App;