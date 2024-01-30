import CategoryBox from '../Component/CategoryBox';
import Chart from '../Component/Chart';
import TotalNumbers from '../Component/TotalNumbers';
function Dashboard() {
  return (
    <div className="text-gray-800 p-5">
      <p className="font-semibold text-lg text-green">Products</p>
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
