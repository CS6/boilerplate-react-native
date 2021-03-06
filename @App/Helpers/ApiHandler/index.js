import ApiConst from './ApiConst';
import ApiHandler from './ApiHandler';

export default {
  get: (options) => ApiHandler(ApiConst.GET, options),
  put: (options) => ApiHandler(ApiConst.PUT, options),
  post: (options) => ApiHandler(ApiConst.POST, options),
  delete: (options) => ApiHandler(ApiConst.DELETE, options),
};
