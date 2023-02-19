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
import Blog from "~/components/sections/blog/blog";

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
  // const counterState = useStore(context.counter);

  //   add Store to context
  useContextProvider(MyContext, state);
  // useContextProvider(MyCounter, counter);

  return (
    <div>
      <div class="homepage archive-page" style="postion: relative;">
        <Blog />
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
