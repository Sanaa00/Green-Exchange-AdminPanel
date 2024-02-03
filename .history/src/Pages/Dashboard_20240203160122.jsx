import CategoryBox from '../Component/CategoryBox';
import TotalNumbers from '../Component/TotalNumbers';
import useGetAdminDataQuery from '../features/admin';
function Dashboard() {
  const userId = JSON.parse(localStorage.getItem('admin'));
  const id = userId?.data?._id;
  const { data: admin } = useGetAdminDataQuery({ id });
  const totalProduct = admin?.totalProduct[0].totalProducts;
  const totalUser = admin?.totalUser[0]?.totalUsers;
  const totalActivity = admin?.totalProductPerStatus[2]?.total;
  const categorys = admin?.totalProductPerCategory;

  return (
    <div className="text-gray-800 p-5">
      <p className="font-semibold text-lg text-green">Dashboard</p>

      <div className="mt-5">
        <TotalNumbers
          product={totalProduct}
          user={totalUser}
          activity={totalActivity}
        />
      </div>
      <p className="font-semibold text-lg text-green mt-5">Category</p>
      <div>
        <CategoryBox categorys={categorys} />
      </div>
    </div>
  );
}

export default Dashboard;
