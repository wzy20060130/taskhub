import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthShowcase from '../components/auth/AuthShowcase';

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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* 标题 */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">重置密码</h1>
            <p className="text-sm text-gray-600">输入您的电子邮件地址以接收重置链接</p>
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
                onChange={e => setEmail(e.target.value)}
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

      <AuthShowcase />
    </div>
  );
}
