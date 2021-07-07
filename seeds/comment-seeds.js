const { Comment } = require('../models');

const testComments = [{
        comment_text: "Worst Tutorial Ever",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Need Much More Self Motivation",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "I am so burned out on coding!",
        user_id: 3,
        post_id: 3
    },
    {
        comment_text: "I don't think i will ever get this!",
        user_id: 4,
        post_id: 4
    }
];


const seedComments = () => Comment.bulkCreate(testComments);

module.exports = seedComments;