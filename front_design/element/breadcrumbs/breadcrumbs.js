
function generateBreadcrumbs(data) {
const breadcrumbElement = document.getElementById('breadcrumb');
breadcrumbElement.innerHTML = ''; // init current content

data.forEach((item, index) => {
    const li = document.createElement('li');
    if (index < data.length - 1) {
    const link = document.createElement('a');
    link.href = item.url;
    link.textContent = item.text;
    li.appendChild(link);
    } else {
    li.textContent = item.text; // current page , linkless
    }
    breadcrumbElement.appendChild(li);
});
}
generateBreadcrumbs(breadcrumbData);