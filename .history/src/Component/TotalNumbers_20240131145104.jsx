import { total } from '../../utility';

function TotalNumbers({ product, user, activity }) {
  return (
    <div className="flex ">
      {total.map((item) => {
        return (
          <div
            key={item.id}
            className="flex flex-col p-4 w-1/4 mr-5 bg-green bg-opacity-50 rounded-sm"
          >
            <div className="p-4 rounded-full bg-neutral-100 w-fit">
              {item.icon}
            </div>
            <div className="flex justify-between items-center p-2">
              {' '}
              <div className="mt-2 text-lg text-neutral-50 font-semibold">
                {item.name}
              </div>
              <div className="text-lg text-neutral-50 font-semibold">
                {item.number}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TotalNumbers;
