const data = require('../data/dados.json')

exports.index = (req, res) => {
    try {
        res.status(200).json(data);
    } catch (error) {
        res.status(401).json({ erro: error })
    }

}