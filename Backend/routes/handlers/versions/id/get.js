const { versions } = require("../../../../models")

module.exports = async (req, res) => {
    const { versionId } = req.params;
    const version = await versions.findByPk(versionId);

    if (!version)
        return res.status(404).json({
            success: false,
            message: "versions not found"
        });

    return res.json(version)
}