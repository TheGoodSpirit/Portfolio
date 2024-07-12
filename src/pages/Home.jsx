import React from "react";

const Home = () => {
  return (
    <>
      <section className=" bg-primary dark:bg-neutral">
        <div className="dark:bg-transparent">
          <div className="mx-auto flex flex-col items-center py-12 sm:py-24">
            <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
              <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl text-center text-white dark:text-white font-black leading-10">
                Transforming Ideas into <br />
                <span className="text-secondary">
                  Seamless User Experiences
                </span>
                : My Web Development Journey
              </h1>
              <p className="mt-5 sm:mt-10 lg:w-10/12 text-neutral-500 dark:text-white font-normal text-center text-xl">
                From Concept To Code : Bringing Seamless User Experiences to
                Life
              </p>
            </div>
            <div className="flex w-11/12 md:w-8/12 xl:w-6/12">
              <div className="flex rounded-md w-full md:flex-row flex-col md:gap-0 items-center gap-5">
                <input
                  type="email"
                  name="q"
                  className=" w-full p-3 rounded-md md:rounded-r-none border border-2 border-white placeholder-current dark:bg-neutral  dark:text-neutral dark:border-none"
                  placeholder="johnDoe@gmail.com"
                />
                <button className="md:w-[25%] inline-flex items-center gap-2 bg-secondary text-primary text-lg font-semibold py-3 px-3 rounded-md md:rounded-l-none w-22">
                  <span>Get in Touch</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center bg-white">
        <div class=" grid md:grid-cols-3 gap-10 rounded-xl p-10 text-sm">
          <div class="flex justify-center flex-col gap-2 p-10 bg-neutral-500 rounded-lg dark:border-gray-700">
            <div className="flex items-center justify-center w-[25%] bg-neutral-200 rounded-md p-3 text-secondary font-bold">
              <ion-icon class="text-2xl"  name="analytics-outline"></ion-icon>
            </div>
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-primary dark:text-white">
              High experience
            </h5>
            <p class="mb-3 font-normal text-primary dark:text-neutral-100">
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div class="flex justify-center flex-col gap-2 p-10 bg-neutral-500 rounded-lg dark:border-gray-700">
            <div className="flex items-center justify-center w-[25%] bg-neutral-200 rounded-md p-3 text-secondary font-bold">
              <ion-icon class="text-2xl"  name="code-slash-outline"></ion-icon>
            </div>
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-primary dark:text-white">
              Useful sandboxes
            </h5>
            <p class="mb-3 font-normal text-primary dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div class="flex justify-center flex-col gap-2 p-10 bg-neutral-500 rounded-lg dark:border-gray-700">
            <div className="flex items-center justify-center w-[25%] bg-neutral-200 rounded-md p-3 text-secondary font-bold">
              <ion-icon class="text-2xl" name="checkmark-done-outline"></ion-icon>
            </div>
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-primary dark:text-white">
              Success side projects
            </h5>
            <p class="mb-3 font-normal text-primary dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
