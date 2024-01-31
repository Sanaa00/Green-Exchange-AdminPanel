import { Route, Routes } from 'react-router-dom';
import './App.css';
import HideProducts from './Pages/HideProducts';
import Products from './Pages/Products';
import Sidbar from './Component/Sidbar';
import Dashboard from './Pages/Dashboard';
import Setting from './Pages/Setting';
import Login from './Pages/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="sidbar" element={<Sidbar />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="setting" element={<Setting />} />
          <Route path="hide" element={<HideProducts />} />
        </Route>
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
