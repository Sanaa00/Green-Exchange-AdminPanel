import AddAdminForm from '../Component/AddAdminForm';

function Setting() {
  return (
    <div className="p-5 grid grid-cols-2">
      <div className="flex flex-col">
        {' '}
        <p className="font-semibold text-lg text-green">Add Admin</p>
        <AddAdminForm />
      </div>{' '}
      <div className="flex flex-col">
        {' '}
        <p className="font-semibold text-lg text-green">Add City</p>
        <AddAdminForm />
      </div>
    </div>
  );
}

export default Setting;
