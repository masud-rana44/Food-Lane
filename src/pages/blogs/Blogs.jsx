import { Helmet } from "react-helmet";
import SectionHeading from "../../components/SectionHeading";

const Blogs = () => {
  return (
    <div className="mt-[70px] min-h-screen">
      <Helmet>
        <title>Food Lane &mdash; Blogs</title>
      </Helmet>
      <SectionHeading title="Blog Details" subtitle="Home/Shop" />

      <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <article className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            New Restaurant Town Our Ple Award Contract
          </h1>
          <p className="text-gray-700 mb-4">
            Cuisine is a universal language, speaking to our senses and
            heritage. Each dish is a story, a blend of history and flavor that
            we share. Discovering diverse culinary traditions is an exploration
            of cultures, connecting us on a deeper level.
          </p>
          <p className="text-gray-700 mb-4">
            In this blog, we&apos;ll explore how modern restaurant management
            websites revolutionize daily operations. From optimizing table
            management to facilitating menu updates and inventory tracking,
            these platforms act as a centralized hub for restaurant tasks.
            we&apos;ll discuss the functionalities that save valuable time for
            managers and staff, enabling them to focus on delivering exceptional
            service. Dive into the specifics of these features and how they
            integrate seamlessly, making administrative tasks efficient and
            hassle-free.
          </p>
          <p className="text-gray-700 mb-4">Author: John Doe</p>
          <p className="text-gray-700 mb-4">Published on: November 4, 2023</p>
        </article>

        <article className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Greek yogurt breakfast bowls Ple Award Contract
          </h1>
          <p className="text-gray-700 mb-4">
            Indulge in a flavorful and nutritious morning routine with our
            enticing Greek yogurt breakfast bowl recipe. Packed with wholesome
            goodness and vibrant flavors, this breakfast delight offers a
            delicious blend of creamy Greek yogurt paired with fresh fruits,
            crunchy granola, and a drizzle of honey.
          </p>
          <p className="text-gray-700 mb-4">
            Whether you&apos;re a health enthusiast or simply seeking a
            delightful breakfast option, our award-worthy Greek yogurt breakfast
            bowl promises a perfect start to your day. Dive into a culinary
            experience that&apos;s both satisfying and nutritious, elevating
            your breakfast routine to new heights of taste and vitality.
          </p>
          <p className="text-gray-700 mb-4">Author: Jane Smith</p>
          <p className="text-gray-700 mb-4">Published on: November 4, 2023</p>
        </article>

        <article className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Make Authentic Italian Margherita Pizza at Home
          </h1>
          <p className="text-gray-700 mb-4">
            Experience the true taste of Italy with your homemade Margherita
            pizza! In just a few simple steps, create an authentic Italian
            culinary masterpiece right in your kitchen. Start by crafting a
            classic thin crust, spread it with rich tomato sauce, layer slices
            of fresh mozzarella, sprinkle aromatic basil leaves, and finish with
            a drizzle of olive oil.
          </p>
          <p className="text-gray-700 mb-4">
            Bake to perfection, and savor the flavors reminiscent of the streets
            of Naples. Transport your taste buds to Italy with every bite of
            this homemade Margherita pizza, delivering the essence of
            traditional Italian cooking to your dining table.
          </p>
          <p className="text-gray-700 mb-4">Author: Mark Johnson</p>
          <p className="text-gray-700 mb-4">Published on: November 4, 2023</p>
        </article>
      </div>
    </div>
  );
};

export default Blogs;
