const breadcrumb = pageName => {
  return `<nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li><a href="javascript:history.back()">Back</a></li>
                <li class="is-active"><a href="#" aria-current="page">${pageName}</a></li>
            </ul>
          </nav>`;
};

export default breadcrumb;
