Meteor.publish("foo", function (recordId) {
  if (recordId) {
    // if (User.collaborationsContain(

    return Foo.findOne({
      _id: recordId,
      collaborations: {
        $in: User.getCollaborations()
      }
    });
  } else
    return Foo.find({
      collaborations: {
        $in: User.getCollaborations()
      }
  });
});


Meteor.publish("publicStats", function (argument) {
  return PublicStats.find().forEach(function (record) {
    record.userCount = Meteor.users.find().count();
  });
});
