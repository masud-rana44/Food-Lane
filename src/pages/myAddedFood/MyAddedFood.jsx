import { Link } from "react-router-dom";
import { useFoodsByEmail } from "./useFoodsByEmail";
import { useDeleteFood } from "./useDeleteFood";
import { Helmet } from "react-helmet";
import { EmptyMessage } from "../../components/EmptyMessage";
import { PageLoader } from "../../components/PageLoader";
import { useAuth } from "../../contexts/AuthContext";

const MyAddedFood = () => {
  const { user } = useAuth();
  const { foods, isPending } = useFoodsByEmail(user?.email);
  const { deleteFood } = useDeleteFood();

  if (isPending) return <PageLoader />;

  if (foods.length === 0)
    return (
      <div className="mt-28">
        <EmptyMessage message="No food available" />
      </div>
    );

  return (
    <div className="relative container my-28 mx-auto overflow-x-auto  ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Food Lane &mdash; My Added Foods</title>
      </Helmet>
      <table className="w-full text-sm text-left text-gray-500 ">
        <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white ">
          Your Added Food
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
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
            <tr key={food._id} className="bg-white border-b  ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
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
              <td className="px-6 py-4 text-right space-x-6">
                <Link
                  state={{ food }}
                  to={`/food/update/${food._id}`}
                  className="font-medium text-blue-600  hover:underline"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteFood(food._id)}
                  className="font-medium text-red-600  hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyAddedFood;
