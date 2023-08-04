


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
        html += '<a href="https://www.chaosgroup.com/3d-rendering-software" target="_blank"><h4 class="vray"><span></span></h4></a>';
        html += '<a href="https://home.otoy.com/render/octane-render/" target="_blank"><h4 class="octane"><span></span></h4></a>';
        html += '<a href="http://www.3delight.com/" target="_blank"><h4 class="delight"><span></span></h4></a>';
        html += '<a href="https://jangafx.com/" target="_blank"><h4 class="embergen"><span></span></h4></a>';
        html += '<a href="http://www.blender.org/" target="_blank"><h4 class="blender"><span></span></h4></a>';
        html += '<a href="https://www.chaosgroup.com/fluid-dynamics-software" target="_blank"><h4 class="phoenix"><span></span></h4></a>';
        html += '<a href="https://corona-renderer.com" target="_blank"><h4 class="corona"><span></span></h4></a>';
        html += '<a href="https://www.afterworks.com/FumeFX.asp" target="_blank"><h4 class="fumefx"><span></span></h4></a>';
        html += '<a href="https://www.keyshot.com" target="_blank"><h4 class="keyshot"><span></span></h4></a>';
        html += '<a href="https://docs.lightwave3d.com/lw2020/reference/simulation/openvdb" target="_blank"><h4 class="lightwave"><span></span></h4></a>';
        html += '<a href="https://www.cebas.com/?pid=productinfo&prd_id=187" target="_blank"><h4 class="thinkingparticles"><span></span></h4></a>';
        html += '<a href="https://www.unrealengine.com" target="_blank"><h4 class="unreal"><span></span></h4></a>';
        html += '<a href="http://www.vfxplatform.com/" target="_blank"><h4 class="vfx"><span></span></h4></a>';
        html += '</div>';

        // contact info
        html += '<div id="sidebar-contact">';
        html += '<h3>Contacts</h3>';
        html += '<p>';
        html += 'TSC Chair:</br><a href="mailto:ken.museth@gmail.com">ken.museth@gmail.com</a> </br>';
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
