Session.setDefault('metadataSearchFilter', '');
Session.setDefault('tableLimit', 20);
Session.setDefault('paginationCount', 1);
Session.setDefault('selectedPagination', 0);
Session.setDefault('skipCount', 0);



//------------------------------------------------------------------------------
// ROUTING


Router.route('/list/metadata/', {
  name: 'metadatasListPage',
  template: 'metadatasListPage',
  yieldTemplates: {
    'navbarHeader': {
      to: 'header'
    },
    'navbarFooter': {
      to: 'footer'
    },
    'mainSidebar': {
      to: 'sidebar'
    },
    'metadataActionButtons': {
      to: 'footerActionElements'
    }
  }
});






//------------------------------------------------------------------------------
// TEMPLATE INPUTS

Template.metadatasListPage.events({
  "click .listButton": function (event, template){
    Router.go('/list/metadatas');
  },
  "click .imageGridButton": function (event, template){
    Router.go('/grid/metadatas');
  },
  "click .tableButton": function (event, template){
    Router.go('/table/metadatas');
  },
  'change #metadataSearchInput': function (){
    Session.set('metadataSearchFilter', $('#metadataSearchInput').val());
  },
  'click .newLink': function (event, template) {
    event.preventDefault();

    process.env.DEBUG && console.log("click .metadataItem");
    Router.go('/metadata/' + this._id + "/new");
  },
  'click .addQuestionnaireItem': function () {
    process.env.DEBUG && console.log("click .addQuestionnaireItem");
    Router.go('/insert/metadata');
  },
  'click .metadataName': function () {
    process.env.DEBUG && console.log("click .metadataItem");
    Router.go('/view/metadata/' + this._id);
  },
  // use keyup to implement dynamic filtering
  // keyup is preferred to keypress because of end-of-line issues
  'keyup #metadataSearchInput': function () {
    Session.set('metadataSearchFilter', $('#metadataSearchInput').val());
  }
});


//------------------------------------------------------------------------------
// TEMPLATE OUTPUTS



Template.metadatasListPage.helpers({
  getQuestionnaireSearchFilter: function (){
    return Session.get('metadataSearchFilter');
  },
  hasNoContent: function () {
    if (Metadata.find().count() === 0) {
      return true;
    } else {
      return false;
    }
  },
  metadatasList: function () {
    return Metadata.find({
      $or: [
        {
          commonName: {
            $regex: Session.get('metadataSearchFilter'),
            $options: 'i'
          }
        },
        {
          _id: {
            $regex: Session.get('metadataSearchFilter'),
            $options: 'i'
          }
        }
    ]
  }, {sort: {commonName: 1, createdAt: -1}});
  }
});
