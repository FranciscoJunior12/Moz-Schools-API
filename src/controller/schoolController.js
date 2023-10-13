const data = require('../data/data.json');

const compare = require('../utils/compareString');


const mongoose = require('mongoose');
;
const school = require('../model/School')
const School = mongoose.model('Escola');





exports.get = async (req, res) => {
    try {
        const data = await School.find({}, { _id: 0, __v: 0 });
        return res.status(200).json(data);

    } catch (error) {
        return res.status(500).json({ error: "An internal server error occurred." });

    }



}


// exports.index = (req, res) => {
//     try {
//         return res.status(200).json(data);
//     } catch (error) {
//         return res.status(500).json({ error: "An internal server error occurred." });
//     }

// }


exports.getByProvince = async (req, res) => {

    try {
        let { province } = req.params;

        province = province.charAt(0).toUpperCase() + province.slice(1).toLowerCase();
        const data = await School.find({
            provincia: province
        }, { _id: 0, __v: 0 });


        if (data.length === 0) return res.status(204).json({
            messsage: "The request was successful, but there is no content to return."
        })

        return res.status(200).json(data)

    } catch (error) {
        return res.status(500).json({ error: "An internal server error occurred." });

    }


    // try {
    //     if (!req.params.province) return res.status(400).json({ error: "missing params pronvice" });

    //     const filterData = data.filter((data) => {
    //         return compare.compareStringWithoutAccents(data.provincia, req.params.province)
    //     })


    //     if (filterData.length === 0) return res.status(204).json({
    //         messsage: "The request was successful, but there is no content to return."
    //     })

    //     return res.status(200).json(filterData)

    // } catch (error) {

    //     res.status(400).json({ erro: error })
    // }

}



exports.getByDistrict = async (req, res) => {


    try {

        let { district } = req.params;


        const data = await School.find({
            distrito: { $regex: district, $options: 'i' }
        }, { _id: 0, __v: 0 });


        if (data.length === 0) return res.status(204).json({
            messsage: "The request was successful, but there is no content to return."
        })

        return res.status(200).json(data)

    } catch (error) {
        return res.status(500).json({ error: "An internal server error occurred." });

    }

    // try {
    //     if (!req.params.district) return res.status(400).json({ error: "missing params district" });

    //     const filterData = data.filter((data) => {
    //         return compare.compareStringWithoutAccents(data.distrito, req.params.district)
    //     })


    //     if (filterData.length === 0) return res.status(204).json({
    //         messsage: "The request was successful, but there is no content to return."
    //     })

    //     return res.status(200).json(filterData)

    // } catch (error) {

    //     return res.status(500).json({ error: "An internal server error occurred." });
    // }
}


exports.getByPost = async (req, res) => {

    try {
        let { post } = req.params;


        const data = await School.find({
            posto: { $regex: post, $options: 'i' }
        }, { _id: 0, __v: 0 });


        if (data.length === 0) return res.status(204).json({
            messsage: "The request was successful, but there is no content to return."
        })

        return res.status(200).json(data)

    } catch (error) {
        return res.status(500).json({ error: "An internal server error occurred." });

    }


    // try {
    //     if (!req.params.post) return res.status(400).json({ error: "missing params district" });

    //     const filterData = data.filter((data) => {
    //         return compare.compareStringWithoutAccents(data.posto, req.params.post)
    //     })


    //     if (filterData.length === 0) return res.status(204).json({
    //         messsage: "The request was successful, but there is no content to return."
    //     })

    //     return res.status(200).json(filterData)

    // } catch (error) {

    //     return res.status(500).json({ error: "An internal server error occurred." });
    // }

}


exports.getByLocality = async (req, res) => {

    try {
        let { locality } = req.params;


        const data = await School.find({
            distrito: { $regex: locality, $options: 'i' }
        }, { _id: 0, __v: 0 });

        if (data.length === 0) return res.status(204).json({
            messsage: "The request was successful, but there is no content to return."
        })

        return res.status(200).json(data)

    } catch (error) {
        return res.status(500).json({ error: "An internal server error occurred." });

    }




    // try {
    //     if (!req.params.locality) return res.status(400).json({ error: "missing params district" });

    //     const filterData = data.filter((data) => {
    //         return compare.compareStringWithoutAccents(data.localidade, req.params.locality)
    //     })


    //     if (filterData.length === 0) return res.status(204).json({
    //         messsage: "The request was successful, but there is no content to return."
    //     })

    //     return res.status(200).json(filterData)

    // } catch (error) {

    //     return res.status(500).json({ error: "An internal server error occurred." });
    // }


}

exports.getById = async (req, res) => {


    try {
        const data = await School.findOne({
            codigo: req.params.id
        }, { _id: 0, __v: 0 });


        if (data.length === 0) return res.status(204).json({
            messsage: "The request was successful, but there is no content to return."
        })

        return res.status(200).json(data)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "An internal server error occurred." });

    }

    // try {

    //     console.log(req.params.id);

    //     const school = data.find((school) => { return school.id == req.params.id });
    //     console.log(school)

    //     if (!school) return res.status(204).json({
    //         messsage: "The request was successful, but there is no content to return."
    //     })

    //     return res.status(200).json({ school })

    // } catch (error) {

    //     return res.status(500).json({ error: "An internal server error occurred." });
    // }


}

