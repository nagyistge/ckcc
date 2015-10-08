Session.set("resize", null);
Session.setDefault('appHeight', $(window).height());
Session.setDefault('appWidth', $(window).width());
Session.setDefault("glassOpacity", .95);
Session.setDefault("backgroundColorA", '#456ad7');


Meteor.startup(function () {
  window.addEventListener('resize', function () {
    Session.set("resize", new Date());
    Session.set("appHeight", $(window).height());
    Session.set("appWidth", $(window).width());
  });
});


Session.setDefault('transparencyDivHeight', 100);
Session.setDefault('transparencyDivLeft', 0);


Meteor.startup(function () {
  Template.appLayout.layout();
});


//==================================================================================================

Template.appLayout.rendered = function () {
  Template.appLayout.layout();
};




Template.appLayout.helpers({
  getBackground: function (){
    if ( Session.get('show_background')) {
      return "background: url(forest1.jpg) no-repeat center center fixed;";
      // $("body").attr("class", "forest");
      // $("html").attr("class", "");
    } else {

      return "background-color: #AEC9A8;";
      // return "background: url(forest1.jpg) no-repeat center center fixed;";
      // $("html").attr("class", "dissertation");
      // $("body").attr("class", "");
    }
  },
  resized: function () {
    Template.appLayout.layout();
  },
  getStyle: function () {
    return parseStyle({
      "left": Session.get('transparencyDivLeft') + "px;"
    });
  }
});


Template.appLayout.layout = function () {
  Session.set('transparencyDivHeight', $('#innerPanel').height() + 40);
  if (Session.get('appWidth') > 768) {
    Session.set('transparencyDivLeft', (Session.get('appWidth') - 768) * 0.5);
  } else {
    Session.set('transparencyDivLeft', 0);
  }
};
Template.appLayout.delayedLayout = function (timeout) {
  Meteor.setTimeout(function () {
    Template.appLayout.layout();
  }, timeout);
};

//==================================================================================================


Template.registerHelper("getOpacityWithCorner", function (){
  if (Session.get('appWidth') > 768) {
    return "background: linear-gradient(225deg, transparent 28.28px, rgba(255,255,255," + Session.get("glassOpacity") + ") 0) top right;";
  } else {
    return "background-color: rgba(255,255,255," + Session.get("glassOpacity") + "); top: 50px;";
  }
});
Template.registerHelper("getOpacity", function (){
  return "background-color: rgba(255,255,255," + Session.get("glassOpacity") + ");";
});
Template.registerHelper("btnPrimary", function () {
  return "background-color: " + Session.get('backgroundColorA') + "; color: #ffffff;";
});

//==================================================================================================



parseStyle = function (json) {
  var result = "";
  $.each(json, function (i, val) {
    result = result + i + ":" + val + " ";
  });
  return result;
};