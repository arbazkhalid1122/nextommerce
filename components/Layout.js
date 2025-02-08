// import React, { useState } from "react";
// import Sidebar from "./admin/SideBar";
// import Navbar from "./admin/Navbar";
// import { useRouter } from "next/router";

// export default function Layout({ children }) {
//   const [collapsed, setCollapsed] = useState(false);
// const router = useRouter();
//   return (
//     <div className="content glob-trans relative min-h-screen bg-white">
//       <Navbar />
//       <div className="flex mt-16">
//           <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />        
//         <div className={`flex-1 p-4 pl-6 ${collapsed ? 'ml-20' : 'ml-64'}`}>{children}</div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import Sidebar from "./admin/SideBar";
import Navbar from "./admin/Navbar";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  return (
    <>
      {(router.pathname !== '/auth/login' && router.pathname !== '/auth/signup' && router.pathname !== '/auth/forgotPassword') ? (
        <div className="content glob-trans relative min-h-screen bg-white">
          <Navbar />
          <div className="flex mt-4 relative h-[88vh] overflow-hidden">
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
            <div className={`flex-1 p-2 pr-6 pl-6 ${collapsed ? 'ml-20' : 'ml-64'}`}>{children}</div>
          </div>
        </div>
      ) : (
        <div className="content glob relative min-h-screen bg-white">{children}</div>
      )}
    </>
  );
}

