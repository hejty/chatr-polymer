(function(document) {
  'use strict';

  document.addEventListener('polymer-ready', function() {
    var hamburger = document.getElementById('hamburger');
    var channelPanel = document.getElementById('channel-panel');
    hamburger.addEventListener('click', function() {
        channelPanel.togglePanel();
    })
  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
