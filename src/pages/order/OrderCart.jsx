export const OrderCart = ({ food, quantity }) => {
  return (
    <div className="flex-1 ">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-bold">Product</h4>
          <p className="text-dark-3">Subtitle</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <img
              src={food.imageUrl}
              alt={`Image of ${food.name}`}
              className="h-16 rounded-sm"
            />
            <h5 className=" text-dark-2">{food.name}</h5>
          </div>

          <p className="text-dark-3">
            {quantity} X ${food.price}
          </p>
        </div>
        <hr className="my-4" />
        <div className="flex items-center justify-between font-medium text-dark-2">
          <p>Total:</p>
          <p>${(quantity * food.price).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};
