


function navigationAnchor() {
  var window_top = $(window).scrollTop();
  var div_top = $('#navigation-anchor').offset().top;
  if (window_top > div_top) $('#navigation-bar').addClass('anchor')
  else $('#navigation-bar').removeClass('anchor');
}


function insertInfoPane() {
    var el = document.getElementById('info-pane');
    if (el) {
        var html = '';

         // adoption
        html += '<div id="sidebar-integration">';
        html += '<h3>Adoption</h3>';
        html += '<a href="http://www.sidefx.com/" target="_blank"><h4 class="houdini"><span></span></h4></a>';
        html += '<a href="http://renderman.pixar.com" target="_blank"><h4 class="renderman"><span></span></h4></a>';
        html += '<a href="http://www.solidangle.com/" target="_blank"><h4 class="arnold"><span></span></h4></a>';
        html += '<a href="http://www.realflow.com/" target="_blank"><h4 class="realflow"><span></span></h4></a>';
        html += '<a href="http://www.isotropix.com/" target="_blank"><h4 class="clarisse"><span></span></h4></a>';
        html += '<a href="http://www.guerillarender.com/" target="_blank"><h4 class="guerilla"><span></span></h4></a>';
        html += '<a href="http://www.maxwellrender.com/" target="_blank"><h4 class="maxwell"><span></span></h4></a>';
        html += '<a href="https://www.thefoundry.co.uk/products/modo/" target="_blank"><h4 class="modo"><span></span></h4></a>';
        html += '<a href="http://www.chaosgroup.com/" target="_blank"><h4 class="vray"><span></span></h4></a>';
        html += '<a href="https://home.otoy.com/render/octane-render/" target="_blank"><h4 class="octane"><span></span></h4></a>';
        html += '<a href="http://www.3delight.com/" target="_blank"><h4 class="delight"><span></span></h4></a>';
        html += '<a href="http://www.vfxplatform.com/" target="_blank"><h4 class="vfx"><span></span></h4></a>';
        html += '<a href="https://jangafx.com/" target="_blank"><h4 class="embergen"><span></span></h4></a>';
        html += '</div>';

        // contact info
        html += '<div id="sidebar-contact">';
        html += '<h3>Contacts</h3>';
        html += '<p>';
        html += 'TSC Chair:</br><a href="mailto:ken.museth@wetafx.co.nz">ken.museth@wetafx.co.nz</a> </br>';
        html += 'TSC Members:</br><a href="mailto:openvdb-dev@lists.aswf.io">openvdb-dev@lists.aswf.io</a> </br>';
        html += 'Discussion Forum:</br><a href="http://www.openvdb.org/forum/">openvdb-forum@googlegroups.com</a> </br>';
        html += 'Security Issues:</br><a href="mailto:security@openvdb.org">security@openvdb.org</a>';
        html += '</p>'
        html += '</div>';

        el.innerHTML = html;
    }
}


window.onload = insertInfoPane;


$(function() {
  $(window).scroll(navigationAnchor);
  navigationAnchor();
});
