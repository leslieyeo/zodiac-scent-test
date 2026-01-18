/**
 * 授权码验证模块
 * 十二星座 × 灵魂香气测试
 */

// 预置授权码列表（实际使用时可以扩展到更多）
const VALID_CODES = [
    // 测试用授权码
    'TEST001',
    'TEST002', 
    'TEST003',
    // 正式授权码（格式：SCENT + 8位随机字符）
    'SCENT001ABC',
    'SCENT002DEF',
    'SCENT003GHI',
    'SCENT004JKL',
    'SCENT005MNO',
    'SCENT006PQR',
    'SCENT007STU',
    'SCENT008VWX',
    'SCENT009YZA',
    'SCENT010BCD',
    'SCENT2024001',
    'SCENT2024002',
    'SCENT2024003',
    'SCENT2024004',
    'SCENT2024005',
    'SCENT2024006',
    'SCENT2024007',
    'SCENT2024008',
    'SCENT2024009',
    'SCENT2024010',
    // 可以继续添加更多授权码...
];

// 获取已使用的授权码列表
function getUsedCodes() {
    const stored = localStorage.getItem('usedAuthCodes');
    return stored ? JSON.parse(stored) : [];
}

// 标记授权码为已使用
function markCodeAsUsed(code) {
    const usedCodes = getUsedCodes();
    if (!usedCodes.includes(code.toUpperCase())) {
        usedCodes.push(code.toUpperCase());
        localStorage.setItem('usedAuthCodes', JSON.stringify(usedCodes));
    }
}

// 验证授权码
function validateAuthCode(code) {
    if (!code || code.trim() === '') {
        return { valid: false, message: '请输入授权码' };
    }
    
    const upperCode = code.toUpperCase().trim();
    
    // 检查是否是有效授权码
    if (!VALID_CODES.includes(upperCode)) {
        return { valid: false, message: '授权码无效，请检查后重新输入' };
    }
    
    // 检查是否已被使用
    const usedCodes = getUsedCodes();
    if (usedCodes.includes(upperCode)) {
        return { valid: false, message: '此授权码已被使用' };
    }
    
    return { valid: true, message: '验证成功' };
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    const authInput = document.getElementById('authCode');
    const startBtn = document.getElementById('startBtn');
    const errorMsg = document.getElementById('errorMsg');
    
    if (!startBtn) return;
    
    // 点击开始按钮
    startBtn.addEventListener('click', function() {
        const code = authInput.value;
        const result = validateAuthCode(code);
        
        if (result.valid) {
            // 存储当前授权码到 sessionStorage，供后续使用
            sessionStorage.setItem('currentAuthCode', code.toUpperCase().trim());
            // 跳转到测试页面
            window.location.href = 'test.html';
        } else {
            errorMsg.textContent = result.message;
            authInput.classList.add('error');
            
            // 3秒后清除错误提示
            setTimeout(() => {
                errorMsg.textContent = '';
                authInput.classList.remove('error');
            }, 3000);
        }
    });
    
    // 按回车键也可以提交
    authInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            startBtn.click();
        }
    });
    
    // 输入时清除错误状态
    authInput.addEventListener('input', function() {
        errorMsg.textContent = '';
        authInput.classList.remove('error');
    });
});

// 检查是否有有效的会话（用于测试页面和结果页面）
function checkSession() {
    const currentCode = sessionStorage.getItem('currentAuthCode');
    if (!currentCode) {
        // 没有有效会话，返回首页
        window.location.href = 'index.html';
        return false;
    }
    return true;
}

// 完成测试后标记授权码已使用
function completeTest() {
    const currentCode = sessionStorage.getItem('currentAuthCode');
    if (currentCode) {
        markCodeAsUsed(currentCode);
    }
}
