import React from 'react';
import ProfileForm from '../../../components/ProfileForm';
import SideBar from '../../../components//admin/SideBar';

// const Icon = ({ path }) => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d={path} />
//   </svg>
// );

const ICONS = {
  orders: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z M3 6h18 M16 10a4 4 0 0 1-8 0",
  payment: "M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z M1 10h22",
  reviews: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  user: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",
  logout: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4 M16 17l5-5-5-5 M21 12H9"
};

// const DashboardLayout = ({ children }) => {
//   const navItems = [
//     { icon: ICONS.orders, label: 'My Orders', href: '/orders' },
//     { icon: ICONS.payment, label: 'Payment Methods', href: '/payment' },
//     { icon: ICONS.reviews, label: 'My Reviews', href: '/reviews' },
//     { icon: ICONS.user, label: 'Personal Info', href: '/profile' },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 py-8">
//         <div className="flex flex-col md:flex-row gap-8">
//           <aside className="w-full md:w-64 space-y-6">
//             <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg">
//               <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
//                 <span className="text-xl font-semibold">C</span>
//               </div>
//               <div>
//                 <h2 className="font-medium">Customer Name</h2>
//                 <p className="text-sm text-gray-500">Customer</p>
//               </div>
//             </div>

//             <nav className="space-y-1">
//               {navItems.map((item) => (
//                 <a
//                   key={item.label}
//                   href={item.href}
//                   className={`flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 ${
//                     item.label === 'Personal Info' ? 'bg-gray-200' : ''
//                   }`}
//                 >
//                   <Icon path={item.icon} />
//                   <span>{item.label}</span>
//                 </a>
//               ))}
//             </nav>

//             <div className="pt-4 border-t">
//               <button className="flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-100 rounded-lg w-full">
//                 <Icon path={ICONS.logout} />
//                 <span>Log out</span>
//               </button>
//             </div>
//           </aside>

//           <main className="flex-1">
//             {children}
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };

const Dashboard = ({children}) => {
  return (
    <div className="flex w-full h-screen">
  <SideBar />
  {<ProfileForm />}
</div>

    
  );
};

export default Dashboard;