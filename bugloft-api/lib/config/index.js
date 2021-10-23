module.exports = {
    mongodb: {
        url: "mongodb://betaDBAdmin:beta#2021@localhost:27017/forumdb?authSource=admin&readPreference=primary"
        // url: "mongodb://localhost:27017/forumdb"
    },
    app: {
        secret: 'Jwt-sessionId',
        port: 9009,
        whiteList: [
            /\/user\/login/,
            /\/topic\/getTopicList/,
            /\/category\/getCategoryList/,
            /\/comment\/getCommentList/,
            /\/praise\/getPraiseInfo/
        ] 
    },
    redis: {
        host: '127.0.0.1',
        port: '6379',
        db: 0,
    },
    session: {
        useRedis: false,
        secret: 'mongo-es6-cms'
    },
}