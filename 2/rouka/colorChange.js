class StyleLoader {
    load() {
        throw new TypeError('subclassing required!');
    }
}

class StyleApplier {
    apply() {
        throw new TypeError('subclassing required!');
    }
}

const StyleChanger = (_=> {
    const loaderVar = Symbol();
    const styleApplierVar = Symbol();
    return class {
        constructor(styleLoader, styleApplier) {
            this[loaderVar] = styleLoader;
            this[styleApplierVar] = styleApplier;
        }

        get loader() {
            return this[loaderVar];
        }

        get applier() {
            return this[styleApplierVar];
        }

        change() {
            throw new TypeError('subclassing required!');
        }
    }
})();

class URLStyleLoader extends StyleLoader {
    load(url) {
        return fetch(url).then(function(response) {
            return response.body();
        });
    }
}

class DOMColorStyleApplier extends StyleApplier {
    apply(target, color) {
        target.style.color = color;
    }
}

class DOMStyleChanger extends StyleChanger {
    constructor() {
        super(new DOMColorStyleApplier(), new URLStyleLoader());
    }
    change(target) {
        this.loader.load().then(color => {
            this.applier.apply(target, color);
        })
    }
}

const firstDiv = document.querySelector('div');
new DOMStyleChanger().change(firstDiv);