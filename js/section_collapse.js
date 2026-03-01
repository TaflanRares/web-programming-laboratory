function section_collapse() {
    document.querySelectorAll('main h2, footer h2').forEach(function (h2) {
        h2.style.cursor = 'pointer';
        h2.addEventListener('click', function () {
            const sectionContent = h2.nextElementSibling;
            if (sectionContent && sectionContent.classList.contains('section-collapsable')) {
                sectionContent.classList.toggle('hidden');
                h2.classList.toggle('collapsed');
            }
        });
    });
}