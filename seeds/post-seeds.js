const { Post } = require('../models');

const testPosts = [{
        title: "Career Change",
        content: "Left my job to pursue tech",
        user_id: 1

    },
    {
        title: "Can I Do The Impossible?",
        content: "Can I have a career to support my family before I am too old?",
        user_id: 2
    },
    {
        title: "Lost",
        content: "I feel lost in a neverending zone of information",
        user_id: 3
    },
    {
        title: "Dreams",
        content: "I had tech dreams,this wasn't what i had in mind, what im experiencing right now...technically a nightmare is a type of dream",
        user_id: 4
    }
];

const seedPosts = () => Post.bulkCreate(testPosts);

module.exports = seedPosts;