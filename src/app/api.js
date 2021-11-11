export default function (promiseFn) {
    return new Promise(resolve => setTimeout(() => promiseFn(resolve), 500))
}