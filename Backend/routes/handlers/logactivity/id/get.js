const { logs } = require("../../../../models")

module.exports = async (req, res) => {
    const { logId } = req.params;
    const log = await logs.findByPk(logId);

    if (!log)
        return res.status(404).json({
            success: false,
            message: "logs not found"
        });

    return res.json(log)
}