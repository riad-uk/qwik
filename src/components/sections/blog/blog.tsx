/* eslint-disable no-console */
import {
  component$,
  Resource,
  useResource$,
  useStylesScoped$,
  useStore,
} from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import styles from "./blog.scss?inline";
import contentful from "contentful";

export default component$(() => {
  useStylesScoped$(styles);

  const state = useStore({ activeSlug: "" });

  console.log("loaded");

  const contentfulResource = useResource$<string[]>(({ cleanup }) => {
    // A good practice is to use `AbortController` to abort the fetching of data if
    // new request comes in. We create a new `AbortController` and register a `cleanup`
    // function which is called when this function re-runs.
    const controller = new AbortController();
    cleanup(() => controller.abort());

    // Fetch the data and return the promises.
    return getContentful();
  });

  console.log("Render");

  return (
    <div>
      <div>
        {/* Loading States of the call */}
        <Resource
          value={contentfulResource}
          onPending={() => <>Loading...</>}
          onRejected={(error) => <>Error: {error.message}</>}
          onResolved={(content) => {
            // The loop
            return content.map((item) => {
              const fields = item.fields;
              const slug = fields.slug;
              console.log(item);
              const articleText = documentToHtmlString(fields.articleText);
              return (
                <section
                  class={`single-post ${
                    state.activeSlug === slug ? "active" : ""
                  }`}
                >
                  <div class="content-block">
                    <h1 class="text-2xl font-bold text-black sm:text-6xl lg:text-5xl">
                      {fields.mainTitle}
                    </h1>
                    <div
                      class="mt-8 text-base"
                      dangerouslySetInnerHTML={articleText}
                    ></div>

                    <a
                      onClick$={(event) => {
                        event.preventDefault();
                        state.activeSlug = slug;
                        console.log("clicked");
                        // useNavigate(/posts/${slug});
                      }}
                    >
                      CLICK ME!
                    </a>

                    <a href={`/posts/${slug}`} class="my-link">
                      <button
                        type="button"
                        class="inline-flex items-center px-6 py-2 text-sm font-medium text-center rounded text-white bg-green-700 hover:bg-green-800"
                      >
                        Read more
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-6 h-6 ml-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </button>
                    </a>
                  </div>
                  <div
                    class="image-block"
                    style={{
                      backgroundImage: `url(${fields.articleImage.fields.file.url})`,
                    }}
                  ></div>
                </section>
              );
            });
          }}
        />
      </div>
    </div>
  );
});

export async function getContentful(): Promise<any> {
  // Should not be commited.
  const client = contentful.createClient({
    space: "g6juzkbeuy46",
    environment: "master", // defaults to 'master' if not set
    accessToken: "p0gtEnd5KQj9xBCwH9tC7exvaDBCims7kWh6jmJ0xXs",
  });

  const data = await client.getEntries();

  return data.items;
}
