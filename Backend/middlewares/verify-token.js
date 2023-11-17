const jwt = require('jsonwebtoken');
const { User } = require('../models');

module.exports = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(403).json({
            message: "Incorrect credential"
        });
    }

    const JWTToken = token.split(" ").pop();

    console.log("Token:", JWTToken);

    try {
        const data = jwt.verify(JWTToken, "secretKey");
        console.log("Decoded data:", data);

        const user = await User.findByPk(data.data.id);
        console.log("User:", user);

        if (!user) {
            console.log("User not found");
            return res.status(404).json({
                message: "User not found",
            });
        }

        // 
        req.user = data.data;

        // Supervisor dapat mengakses semuanya
        if (user.role === 'Supervisor') {
            return next();
        }

        // Role selain Supervisor hanya dapat melakukan GET dan POST
        if (req.method.toLowerCase() !== 'get' && req.method.toLowerCase() !== 'post') {
            console.log("Unauthorized access. Only GET and POST allowed for non-Supervisors.");
            return res.status(403).json({
                message: "Unauthorized access. Only GET and POST allowed for non-Supervisors."
            });
        }

        // Jika endpoint adalah DELETE atau PUT, maka hanya Supervisor yang diizinkan
        if (['delete', 'put'].includes(req.method.toLowerCase())) {
            // Jika endpoint adalah http://localhost:5000/products/{id}, hanya Supervisor yang diizinkan
            if (req.path.startsWith('/products/') && req.method.toLowerCase() === 'put') {
                console.log("Unauthorized access. Only Supervisor allowed for PUT on products.");
                return res.status(403).json({
                    message: "Unauthorized access. Only Supervisor allowed for PUT on products."
                });
            }

            console.log("Unauthorized access. Only Supervisor allowed for DELETE and PUT.");
            return res.status(403).json({
                message: "Unauthorized access. Only Supervisor allowed for DELETE and PUT."
            });
        }

        // Jika endpoint adalah http://localhost:5000/products/{id}, izinkan akses
        if (req.path.startsWith('/products/') && req.method.toLowerCase() === 'get') {
            return next();
        }

        next();
    } catch (error) {
        console.error("Error:", error);
        return res.status(403).json({
            message: "Error verifying token or checking role"
        });
    }
};
