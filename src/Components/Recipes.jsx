import React from 'react';
import Card from './Card';

import curryImage from '../assets/curry.jpg';
import noodlesImage from '../assets/noodles.jpg';
import stewImage from '../assets/stew.jpg';

const Main = () => {
  return (
    <main className="px-16 py-6 bg-gray-100 md:col-span-2">
      <div className="flex justify-center md:justify-end">
        <a className="btn text-primary  md:border-2 border-primary " href="#">
          Log in
        </a>
        <a
          className="btn text-primary ml-2  md:border-2 border-primary"
          href="#"
        >
          Sign up
        </a>
      </div>

      <header className="py-2">
        <h2 className="text-gray-700 text-6xl font-semibold ">Recipes</h2>
        <h3 className="text-2xl font-semibold">For Ninjas</h3>
      </header>

      <div>
        <h4 className="font-bold mt-12 pb-2 border-b">Latest Recipes</h4>
        <div className="mt-8 grid lg:grid-cols-3 gap-10">
          <Card image={stewImage} title="5 Bean Chilli Stew" />
          <Card image={noodlesImage} title="Veg Noodles" />
          <Card image={curryImage} title="Tofu Curry" />
        </div>

        <h4 className="font-bold mt-12 pb-2 border-b">Most Popular</h4>
        <div className="mt-8">
          {/* <Card />
          <Card />
          <Card /> */}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="text-secondary-200 bg-secondary-100 btn">Load more</div>
      </div>
    </main>
  );
};

export default Main;
