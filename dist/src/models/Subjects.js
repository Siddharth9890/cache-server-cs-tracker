"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subject = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../../db");
class Subject extends sequelize_1.Model {
}
exports.Subject = Subject;
Subject.init({
    subject_id: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        unique: true,
        primaryKey: true,
    },
    subject_name: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false,
        unique: true,
        validate: {
            min: {
                args: [5],
                msg: "Subject name should be greater than 5 characters",
            },
            max: {
                args: [30],
                msg: "Subject name should be less than 30 characters",
            },
            // need to implement in future
            // async isExists(value: string) {
            //   const subjects = await Subject.findAll();
            //   subjects.map(
            //     (subject) => subject.getDataValue("subject_name") === value
            //   );
            // },
        },
    },
    subject_description: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
        validate: {
            min: {
                args: [5],
                msg: "Subject description should be greater than 5 characters",
            },
            max: {
                args: [100],
                msg: "Subject description should be less than 50 characters",
            },
        },
    },
    image_url: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false,
        validate: {
            isUrl: {
                msg: "Image should be url",
            },
        },
    },
    topic_count: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: {
                args: [0],
                msg: "topic Count should be greater than 0",
            },
            max: {
                args: [100],
                msg: "topic count  should be less than 100",
            },
        },
    },
}, {
    sequelize: db_1.sequelize,
    tableName: "subjects",
    indexes: [
        {
            unique: true,
            fields: ["subject_name"],
        },
    ],
});
