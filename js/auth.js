/**
 * 授权码验证模块 (已简化：直接放行)
 * 十二星座 × 灵魂香气测试
 */

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function () {
    const startBtn = document.getElementById('startBtn');

    if (!startBtn) return;

    // 点击开始按钮 - 直接跳转
    startBtn.addEventListener('click', function () {
        // 设置一个虚拟的 session 标记，模拟已授权
        sessionStorage.setItem('currentAuthCode', 'FREE_ACCESS');
        // 跳转到测试页面
        window.location.href = 'test.html';
    });
});

// 检查是否有有效的会话（用于测试页面和结果页面）
// 改为始终返回 true，允许直接访问
function checkSession() {
    // 确保 sessionStorage 里有个标记，防止逻辑出错
    if (!sessionStorage.getItem('currentAuthCode')) {
        sessionStorage.setItem('currentAuthCode', 'FREE_ACCESS');
    }
    return true;
}

// 完成测试后标记授权码已使用
// 空函数，不需要做任何事
function completeTest() {
    // No-op
}
