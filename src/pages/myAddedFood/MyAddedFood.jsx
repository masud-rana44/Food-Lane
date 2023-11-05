import { useParams } from "react-router-dom";
import { useFoodsByEmail } from "./useFoodsByEmail";

const MyAddedFood = () => {
  const { email } = useParams();
  const { foods, isPending } = useFoodsByEmail(email);

  if (isPending) return <div>Loading...</div>;

  return (
    <div className="relative container mt-10 mx-auto overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          Our products
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Browse a list of Flowbite products designed to help you work and
            play, stay organized, get answers, keep in touch, grow your
            business, and more.
          </p>
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {foods.map((food) => (
            <tr
              key={food._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  src={food.imageUrl}
                  alt=""
                  className="h-12 w-12 object-cover rounded-md"
                />
              </th>
              <td className="px-6 py-4">{food.name}</td>
              <td className="px-6 py-4">{food.category}</td>
              <td className="px-6 py-4">${food.price}</td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyAddedFood;
