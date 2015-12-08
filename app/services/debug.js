import debug from 'debug';

module.exports = function(name){
  return debug("openmaphub:"+name);
}
