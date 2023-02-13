import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/sections/header/header';
import Footer from '../components/sections/footer/footer';

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <Footer />
    </>
  );
});
