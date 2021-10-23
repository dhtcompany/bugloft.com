export function response (obj = {}) {
    return {
        status: obj.status || 200,
        message: obj.message || 'success',
        data: obj.body
    }
}
 
export function paramsFilter (params) {
   const _params = {}
   Object.keys(params).forEach(e => {
        if(e === 'praiseNum' || !!params[e]) {
            _params[e] = params[e]
        }
   })
   return _params
}