$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10'],
        menu: "#navigation",
        recordHistory: false
    });
    $.fn.fullpage.setAutoScrolling(false);
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || (/*@cc_on!@*/false || !!document.documentMode)){
        $.fn.fullpage.setAutoScrolling(false);
    }
    L.mapbox.accessToken = 'pk.eyJ1IjoibXV1c2hpIiwiYSI6ImNpcmV3ZHQ0ZDAwMTdpZGx5bTQwNTRuc3YifQ.rkg_L29WePLjrbYEspG2XA';
    var map = L.mapbox.map('map', 'muushi.118bcbc5');
});

function localize(lang) {
  $("[data-localize]").localize("site", {
      pathPrefix: "static/localization",
      language: lang
  });
};
