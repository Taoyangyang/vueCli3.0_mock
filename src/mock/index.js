import Mock from 'mockjs2'

// 判断环境不是 prod 或者 preview 是 true 时，加载 mock 服务
if (process.env.NODE_ENV !== 'production' || process.env.VUE_APP_PREVIEW === 'true') {
    // 使用同步加载依赖
    // 防止 vuex 中的 GetInfo 早于 mock 运行，导致无法 mock 请求返回结果
    console.log('mock 正在挂载......')
    require('./serve/index')

    Mock.setup({
        timeout: 1000  // setter delay time; 指定被拦截的 Ajax 请求的响应时间，单位是毫秒
    })
    console.log('mock 挂载完成！')
}