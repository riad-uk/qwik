import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import SinglePost from "~/components/sections/single-post/single-post";

export default component$(() => {
  const loc = useLocation();
  const id = loc.params.slug;
  return <SinglePost slug={id} />;
});
