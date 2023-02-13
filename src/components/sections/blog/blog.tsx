/* eslint-disable no-console */
import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

import contentful from "contentful";

export default component$(() => {


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
              const articleText = documentToHtmlString(fields.articleText);
              return (
                <section class="py-10 sm:py-16 lg:py-16 container mx-auto">
                  <div class="px-4 mx-auto sm:px-6 lg:px-8">
                    <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                      <div>
                        <div>
                          <h1 class="text-2xl font-bold text-black sm:text-6xl lg:text-5xl">
                            {fields.mainTitle}
                          </h1>
  
                          <div
                            class="mt-8 text-base"
                            dangerouslySetInnerHTML={articleText}
                          ></div>
                        </div>
  
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
                          src={fields.articleImage.fields.file.url}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </section>
              );
            })


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
