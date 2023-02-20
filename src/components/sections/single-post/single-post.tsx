/* eslint-disable no-console */
import {
  component$,
  Resource,
  useResource$,
  useStylesScoped$,
} from "@builder.io/qwik";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import styles from "./single-post.scss?inline";

import contentful from "contentful";

export default component$(({ slug }) => {
  useStylesScoped$(styles);

  const contentfulResource = useResource$<[]>(({ cleanup }) => {
    // A good practice is to use `AbortController` to abort the fetching of data if
    // new request comes in. We create a new `AbortController` and register a `cleanup`
    // function which is called when this function re-runs.
    const controller = new AbortController();
    cleanup(() => controller.abort());

    // Fetch the data and return the promises.
    console.log(slug);
    // console.log(content);
    return getContentful(slug);
  });
  return (
    <div>
      <div>
        {/* Loading States of the call */}
        <Resource
          value={contentfulResource}
          onPending={() => <>Loading...</>}
          onRejected={(error) => <>Error: {error.message}</>}
          onResolved={(data) => {
            console.log(data);
            // The loop
            // return content.map((item) => {
            const fields = data.items[0].fields;
            const articleText = documentToHtmlString(fields.articleText);
            const articleCopy = documentToHtmlString(fields.articleCopy);
            // let img = document.body.style.backgroundImage;
            // document.getElementById("demo").innerHTML = img;
            return (
              <section class="single-post-page">
                <div
                  class="image-block"
                  style={{
                    backgroundImage: `url(${fields.articleImage.fields.file.url})`,
                  }}
                ></div>
                <div class="data-block">
                  <h1 class="text-2xl font-bold text-black sm:text-6xl lg:text-5xl">
                    {fields.mainTitle}
                  </h1>

                  <div
                    class="mt-8 text-base"
                    dangerouslySetInnerHTML={articleText}
                  ></div>

                  {/* <div
                    class="mt-8 text-base"
                    dangerouslySetInnerHTML={articleCopy}
                  ></div> */}
                </div>
              </section>
            );
            // })
          }}
        />
      </div>
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto animate-pulse">
          <h1 class="w-48 h-2 mx-auto bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

          <p class="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          <p class="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg sm:w-80 dark:bg-gray-700"></p>

          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
            <div class="w-full ">
              <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

              <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
              <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div class="w-full ">
              <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

              <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
              <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div class="w-full ">
              <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

              <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
              <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div class="w-full ">
              <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

              <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
              <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div class="w-full ">
              <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

              <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
              <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div class="w-full ">
              <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

              <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
              <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div class="w-full ">
              <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

              <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
              <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div class="w-full ">
              <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

              <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
              <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export async function getContentful(slug): Promise<any> {
  // Should not be commited.
  const client = contentful.createClient({
    space: "g6juzkbeuy46",
    environment: "master", // defaults to 'master' if not set
    accessToken: "p0gtEnd5KQj9xBCwH9tC7exvaDBCims7kWh6jmJ0xXs",
  });

  const data = await client
    .getEntries({
      content_type: "title",
      "fields.slug": slug,
    })
    .then((entry) => entry)
    .catch(console.error);

  return data;
}
