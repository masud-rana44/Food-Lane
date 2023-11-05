const Blogs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          One way data binding
        </h1>
        <p className="text-gray-700 mb-8">
          One way data binding is a technique used in web development to bind
          data from the model to the view. In this technique, the data flows in
          only one direction, from the model to the view. Any changes made to
          the model are automatically reflected in the view. However, changes
          made to the view do not affect the model.
        </p>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          NPM in Node.js
        </h1>
        <p className="text-gray-700 mb-8">
          NPM stands for Node Package Manager. It is a command-line tool used to
          install, update, and manage packages and dependencies in Node.js
          projects. NPM is the default package manager for Node.js and is
          included with the installation of Node.js.
        </p>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          MongoDB vs MySQL
        </h1>
        <p className="text-gray-700 mb-8">
          MongoDB and MySQL are both popular database management systems.
          MongoDB is a NoSQL database, while MySQL is a relational database.
          MongoDB is designed to handle unstructured data, while MySQL is
          designed to handle structured data. MongoDB is known for its
          scalability and flexibility, while MySQL is known for its reliability
          and performance.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
