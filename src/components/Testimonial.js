import React from "react";

const Testimonial = ({ quote, name, title, avatarUrl }) => (
  <div className="testimonial p-8 flex flex-col items-start">
    <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
      <span className="text-xl font-semibold">66</span>
    </div>
    <p className="text-white mb-4">{quote}</p>
    <div className="flex items-center">
      <img src={avatarUrl} alt={name} className="w-10 h-10 rounded-full mr-3" />
      <div>
        <h4 className="text-white font-semibold">{name}</h4>
        <p className="text-gray-400 text-sm">{title}</p>
      </div>
    </div>
  </div>
);

const TestimonialSection = () => {
  const testimonials = [
    {
      quote:
        "Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings.",
      name: "Hadid Khan",
      title: "UI/UX Designer",
      avatarUrl: "images/avatar1.png",
    },
    {
      quote:
        "It's is both attractive and highly adaptable. It's exactly what I've been looking forinfinitely wo lorem ipsum dolorth the investment.",
      name: "Wade Warren",
      title: "Web Designer",
      avatarUrl: "images/avatar2.png",
    },
    {
      quote:
        "I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking.",
      name: "Jenny Wilson",
      title: "Trust Administrator",
      avatarUrl: "images/avatar3.png",
    },
  ];

  return (
    <section id="testimonials" className="flex items-center justify-center px-4 md:px-4 lg:px-0 pb-28">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
