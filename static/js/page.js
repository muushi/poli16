$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10'],
        menu: "#navigation",
        recordHistory: false
    });
});

function localize(lang) {
  $("[data-localize]").localize("site", {
      pathPrefix: "static/localization",
      language: lang
  });
};
