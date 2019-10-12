export function createGenId(initId) {
    return function () {
        return initId++;
    }
}
// 创建一个 id 生成器
export const genId = createGenId(1000);


