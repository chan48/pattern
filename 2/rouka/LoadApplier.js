const Loader =(_=>{
  const sym = Symbol();
  return class{
    static get loadImp(){return sym;}
    load(...arg){this[sym](...arg);}
    [sym](){throw new TypeError('subclassing required!');}
  };
})();

const Applier =(_=>{
  const sym = Symbol();
  return class{
    static get applyImp(){return sym;}
    apply(...arg){this[sym](...arg);}
    [sym](){throw new TypeError('subclassing required!');}
  };
})();

const LoadApplier =(_=>{
  const l = Symbol(), a = Symbol();
  return class{
    constructor(loader, applier){this[l] = loader, this[a] = applier;}
    run(){this[l].load().then(color=>this[a].apply(color));};
  };
})();

class URLLoader extends Loader{
    load(url){return fetch(url).then(response=>response.body());}
}

class StyleApplier extends Applier{
    constructor(style){this.style = style;}
    apply(color){this.style.color = color;}
}

const actor = new LoadApplier(new URLLoader(url), new StyleApplier(document.querySelector('div').style));
actor.run();
