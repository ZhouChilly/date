import request from "./request";
import querystring from 'querystring'
const API = {
   'create_application': '/rest/application/create',
    'env_list': '/rest/env/list',
    'version_list': '/rest/web/config/versions',
    'create_item': '/rest/web/config/createItem',
    'create_file': '/rest/web/config/createFile'
}
export const createApplication = (params) => request.post(API.create_application, params);
export const getEnvList = () => request.get(API.env_list);
export const getVersionList = (params) => request.get(API.version_list + "?" + querystring.stringify(params));
export const createItem = (params) => request.post(API.create_item, params, 'json');
export const createFile = (params) => request.post(API.create_file, params, 'file');