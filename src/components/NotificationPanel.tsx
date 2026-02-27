import { useState } from 'react';

interface Notification {
  id: string;
  type: 'task' | 'mention' | 'comment';
  title: string;
  description: string;
  time: string;
  read: boolean;
}

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NotificationPanel({ isOpen, onClose }: NotificationPanelProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'unread'>('all');
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'task',
      title: '分配了新任务',
      description: '行为客户会议已分配给您以进行新应用发',
      time: '1分钟',
      read: false,
    },
    {
      id: '2',
      type: 'mention',
      title: '任务逾期',
      description: 'QA测试"从电子商务更新到|天已到',
      time: '1分钟',
      read: false,
    },
    {
      id: '3',
      type: 'comment',
      title: '评论添加了',
      description: '姓名示例（Alex johnson）在你站重新设计中评论了"最终确定项目建议"',
      time: '1分钟',
      read: false,
    },
  ]);

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'task':
        return <div className="w-2 h-2 bg-blue-500 rounded-full"></div>;
      case 'mention':
        return <div className="w-2 h-2 bg-red-500 rounded-full"></div>;
      case 'comment':
        return <div className="w-2 h-2 bg-green-500 rounded-full"></div>;
      default:
        return null;
    }
  };

  const filteredNotifications =
    activeTab === 'unread' ? notifications.filter(n => !n.read) : notifications;

  if (!isOpen) return null;

  return (
    <>
      {/* 背景遮罩 */}
      <div className="fixed inset-0 z-40" onClick={onClose}></div>

      {/* 通知面板 */}
      <div className="absolute right-0 top-16 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 overflow-hidden">
        {/* 头部 */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">通知</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* 标签切换 */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`pb-2 text-sm font-medium transition relative ${
                activeTab === 'all' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
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
                activeTab === 'unread' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              未读
              {activeTab === 'unread' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
              )}
            </button>
            <button
              onClick={markAllAsRead}
              className="ml-auto text-sm text-blue-600 hover:underline"
            >
              标记为阅读
            </button>
          </div>
        </div>

        {/* 通知列表 */}
        <div className="max-h-96 overflow-y-auto">
          {/* 今天 */}
          <div className="p-4">
            <div className="text-xs font-semibold text-gray-400 mb-3">今天</div>
            <div className="space-y-3">
              {filteredNotifications.map(notification => (
                <div
                  key={notification.id}
                  className={`flex gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition ${
                    !notification.read ? 'bg-blue-50' : ''
                  }`}
                >
                  {/* 状态指示器 */}
                  <div className="flex-shrink-0 pt-1">{getNotificationIcon(notification.type)}</div>

                  {/* 内容 */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="text-sm font-medium text-gray-900">{notification.title}</h4>
                      <span className="text-xs text-gray-500 whitespace-nowrap">
                        {notification.time}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">{notification.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 昨天 */}
          <div className="p-4 pt-0">
            <div className="text-xs font-semibold text-gray-400 mb-3">昨天</div>
            <div className="text-sm text-gray-500 text-center py-4">暂无通知</div>
          </div>
        </div>
      </div>
    </>
  );
}
