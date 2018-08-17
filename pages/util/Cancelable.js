/**
 *
 * 对Promise进行包装,取消接收Promise的结果
 * 虽然Promise,fetch不能中断,但是我们可以选择不接收请求的结果
 * @param promise
 * @returns {{promise: Promise<any> | Promise, cancel(): void}}
 */
export default function makeCancelable(promise) {
    let hasCanceled = false;
    const wrappedPromise = new Promise(((resolve, reject) => {
        promise.then(value => {
            hasCanceled ? reject({isCanceled: true}) : resolve(value);
        });
        promise.catch(err => {
            hasCanceled ? reject({isCanceled: true}) : reject(err);
        })
    }));

    return {
        promise: wrappedPromise,
        cancel() {
            hasCanceled = true;
        },

    }
}