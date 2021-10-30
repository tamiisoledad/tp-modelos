const {check} = require("express-validator");

module.exports = [
    check('title')
    .notEmpty().withMessage('El título es obligatorio'),

    check('rating')
    .notEmpty().withMessage('El rating es obligatorio'),

    check('awards')
    .notEmpty().withMessage('Debe poner un número'),

    check('release_date')
    .notEmpty().withMessage('Indica una fecha'),
    
    check('length')
    .notEmpty().withMessage('Indica la duración')
    
]