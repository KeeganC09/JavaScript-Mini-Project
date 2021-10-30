const dataModel = require("../Models/dataModel");

const addData = async (req, res) => {

    console.log(req);

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

    try {
        const covidData = await dataModel.create({
            ...req.body
        });

        res.json({
            data: covidData,
            message: "Successful"
        });
    } catch (error) {
        res.json({
            data: [],
            message: error
        });
    }

}

module.exports = { addData };