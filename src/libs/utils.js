import moment from "moment"
import _ from "loadsh"

export const dateFormat = function(row,column){
  let date = row[column.property];
  if(date === undefined){
    return ''
  }
  return moment(date).format("YYYY-MM-DD HH:mm:ss")
};

export const formatDate = (data) => {
  let res = _.cloneDeep(data);
  _.forEach(res,(value,key) => {
    if(key === "createTimeGE" || key === "createTimeLT"){
      res[key] = moment(value).format("YYYY-MM-DD");
    }
  });
  return res;
  
};
export const clearNull = (data) => {
  return data = _(data)
      .omitBy(_.isNil)
      .omitBy(i => i === "")
      .value();
};
export const formatData = (data) => {
  data = clearNull(data);
  data = formatDate(data);
  return data;
};

