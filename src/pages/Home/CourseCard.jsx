import React from 'react';
import image1 from '../../assets/image2.png';
import image2 from '../../assets/image3.png';

const CourseCard = () => {
  const courses = [
    {
      title: "Web Design Fundamentals",
      duration: "4 Weeks",
      level: "Beginner",
      author: "John Smith",
      image: image1,
    },
    {
      title: "Web Design Fundamentals",
      duration: "4 Weeks",
      level: "Beginner",
      author: "John Smith",
      image: image2,
    },
  ];

  return (
    <section className="px-4 md:px-8 lg:px-12 py-10 md:py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <h2 className="font-questrial text-2xl md:text-3xl lg:text-4xl font-bold text-black">
            Our Courses
          </h2>
          <button className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 text-sm md:text-base">
            View All
          </button>
        </div>

        <p className="text-sm md:text-base text-gray-600 max-w-3xl mb-10">
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et.
          Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat
          senectus in.
        </p>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-[#F0F0F0] shadow-md rounded-2xl text-black p-4 md:p-6 flex flex-col space-y-4 transition-all duration-300"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 md:h-64 lg:h-80 object-cover rounded-xl"
              />
              <div className="flex items-center justify-between text-xs md:text-sm text-gray-600">
                <div className="flex space-x-2">
                  <span className="bg-white px-2 py-1 rounded">{course.duration}</span>
                  <span className="bg-white px-2 py-1 rounded">{course.level}</span>
                </div>
                <span>By {course.author}</span>
              </div>
              <h3 className="font-semibold text-lg md:text-xl">{course.title}</h3>
              <p className="text-sm md:text-base text-gray-600">
                Learn the fundamentals of web design, including HTML, CSS, and responsive design
                principles. Develop the skills to create visually appealing and user-friendly
                websites.
              </p>
              <button className="bg-blue-900 text-white py-2 md:py-2.5 rounded hover:bg-blue-800 text-sm md:text-base">
                Get it Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCard;
