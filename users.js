var mysql = require('./dbcon.js');


exports.findById = function(id, cb) {
  process.nextTick(function() {
    var idx = id - 1;
    if (records[idx]) {
      cb(null, records[idx]);
    } else {
      cb(new Error('User ' + id + ' does not exist'));
    }
  });
}

exports.findByEmployeeId = function(employee_id, cb) {
  process.nextTick(function() {
var sql = "SELECT * FROM users";
 
mysql.pool.query(sql, [2, 1], function(error, results, fields) {
    if (error) {
        throw error;
    }
  var records = results[0];
    for (var i = 0, len = records.length; i < len; i++) {
      var record = records[i];
      if (record.employee_id === employee_id) {
        return cb(null, record);
      }
    }
});
    return cb(null, null);
  });
}
