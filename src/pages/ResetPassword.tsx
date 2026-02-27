import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ResetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 模拟发送重置邮件
    navigate('/create-new-password');
  };

  return (
    <div className="min-h-screen flex">
      {/* 左侧重置密码表单 */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          {/* 返回按钮 */}
          <button
            onClick={() => navigate('/login')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* 标题 */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">重置密码</h1>
            <p className="text-sm text-gray-600">
              输入您的电子邮件地址以接收重置链接
            </p>
          </div>

          {/* 重置表单 */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                电子邮件
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@qq.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-500/30"
            >
              提交
            </button>
          </form>
        </div>
      </div>

      {/* 右侧展示区域 */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-500 to-blue-600 p-12 items-center justify-center relative overflow-hidden">
        {/* 装饰性背景元素 */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-2xl rotate-12"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/10 rounded-full"></div>
        
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
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-300">
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

