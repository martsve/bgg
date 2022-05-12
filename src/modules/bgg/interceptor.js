import interceptor from 'rest/interceptor';
import parseXml from './xml2json';

export default interceptor({
  success: function (response, config, client) {
    let obj = parseXml(response.entity);
    return obj;
  }
});