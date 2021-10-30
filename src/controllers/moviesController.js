const db = require('../database/models/index.js');
const {validationResult} = require("express-validator")

module.exports = {
    list: (req, res)  => {
        db.Pelicula.findAll()
        .then(movies => {
            return res.render("moviesList", {movies})
        })
        .catch(error => console.log(error))
    },
    detail: (req, res) => {
        db.Pelicula.findByPk(req.params.id)
        .then(movie => { res.render("moviesDetail", {movie})})
        .catch(error => console.log(error));
    },
    new: (req,res) => {
        db.Pelicula.findAll({
            order: [['release_date', 'DESC']],
            limit: 5
        })
        .then(movies => {
            res.render("newestMovies",{movies})
        })
        .catch(error => console.log(error))

    },
    recomended: (req,res) => {
        db.Pelicula.findAll({
            where: {
                release_date: {[db.Sequelize.Op.gte] : 2008} 
            },
            order: [['rating', 'DESC']],
            limit: 5
        })
        .then(movies => {
            res.render("recommendedMovies",{movies})
        })
        .catch(error => console.log(error))

    },
    add: (req, res) => res.render("moviesAdd"),
    create: (req, res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
        db.Pelicula.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length
        })
        .then(movie => res.redirect("/movies/list"))
        .catch(error => console.log(error))
    }else{
        return res.render('moviesAdd',{

            errores : errors.mapped(),
            old : req.body
        })
    }

    },
    edit: (req, res) => {
        db.Pelicula.findByPk(req.params.id)
        .then(Movie => res.render("moviesEdit", {Movie}))
        .catch(error => console.log(error))
    },
    update: (req, res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
        db.Pelicula.update({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length
        },{
            where:{
                id: req.params.id
            }
        })
        .then(movie => res.redirect("/movies/list"))
        .catch(error => console.log(error))
    }else{
        return res.render('moviesEdit',{
            errores : errors.mapped(),
            old : req.body
        })
        }   
    },
    delete: (req, res) => {
        db.Pelicula.findByPk(req.params.id)
        .then(Movie => res.render("moviesDelete", {Movie}))
        .catch(error => console.log(error))
    },
    destroy: (req, res) => {
        db.ActorMovie.destroy({
            where: {
                movie_id: req.params.id
            }
        })
            .then(resultado => console.log('se ha eliminado la relación correctamente'))
            .catch(error => console.log(error))

            db.Actor.destroy({
                where: {
                    favorite_movie_id: req.params.id
                }
            })
                .then(resultado => console.log('se ha eliminado la relación correctamente'))
                .catch(error => console.log(error))
    

        db.Pelicula.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(resultado => {
                console.log('Pelicula Eliminada');
                return res.redirect('/movies/list')
            })
            .catch(error => console.log(error))
    }
    
}