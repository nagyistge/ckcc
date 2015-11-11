Meteor.startup(function () {
  if (process.env.INITIALIZE !== false) {
    if (!Metadata.findOne({_id: "RNASeq_completion_form"})) {
      Metadata.insert({
        "_id": "RNASeq_completion_form",
        "name": "RNASeq_completion_form",
        "commonName": "RNA Sequence Completion",
        "version": "V1",
        "n": 20,
        "incompleteCount": 0,
        "schema": {
          "CreatedAt": {
            "label": "Created At",
            "type": "Date"
          },
          "Patient_ID": {
            "label": "Patient ID",
            "type": "String",
            "autoform": {
              "type": "text"
            }
          },
          "QC_reports": {
            "label": "QC reports",
            "type": "String"
          },
          "RIN_score_from_UCSF": {
            "label": "RIN score from UCSF",
            "type": "Number"
          },
          "date_completed": {
            "label": "date completed",
            "type": "Date",
            "autoform": {
              "afFieldInput": {
                "type": "date",
                "timezoneId": "America/Los_Angeles"
              }
            }
          },
          "date_received": {
            "label": "date received",
            "type": "Date",
            "autoform": {
              "afFieldInput": {
                "type": "date",
                "timezoneId": "America/Los_Angeles"
              }
            }
          },
          "library_prep_used": {
            "allowedValues": [
                "Illumina TruSeq Non-stranded",
                "Illumina TruSeq stranded",
                "NuGen non-stranded",
                "NuGen stranded",
                "Clone Tech stranded",
                "Clone Tech non-stranded"
              ],
            "label": "library prep used",
            "max": 200,
            "type": "String"
          },
          "library_prep_notes": {
            "label": "library prep notes",
            "type": "String"
          },
          "location_of_fastq_file": {
            "label": "location of fastq file",
            "type": "String"
          }
        },
        "metadata": {
          "commonName": "RNA Sequence Completion",
          "version": "V1",
          "Form_Name": "RNASeq_completion_form",
          "Fields": [
            {
              "Field_Name": "Patient_ID",
              "label": "Patient ID",
              "type": "String",
              "autoform": {
                "type": "text"
              }
            },
            {
              "Field_Name": "QC_reports",
              "label": "QC reports",
              "type": "String"
            },
            {
              "Field_Name": "RIN_score_from_UCSF",
              "label": "RIN score from UCSF",
              "type": "Number"
            },
            {
              "Field_Name": "date_completed",
              "label": "date completed",
              "type": "Date",
              "autoform": {
                "afFieldInput": {
                  "type": "date",
                  "timezoneId": "America/Los_Angeles"
                }
              }
            },
            {
              "Field_Name": "date_received",
              "label": "date received",
              "type": "Date",
              "autoform": {
                "afFieldInput": {
                  "type": "date",
                  "timezoneId": "America/Los_Angeles"
                }
              }
            },
            {
              "Field_Name": "library_prep_used",
              "allowedValues": [
                "Illumina TruSeq Non-stranded",
                "NuGen non-stranded",
                "NuGen stranded",
                "Clone Tech stranded",
                "Clone Tech non-stranded"
              ],
              "label": "library prep used",
              "max": 200,
              "type": "String"
            },
            {
              "Field_Name": "library_prep_notes",
              "label": "library prep notes",
              "type": "String"
            },
            {
              "Field_Name": "location_of_fastq_file",
              "label": "location of fastq file",
              "type": "String"
            }
          ]
        },
        "fieldOrder": [
          "Patient_ID",
          "QC_reports",
          "RIN_score_from_UCSF",
          "date_completed",
          "date_received",
          "library_prep_used",
          "library_prep_notes",
          "location_of_fastq_file"
        ],
        "study": "prad_wcdt"
      });
    }
  }
});
