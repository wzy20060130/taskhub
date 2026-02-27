import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Settings() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('系统设置');
  const [activeTab, setActiveTab] = useState('系统');
  const [profileData, setProfileData] = useState({
    name: '张宇航',
    email: 'example@qq.com',
    phone: '13188888888',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Koto',
  });

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* 左侧边栏 */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <span className="font-semibold text-gray-900">项目管理</span>
          </div>
        </div>

        <div className="p-4 border-b border-gray-200">
          <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg"></div>
              <span className="text-sm font-medium">高效团队</span>
            </div>
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <div className="text-xs font-semibold text-gray-400 mb-2 px-3">主菜单</div>

          {[
            { icon: '📊', label: '看板', path: '/dashboard' },
            { icon: '📁', label: '项目', path: '/projects' },
            { icon: '💬', label: '消息', path: '/messages' },
            { icon: '📅', label: '日历', path: '/calendar' },
            { icon: '📈', label: '分析', path: '/dashboard' },
          ].map(item => (
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

          <div className="text-xs font-semibold text-gray-400 mb-2 px-3 pt-4">常用</div>

          {[
            { color: 'bg-orange-500', label: '初始项目' },
            { color: 'bg-blue-500', label: 'XX项目' },
            { color: 'bg-teal-500', label: 'Trustworth项目' },
          ].map(project => (
            <button
              key={project.label}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition"
            >
              <div className={`w-5 h-5 ${project.color} rounded`}></div>
              <span className="text-sm">{project.label}</span>
            </button>
          ))}
        </nav>

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
            onClick={() => setActiveMenu('系统设置')}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition ${
              activeMenu === '系统设置'
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <span>⚙️</span>
            <span className="text-sm">系统设置</span>
          </button>

          <div className="mt-4 flex items-center gap-3 px-3 py-2">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Koto"
              alt="User"
              className="w-8 h-8 rounded-full"
            />
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
            <h1 className="text-2xl font-bold text-gray-900">设置</h1>

            <div className="flex items-center gap-4">
              <div className="flex items-center -space-x-2">
                {['Felix', 'Amy', 'John'].map(name => (
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

              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </button>

              <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* 内容区域 */}
        <div className="p-8">
          {/* 标签页 */}
          <div className="flex items-center gap-6 mb-8 border-b border-gray-200">
            {['系统', '编好', '通知', '安全', '订阅'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 px-1 text-sm font-medium transition relative ${
                  activeTab === tab ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                )}
              </button>
            ))}
          </div>

          {/* 系统标签页内容 */}
          {activeTab === '系统' && (
            <div className="max-w-3xl space-y-8">
              {/* 图片尺寸 */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">图片尺寸</h3>
                <p className="text-sm text-gray-600 mb-4">Min 400x400px，PNG或JPEG</p>
              </div>

              {/* 个人资料信息 */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">个人资料信息</h3>
                <p className="text-sm text-gray-600 mb-6">更新您的个人信息以使您的帐户保持最新状</p>

                <div className="space-y-6">
                  {/* 头像 */}
                  <div className="flex items-center gap-6">
                    <img src={profileData.avatar} alt="Avatar" className="w-20 h-20 rounded-full" />
                    <div className="flex gap-3">
                      <button className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg border border-gray-300">
                        变更
                      </button>
                      <button className="px-4 py-2 text-sm text-white bg-red-600 hover:bg-red-700 rounded-lg">
                        删除
                      </button>
                    </div>
                  </div>

                  {/* 姓名 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">姓名</label>
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={e => setProfileData({ ...profileData, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* 电子邮件 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">电子邮件</label>
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={e => setProfileData({ ...profileData, email: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* 电话号码 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">电话号码</label>
                    <div className="flex gap-3">
                      <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>🇨🇳</option>
                        <option>🇺🇸</option>
                        <option>🇬🇧</option>
                      </select>
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={e => setProfileData({ ...profileData, phone: e.target.value })}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 账户状态 */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">账户状态</h3>
                <p className="text-sm text-gray-600 mb-6">
                  您的帐户状态仍然处于活动状态已使用帐户的约
                </p>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-red-900 mb-1">停用账户</h4>
                      <p className="text-sm text-red-700">
                        停用您的帐户将停止所有活动并删除所有数据。您可以随时重新激活它。
                      </p>
                    </div>
                    <button className="px-4 py-2 text-sm text-white bg-red-600 hover:bg-red-700 rounded-lg whitespace-nowrap ml-4">
                      停用账户
                    </button>
                  </div>
                </div>
              </div>

              {/* 底部按钮 */}
              <div className="flex items-center justify-end gap-3 pt-6">
                <button className="px-6 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg border border-gray-300">
                  取消
                </button>
                <button className="px-6 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-lg">
                  确认
                </button>
              </div>
            </div>
          )}

          {/* 其他标签页内容 */}
          {activeTab !== '系统' && (
            <div className="max-w-3xl">
              <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
                <div className="text-6xl mb-4">🚧</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">功能开发中</h3>
                <p className="text-gray-600">此功能正在开发中，敬请期待！</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
