import React from 'react';

const About = () => {
  return (
    <main className="px-16 py-6 bg-gray-100 border  md:col-span-2 h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center ">
        <p className="text-center mb-3 ">
          From the Tailwind Tutorial Course -{' '}
          <a
            className="underline"
            href="https://youtube.com/watch?v=bxmDnn7lrnk&feature=shares"
          >
            Net Ninja
          </a>
        </p>
        <p className="text-center">
          Built by{' '}
          <a className="underline" href="https://github.com/abdulah-khaleel">
            Abdullah Khalil
          </a>
        </p>
      </div>
      <div></div>
      <div className="flex justify-center"></div>
    </main>
  );
};

export default About;
