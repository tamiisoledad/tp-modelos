module.exports = (sequelize,dataTypes) => {

    let alias = "ActorMovie"

    let cols = {
        id : {
            type : dataTypes.INTEGER(10).UNSIGNED,
            autoIncrement : true,
            allowNull : false,
            primaryKey :true
        },
       actor_id : {
           type : dataTypes.INTEGER(10).UNSIGNED,
           allowNull : false
       },
       movie_id : {
           type : dataTypes.INTEGER(10).UNSIGNED,
           allowNull : false 
       }
    }

    let config = {
        tableName : "actor_movie",
        timestamps: true,
        underscored: true
    }

    const Actor = sequelize.define(alias,cols,config);

    return Actor
    }