import { component$, useStylesScoped$, useContext } from "@builder.io/qwik";
import styles from "./banner.scss?inline";
// import my context
import { HeaderContext } from "~/components/sections/header/header";

const Banner = component$(() => {
  useStylesScoped$(styles);

  const state = useContext(HeaderContext);

  return (
    <>
    {state.bannerOn ? <div
      id="banner"
      // tabindex="-1"
      class="global-banner flex z-50 gap-8 py-3 px-4 w-full bg-gray-50 border border-b border-gray-200 sm:items-center dark:border-gray-700 lg:py-4 dark:bg-gray-800"
    >
      <p>
      Jan Sale: Save up to 90% for 3 months - Offer ends soon{" "}
      </p>
      <button
        data-collapse-toggle="banner"
        type="button"
        class="cta flex items-center text-gray-400 hover:text-gray-900 rounded-lg text-sm dark:hover:text-white"
      >
        Buy Now & Save       
      </button>
      <button
        onClick$={()=> {state.bannerOn = false} }
        data-collapse-toggle="banner"
        type="button"
        class="flex items-center text-gray-400 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:text-white"
      >
        <svg
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div> : null }
    </>
    
  );
});

export default Banner;
