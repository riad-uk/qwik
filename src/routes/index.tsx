import {
  component$,
  createContext,
  useContextProvider,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";

import { MUIButton } from "~/integrations/react/mui";
// import { Counter } from "~/integrations/react/counter";
import { Clock } from "~/components/sections/clock/clock";
import  Blog from "~/components/sections/blog/blog";

// import { Counter } from "~/integrations/react/counter";

import Title from "~/components/sections/title/title";

import { context } from "~/context/";

import type { DocumentHead } from "@builder.io/qwik-city";
// import { Link } from '@builder.io/qwik-city';
import styles from "./homepage.scss?inline";

// Create a new context descriptor
export const MyContext = createContext("my-context");
// export const MyCounter = createContext("my-counter");

export default component$(() => {
  useStylesScoped$(styles);

  // create store
  const state = useStore(context.heroText);
  const counterState = useStore(context.counter);

  //   add Store to context
  useContextProvider(MyContext, state);
  // useContextProvider(MyCounter, counter);

  return (
    <div>
      <div class="homepage">

      <Blog />

        <section class="py-10 sm:py-16 lg:py-16 container mx-auto">
          <div class="px-4 mx-auto sm:px-6 lg:px-8">
            <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <Title />

                <div class="mt-10 sm:flex sm:items-center sm:space-x-8">
                  <a
                    href="#"
                    title=""
                    class="button inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 "
                    role="button"
                    onClick$={() => alert("Buy Now & Save")}
                  >
                    Buy Now & Save{" "}
                  </a>
                  <a
                    href="#"
                    title=""
                    class="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80"
                    onClick$={() => alert("Watch video")}
                  >
                    <svg
                      class="w-10 h-10 mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        fill="#0a8543"
                        stroke="#0a8543"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Watch video
                  </a>
                </div>
              </div>

              <div>
                <img
                  class="w-full"
                  src="https://quickbooks.intuit.com/uk2/uk/uk-2021//assets/mobile-apps/hero.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <section class="py-10 sm:py-16 lg:py-16 container mx-auto">
          <div class="px-4 mx-auto sm:px-6 lg:px-8">
            <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <img
                  class="w-full home-img"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png"
                  alt=""
                />
              </div>
              <div>
                <h1 class="text-2xl font-bold text-black sm:text-6xl lg:text-5xl">
                  Online accounting software that supports you and your
                  business.
                </h1>

                <p class="mt-8 text-base text-black sm:text-xl">
                  Our simple, smart accounting software helps you take control
                  of your finances - whatever your business size. You’ll get
                  expert help from real people. From invoicing and expenses to
                  payroll and submitting VAT the Making Tax Digital way -
                  discover QuickBooks today.
                </p>

                <div class="mt-10 sm:flex sm:items-center sm:space-x-8">
                  <a
                    href="#"
                    title=""
                    class="button inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600"
                    role="button"
                    onClick$={() => console.log("Ask for a Demo")}
                  >
                    {" "}
                    Ask for a Demo{" "}
                  </a>

                  <a
                    href="#"
                    title=""
                    class="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80"
                    onClick$={() => console.log("Watch video")}
                  >
                    <svg
                      class="w-10 h-10 mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        fill="#0a8543"
                        stroke="#0a8543"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Watch video
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="py-10 sm:py-16 lg:py-24 container mx-auto">
          <div class="px-4 mx-auto sm:px-6 lg:px-8">
            <div class="flex items-end justify-between">
              <div class="flex-1 text-center lg:text-left">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                  Recommended for you
                </h2>
                <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">
                  Discover the QuickBooks UK Blog with its wealth of useful
                  content covering all aspects of business for small businesses
                  and accountants.
                </p>
              </div>

              <div class="hidden lg:flex lg:items-center lg:space-x-3">
                <button
                  type="button"
                  class="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  class="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div class="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
              <div class="overflow-hidden bg-white rounded shadow">
                <div class="p-5">
                  <div class="relative">
                    <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                      <img
                        class="object-cover w-full h-full"
                        src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg"
                        alt=""
                      />
                    </a>

                    <div class="absolute top-4 left-4">
                      <span class="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
                        Business
                      </span>
                    </div>
                  </div>
                  <span class="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                    {" "}
                    TAX & PENSIONS
                  </span>
                  <p class="mt-5 text-2xl font-semibold">
                    <a href="#" title="" class="text-black">
                      The Self Assessment Tax Return for Beginners
                    </a>
                  </p>
                  <p class="mt-4 text-base text-gray-600">19 Jan 2023</p>
                  <a
                    href="#"
                    title=""
                    class="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold transition-all duration-200 border-b-2 border-transparent hover:border-green-600 focus:border-blue-600"
                  >
                    Continue Reading
                    <svg
                      class="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div class="overflow-hidden bg-white rounded shadow">
                <div class="p-5">
                  <div class="relative">
                    <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                      <img
                        class="object-cover w-full h-full"
                        src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-2.jpg"
                        alt=""
                      />
                    </a>

                    <div class="absolute top-4 left-4">
                      <span class="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
                        Accounting
                      </span>
                    </div>
                  </div>
                  <span class="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                    Supporting your clients
                  </span>
                  <p class="mt-5 text-2xl font-semibold">
                    <a href="#" title="" class="text-black">
                      Self Assessment Deadline
                    </a>
                  </p>
                  <p class="mt-4 text-base text-gray-600">18 Jan 2023</p>
                  <a
                    href="#"
                    title=""
                    class="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold transition-all duration-200 border-b-2 border-transparent hover:border-green-600 focus:border-blue-600"
                  >
                    Continue Reading
                    <svg
                      class="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div class="overflow-hidden bg-white rounded shadow">
                <div class="p-5">
                  <div class="relative">
                    <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                      <img
                        class="object-cover w-full h-full"
                        src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg"
                        alt=""
                      />
                    </a>

                    <div class="absolute top-4 left-4">
                      <span class="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
                        {" "}
                        Productivity{" "}
                      </span>
                    </div>
                  </div>
                  <span class="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                    Tax and pensions
                  </span>
                  <p class="mt-5 text-2xl font-semibold">
                    <a href="#" title="" class="text-black">
                      Self Assessment Tax Return Survey 2023
                    </a>
                  </p>
                  <p class="mt-4 text-base text-gray-600">19 Jan 2023</p>
                  <a
                    href="#"
                    title=""
                    class="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold transition-all duration-200 border-b-2 border-transparent hover:border-green-600 focus:border-blue-600"
                  >
                    Continue Reading
                    <svg
                      class="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-center mt-8 space-x-3 lg:hidden">
              <button
                type="button"
                class="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                type="button"
                class="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>

        <section class="py-10 sm:py-16 lg:py-16 container mx-auto">
          <div class="px-4 mx-auto sm:px-6 lg:px-8">
            <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <div class="riad-counter">

                  <MUIButton
                    variant="contained"
                    host:onClick$={() => {
                      counterState.value--;
                    }}
                  >
                    -
                  </MUIButton>

                  {counterState.value}

                  <MUIButton
                    variant="contained"
                    host:onClick$={() => {
                      counterState.value++;
                    }}
                  >
                    +
                  </MUIButton>

                </div>
              </div>
              <div>
                <Clock />


                {/* <Counter client:active /> */}
                
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
