import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export default function HelpCenter() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('帮助中心');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>('1');

  const faqs: FAQItem[] = [
    {
      id: '1',
      question: '如何重置密码？',
      answer: '转到设置->安全性->重置密码，然后按照提示操作。',
      category: '账户',
    },
    {
      id: '2',
      question: '我可以恢复一个已删除的项目',
      answer: '是的，已删除的项目会在回收站中保留30天。您可以在设置中的回收站找到并恢复它们。',
      category: '项目',
    },
    {
      id: '3',
      question: '如何升级订阅？',
      answer: '前往设置->订阅管理，选择您想要的计划，然后点击升级按钮完成支付。',
      category: '订阅',
    },
    {
      id: '4',
      question: '我可以恢复一个已删除的项目',
      answer: '可以的，在项目列表页面点击右上角的回收站图标，找到已删除的项目并点击恢复即可。',
      category: '项目',
    },
  ];

  const categories = [
    { icon: '🔥', title: '入门指南', description: '了解设置和使用看板的基础知识。' },
    { icon: '📧', title: '管理任务和项目', description: '逐步指南创建，分配和监视任务' },
    { icon: '🎯', title: '账户和订阅', description: '了解订阅计划，发票和付款方式' },
    { icon: '🎨', title: '集成', description: '连接您喜爱的第三方应用程序' },
  ];

  const contactMethods = [
    {
      icon: '💬',
      title: '实时聊天',
      description: '与支持代理人即时立即帮助',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: '📧',
      title: '电子邮件支持',
      description: '给我们发电子邮件，我们将在24小时内与您联系',
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: '📞',
      title: '电话支持',
      description: '致电我们的支持团队或紧急问',
      color: 'bg-purple-50 text-purple-600',
    },
  ];

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
            onClick={() => setActiveMenu('帮助中心')}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition mb-1 ${
              activeMenu === '帮助中心'
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
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
      <main className="flex-1 overflow-auto bg-gray-50">
        <div className="max-w-6xl mx-auto p-8">
          {/* 头部 */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">帮助中心</h1>
            <p className="text-lg text-gray-600 mb-8">我们该如何帮助您？</p>

            {/* 搜索框 */}
            <div className="max-w-2xl mx-auto relative">
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="输入您的问题"
                className="w-full px-6 py-4 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg shadow-sm"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* 热门主题 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">热门主题</h2>
            <div className="grid grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition cursor-pointer"
                >
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 联系支持 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">联系支持</h2>
            <div className="grid grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition cursor-pointer"
                >
                  <div
                    className={`w-12 h-12 ${method.color} rounded-lg flex items-center justify-center text-2xl mb-4`}
                  >
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 常见问题 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">常见问题</h2>
            <div className="space-y-4">
              {faqs.map(faq => (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
                  >
                    <span className="text-left font-medium text-gray-900">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-gray-400 transition-transform ${
                        expandedFAQ === faq.id ? 'rotate-180' : ''
                      }`}
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
                  {expandedFAQ === faq.id && (
                    <div className="px-6 pb-4 text-gray-600 border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 底部导航 */}
          <div className="mt-12 flex items-center justify-center gap-4 text-gray-400">
            <button className="p-3 hover:bg-white rounded-lg transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </button>
            <button className="p-3 hover:bg-white rounded-lg transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <span className="px-4 py-2 bg-white rounded-lg">1 / 1</span>
            <button className="p-3 hover:bg-white rounded-lg transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <button className="p-3 hover:bg-white rounded-lg transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
