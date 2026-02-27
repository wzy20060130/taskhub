import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NotificationPanel from '../components/NotificationPanel';
import MessagePanel from '../components/MessagePanel';
import DashboardView from '../components/DashboardView';
import AnalyticsView from '../components/AnalyticsView';

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('看板');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* 左侧边栏 */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <span className="font-semibold text-gray-900">项目管理</span>
          </div>
        </div>

        {/* 团队选择器 */}
        <div className="p-4 border-b border-gray-200">
          <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg"></div>
              <span className="text-sm font-medium">高效团队</span>
            </div>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* 主菜单 */}
        <nav className="flex-1 p-4 space-y-1">
          <div className="text-xs font-semibold text-gray-400 mb-2 px-3">主菜单</div>
          
          {[
            { icon: '📊', label: '看板', path: '/dashboard' },
            { icon: '📁', label: '项目', path: '/projects' },
            { icon: '💬', label: '消息', path: '/messages' },
            { icon: '📅', label: '日历', path: '/calendar' },
            { icon: '📈', label: '分析' },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => {
                setActiveMenu(item.label);
                if (item.path) {
                  navigate(item.path);
                }
              }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                activeMenu === item.label
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}

          <div className="text-xs font-semibold text-gray-400 mb-2 px-3 pt-4">项目</div>
          
          {[
            { color: 'bg-orange-500', label: '初始项目' },
            { color: 'bg-blue-500', label: 'XX项目' },
            { color: 'bg-teal-500', label: 'Trustworth项目' },
          ].map((project) => (
            <button
              key={project.label}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition"
            >
              <div className={`w-5 h-5 ${project.color} rounded`}></div>
              <span className="text-sm">{project.label}</span>
            </button>
          ))}
        </nav>

        {/* 底部用户信息 */}
        <div className="p-4 border-t border-gray-200">
          <div className="text-xs font-semibold text-gray-400 mb-2 px-3">其他</div>
          <button 
            onClick={() => navigate('/help')}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition mb-1"
          >
            <span>💬</span>
            <span className="text-sm">帮助中心</span>
          </button>
          <button 
            onClick={() => navigate('/settings')}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition"
          >
            <span>⚙️</span>
            <span className="text-sm">系统设置</span>
          </button>
          
          <div className="mt-4 flex items-center gap-3 px-3 py-2">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Koto" alt="User" className="w-8 h-8 rounded-full" />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-900">Koto</div>
              <div className="text-xs text-gray-500 truncate">example@qq.com</div>
            </div>
          </div>
        </div>
      </aside>

      {/* 主内容区 */}
      <main className="flex-1 overflow-auto">
        {/* 顶部导航栏 */}
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">{activeMenu}</h1>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center -space-x-2">
                {['Felix', 'Amy', 'John'].map((name) => (
                  <img
                    key={name}
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`}
                    alt={name}
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
                <button className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600">
                  +10
                </button>
              </div>
              
              <div className="relative">
                <button 
                  onClick={() => setShowMessages(!showMessages)}
                  className="p-2 hover:bg-gray-100 rounded-lg relative"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  {/* 未读消息徽章 */}
                  <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
                </button>
                
                {/* 消息面板 */}
                <MessagePanel 
                  isOpen={showMessages} 
                  onClose={() => setShowMessages(false)} 
                />
              </div>
              
              <div className="relative">
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2 hover:bg-gray-100 rounded-lg relative"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  {/* 未读通知徽章 */}
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                
                {/* 通知面板 */}
                <NotificationPanel 
                  isOpen={showNotifications} 
                  onClose={() => setShowNotifications(false)} 
                />
              </div>
              
              <button 
                onClick={handleLogout}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium"
              >
                登录小组件
              </button>
            </div>
          </div>
        </header>

        {/* 内容区域 - 根据activeMenu显示不同组件 */}
        {activeMenu === '看板' && <DashboardView />}
        {activeMenu === '分析' && <AnalyticsView />}
      </main>
    </div>
  );
}

