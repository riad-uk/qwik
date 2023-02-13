import { component$, useContext, useStore, useTask$, useClientEffect$ } from "@builder.io/qwik";

// import my context
import { MyContext } from "~/routes";

export default component$(() => {
  
  const state = useContext(MyContext);

  const store = useStore({
    count: 1
  });

  // this task will be called exactly once, either on the server or on the browser
  useTask$(() => {
    console.log('component mounted');
  });

  // this task will be called at mount and every time `store.count` changes
  useTask$(({ track }) => {
    const count = track(() => store.count);
    console.log(count);
  });

  useClientEffect$(() => {
    // Only runs in the client
    console.log("useclienteffect")
  });

  return (
    <div>

      {/* <button onClick$={() => store.count++}>Click Me</button> */}

      <h1 class="text-2xl font-bold text-black sm:text-6xl lg:text-5xl">
        {state.title}
      </h1>
      <p class="mt-8 text-base">
        {state.subTitle}
      </p>
    </div>
  );
});
