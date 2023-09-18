import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Admin, Home, NotFound } from "./pages";
import { AdminBuyurtmalar, AdminCustomers, AdminMahsulotlar, AdminManzil, AdminTexnologiyalar, AdminToifalar } from "./components/layouts/admin";
import { Buyurtmalar, Mahsulotlar, Manzil, Texnologiyalar, Toifalar } from "./assets/react-icons";
import  Routes  from "./routes";
const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route >
        {/* home pages */}
        <Route path="/" element={<Routes />}>
          <Route index element={ <Home />}/>
        </Route>
    {/* admin pages */}
        <Route path="admin" element={<Admin />}>
          <Route index element={<AdminBuyurtmalar />} />
          <Route path="buyurtmalar" element={<AdminBuyurtmalar />} />
          <Route path="customers" element={<AdminCustomers />} />
          <Route path="toifalar" element={<AdminToifalar />} />
          <Route path="mahsulotlar" element={<AdminMahsulotlar />} />
          <Route path="texnologiyalar" element={<AdminTexnologiyalar />} />
          <Route path="manzil" element={<AdminManzil />} />

        </Route>
        {/* notfount */}
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
};
export default App;

//  <Route>
//   <Route path="/" element={<Home />}>
//     <Route path="login" element={<Login token={token} setToken={setToken} />} />
//     <Route index element={<All />} />
//     <Route path="modelA" element={<ModelA />} />
//     <Route path="modelB" element={<ModelB />} />
//     <Route path="modelC" element={<ModelC />} />
//     <Route path="modelD" element={<ModelD />} />
//     <Route path="modelE" element={<ModelE />} />
//     <Route path="modelF" element={<ModelF />} />
//   </Route>
//   <Route index element={<Home />} />
//   token ?
//   <Route path="admin" element={<Admin />}>
//     <Route
//       path="buyrtmalar"
//       index
//       element={<Buyurtmalar token={token} setToken={setToken} />}
//     />
//     ,
//     <Route path="Customers" element={<Customers />} />,
//     <Route path="Location" element={<LOcation />} />,
//     <Route path="Mahsulotlar" element={<Mahsulotlar />} />,
//     <Route path="Texnology" element={<Texnology />} />,
//     <Route
//       path="Toifalar"
//       element={<Toifalar complate={complate} IsComplate={IsComplate} />}
//     />
//   </Route>
//   <Route path="*" element={<NotFound />} />
// </Route>; 
