const User = require('./User');
const Posts = require('./Posts');
const Comments = require('./Comments');

User.hasMany(Posts, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
    constraints: false
})

User.hasMany(Comments, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
    constraints: false
})

Comments.belongsTo(Posts, {
    foreignKey: "post_id",
    onDelete: "CASCADE",
    constraints: false
})