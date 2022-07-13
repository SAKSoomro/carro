import '../index.css'
import Homepage from './Homepage';
import { Route, Routes } from 'react-router-dom';
import AllProducts from './Allproducts';
import Suppliers from './Suppliers';
import Retailers from './Retailers';
import Orders from './Orders';
import ProfileSettings from './ProfileSettings';
import SupplierSettings from './SupplierSettings';
import RetailerSettings from './RetailerSettings';
import ReactRangeSlider from './RangeSlider';

export default function App() {

  return (
    <main>
    <Routes>    
      <Route path='/' element={<Homepage />} />
      <Route path='allproducts' element={<AllProducts />} />
      <Route path='suppliers' element={<Suppliers />} />
      <Route path='retailers' element={<Retailers />} />
      <Route path='orders' element={<Orders />} />
      <Route path='profile-settings' element={<ProfileSettings />} />
      <Route path='supplier-settings' element={<SupplierSettings />} />
      <Route path='retailer-settings' element={<RetailerSettings />} />
      <Route path='slider' element={<ReactRangeSlider />} />
    </Routes>
    </main>
  );
}