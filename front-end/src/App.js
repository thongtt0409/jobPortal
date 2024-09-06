import { Routes, Route } from 'react-router-dom';
import Dashboard from './scenes/dashboard';
import User from './pages/users/User';
import Login from './pages/login/Login';
import Products from './pages/products/Products';
import Charts from './pages/Charts/Charts';
import Home from './pages/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index path="/" element={<Home />} />
        <Route path="/users" element={<User />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/products" element={<Products />} />
      </Route>
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
}

export default App;
