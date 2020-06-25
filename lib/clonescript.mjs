const eles = [],
ele = {
  default: document.createElement('default'),
  txt: document.createTextNode('')
};

for (let i = 0; i < eles.length; i++) {
  ele[eles[i]] = document.createElement(eles[i])
}

function cs_add(i,e,t){
  let item = ele[i].cloneNode(false);

  if(!e){
    item = ele['txt'].cloneNode(false);
    item.textContent = e;
    return item;
  } else {
    item = ele[i].cloneNode(false);
  }

  if(typeof e === 'string'){
    item.textContent = e
    return item
  } else if(t){
    item.textContent = t
  }

  let fn = e.fn,
  attr = e.attr;

  if(e.id){
    item.id = e.id;
  }
  if(e.class){
    item.classList.add(...e.class)
  }

  if(attr){
    for(let i = 0, keys = Object.keys(attr); i < keys.length; i++) {
      item.setAttribute([keys[i]], attr[keys[i]]);
    }
  }
  if(fn){
    for(let i = 0, keys = Object.keys(fn); i < keys.length; i++) {
      item[keys[i]] = fn[keys[i]];
    }
  }



  if(e.append){
    for (let i = 0; i < e.append.length; i++) {

      item.append(e.append[i])
    }

  }
  return item
}

function CS(){
  this.ele = ele['default'].cloneNode();

  return this.ele.lastChild
}

CS.prototype = {
  clone: function(i,e,t){
    this.ele.append(cs_add(i,e,t));
    return this
  },
  val: function(){
    return this.ele.firstChild;
  },
  add: function(i,e,t){
    this.ele.append(cs_add(i,e,t));
    return this.ele.lastChild
  }
}

const cs = new CS();

export { cs }
