import { Link } from "react-router-dom";
import { useFoodsByEmail } from "./useFoodsByEmail";
import { useDeleteFood } from "./useDeleteFood";
import { Helmet } from "react-helmet";
import { EmptyMessage } from "../../components/EmptyMessage";
import { PageLoader } from "../../components/PageLoader";
import { useAuth } from "../../contexts/AuthContext";
import SectionHeading from "../../components/SectionHeading";
import { ConfirmDialog } from "../../components/ConfirmDialog";
import { BsTrash } from "react-icons/bs";
import { TiEdit } from "react-icons/ti";

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
    <div className="mt-[70px]">
      <SectionHeading title="My Added Food" subtitle="Home/MyFoods" />
      <div className="relative container  mx-auto overflow-x-auto">
        <Helmet>
          <title>Food Lane &mdash; My Added Foods</title>
        </Helmet>
        <table className="w-[800px] mx-auto text-sm text-left text-gray-500 mt-10">
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
              <th scope="col" className="px-6 py-3 text-center">
                Actions
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
                <td className="px-6 py-4 text-dark-1 font-semibold text-base">
                  {food.name}
                </td>
                <td className="px-6  py-4 text-dark-1">{food.category}</td>
                <td className="px-6 py-4 text-dark-1">${food.price}</td>
                <td className="px-6 py-4 text-right space-x-4 flex items-center">
                  <Link
                    state={{ food }}
                    to={`/food/update/${food._id}`}
                    className="block ml-auto bg-blue-600 p-3 rounded-sm text-white hover:bg-dark-1 transition duration-300"
                  >
                    <TiEdit size={20} />
                  </Link>
                  <div>
                    <ConfirmDialog onDelete={() => deleteFood(food._id)}>
                      <button className=" bg-primary p-3 rounded-sm text-white hover:bg-dark-1 transition duration-300">
                        <BsTrash size={20} />
                      </button>
                    </ConfirmDialog>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAddedFood;
