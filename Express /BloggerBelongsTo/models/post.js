module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });
  // var authorId = sequelize.define("Author");
  Post.associate = function (models) {
    Post.belongsTo(models.Author, {
      //If you delete the Author, now you'll also delete all the
      //posts that correlate to that author
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  // Add a belongsTo association to Authors here
  // Example: https://github.com/sequelize/express-example/blob/master/models/task.js
  return Post;
};
