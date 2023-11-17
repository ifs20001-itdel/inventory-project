const { Product } = require('../../../models')

module.exports = async (req, res) => {

    const body = req.body;
    console.log(req.user)

    // Validation User Input
    if (!body.versionId || !body.userId || !body.product_name)
        return res.status(400).json({
            message: "Name Product data must be provided"
        });

    // Check is name data has used
    // const isNameProductUsed = await Product.findOne({
    //     name_data: body.name_data
    // })

    // if (isNameProductUsed) {
    //     return res.status(400).json({
    //         message: "Name Product has been used"
    //     })
    // }

    const data = await Product.create(body);

    return res.json(data)
}