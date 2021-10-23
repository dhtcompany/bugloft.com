import {
  response,
  paramsFilter
} from '../utils'
class BaseComponent {
  constructor() {
  }

  /** 
   * Public addData method 
   * @param model The model of the database to be manipulated 
   * @param conditions Added conditions, such as {id:xxx},如{id:xxx} 
   * @param conditions 增加的设置
   * @param callback 回调
   */
  addData = ({
    model = {},
    conditions = {},
    options = {}
  }) => {
    return new Promise((resolve, reject) => {
      model.findOne(options.params, function (err, doc) {
        if (doc && options.uniqueness) {
          resolve(response({
            status: 201,
            message: options.errorMessage || "existed"
          }))
          return false;
        }
        model.create(conditions, function (err, result) {  
          if (err) {
            console.log(err);
            reject(response({
              message: 'Server unknown exception',
              status: 500

            }))
          } else {
            resolve(response({
              message: 'Added successfully',
            }))
          }
        });
      });
    })

  }


  /** 
   * Public update method
   * @param model The model of the database to be manipulated 
   * @param conditions Added conditions, such as {id:xxx}
   * @param update Update conditions {set{id:xxx}}
   * @param options  set up
   */
  updateData = ({
    model = {},
    conditions = {},
    update = {},
    options = {}
  }) => {
    return new Promise((resolve, reject) => {
      const _$set = paramsFilter(update.$set)
      model.updateOne(conditions, {
          $set: _$set
        }, options)
        .exec()
        .then(result => {
          if (result.n != 0) {
            resolve(response({
              message: 'Successfully modified'
            }))
          } else {
            resolve(response({
              message: 'No data',
              status: 204
            }))
          }
        }).catch(err => { 
          reject({
            message: 'Server unknown exception',
            status: 500
          })
        })
    })
  }
  /** 
   * Public remove method 
   * @param model 
   * @param key Key to delete
   * @param value The value to delete
   */
  removeData = async ({
    model = {},
    key = '_id',
    value = []
  }) => {
    const _delList = {}
    _delList[key] = {$in: Array.isArray(value)?value.map(e => {return e}):[value]}
    return model.deleteMany(_delList)
      .exec()
      .then(result => {
        if (result.n != 0) {
          return response({
            message: "successfully deleted"
          })
        } else {
          return response({
            message: 'No data',
            status: 204
          })
        }
      })
      .catch(err => { 
        return response({
          message: 'Server unknown exception',
          status: 500
        })
      })
  }
  /** 
   * Public find method non-associative search
   * @param model 
   * @param conditions Conditions when searching, such as order, some fields are not searched, etc. 
   * @param fields Field filter
   * @param options set up
   * @param cb 
   */
  findData = async ({
    model = {},
    conditions = {},
    fields = {},
    options = {}
  }) => {
    var _self = this
    return new Promise(async (resolve, reject) => {
      const _conditions = paramsFilter(conditions)
      const total = await _self.countData({
        model: model,
        conditions: _conditions
      })
      model.find(_conditions, fields, options)
        .exec()
        .then(result => {
          resolve(response({
            body: {
              total: total,
              list: result
            }
          }))
        }).catch(err => {
          console.log('findData:', err)
          reject({
            message: 'Server unknown exception',
            status: 500
          })
        })
    }).catch(err => {
      console.log('findData:', err)
      reject({
        message: 'Server unknown exception',
        status: 500
      })
    })

  }
  countData = ({
    model = {},
    conditions = {}
  }) => {
    return new Promise((resolve, reject) => {
      const _conditions = paramsFilter(conditions)
      model.countDocuments(_conditions)
        .exec()
        .then(total => {
          resolve(total)
        }).catch(err => {
          console.log('countData:', err);
          reject({
            message: 'Server unknown exception',
            status: 500
          })
        })

    })

  }
}

export default BaseComponent