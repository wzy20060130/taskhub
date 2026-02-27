import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import AuthShowcase from '../components/auth/AuthShowcase';

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
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* 标题 */}
          <h1 className="text-2xl font-bold text-gray-900 mb-3">重置密码成功</h1>
          <p className="text-sm text-gray-600 mb-8">成功更改了密码,您可以登入主页</p>

          {/* 重新登录按钮 */}
          <button
            onClick={() => navigate('/login')}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-500/30"
          >
            重新登
          </button>
        </div>
      </div>

      <AuthShowcase />
    </div>
  );
}
