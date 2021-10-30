module.exports = (sequelize,dataTypes) => {

    const alias = 'Pelicula'

    
    const cols = {
        id : {
                type: dataTypes.INTEGER.UNSIGNED,
                primaryKey : true,
                allowNull : false,
                autoIncrement : true

            },
        title : {
                type: dataTypes.STRING(500),
                allowNull : false
            },
        rating : {
                type: dataTypes.DECIMAL(3,1).UNSIGNED,
                allowNull : false
            },
        awards : {  
                type: dataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                defaultValue: null
            },
        release_date : {
                type: dataTypes.DATE,
                allowNull: false
            },
        length : {
                type: dataTypes.INTEGER.UNSIGNED,
                defaultValue: null
            },
        genre_id : {
                    type: dataTypes.INTEGER.UNSIGNED,
                    defaultValue: null
            }

        }
    

    const config = {
        tableName : 'movies', //si la tabla no coincide con el plural del modelo va esta configuracion
        timestamps : true, //si no tiene timetamps va false
        underscored : true // si esta escrito con guion bajo (_) va esta configuracion
    }


    const Movie = sequelize.define(alias,cols,config)

    return Movie
}
