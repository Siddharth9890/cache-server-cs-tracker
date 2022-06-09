"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicUnderSubject = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../../db");
const Subjects_1 = require("./Subjects");
class TopicUnderSubject extends sequelize_1.Model {
}
exports.TopicUnderSubject = TopicUnderSubject;
TopicUnderSubject.init({
    topic_id: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        unique: true,
        primaryKey: true,
    },
    topic_name: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false,
        unique: true,
        validate: {
            min: {
                args: [3],
                msg: "Topic name should be greater than 3 characters",
            },
            max: {
                args: [30],
                msg: "Topic name should be less than 30 characters",
            },
        },
    },
    topic_description: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
        validate: {
            min: {
                args: [5],
                msg: "Topic description should be greater than 5 characters",
            },
            max: {
                args: [30],
                msg: "Topic description should be less than 50 characters",
            },
        },
    },
    question_count: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
            min: {
                args: [0],
                msg: "Topic count should be greater than 0 ",
            },
            max: {
                args: [100],
                msg: "Topic name should be less than 100",
            },
        },
    },
    under_which_subject: {
        type: sequelize_1.DataTypes.STRING(50),
        references: {
            model: Subjects_1.Subject,
            key: "subject_name",
        },
    },
}, {
    sequelize: db_1.sequelize,
    tableName: "topicUnderSubjects",
    indexes: [
        {
            unique: true,
            fields: ["topic_name"],
        },
    ],
});
