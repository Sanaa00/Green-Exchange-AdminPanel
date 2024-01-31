import CategoryBox from '../Component/CategoryBox';
import Chart from '../Component/Chart';
import TotalNumbers from '../Component/TotalNumbers';
import { useGetAdminDataQuery } from '../features/Admin';
function Dashboard() {
  // const id = JSON.stringify(localStorage.getItem('admin'));
  // console.log('id', id?.data);
  const userId = JSON.parse(localStorage.getItem('admin'));
  const id = userId?.data?._id;
  const { data: admin } = useGetAdminDataQuery({ id });
  const totalProduct = admin?.totalProduct[0].totalProducts;
  console.log('admin', admin, totalProduct);
  return (
    <div className="text-gray-800 p-5">
      <p className="font-semibold text-lg text-green">Dashboard</p>
      <div className="mt-5">
        <TotalNumbers />
      </div>
      <p className="font-semibold text-lg text-green mt-5">Category</p>
      <div>
        <CategoryBox />
      </div>
      <div className="flex mt-5 h-96">
        <Chart />
        <Chart />
      </div>
    </div>
  );
}

export default Dashboard;
