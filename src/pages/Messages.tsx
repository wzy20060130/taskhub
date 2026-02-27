import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Message {
  id: string;
  sender: string;
  avatar: string;
  content: string;
  time: string;
  date?: string;
  isRead: boolean;
}

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: boolean;
}

export default function Messages() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('消息');
  const [selectedConversation, setSelectedConversation] = useState<string>('1');
  const [messageInput, setMessageInput] = useState('');
  const [activeTab, setActiveTab] = useState('全部');

  const conversations: Conversation[] = [
    { id: '1', name: '姓名示例', avatar: 'A', lastMessage: '您可以去更新新的设计文件吗？', time: '9:00', unread: true },
    { id: '2', name: '姓名示例', avatar: 'B', lastMessage: '谢谢！我们需要已经准备好了，我将大概提出更新和下一步', time: '6:30', unread: false },
    { id: '3', name: '姓名示例', avatar: 'C', lastMessage: '上午10点的每周同步会议', time: '12月12', unread: false },
    { id: '4', name: '姓名示例', avatar: 'D', lastMessage: '请在提交早上提供最新的进度报告。', time: '12月12', unread: false },
    { id: '5', name: '姓名示例', avatar: 'E', lastMessage: '让我们在周五的会议前最终确定用户测试', time: '12月12', unread: false },
    { id: '6', name: '姓名示例', avatar: 'F', lastMessage: '您能审查中我上传的社交媒体帖子文档', time: '12月12', unread: false },
    { id: '7', name: '姓名示例', avatar: 'G', lastMessage: '上午10点的每周同步会议', time: '12月12', unread: false },
    { id: '8', name: '姓名示例', avatar: 'H', lastMessage: '请在提交早上提供最新的进度报告。', time: '12月12', unread: false },
    { id: '9', name: '姓名示例', avatar: 'I', lastMessage: '让我们在周五的会议前最终确定用户测试', time: '12月12', unread: false },
  ];

  // 每个对话的消息记录
  const allMessages: Record<string, Message[]> = {
    '1': [
      { id: '1', sender: '姓名示例', avatar: 'A', content: '你好！继续吧，下周一的最终批准将于下周一反予，您能确认入一切是否正确吗？', time: '9:00', isRead: true },
      { id: '2', sender: 'me', avatar: 'Me', content: '嗨，亲亚亚，感谢您的提醒！是的，我们每项在昨天之前完成所有内容，我将关注一天结束时给您发送详细的状态更新', time: '9:00', isRead: true },
      { id: '3', sender: '姓名示例', avatar: 'A', content: '太好了！另外，您可以在送之前确保产品页面已针对移动设备进行了优化吗？', time: '9:00', isRead: true },
      { id: '4', sender: 'me', avatar: 'Me', content: '绝对地！我们的质量保证团队已经在测试移动响应能力，我也将他们的技术还给您在更新中', time: '9:00', isRead: true },
      { id: '5', sender: '姓名示例', avatar: 'A', content: '完美，谢谢！让我知道是否还需要我们的其他东西来推进这个', time: '9:00', isRead: true },
      { id: '6', sender: 'me', avatar: 'Me', content: '谢谢，亚亚亚！我们现在已经准备好了，我将天将能提出更新和下一', time: '9:00', isRead: true },
    ],
    '2': [
      { id: '1', sender: '姓名示例', avatar: 'B', content: '谢谢！我们需要已经准备好了', time: '6:30', isRead: true },
      { id: '2', sender: 'me', avatar: 'Me', content: '好的，我会尽快处理', time: '6:32', isRead: true },
    ],
    '3': [
      { id: '1', sender: '姓名示例', avatar: 'C', content: '上午10点的每周同步会议', time: '12月12', isRead: true },
      { id: '2', sender: 'me', avatar: 'Me', content: '收到，我会准时参加', time: '12月12', isRead: true },
    ],
    '4': [
      { id: '1', sender: '姓名示例', avatar: 'D', content: '请在提交早上提供最新的进度报告。', time: '12月12', isRead: true },
    ],
    '5': [
      { id: '1', sender: '姓名示例', avatar: 'E', content: '让我们在周五的会议前最终确定用户测试', time: '12月12', isRead: true },
    ],
    '6': [
      { id: '1', sender: '姓名示例', avatar: 'F', content: '您能审查中我上传的社交媒体帖子文档', time: '12月12', isRead: true },
    ],
    '7': [
      { id: '1', sender: '姓名示例', avatar: 'G', content: '上午10点的每周同步会议', time: '12月12', isRead: true },
    ],
    '8': [
      { id: '1', sender: '姓名示例', avatar: 'H', content: '请在提交早上提供最新的进度报告。', time: '12月12', isRead: true },
    ],
    '9': [
      { id: '1', sender: '姓名示例', avatar: 'I', content: '让我们在周五的会议前最终确定用户测试', time: '12月12', isRead: true },
    ],
  };

  // 获取当前选中对话的信息和消息
  const currentConversation = conversations.find(conv => conv.id === selectedConversation);
  const messages = allMessages[selectedConversation] || [];

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      console.log('发送消息:', messageInput);
      setMessageInput('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* 左侧边栏 */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
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

        <nav className="flex-1 p-4 space-y-1">
          <div className="text-xs font-semibold text-gray-400 mb-2 px-3">主菜单</div>
          
          {[
            { icon: '📊', label: '看板', path: '/dashboard' },
            { icon: '📁', label: '项目', path: '/projects' },
            { icon: '💬', label: '消息', path: '/messages' },
            { icon: '📅', label: '日历', path: '/calendar' },
            { icon: '📈', label: '分析', path: '/dashboard' },
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

          <div className="text-xs font-semibold text-gray-400 mb-2 px-3 pt-4">常用</div>
          
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
      <main className="flex-1 flex">
        {/* 对话列表 */}
        <div className="w-96 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">消息</h1>
            
            <div className="flex items-center gap-3">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="在这里搜索"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                添加
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 px-6 py-3 border-b border-gray-200">
            {['全部', '未读'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm font-medium transition ${
                  activeTab === tab
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setSelectedConversation(conv.id)}
                className={`w-full p-4 flex items-start gap-3 hover:bg-gray-50 transition border-b border-gray-100 ${
                  selectedConversation === conv.id ? 'bg-blue-50' : ''
                }`}
              >
                <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${conv.avatar}`}
                  alt={conv.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1 min-w-0 text-left">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-gray-900">{conv.name}</span>
                    <span className="text-xs text-gray-500">{conv.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                  {conv.unread && (
                    <div className="mt-1">
                      <span className="inline-block w-2 h-2 bg-blue-600 rounded-full"></span>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 聊天区域 */}
        <div className="flex-1 flex flex-col bg-gray-50">
          {/* 聊天头部 */}
          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${currentConversation?.avatar}`}
                  alt="User"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="font-semibold text-gray-900">{currentConversation?.name}</div>
                  <div className="text-sm text-gray-500">活跃</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* 消息列表 */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.length > 0 ? (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.sender === 'me' ? 'flex-row-reverse' : ''}`}
                >
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${message.avatar}`}
                    alt={message.sender}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className={`flex flex-col ${message.sender === 'me' ? 'items-end' : ''}`}>
                    <div
                      className={`max-w-md px-4 py-3 rounded-2xl ${
                        message.sender === 'me'
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                    <span className="text-xs text-gray-500 mt-1">{message.time}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-400">暂无消息</p>
              </div>
            )}
          </div>

          {/* 输入区域 */}
          <div className="bg-white border-t border-gray-200 p-4">
            <div className="flex items-end gap-3">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
              </button>
              
              <div className="flex-1 relative">
                <textarea
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  placeholder="在这里输入人您的消息"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  rows={1}
                />
              </div>

              <button
                onClick={handleSendMessage}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                发送
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

