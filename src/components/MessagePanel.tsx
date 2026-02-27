import { useState } from 'react';

interface Message {
  id: string;
  user: string;
  avatar: string;
  content: string;
  time: string;
  read: boolean;
  conversation?: ConversationMessage[];
}

interface ConversationMessage {
  id: string;
  sender: 'me' | 'other';
  content: string;
  time: string;
}

interface MessagePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MessagePanel({ isOpen, onClose }: MessagePanelProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'unread'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [newMessage, setNewMessage] = useState('');
  const [messages] = useState<Message[]>([
    {
      id: '1',
      user: '姓名示例',
      avatar: 'User1',
      content: '嘿，你好！只需基础您年今天后和更新项目状态。',
      time: '1分钟',
      read: false,
      conversation: [
        { id: '1-1', sender: 'other', content: '嘿，你好！只需基础您年今天后和更新项目状态。', time: '10:30' },
        { id: '1-2', sender: 'me', content: '好的！我刚才以收到您的消息并更新了项目状态。', time: '10:32' },
        { id: '1-3', sender: 'other', content: '太好了！另外，让我们确定年度大会来"网站重新设计"任务。', time: '10:35' },
        { id: '1-4', sender: 'me', content: '当然你事情。另外，我们需要一些制助您经验完成这些任务吗？', time: '10:38' },
        { id: '1-5', sender: 'other', content: '我数据尺寸不太重！让我们保持这个项目在正确的轨道上，如果您需要更多时间或支持，请告诉我。', time: '10:40' },
      ],
    },
    {
      id: '2',
      user: '姓名示例',
      avatar: 'User2',
      content: 'QA测试任务已经提交，需要开发团队的输入。',
      time: '1分钟',
      read: false,
      conversation: [
        { id: '2-1', sender: 'other', content: 'QA测试任务已经提交，需要开发团队的输入。', time: '09:15' },
        { id: '2-2', sender: 'me', content: '收到，我会尽快查看并提供反馈。', time: '09:20' },
      ],
    },
    {
      id: '3',
      user: '姓名示例',
      avatar: 'User3',
      content: '你好，大家！另外，让我们确定年度大会来"网站重新设',
      time: '1分钟',
      read: false,
      conversation: [
        { id: '3-1', sender: 'other', content: '你好，大家！另外，让我们确定年度大会来"网站重新设计"项目的时间表。', time: '08:45' },
      ],
    },
    {
      id: '4',
      user: '姓名示例',
      avatar: 'User4',
      content: 'QA测试任务已经提交，需要开发团队的输入。',
      time: '1分钟',
      read: false,
      conversation: [
        { id: '4-1', sender: 'other', content: 'QA测试任务已经提交，需要开发团队的输入。', time: '昨天' },
      ],
    },
    {
      id: '5',
      user: '姓名示例',
      avatar: 'User5',
      content: '你好，大家！另外，让我们确定年度大会来"网站重新设',
      time: '1分钟',
      read: false,
      conversation: [
        { id: '5-1', sender: 'other', content: '你好，大家！另外，让我们确定年度大会来"网站重新设计"的具体安排。', time: '昨天' },
      ],
    },
  ]);

  const filteredMessages = messages.filter(msg => {
    const matchesTab = activeTab === 'all' || !msg.read;
    const matchesSearch = msg.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         msg.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // 这里可以添加发送消息的逻辑
      console.log('发送消息:', newMessage);
      setNewMessage('');
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* 背景遮罩 */}
      <div 
        className="fixed inset-0 z-40" 
        onClick={onClose}
      ></div>

      {/* 消息面板 */}
      <div className="absolute right-0 top-16 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 overflow-hidden">
        {/* 头部 */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">消息</h3>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* 搜索框 */}
          <div className="relative mb-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="在这里搜索"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
            <svg 
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* 标签切换 */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`pb-2 text-sm font-medium transition relative ${
                activeTab === 'all'
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              全部
              {activeTab === 'all' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('unread')}
              className={`pb-2 text-sm font-medium transition relative ${
                activeTab === 'unread'
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              未读
              {activeTab === 'unread' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
              )}
            </button>
          </div>
        </div>

        {/* 消息列表 */}
        <div className="max-h-96 overflow-y-auto">
          {filteredMessages.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {filteredMessages.map((message) => (
                <div
                  key={message.id}
                  onClick={() => setSelectedMessage(message)}
                  className={`flex gap-3 p-4 hover:bg-gray-50 cursor-pointer transition ${
                    !message.read ? 'bg-blue-50' : ''
                  }`}
                >
                  {/* 头像 */}
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${message.avatar}`}
                    alt={message.user}
                    className="w-10 h-10 rounded-full flex-shrink-0"
                  />

                  {/* 内容 */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="text-sm font-medium text-gray-900">
                        {message.user}
                      </h4>
                      <span className="text-xs text-gray-500 whitespace-nowrap">
                        {message.time}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {message.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <svg className="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <p className="text-sm">暂无消息</p>
            </div>
          )}
        </div>
      </div>

      {/* 对话框 */}
      {selectedMessage && (
        <>
          {/* 对话框背景遮罩 */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50" 
            onClick={() => setSelectedMessage(null)}
          ></div>

          {/* 对话框内容 */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
              className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 对话框头部 */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedMessage(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${selectedMessage.avatar}`}
                    alt={selectedMessage.user}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">{selectedMessage.user}</h3>
                    <p className="text-xs text-gray-500">{selectedMessage.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
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

              {/* 对话内容区域 */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {selectedMessage.conversation?.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex gap-2 max-w-[70%] ${msg.sender === 'me' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${msg.sender === 'me' ? 'Me' : selectedMessage.avatar}`}
                        alt={msg.sender}
                        className="w-8 h-8 rounded-full flex-shrink-0"
                      />
                      <div>
                        <div
                          className={`px-4 py-2 rounded-2xl ${
                            msg.sender === 'me'
                              ? 'bg-blue-600 text-white'
                              : 'bg-white text-gray-900 border border-gray-200'
                          }`}
                        >
                          <p className="text-sm">{msg.content}</p>
                        </div>
                        <p className={`text-xs text-gray-500 mt-1 ${msg.sender === 'me' ? 'text-right' : 'text-left'}`}>
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 输入框 */}
              <div className="p-4 border-t border-gray-200 bg-white">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="在此处输入..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                  <button
                    onClick={handleSendMessage}
                    className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

