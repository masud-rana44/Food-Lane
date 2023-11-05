const Order = () => {
  return (
    <div>
      <form className="max-w-5xl mx-auto">
        <div className="space-x-4">
          <label htmlFor="name">Food Name</label>
          <input
            name="name"
            className="py-2 px-4 bg-violet-200 border-violet-500"
          />
        </div>
      </form>
    </div>
  );
};

export default Order;
