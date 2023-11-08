import { Helmet } from "react-helmet";

const Blogs = () => {
  return (
    <div className="mt-20 min-h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Food Lane &mdash; Blogs</title>
      </Helmet>

      <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <article className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            One way data binding
          </h1>
          <p className="text-gray-700 mb-4">
            One way data binding is a fundamental concept in web development
            that allows for a unidirectional flow of data from the model to the
            view. In this paradigm, changes to the data model are automatically
            reflected in the view, ensuring that the user interface remains
            synchronized with the underlying data. However, any modifications
            made in the view do not affect the model, maintaining a clear
            separation of concerns.
          </p>
          <p className="text-gray-700 mb-4">
            This powerful technique simplifies data management, making it easier
            to build interactive and responsive web applications. It provides
            predictability and consistency in the user interface, making it a
            key concept for modern web development.
          </p>
          <p className="text-gray-700 mb-4">Author: John Doe</p>
          <p className="text-gray-700 mb-4">Published on: November 4, 2023</p>
        </article>

        <article className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            NPM in Node.js
          </h1>
          <p className="text-gray-700 mb-4">
            Node Package Manager (NPM) is an essential tool in the Node.js
            ecosystem. It serves as a command-line utility for managing packages
            and dependencies within Node.js projects. With NPM, developers can
            easily install, update, and manage the libraries and modules their
            projects rely on.
          </p>
          <p className="text-gray-700 mb-4">
            NPM is the de facto package manager for Node.js and comes bundled
            with the Node.js installation. It simplifies the process of handling
            dependencies and helps ensure the integrity of your project by
            managing versions and resolving conflicts.
          </p>
          <p className="text-gray-700 mb-4">Author: Jane Smith</p>
          <p className="text-gray-700 mb-4">Published on: November 4, 2023</p>
        </article>

        <article className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            MongoDB vs MySQL
          </h1>
          <p className="text-gray-700 mb-4">
            The comparison between MongoDB and MySQL often comes up when
            choosing a database management system for a project. These two
            systems offer distinct advantages and cater to different data
            storage needs.
          </p>
          <p className="text-gray-700 mb-4">
            MongoDB is a NoSQL database, designed to handle unstructured data
            and provide flexibility and scalability. In contrast, MySQL is a
            relational database system optimized for structured data, known for
            its reliability and performance.
          </p>
          <p className="text-gray-700 mb-4">Author: Mark Johnson</p>
          <p className="text-gray-700 mb-4">Published on: November 4, 2023</p>
        </article>
      </div>
    </div>
  );
};

export default Blogs;
