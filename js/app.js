/**
 * 应用入口
 */
(function() {
    'use strict';

    // 等待DOM加载完成
    document.addEventListener('DOMContentLoaded', function() {
        try {
            // 创建游戏实例
            console.log('正在初始化游戏...');
            window.game = new GameEngine();
            console.log('游戏初始化成功');

            // 添加粒子背景
            createParticles();
        } catch (error) {
            console.error('游戏初始化失败:', error);
        }

        // 禁用右键菜单（可选）
        // document.addEventListener('contextmenu', e => e.preventDefault());

        // 全局错误处理
        window.onerror = function(message, source, lineno, colno, error) {
            console.error('游戏错误:', message, source, lineno, colno, error);
            return true;
        };

        // 页面关闭前保存
        window.addEventListener('beforeunload', function() {
            if (window.game && window.game.player) {
                window.game.player.save();
            }
        });

        console.log('🎮 经典智慧闯关游戏已启动！');
    });

    /**
     * 创建粒子背景
     */
    function createParticles() {
        const container = document.createElement('div');
        container.className = 'particles';
        document.body.appendChild(container);

        const particleCount = 20;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';

            // 随机位置和动画
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 15}s`;
            particle.style.animationDuration = `${10 + Math.random() * 10}s`;

            // 随机大小
            const size = 2 + Math.random() * 4;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;

            // 随机颜色
            const colors = ['#d4a574', '#ffd700', '#60a5fa', '#4ade80'];
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

            container.appendChild(particle);
        }
    }

    /**
     * 工具函数：防抖
     */
    window.debounce = function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };

    /**
     * 工具函数：节流
     */
    window.throttle = function(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    };

    /**
     * 工具函数：格式化数字
     */
    window.formatNumber = function(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    };

    /**
     * 工具函数：格式化时间
     */
    window.formatTime = function(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

})();
