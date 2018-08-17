//定义一个借口
let Interface = function (name, methods) {
    //arguments表示参数,function默认属性
    if (arguments.length !== 2) {
        throw new Error('arguments.length must be 2')
    }
    this.name = name;
    this.methods = [];
    for (let i = 0; i < methods.length; i++) {
        if (typeof methods[i] !== 'string') {
            throw new Error('arguments must be string');
        }
        this.methods.push(methods[i]);
    }

};

let CompositeInterface = new Interface('CompositeInterface', ['add,remove,update']);
let FormInterface = new Interface('FormInterface', ['select']);

let CompositeImpl = function () {

};
CompositeImpl.prototype.add = function () {
    console.log('add');
};
CompositeImpl.prototype.remove = function () {
    console.log('remove');
};
CompositeImpl.prototype.update = function () {
    console.log('update');
};


Interface.ensureImplements = function (obj) {
    if (arguments.length < 2) {
        throw new Error('arguments.length must be >=2!');
    }
    for (let i = 1; i < arguments.length; i++) {
        let instanceInterface = arguments[i];

        if (instanceInterface.constructor !== Interface) {
            throw new Error('arguments constructor must be Interface Class!');
        }

        for (let j = 0; i < instanceInterface.methods.length; j++) {
            let methodName = instanceInterface.methods[j];

            if (!obj[methodName] || typeof obj[methodName] !== 'function') {
                throw new Error('the methods is not found!')
            }
        }

    }
};