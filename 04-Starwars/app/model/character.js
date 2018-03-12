const allcharacters = sequelize.define('table', {
        routeName: {
          type: Sequelize.STRING
        },
        name: {
          type: Sequelize.STRING
        },
        role: {
          type: Sequelize.STRING
        },
        age: {
          type: Sequelize.INTEGER
        },
        forcePoints: {
          type: Sequelize.INTEGER
        }, {
          timestamps: true
        }
      });
        {
          //This prevents mySQL from pluralizing the table named table. mySQL wants to
          //make it plural for whatever reason.
          freezeTableName: true
        };

module.exports = character;
