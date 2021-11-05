const dataModel = require("../Models/dataModel");

const addData = async (req, res) => {

    const {
        fname,
        lname,
        regNumber,
        email,
        dept,
        section,
        year,
        hosteler,
        age,
        gender,
        vaccine,
        vaccine_dose,
        covid_status,
        home_state
    } = req.body;

    let uploadFileList = []
    if (req.files.length > 0) {
        uploadFileList = req.files.map((file) => {
            return {
                file: file.path
            }
        })
    }



    const _data = new dataModel({
        fname,
        lname,
        regNumber,
        email,
        dept,
        section,
        year,
        hosteler,
        age,
        gender,
        vaccine,
        vaccine_dose,
        covid_status,
        home_state,
        "uploadFile": uploadFileList,
    })

    _data.save((error, data) => {
        if (error) {
            return res.status(500).json({
                error: error,
                success: false,
                message: "DB Error occurred. Contact your administrator"
            })
        }

        if (data) {
            res.status(201).json({
                success: true,
                data: data,
                message: "Data Added Successfully"
            })
        }
    })
}

module.exports = { addData };