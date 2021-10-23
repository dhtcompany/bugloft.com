// import RoleComponent from '../prototype/roleComponent';
import Role from '../models/role'
import BaseComponent from '../prototype/baseComponent'

class RoleController extends BaseComponent {
  constructor() {
    super()
  }
  /**
     * New role
     */
    roleAddAction = async (ctx)  => {
        const conditions = {
            ...ctx.request.body,
            createTime: +new Date(),
            updateTime: +new Date()
        }
      
        const result = await this.addData({
            model: Role, 
            conditions: conditions, 
            options: {
                params: {
                    "roleName": ctx.request.body.roleName
                },
                uniqueness: true,
                errormessage: 'Role name already exists'
            }
        });
        ctx.body = result;
    }
     /**
     * Get role classification
     */
    roleFindAction = async (ctx)  => {
        const query = ctx.query;
        const conditions = {}
        let options = {}
        if(query.createTime) {
            conditions.createTime = {
                "$gte": query.createTime[0],
                "$lt": query.createTime[1]
            }
        }
        if(query.page) {
            options = {
                limit: Number(query.pageSize) || 10,
                skip: (Number(query.page) - 1) * (Number(query.pageSize) || 10)
            }
        }
        const result = await this.findData({
            model: Role, 
            options: options,
            conditions: conditions, 
            callback: function (result) {
                ctx.body = result;
            }
        });
        ctx.body = result
    }
     /**
     *  Delete role
     */
    roleRemoveAction = async (ctx)  => {
        const { _id } = ctx.request.body
        const result = await this.removeData({
            model: Role,
            value: _id
        })
        ctx.body = result
    }
    /**
     *  Update role information
     */
    roleUpdateAction = async (ctx)  =>  {
        const {_id} = ctx.request.body
        const result = await this.updateData({
            model: Role, 
            conditions: {
                _id: _id
            }, 
            update: {
                $set: {
                    ...ctx.request.body
                }
            }, 
            options: {new: true}
        })
        ctx.body = result
    }
}

export default new RoleController()