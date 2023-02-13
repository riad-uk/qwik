import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./footer.scss?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <footer class="p-4 md:flex md:items-center md:justify-between md:p-6 ">
      <div class="container mx-auto px-4">
        <nav>
          <ul>
            <li>
              <a>QuickBooks Accounting Software</a>
            </li>
            <li>
              <a>QuickBooks for Self-Employed</a>
            </li>
            <li>
              <a>Plans &amp; pricing</a>
            </li>
            <li>
              <a>Apps</a>
            </li>
            <li>
              <a>Mobile app</a>
            </li>
            <li>
              <a>Payroll Software</a>
            </li>
            <li>
              <a>HMRC Self Assessment</a>
            </li>
            <li>
              <a>QuickBooks Desktop</a>
            </li>
            <li>
              <a>QuickBooks Online</a>
            </li>
            <li>
              <a>Best accounting software</a>
            </li>
          </ul>
          <ul>
            <li>
              <a>Accountants &amp; Bookkeepers</a>
            </li>
            <li>
              <a>QuickBooks Online Accountant</a>
            </li>
            <li>
              <a>Training &amp; certification</a>
            </li>
            <li>
              <a>Making Tax Digital</a>
            </li>
            <li>
              <a>Directory for small businesses</a>
            </li>
            <li>
              <a>Sign up</a>
            </li>
          </ul>
          <ul>
            <li>
              <a>Small Business Blog</a>
            </li>
            <li>
              <a>Making Tax Digital</a>
            </li>
            <li>
              <a>Funding</a>
            </li>
            <li>
              <a>Tax &amp; pensions</a>
            </li>
            <li>
              <a>Marketing</a>
            </li>
            <li>
              <a>Finance, budgets &amp; cashflow</a>
            </li>
            <li>
              <a>Ecommerce</a>
            </li>
            <li>
              <a>Working in the cloud</a>
            </li>
            <li>
              <a>My first year</a>
            </li>
          </ul>
          <ul>
            <li>
              <a>Learn &amp; Support</a>
            </li>
            <li>
              <a>QuickBooks Online support</a>
            </li>
            <li>
              <a>QuickBooks Self-Employed support</a>
            </li>
            <li>
              <a>QuickBooks Desktop support</a>
            </li>
            <li>
              <a>QuickBooks Accountant support</a>
            </li>
            <li>
              <a>QuickBooks Payroll support</a>
            </li>
            <li>
              <a>Switch from QuickBooks Desktop</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
});
