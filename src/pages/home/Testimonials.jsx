import { SectionHeading } from "./SectionHeading";
import TestimonialCart from "./TestimonialCard";

const restaurantReviews = [
  {
    name: "Alice Johnson",
    profession: "Foodie",
    review:
      "Dining at your restaurant has been a delightful experience. The variety of dishes, delicious flavors, and excellent service from your staff have made me a loyal customer. I highly recommend your restaurant to fellow food enthusiasts!",
    image:
      "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM=",
  },
  {
    name: "David Smith",
    profession: "Chef",
    review:
      "As a professional chef, I've been truly impressed with the culinary experience at your restaurant. The dishes are beautifully presented, and the taste is exceptional. Your restaurant is a must-visit for food lovers!",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwcGVvcGxlfGVufDB8fDB8fHww",
  },
  {
    name: "Emily Davis",
    profession: "Food Critic",
    review:
      "Your restaurant is a hidden gem in the culinary world. The menu is creative, and the quality of ingredients is outstanding. I've had the pleasure of tasting exquisite dishes at your place. Keep up the great work!",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-12  sm:py-16 lg:py-28">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <SectionHeading subtitle="Testimonials" title="Our Happy Customers" />

          <div className="relative mt-6 md:order-2">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter">
                <div className="bg-gradient-to-r from-[#44ff9a] via-[#44b0ff] to-[#8b44ff] via-[#ff6644] to-[#ebff70] h-full w-full"></div>
              </div>
            </div>

            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
              {restaurantReviews.map((review, idx) => (
                <TestimonialCart key={idx} review={review} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
