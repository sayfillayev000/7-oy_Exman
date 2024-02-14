import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
<<<<<<< HEAD
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Home from "./pages/Home";
import All from "./components/modelType/All";
import "./components/modelType/All";
import ModelA from "./components/modelType/ModelA";
import ModelB from "./components/modelType/ModelB";
import ModelC from "./components/modelType/ModelC";
import ModelD from "./components/modelType/ModelD";
import ModelE from "./components/modelType/ModelE";
import ModelF from "./components/modelType/ModelF";
import Buyurtmalar from "./components/AdminBlok/Buyurtmalar";
import Customers from "./components/AdminBlok/Customers";
import LOcation from "./components/AdminBlok/Location";
import Mahsulotlar from "./components/AdminBlok/Mahsulotlar";
import Texnology from "./components/AdminBlok/Texnology";
import Toifalar from "./components/AdminBlok/Toifalar";
import { useState } from "react";
import NotFound from "./pages/NotFound";
import { useFetch } from "./hook/useFetch";

function App() {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || "",
  );
  const [complate, IsComplate] = useState(false);

  const url = "http://localhost:1212/api/products";
  const { data, loader, error } = useFetch(url);
  const category = data && data.categories;

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />}>
          <Route
            path="login"
            element={<Login token={token} setToken={setToken} />}
          />
          <Route index element={<All />} />
          <Route path="modelA" element={<ModelA />} />
          <Route path="modelB" element={<ModelB />} />
          <Route path="modelC" element={<ModelC />} />
          <Route path="modelD" element={<ModelD />} />
          <Route path="modelE" element={<ModelE />} />
          <Route path="modelF" element={<ModelF />} />
        </Route>
        <Route index element={<Home />} />
        token ?
        <Route path="admin" element={<Admin />}>
          <Route
            path="buyrtmalar"
            index
            element={<Buyurtmalar token={token} setToken={setToken} />}
          />
          ,
          <Route path="Customers" element={<Customers />} />,
          <Route path="Location" element={<LOcation />} />,
          <Route path="Mahsulotlar" element={<Mahsulotlar />} />,
          <Route path="Texnology" element={<Texnology />} />,
          <Route
            path="Toifalar"
            element={<Toifalar complate={complate} IsComplate={IsComplate} />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>,
    ),
=======
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
>>>>>>> d45308117bc746f9e583ed545f1ac1cc4046be62
  );
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
<<<<<<< HEAD
}

export default App;
=======
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
>>>>>>> d45308117bc746f9e583ed545f1ac1cc4046be62
