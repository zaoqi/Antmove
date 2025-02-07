function judgeType (data) {
    if (data === undefined) return null;
    if (typeof data === 'number') {
        return Number;
    }
    if (typeof data === 'string') {
        return String;
    }
    if (typeof data === 'boolean') {
        return Boolean;
    }
    if (typeof data === 'function') {
        return Function;
    }
    if (data === null) {
        return null;
    }
    if (typeof data === 'object') {
        if (Array.isArray(data)) {
            return Array;
        }
        return Object;
    }
}

function transformProps (props = {}) {
    let properties = {};
    let temp = Object.assign({}, props);
    for (let i in temp) {
        let type = judgeType(temp[i]);
        if (type !== 'Function') {
            properties = Object.assign(properties, {
                [i]: {
                    type,
                    value: temp[i]
                }
            });
        }
    }
    return properties;
}

function processCustomEvent (opts = {}) {
    let props = opts.props || {};
    let self = this;
    let _props = Object.assign({}, props);
    for (let i in _props) {
        if (i.match(/on[A-Z]\w*/)) {
            let eventName = i.substring(2);
            eventName = eventName.toLowerCase();
            this.props[i] = function (...params) {
                self.triggerEvent(eventName, {...params}, {});
            };
        }
    }
}

function makeLifes (_opts, options) {
    if (options.deriveDataFromProps) {
        console.warn("生命周期 deriveDataFromProps 不支持更新前触发情景");
    }
    const transformLife = [
        {
            original: 'onInit',
            target: 'created'
        },
        {
            original: 'deriveDataFromProps',
            target: 'attached'
        },
        {
            original: 'didUnmount',
            target: 'detached'
        },
        {
            original: 'didMount',
            target: 'ready'
        }
    ];
    transformLife.forEach(obj => {
        const oname = options[obj.original];
        const tname = options[obj.target];
        if (obj.target === "created") {
            _opts[obj.target] = function () {
                if (options.didUpdate) {
                    const setData = this.setData;
                    this.setData = (obj, cb = () => {} ) => {
                        const proData = JSON.stringify(this.data);
                        return setData.call(this, obj, ()=> {
                            if (_opts.behaviorUpdate) {
                                Object.values(_opts.behaviorUpdate).forEach(item => {
                                    item.call(this, this.properties, JSON.parse(proData));
                                });
                            }
                            options.didUpdate.call(this, this.properties, JSON.parse(proData));
                            cb();
                        });
                    };
                }
                this.props = this.data;
                processCustomEvent.call(this, options);
                this.$page = {};
                this.$id = this.id;
                this.is = "";
            };
            oname && oname.call(this);
            tname && tname.call(this);
        } else {
            _opts[obj.target] = function () {
                oname && oname.call(this);
                tname && tname.call(this);
            };
        }
        delete options[obj.original];
        delete options[obj.target];
    });
}

function makeMixin (_opts) {
    if (_opts.mixins) {
        let behavours = [];
        const arr = ['onInit', 'didMount', 'didUpdate', 'didUnmount', 'data', 'props', 'methods'];
        const behavourMade = (mixins = []) => {
            mixins.forEach(item => {
                let behavour = {};
                if (item.mixins) {
                    behavourMade(item.mixins);
                }
                if (item.deriveDataFromProps) {
                    console.warn("生命周期 deriveDataFromProps 不支持更新前触发情景");
                }
                Object.keys(item).forEach((key, index) => {
                    if (arr.includes(key)) {
                        if (key === 'props') {
                            const props = transformProps(item.props);
                            item.properties = item.properties || {};
                            behavour.properties = Object.assign(item.properties, props);
                        } else if (key === 'didUpdate') {
                            _opts.behaviorUpdate = {};
                            const funObj = { [key + index]: item[key] };
                            _opts.behaviorUpdate = Object.assign(_opts.behaviorUpdate, funObj);
                        } else {
                            behavour[key] = item[key];
                        }
                    }
                });
                behavours.push(Behavior(behavour));
            });
        };
        behavourMade(_opts.mixins);
        _opts.behaviors = behavours;
        delete _opts.mixins;
    }
}

function makeEventObj (_opts, options) {
    if (options.methods) {
        const methods = options.methods;
        const newMethods = {};
        Object.keys(methods).forEach(key => {
            newMethods[key] = function (event) {
                (event && event.target) && (event.target.dataset = { ...event.currentTarget.dataset } || {});
                methods[key].call(this, event);
            };
        });
        _opts.methods = newMethods;
    }
}

function makeProperties (opts) {
    opts.properties = opts.properties || {};
    const props = transformProps(opts.props);
    opts.properties = Object.assign(opts.properties, props);
    opts.options = { multipleSlots: true };
}

function addObserver (obj) {
    if (!obj.didUpdate) {
        return false;
    }
    obj.properties && Object.keys(obj.properties).map(key => {
        const observer = function (newVal, oldVal) {
            const props = { ...obj.props};
            this.props = Object.assign({}, obj.props);
            this.props[key] = newVal;
            if (props[key] !== oldVal) {
                if (obj.behaviorUpdate) {
                    Object.values(obj.behaviorUpdate).forEach(item => {
                        item.call(this, props, this.data);
                    });
                } 
                obj.didUpdate.call(this, props, this.data);
            }
        };
        if (obj.properties[key]) {
            obj.properties[key].observer = observer;
        }
        
    });
    
}

module.exports = {
    processTransformationComponent (_opts, options) {
        makeLifes(_opts, options);
        _opts = Object.assign(_opts, options);
        makeEventObj(_opts, options);
        makeMixin.call(_opts, _opts);
        makeProperties(_opts);
        addObserver (_opts);
        return _opts;
    }
};
