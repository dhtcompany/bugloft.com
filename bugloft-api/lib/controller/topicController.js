import Topic from '../models/topic'
import BaseComponent from '../prototype/baseComponent'
// import TopicComponent from '../prototype/TopicComponent';

class TopicController extends BaseComponent {
    constructor() {
        super()
    }
    /**
     * New article
     * @returns {Function}
     */
    topicAddAction = async (ctx) => {
        const conditions = {
            ...ctx.request.body,
            createTime: +new Date(),
            updateTime: +new Date()
        }
        const options = {
            uniqueness: false
        }
        const result = await this.addData({
            model: Topic, 
            conditions: conditions, 
            options: options
        });
        ctx.body = result;
    }
    /**
     * Get a list of articles
     */
    topicFindAction = async (ctx) => {
        const {_id, page, pageSize, categoryName} = ctx.query
        const conditions = {
            _id: _id,
            categoryName: categoryName
        }
        let fields = {}
        let options = {}
        options.sort = { updateTime: -1 }
        // Time screening
        if(conditions.createTime) {
            conditions.createTime = {
                "$gte": query.createTime[0],
                "$lt": query.createTime[1]
            }
        }
        // Pagination
        if(page) {
            options.limit = Number(pageSize) || 10
            options.skip= (Number(page) - 1) * (Number(pageSize) || 10)
        }
        // detail
        if(!_id) {
            fields = {content: 0}
        }
        const result = await this.findData({
            model: Topic, 
            conditions: conditions, 
            fields: fields,
            options: options, 
        })
        ctx.body = result;
    }
    /**
     * Delete article
     * @returns {Function}
     */
    topicRemoveAction = async (ctx) => {
        const result = await this.removeData({
            model: Topic,
            value:ctx.request.body._id
        })
        ctx.body = result
    }
    /**
     * Update article information
     * @returns {Function}
     */
    topicUpdateAction = async (ctx) => {
        const conditions = {
            _id: ctx.request.body._id,
            userName: ctx.request.body.userName
        };
        const update = {
            $set: {
                ...ctx.request.body,
                updateTime: +new Date()
            }
        }
        const result = await this.updateData({
            model: Topic, 
            conditions: conditions, 
            update: update
        })
        ctx.body = result
    }

}

export default new TopicController()