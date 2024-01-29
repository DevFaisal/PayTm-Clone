import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(403).json({ message: "Error" });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (decoded.userId) {
            req.userId = decoded.userId;
            next();
        }
        else {
            return res.status(403).json({})
        }
    }
    catch (err) {
        return res.status(403).json({ message: "Invalid User" })
    }
};


export default authMiddleware