var DOMCache = /** @class */ (function () {
    function DOMCache() {
    }
    DOMCache.getElement = function (id) {
        if (this.cache.has(id)) {
            return this.cache.get(id);
        }
        var element = document.getElementById(id);
        if (element) {
            this.cache.set(id, element);
        }
        return element;
    };
    DOMCache.getElements = function (ids) {
        var _this = this;
        var elements = new Map();
        ids.forEach(function (id) {
            elements.set(id, _this.getElement(id));
        });
        return elements;
    };
    DOMCache.clearCache = function () {
        this.cache.clear();
    };
    DOMCache.cache = new Map();
    return DOMCache;
}());
var CounterApp = /** @class */ (function () {
    function CounterApp() {
        this.count = 0;
        var elements = DOMCache.getElements([
            'counter',
            'increment',
            'decrement',
            'reset'
        ]);
        this.counter = elements.get('counter');
        this.incrementBtn = elements.get('increment');
        this.decrementBtn = elements.get('decrement');
        this.resetBtn = elements.get('reset');
        if (!this.validateElements()) {
            throw new Error('Required DOM elements not found');
        }
        this.initEventListeners();
        this.updateCounter();
    }
    CounterApp.prototype.validateElements = function () {
        return !!(this.counter && this.incrementBtn && this.decrementBtn && this.resetBtn);
    };
    CounterApp.prototype.updateCounter = function () {
        this.counter.textContent = this.count.toString();
    };
    CounterApp.prototype.initEventListeners = function () {
        var _this = this;
        this.incrementBtn.addEventListener('click', function () {
            _this.count++;
            _this.updateCounter();
        });
        this.decrementBtn.addEventListener('click', function () {
            _this.count--;
            _this.updateCounter();
        });
        this.resetBtn.addEventListener('click', function () {
            _this.count = 0;
            _this.updateCounter();
        });
    };
    return CounterApp;
}());
document.addEventListener('DOMContentLoaded', function () {
    try {
        new CounterApp();
    }
    catch (error) {
        console.error('Failed to initialize CounterApp:', error);
    }
});
