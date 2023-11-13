const { products } = require('../../../models')

module.exports = async (req, res) => {

    const body = req.body;

    // Validation User Input
    if (!body.name_product || !body.stock || !body.amount)
        return res.status(400).json({
            message: "Name , stock and amount product must be provided"
        });

    // Check is name product has used
    // const isNameProductUsed = await products.findOne({
    //     name_product: body.name_product
    // })

    // if (isNameProductUsed) {
    //     return res.status(400).json({
    //         message: "Name Product has been used"
    //     })
    // }

    const product = await products.create(body);

    return res.json(product)
}