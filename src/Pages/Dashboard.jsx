import TotalNumbers from '../Component/TotalNumbers';
function Dashboard() {
  return (
    <div className="text-gray-800 p-5">
      <p className="font-semibold text-lg text-green">Products</p>
      <div className="mt-5">
        <TotalNumbers />
      </div>
    </div>
  );
}

export default Dashboard;
