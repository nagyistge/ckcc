Meteor.startup(function () {

  Initialization.Followup = {
      "_id" : "Followup",
      "name" : "Followup",
      "commonName" : "Followup",
      "version" : "V1",
      "n" : 1,
      "incompleteCount" : 0,
      "schema" : {
        "CreatedAt" : {
            "label" : "Created At",
            "type" : "Date"
        },
        "Patient_ID" : {
            "label" : "Patient ID",
            "type" : "String",
            "autoform" : {
                "type" : "text"
            }
        },
        "Followup_Center" : {
            "optional" : true,
            "type" : "String"
        },
        "Last_Known_Survival_Status" : {
            "optional" : true,
            "type" : "String"
        },
        "Last_Date_Known_Alive" : {
            "autoform" : {
                "afFieldInput" : {
                    "type" : "date",
                    "timezoneId" : "America/Los_Angeles"
                }
            },
            "optional" : true,
            "type" : "Date"
        },
        "Last_Followup_Date" : {
            "autoform" : {
                "afFieldInput" : {
                    "type" : "date",
                    "timezoneId" : "America/Los_Angeles"
                }
            },
            "optional" : true,
            "type" : "Date"
        },
        "Expired_Date" : {
            "autoform" : {
                "afFieldInput" : {
                    "type" : "date",
                    "timezoneId" : "America/Los_Angeles"
                }
            },
            "optional" : true,
            "type" : "Date"
        },
        "Date_of_Progression" : {
            "autoform" : {
                "afFieldInput" : {
                    "type" : "date",
                    "timezoneId" : "America/Los_Angeles"
                }
            },
            "optional" : true,
            "type" : "Date"
        },
        "Followup_Start_Date" : {
            "autoform" : {
                "afFieldInput" : {
                    "type" : "date",
                    "timezoneId" : "America/Los_Angeles"
                }
            },
            "optional" : true,
            "type" : "Date"
        },
        "Off_Treatment_Date" : {
            "autoform" : {
                "afFieldInput" : {
                    "type" : "date",
                    "timezoneId" : "America/Los_Angeles"
                }
            },
            "optional" : true,
            "type" : "Date"
        },
        "Off_Treatment_Reason" : {
            "optional" : true,
            "type" : "String"
        },
        "Off_Treatment_Reason_Explain" : {
            "optional" : true,
            "type" : "String"
        },
        "Off_Study_Date" : {
            "autoform" : {
                "afFieldInput" : {
                    "type" : "date",
                    "timezoneId" : "America/Los_Angeles"
                }
            },
            "optional" : true,
            "type" : "Date"
        },
        "Off_Study_Reason" : {
            "optional" : true,
            "type" : "String"
        },
        "Off_Study_Reason_Explain" : {
            "optional" : true,
            "type" : "String"
        },
        "Best_Response" : {
            "optional" : true,
            "type" : "String"
        },
        "Best_Response_Date" : {
            "autoform" : {
                "afFieldInput" : {
                    "type" : "date",
                    "timezoneId" : "America/Los_Angeles"
                }
            },
            "optional" : true,
            "type" : "Date"
        },
        "Best_Response_Confirm" : {
            "optional" : true,
            "type" : "String"
        },
        "QA_Date" : {
          "autoform" : {
            "afFieldInput" : {
              "type" : "date",
              "timezoneId" : "America/Los_Angeles"
            }
          },
          "optional" : true,
          "type" : "Date"
        }
      },
      "metadata" : {
          "commonName" : "Followup",
          "version" : "V1",
          "Form_Name" : "Followup",
          "Fields" : [
              {
                  "Field_Name" : "Patient_ID",
                  "label" : "Patient ID",
                  "type" : "String",
                  "autoform" : {
                      "type" : "text"
                  }
              },
              {
                  "Field_Name" : "Followup_Center",
                  "optional" : true,
                  "type" : "String"
              },
              {
                  "Field_Name" : "Last_Known_Survival_Status",
                  "optional" : true,
                  "type" : "String"
              },
              {
                  "Field_Name" : "Last_Date_Known_Alive",
                  "autoform" : {
                      "afFieldInput" : {
                          "type" : "date",
                          "timezoneId" : "America/Los_Angeles"
                      }
                  },
                  "optional" : true,
                  "type" : "Date"
              },
              {
                  "Field_Name" : "Last_Followup_Date",
                  "autoform" : {
                      "afFieldInput" : {
                          "type" : "date",
                          "timezoneId" : "America/Los_Angeles"
                      }
                  },
                  "optional" : true,
                  "type" : "Date"
              },
              {
                  "Field_Name" : "Expired_Date",
                  "autoform" : {
                      "afFieldInput" : {
                          "type" : "date",
                          "timezoneId" : "America/Los_Angeles"
                      }
                  },
                  "optional" : true,
                  "type" : "Date"
              },
              {
                  "Field_Name" : "Date_of_Progression",
                  "autoform" : {
                      "afFieldInput" : {
                          "type" : "date",
                          "timezoneId" : "America/Los_Angeles"
                      }
                  },
                  "optional" : true,
                  "type" : "Date"
              },
              {
                  "Field_Name" : "Followup_Start_Date",
                  "autoform" : {
                      "afFieldInput" : {
                          "type" : "date",
                          "timezoneId" : "America/Los_Angeles"
                      }
                  },
                  "optional" : true,
                  "type" : "Date"
              },
              {
                  "Field_Name" : "Off_Treatment_Date",
                  "autoform" : {
                      "afFieldInput" : {
                          "type" : "date",
                          "timezoneId" : "America/Los_Angeles"
                      }
                  },
                  "optional" : true,
                  "type" : "Date"
              },
              {
                  "Field_Name" : "Off_Treatment_Reason",
                  "optional" : true,
                  "type" : "String"
              },
              {
                  "Field_Name" : "Off_Treatment_Reason_Explain",
                  "optional" : true,
                  "type" : "String"
              },
              {
                  "Field_Name" : "Off_Study_Date",
                  "autoform" : {
                      "afFieldInput" : {
                          "type" : "date",
                          "timezoneId" : "America/Los_Angeles"
                      }
                  },
                  "optional" : true,
                  "type" : "Date"
              },
              {
                  "Field_Name" : "Off_Study_Reason",
                  "optional" : true,
                  "type" : "String"
              },
              {
                  "Field_Name" : "Off_Study_Reason_Explain",
                  "optional" : true,
                  "type" : "String"
              },
              {
                  "Field_Name" : "Best_Response",
                  "optional" : true,
                  "type" : "String"
              },
              {
                  "Field_Name" : "Best_Response_Date",
                  "autoform" : {
                      "afFieldInput" : {
                          "type" : "date",
                          "timezoneId" : "America/Los_Angeles"
                      }
                  },
                  "optional" : true,
                  "type" : "Date"
              },
              {
                  "Field_Name" : "Best_Response_Confirm",
                  "optional" : true,
                  "type" : "String"
              },
              {
                  "Field_Name" : "QA_Date",
                  "autoform" : {
                      "afFieldInput" : {
                          "type" : "date",
                          "timezoneId" : "America/Los_Angeles"
                      }
                  },
                  "optional" : true,
                  "type" : "Date"
              }
          ]
      },
      "fieldOrder" : [
          "Patient_ID",
          "Followup_Center",
          "Last_Known_Survival_Status",
          "Last_Date_Known_Alive",
          "Last_Followup_Date",
          "Expired_Date",
          "Date_of_Progression",
          "Followup_Start_Date",
          "Off_Treatment_Date",
          "Off_Treatment_Reason",
          "Off_Treatment_Reason_Explain",
          "Off_Study_Date",
          "Off_Study_Reason",
          "Off_Study_Reason_Explain",
          "Best_Response",
          "Best_Response_Date",
          "Best_Response_Confirm",
          "QA_Date"
      ],
      "study" : "prad_wcdt"
  };

});
