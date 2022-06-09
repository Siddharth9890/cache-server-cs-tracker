"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../../db");
const TopicUnderSubject_1 = require("./TopicUnderSubject");
class Question extends sequelize_1.Model {
}
exports.Question = Question;
Question.init({
    question_id: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,
    },
    question_name: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false,
        unique: true,
        validate: {
            min: {
                args: [5],
                msg: "question name should be greater than 5 characters",
            },
            max: {
                args: [30],
                msg: "question name should be less than 30 characters",
            },
        },
    },
    question_description: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
        validate: {
            min: {
                args: [5],
                msg: "question description should be greater than 5 characters",
            },
            max: {
                args: [100],
                msg: "question description should be less than 100 characters",
            },
        },
    },
    how_many_times_solved: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0 },
    difficulty: {
        type: sequelize_1.DataTypes.ENUM,
        allowNull: false,
        values: ["easy", "medium", "hard"],
    },
    youtube_video_link: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            isUrl: {
                msg: "Enter a valid url",
            },
            isYoutubeUrl(value) {
                return value.includes("https://www.youtube.com/watch");
            },
        },
    },
    leet_code_problem_link: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            isUrl: {
                msg: "Enter a valid url",
            },
            isLeetCodeUrl(value) {
                return value.includes("https://leetcode.com/problems");
            },
        },
    },
    under_which_topic: {
        type: sequelize_1.DataTypes.STRING(50),
        references: {
            model: TopicUnderSubject_1.TopicUnderSubject,
            key: "topic_name",
        },
    },
}, {
    tableName: "questions",
    sequelize: db_1.sequelize,
    indexes: [
        {
            unique: true,
            fields: ["question_name"],
        },
    ],
});
