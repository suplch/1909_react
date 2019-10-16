export default {
    count: 100,
    inc() {
        // 写负责的业务处理逻辑
        this.count++;
    },
    autoInc() {
        if (this.tid) {
            // 如果已经存在计时器 清除 计时器
            clearInterval(this.tid);
        }
        this.tid = setInterval(() => {
            this.count++;
        }, 1000);
    },
    stop() { // 清除 计时器
        clearInterval(this.tid);
        delete this.tid;
    }
}
