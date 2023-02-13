/* eslint-disable no-console */
import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

import contentful from "contentful";

export default component$(({ id }) => {
  const contentfulResource = useResource$<string[]>(({ cleanup }) => {
    // A good practice is to use `AbortController` to abort the fetching of data if
    // new request comes in. We create a new `AbortController` and register a `cleanup`
    // function which is called when this function re-runs.
    const controller = new AbortController();
    cleanup(() => controller.abort());

    // Fetch the data and return the promises.
    console.log(id);
    return getContentful(id);
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
          onResolved={(data) => {
            // The loop
            // return content.map((item) => {
            const fields = data.fields;
            const articleText = documentToHtmlString(fields.articleText);
            const articleCopy = documentToHtmlString(fields.articleCopy);
            return (
              <section class="py-10 sm:py-16 lg:py-16 container mx-auto">
                <div>
                  <h1 class="text-2xl font-bold text-black sm:text-6xl lg:text-5xl">
                    {fields.mainTitle}
                  </h1>

                  <div
                    class="mt-8 text-base"
                    dangerouslySetInnerHTML={articleText}
                  ></div>

                  <div
                    class="mt-8 text-base"
                    dangerouslySetInnerHTML={articleCopy}
                  ></div>

                      <div>
                        <img
                          class="w-full"
                          src={fields.articleImage.fields.file.url}
                          alt=""
                        />
                      </div>
                </div>
              </section>
            );
            // })
          }}
        />
      </div>
    </div>
  );
});

export async function getContentful(id: string): Promise<any> {
  // Should not be commited.
  const client = contentful.createClient({
    space: "g6juzkbeuy46",
    environment: "master", // defaults to 'master' if not set
    accessToken: "p0gtEnd5KQj9xBCwH9tC7exvaDBCims7kWh6jmJ0xXs",
  });

  const data = await client.getEntry(id);
  console.log(data);
  return data;
}