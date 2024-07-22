import React from 'react';
import { Helmet } from 'react-helmet';

const comingSoon = () => {
  return (
    <>
      <body class="bg-primary">
        <Helmet>
          <title>Coming Soon</title>
        </Helmet>
        <div class="min-h-screen flex gap-10 flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://www.svgrepo.com/show/426192/cogs-settings.svg"
              alt="Logo"
              class="mb-8 h-40"
            />
            <h1 class="text-4xl font-bold text-center text-secondary mb-4">
              Site is under maintenance
            </h1>
            <p class="text-center text-neutral-500">
              We're working hard to improve the user experience. Stay tuned!
            </p>
          </div>
          <div class="flex space-x-4">
            <a
              href="#"
              class="bg-secondary text-primary font-bold py-3 px-6 rounded "
            >
              Contact Us
            </a>
            <a
              href="#"
              class="border-2 border-secondary text-secondary font-bold py-3 px-6 rounded "
            >
              Reload
            </a>
          </div>
        </div>
      </body>
    </>
  );
};

export default comingSoon;
