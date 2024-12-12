// const mongoose = require('mongoose');

// const todoSchema = mongoose.Schema(
//     {
//         text: {
//             type: String,
//             required: true
//         },
//         completed: {
//             type: Boolean,
//             required: true
//         }
//     },
//     {timestamps: true}
// )

// module.exports = mongoose.model('todos', todoSchema);

// const mongoose = require('mongoose');

// const todoSchema = mongoose.Schema(
//     {
//         text: {
//             type: String,
//             required: true
//         },
//         completed: {
//             type: Boolean,
//             required: true
//         },
//         priority: {
//             type: String,
//             enum: ['High', 'Medium', 'Low'], // Allow only these values
//             default: 'Medium' // Default priority
//         }
//     },
//     { timestamps: true }
// );

// module.exports = mongoose.model('todos', todoSchema);

const mongoose = require('mongoose');

const todoSchema = mongoose.Schema(
    {
        text: {
            type: String,
            required: true,
            index: true, // Adds an index to the 'text' field
        },
        completed: {
            type: Boolean,
            required: true,
        },
        priority: {
            type: String,
            enum: ['High', 'Medium', 'Low'],
            default: 'Medium',
            index: true, // Adds an index to the 'priority' field
        },
    },
    { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Add an index for sorting by createdAt
todoSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Todos', todoSchema);
