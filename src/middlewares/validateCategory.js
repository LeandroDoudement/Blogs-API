const validateName = (req, res, next) => {
    const { name } = req.body;
    console.log(req.body);
    if (!name) return res.status(400).json({ message: '"name" is required' });
    next();
};

module.exports = { validateName };