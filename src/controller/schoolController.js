const data = require('../data/data.json');
//const compareStringWithoutAccents = require('../utils/compareString');
const compare = require('../utils/compareString');


exports.index = (req, res) => {
    try {
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: "An internal server error occurred." });
    }

}

exports.getByProvince = (req, res) => {
    try {
        if (!req.params.province) return res.status(400).json({ error: "missing params pronvice" });

        const filterData = data.filter((data) => {
            return compare.compareStringWithoutAccents(data.provincia, req.params.province)
        })


        if (filterData.length === 0) return res.status(204).json({
            messsage: "The request was successful, but there is no content to return."
        })

        return res.status(200).json(filterData)

    } catch (error) {

        res.status(400).json({ erro: error })
    }

}



exports.getByDistrict = (req, res) => {
    try {
        if (!req.params.district) return res.status(400).json({ error: "missing params district" });

        const filterData = data.filter((data) => {
            return compare.compareStringWithoutAccents(data.distrito, req.params.district)
        })


        if (filterData.length === 0) return res.status(204).json({
            messsage: "The request was successful, but there is no content to return."
        })

        return res.status(200).json(filterData)

    } catch (error) {

        return res.status(500).json({ error: "An internal server error occurred." });
    }
}


exports.getByPost = (req, res) => {
    try {
        if (!req.params.post) return res.status(400).json({ error: "missing params district" });

        const filterData = data.filter((data) => {
            return compare.compareStringWithoutAccents(data.posto, req.params.post)
        })


        if (filterData.length === 0) return res.status(204).json({
            messsage: "The request was successful, but there is no content to return."
        })

        return res.status(200).json(filterData)

    } catch (error) {

        return res.status(500).json({ error: "An internal server error occurred." });
    }

}


exports.getByLocality = (req, res) => {
    try {
        if (!req.params.locality) return res.status(400).json({ error: "missing params district" });

        const filterData = data.filter((data) => {
            return compare.compareStringWithoutAccents(data.localidade, req.params.locality)
        })


        if (filterData.length === 0) return res.status(204).json({
            messsage: "The request was successful, but there is no content to return."
        })

        return res.status(200).json(filterData)

    } catch (error) {

        return res.status(500).json({ error: "An internal server error occurred." });
    }


}

exports.getById = (req, res) => {
    try {

        console.log(req.params.id);
        
        const school = data.find((school) => { return school.id == req.params.id });
        console.log(school)

        if (!school) return res.status(204).json({
            messsage: "The request was successful, but there is no content to return."
        })

        return res.status(200).json({ school })

    } catch (error) {

        return res.status(500).json({ error: "An internal server error occurred." });
    }


}

