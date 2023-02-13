import { component$, useStylesScoped$, useStore, createContext, useContextProvider } from "@builder.io/qwik";
import { IntuitLogo } from "~/components/elements";
import { Banner } from "~/components/sections";
import styles from "./header.scss?inline";
import { context } from "~/context/";

// Create a new context descriptor
export const HeaderContext = createContext('header-context');

export default component$(() => {
  useStylesScoped$(styles);

   // create store
   const state = useStore(context.header)

//   add Store to context
useContextProvider(HeaderContext, state);

  return (
    <div>
      <Banner />
      <div class="container mx-auto px-4">
      <header class="p-4 bg-white rounded-lg md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <div class="global-nav">
        <IntuitLogo />
        <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" class="mr-4  md:mr-6 ">
              Why QB?
              <svg width="14" height="8" fill="none" xmlns="http://www.w3.org/2000/svg" class="header_arrow__X9Fyw"><path d="M1.332 1.215l4.352 4.509a2 2 0 002.878 0l4.353-4.51" stroke="#0D333F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </a>
          </li>
          <li>
            <a href="#" class="mr-4  md:mr-6">
              QB for you
              <svg width="14" height="8" fill="none" xmlns="http://www.w3.org/2000/svg" class="header_arrow__X9Fyw"><path d="M1.332 1.215l4.352 4.509a2 2 0 002.878 0l4.353-4.51" stroke="#0D333F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </a>
          </li>
          <li>
            <a href="#" class="mr-4  md:mr-6">
              Features
              <svg width="14" height="8" fill="none" xmlns="http://www.w3.org/2000/svg" class="header_arrow__X9Fyw"><path d="M1.332 1.215l4.352 4.509a2 2 0 002.878 0l4.353-4.51" stroke="#0D333F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </a>
          </li>
          <li>
            <a href="#" class="">
              Making Tax Digital
              <svg width="14" height="8" fill="none" xmlns="http://www.w3.org/2000/svg" class="header_arrow__X9Fyw"><path d="M1.332 1.215l4.352 4.509a2 2 0 002.878 0l4.353-4.51" stroke="#0D333F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </a>
          </li>
          <li>
            <a href="#" class="">
              Prices
              <svg width="14" height="8" fill="none" xmlns="http://www.w3.org/2000/svg" class="header_arrow__X9Fyw"><path d="M1.332 1.215l4.352 4.509a2 2 0 002.878 0l4.353-4.51" stroke="#0D333F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </a>
          </li>
        </ul>
        </div>
        <div class="global-nav">
        <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" class="mr-4  md:mr-6 ">
              Support
            </a>
          </li>
          <li>
            <a href="#" class="mr-4  md:mr-6">
              For accountants
            </a>
          </li>
          <li>
            <a onClick$={() => {state.bannerOn = true}} class="boxed mr-4  md:mr-6">
              Sign in
              <svg width="14" height="8" fill="none" xmlns="http://www.w3.org/2000/svg" class="header_arrow__X9Fyw"><path d="M1.332 1.215l4.352 4.509a2 2 0 002.878 0l4.353-4.51" stroke="#0D333F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </a>
          </li>
        </ul>
        </div>
      </header>
      </div>
    </div>
  );
});
