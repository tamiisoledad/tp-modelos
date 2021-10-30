module.exports = (sequelize,dataTypes) => {

    const alias = 'Actor'

    
    const cols = {
        id : {
                type: dataTypes.INTEGER.UNSIGNED,
                primaryKey : true,
                allowNull : false,
                autoIncrement : true
            },
        first_name : {
                type: dataTypes.STRING(100),
                allowNull : false
            },
        last_name : {
                type: dataTypes.STRING(100),
                allowNull : false
            },
        rating : {
                type: dataTypes.DECIMAL(3,1).UNSIGNED,
                allowNull : false
            },
        favorite_movie_id : {
                    type: dataTypes.INTEGER.UNSIGNED,
                    defaultValue: null
            }

        }
    

    const config = {
        tableName : 'actors', //si la tabla no coincide con el plural del modelo va esta configuracion
        timestamps : true, //si no tiene timetamps va false
        underscored : true // si esta escrito con guion bajo (_) va esta configuracion
    }


    const Actor = sequelize.define(alias,cols,config)

    return Actor
    }