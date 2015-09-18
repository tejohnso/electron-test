module.exports = function() {
  var interfaces = require("os").networkInterfaces(),
  validInterfaces = [];
  
  Object.keys(interfaces).forEach((key)=>{
    interfaces[key].forEach((addressDetails)=>{
      if (addressDetails.internal === true ) {return;}
      if (addressDetails.family !== "IPv4") {return;}
      validInterfaces.push(addressDetails.address);
    });
  });

  return validInterfaces;
};
