import title from "../src/components/title";
import breadcrumb from "../src/components/breadcrumb";

describe("Components", () => {
  describe("Title", () => {
    test("Should render a title component", () => {
      const html = title("test");
      expect(html).toMatch(`<h1 class="title">test</h1>`);
    });
  });

  describe("breadcrumb", () => {
    test("Should render a title component", () => {
      const html = breadcrumb("test");
      expect(html)
        .toMatch(`<nav class=\"breadcrumb\" aria-label=\"breadcrumbs\">
            <ul>
                <li><a href=\"javascript:history.back()\">Back</a></li>
                <li class=\"is-active\"><a href=\"#\" aria-current=\"page\">test</a></li>
            </ul>
          </nav>`);
    });
  });

  // TODO: Use snapshots to test components instead of comparing strings
});
