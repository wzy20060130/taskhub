import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function ResetSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    // 3秒后自动跳转到登录页
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex">
      {/* 左侧成功提示 */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md text-center">
          {/* 成功图标 */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-teal-500 rounded-full mb-8 animate-bounce">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* 标题 */}
          <h1 className="text-2xl font-bold text-gray-900 mb-3">重置密码成功</h1>
          <p className="text-sm text-gray-600 mb-8">
            成功更改了密码,您可以登入主页
          </p>

          {/* 重新登录按钮 */}
          <button
            onClick={() => navigate('/login')}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-500/30"
          >
            重新登
          </button>
        </div>
      </div>

      {/* 右侧展示区域 */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-500 to-blue-600 p-12 items-center justify-center relative overflow-hidden">
        {/* 装饰性背景元素 */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-2xl rotate-12 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
        
        <div className="relative z-10 max-w-xl">
          {/* 图标 */}
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </div>

          {/* 标题和描述 */}
          <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
            您的任务管理和团队生产力的最终枢纽
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            潜入您的工作空间,分配任务并跟踪首在高效团队协作从零一天起的效率的工具
          </p>

          {/* 模拟产品截图 */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 text-center text-xs text-gray-500">TaskHub Dashboard</div>
            </div>
            <div className="p-6 bg-white">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg"></div>
                  <div className="flex-1">
                    <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg"></div>
                  <div className="flex-1">
                    <div className="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
                    <div className="h-2 bg-gray-100 rounded w-1/3"></div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg"></div>
                  <div className="flex-1">
                    <div className="h-3 bg-gray-200 rounded w-4/5 mb-2"></div>
                    <div className="h-2 bg-gray-100 rounded w-2/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

