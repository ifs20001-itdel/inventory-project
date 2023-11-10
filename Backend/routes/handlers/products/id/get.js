const { products } = require("../../../../models")

module.exports = async (req, res) => {
    const { productId } = req.params;
    const product = await products.findByPk(productId);

    if (!product)
        return res.status(404).json({
            success: false,
            message: "products not found"
        });

    return res.json(product)
}