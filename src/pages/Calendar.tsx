import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface CalendarEvent {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  date: string;
  color: string;
  description?: string;
}

export default function Calendar() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('日历');
  const [currentDate, setCurrentDate] = useState(new Date(2025, 11, 24)); // 2025年12月24日
  const [activeTab, setActiveTab] = useState('所有日程');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showAddEventModal, setShowAddEventModal] = useState(false);
  const [showEventDetail, setShowEventDetail] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

  // 新日程表单状态
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    eventType: '会议',
    date: '2025-10-15',
    startTime: '09:00',
    startPeriod: 'AM',
    endTime: '10:00',
    endPeriod: 'AM',
    reminder: true,
    reminderTime: '10分钟前',
    repeat: '每1分钟一次',
    location: '',
  });

  // 示例事件数据
  const events: CalendarEvent[] = [
    {
      id: '1',
      title: '设计评审会议',
      startTime: '08:00',
      endTime: '09:00',
      date: '2025-12-24',
      color: 'bg-emerald-100 border-l-4 border-emerald-400',
      description: '讨论项目目标，可交付成果和时间表',
    },
    {
      id: '2',
      title: '营销活动发布计划',
      startTime: '11:00',
      endTime: '12:00',
      date: '2025-12-24',
      color: 'bg-pink-100 border-l-4 border-pink-400',
      description: '制定营销策略和推广方案',
    },
    {
      id: '3',
      title: '方客户会同步配送',
      startTime: '09:00',
      endTime: '10:00',
      date: '2025-12-25',
      color: 'bg-amber-100 border-l-4 border-amber-400',
      description: '与客户同步项目进度',
    },
    {
      id: '4',
      title: '设计评审会议',
      startTime: '08:00',
      endTime: '09:00',
      date: '2025-12-26',
      color: 'bg-emerald-100 border-l-4 border-emerald-400',
      description: '评审最新设计方案',
    },
    {
      id: '5',
      title: '设计评审会议',
      startTime: '06:00',
      endTime: '09:00',
      date: '2025-12-26',
      color: 'bg-emerald-100 border-l-4 border-emerald-400',
      description: '早会讨论设计细节',
    },
    {
      id: '6',
      title: '设计评审会议',
      startTime: '08:00',
      endTime: '09:00',
      date: '2025-12-27',
      color: 'bg-emerald-100 border-l-4 border-emerald-400',
      description: '设计方案最终确认',
    },
    {
      id: '7',
      title: '方客户会同步配送',
      startTime: '09:00',
      endTime: '10:00',
      date: '2025-12-27',
      color: 'bg-amber-100 border-l-4 border-amber-400',
      description: '配送进度跟踪',
    },
    {
      id: '8',
      title: '营销活动发布计划',
      startTime: '11:00',
      endTime: '12:00',
      date: '2025-12-28',
      color: 'bg-pink-100 border-l-4 border-pink-400',
      description: '活动发布前准备',
    },
    {
      id: '9',
      title: '设计评审会议',
      startTime: '06:00',
      endTime: '09:00',
      date: '2025-12-25',
      color: 'bg-emerald-100 border-l-4 border-emerald-400',
      description: '设计初稿评审',
    },
    {
      id: '10',
      title: '方客户会同步配送',
      startTime: '09:00',
      endTime: '10:00',
      date: '2025-12-29',
      color: 'bg-amber-100 border-l-4 border-amber-400',
      description: '周末配送安排',
    },
    {
      id: '11',
      title: '营销活动发布计划',
      startTime: '11:00',
      endTime: '12:00',
      date: '2025-12-27',
      color: 'bg-pink-100 border-l-4 border-pink-400',
      description: '营销内容审核',
    },
  ];

  // 获取当前周的日期
  const getWeekDates = (date: Date) => {
    const day = date.getDay();
    const diff = date.getDate() - day;
    const sunday = new Date(date);
    sunday.setDate(diff);

    const weekDates = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(sunday);
      d.setDate(sunday.getDate() + i);
      weekDates.push(d);
    }
    return weekDates;
  };

  const weekDates = getWeekDates(currentDate);

  // 时间轴（从上午8点到下午2点）
  const timeSlots = [
    '上午8点',
    '8:40 AM',
    '上午9点',
    '上午10点',
    '上午11点',
    '上午12点',
    '下午1点',
    '下午2点',
  ];

  // 获取指定日期的事件
  const getEventsForDate = (date: Date) => {
    const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    return events.filter(event => event.date === dateStr);
  };

  // 切换周
  const changeWeek = (offset: number) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + offset * 7);
    setCurrentDate(newDate);
  };

  // 格式化日期显示
  const formatMonthYear = () => {
    return `${currentDate.getFullYear()}年${currentDate.getMonth() + 1}月`;
  };

  // 计算事件在时间轴上的位置
  const getEventPosition = (startTime: string, endTime: string) => {
    const [startHour, startMin] = startTime.split(':').map(Number);
    const [endHour, endMin] = endTime.split(':').map(Number);

    const startMinutes = (startHour - 8) * 60 + startMin;
    const duration = (endHour - startHour) * 60 + (endMin - startMin);

    const top = (startMinutes / 60) * 80; // 每小时80px
    const height = (duration / 60) * 80;

    return { top, height };
  };

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
      <main className="flex-1 bg-gray-50">
        <div className="h-full flex flex-col">
          {/* 头部 */}
          <div className="bg-white border-b border-gray-200 px-8 py-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">日历</h1>

            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">让我们管理您的日程！</h2>

              <div className="flex items-center gap-3">
                <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                  在这里筛选
                </button>
                <button
                  onClick={() => setShowAddEventModal(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  添加
                </button>
              </div>
            </div>

            {/* 标签页 */}
            <div className="flex items-center gap-6 mt-6 border-b border-gray-200">
              {['所有日程', '会议', '任务提醒'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 text-sm font-medium transition relative ${
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
          </div>

          {/* 日历主体 */}
          <div className="flex-1 overflow-hidden">
            <div className="h-full flex flex-col p-6">
              {/* 日期导航 */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => changeWeek(-1)}
                    className="p-1.5 hover:bg-gray-200 rounded transition"
                  >
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
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => changeWeek(1)}
                    className="p-1.5 hover:bg-gray-200 rounded transition"
                  >
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                  <h3 className="text-lg font-medium text-gray-900">{formatMonthYear()}</h3>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-1.5">
                    <button className="px-2 py-1 text-sm text-gray-700 hover:bg-gray-50 rounded">
                      天
                    </button>
                    <button className="px-2 py-1 text-sm bg-gray-100 text-gray-900 rounded">
                      周
                    </button>
                    <button className="px-2 py-1 text-sm text-gray-700 hover:bg-gray-50 rounded">
                      月
                    </button>
                  </div>

                  <div className="relative">
                    <button
                      onClick={() => setShowDatePicker(!showDatePicker)}
                      className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      2025.12.24 -
                    </button>
                  </div>
                </div>
              </div>

              {/* 周视图日历 */}
              <div className="flex-1 bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="h-full flex">
                  {/* 时间轴 */}
                  <div className="w-24 border-r border-gray-200 bg-gray-50">
                    <div className="h-16 border-b border-gray-200"></div>
                    {timeSlots.map((time, index) => (
                      <div key={index} className="h-20 border-b border-gray-200 px-3 py-2">
                        <span className="text-xs text-gray-500">{time}</span>
                      </div>
                    ))}
                  </div>

                  {/* 日期列 */}
                  <div className="flex-1 overflow-x-auto">
                    <div className="flex min-w-max">
                      {weekDates.map((date, dayIndex) => {
                        const dayEvents = getEventsForDate(date);
                        const isToday = date.toDateString() === new Date().toDateString();
                        const weekDays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

                        return (
                          <div
                            key={dayIndex}
                            className="flex-1 min-w-[140px] border-r border-gray-200 last:border-r-0"
                          >
                            {/* 日期头部 */}
                            <div
                              className={`h-16 border-b border-gray-200 flex flex-col items-center justify-center ${
                                isToday ? 'bg-blue-50' : ''
                              }`}
                            >
                              <span className="text-xs text-gray-500">
                                {weekDays[date.getDay()]}
                                {date.getDate()}
                              </span>
                            </div>

                            {/* 事件区域 */}
                            <div className="relative" style={{ height: '640px' }}>
                              {timeSlots.map((_, index) => (
                                <div key={index} className="h-20 border-b border-gray-100"></div>
                              ))}

                              {/* 事件卡片 */}
                              {dayEvents.map(event => {
                                const { top, height } = getEventPosition(
                                  event.startTime,
                                  event.endTime
                                );
                                return (
                                  <div
                                    key={event.id}
                                    onClick={() => {
                                      setSelectedEvent(event);
                                      setShowEventDetail(true);
                                    }}
                                    className={`absolute left-1 right-1 ${event.color} rounded p-2 text-xs cursor-pointer hover:shadow-md transition`}
                                    style={{
                                      top: `${top}px`,
                                      height: `${height}px`,
                                      minHeight: '60px',
                                    }}
                                  >
                                    <div className="font-medium text-gray-800 mb-0.5">
                                      {event.startTime} - {event.endTime}
                                    </div>
                                    <div className="text-gray-700">{event.title}</div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 日期选择器弹窗 */}
      {showDatePicker && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50"
          onClick={() => setShowDatePicker(false)}
        >
          <div
            className="bg-white rounded-xl shadow-xl p-6 max-w-sm"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">选择日期</h3>
              <button
                onClick={() => setShowDatePicker(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <input
                type="date"
                value={currentDate.toISOString().split('T')[0]}
                onChange={e => {
                  setCurrentDate(new Date(e.target.value));
                  setShowDatePicker(false);
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setCurrentDate(new Date());
                    setShowDatePicker(false);
                  }}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  今天
                </button>
                <button
                  onClick={() => setShowDatePicker(false)}
                  className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
                >
                  取消
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 添加日程弹窗 */}
      {showAddEventModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 p-4"
          onClick={() => setShowAddEventModal(false)}
        >
          <div
            className="bg-white rounded-xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* 头部 */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">添加日程</h3>
              <button
                onClick={() => setShowAddEventModal(false)}
                className="p-1 hover:bg-gray-100 rounded transition"
              >
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* 表单内容 */}
            <div className="p-6 space-y-5">
              {/* 标题 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">标题</label>
                <input
                  type="text"
                  value={newEvent.title}
                  onChange={e => setNewEvent({ ...newEvent, title: e.target.value })}
                  placeholder="项目启动会议"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* 描述 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">描述</label>
                <textarea
                  value={newEvent.description}
                  onChange={e => setNewEvent({ ...newEvent, description: e.target.value })}
                  placeholder="讨论项目目标，可交付成果和时间表"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>

              {/* 日程类型和日期 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">日程类型</label>
                  <div className="relative">
                    <select
                      value={newEvent.eventType}
                      onChange={e => setNewEvent({ ...newEvent, eventType: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white pr-8"
                    >
                      <option value="会议">🟢 会议</option>
                      <option value="任务">🔵 任务</option>
                      <option value="提醒">🟡 提醒</option>
                    </select>
                    <svg
                      className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
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
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">日期</label>
                  <input
                    type="date"
                    value={newEvent.date}
                    onChange={e => setNewEvent({ ...newEvent, date: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* 开始时间和结束时间 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">开始时间</label>
                  <div className="flex gap-2">
                    <input
                      type="time"
                      value={newEvent.startTime}
                      onChange={e => setNewEvent({ ...newEvent, startTime: e.target.value })}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <div className="flex bg-gray-100 rounded-lg p-1">
                      <button
                        onClick={() => setNewEvent({ ...newEvent, startPeriod: 'PM' })}
                        className={`px-3 py-1 text-xs rounded ${newEvent.startPeriod === 'PM' ? 'bg-white shadow-sm' : ''}`}
                      >
                        PM
                      </button>
                      <button
                        onClick={() => setNewEvent({ ...newEvent, startPeriod: 'AM' })}
                        className={`px-3 py-1 text-xs rounded ${newEvent.startPeriod === 'AM' ? 'bg-white shadow-sm' : ''}`}
                      >
                        AM
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">结束时间</label>
                  <div className="flex gap-2">
                    <input
                      type="time"
                      value={newEvent.endTime}
                      onChange={e => setNewEvent({ ...newEvent, endTime: e.target.value })}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <div className="flex bg-gray-100 rounded-lg p-1">
                      <button
                        onClick={() => setNewEvent({ ...newEvent, endPeriod: 'PM' })}
                        className={`px-3 py-1 text-xs rounded ${newEvent.endPeriod === 'PM' ? 'bg-white shadow-sm' : ''}`}
                      >
                        PM
                      </button>
                      <button
                        onClick={() => setNewEvent({ ...newEvent, endPeriod: 'AM' })}
                        className={`px-3 py-1 text-xs rounded ${newEvent.endPeriod === 'AM' ? 'bg-white shadow-sm' : ''}`}
                      >
                        AM
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 提醒 */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700">提醒</label>
                  <button
                    onClick={() => setNewEvent({ ...newEvent, reminder: !newEvent.reminder })}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                      newEvent.reminder ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                        newEvent.reminder ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                {newEvent.reminder && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <select
                        value={newEvent.reminderTime}
                        onChange={e => setNewEvent({ ...newEvent, reminderTime: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white pr-8"
                      >
                        <option value="5分钟前">5分钟前</option>
                        <option value="10分钟前">10分钟前</option>
                        <option value="15分钟前">15分钟前</option>
                        <option value="30分钟前">30分钟前</option>
                        <option value="1小时前">1小时前</option>
                      </select>
                      <svg
                        className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
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
                    </div>
                    <div className="relative">
                      <select
                        value={newEvent.repeat}
                        onChange={e => setNewEvent({ ...newEvent, repeat: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white pr-8"
                      >
                        <option value="不重复">不重复</option>
                        <option value="每1分钟一次">每1分钟一次</option>
                        <option value="每天">每天</option>
                        <option value="每周">每周</option>
                        <option value="每月">每月</option>
                      </select>
                      <svg
                        className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
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
                    </div>
                  </div>
                )}
              </div>

              {/* 位置 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">位置（可选）</label>
                <input
                  type="text"
                  value={newEvent.location}
                  onChange={e => setNewEvent({ ...newEvent, location: e.target.value })}
                  placeholder="会议室A或会议链接"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* 分配 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">分配</label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-sm font-medium text-blue-600">姓</span>
                    </div>
                    <span className="text-sm text-gray-700">姓名示例</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="text-sm font-medium text-purple-600">姓</span>
                    </div>
                    <span className="text-sm text-gray-700">姓名示例</span>
                  </div>
                  <button className="ml-auto text-sm text-blue-600 hover:text-blue-700 font-medium">
                    + 邀请
                  </button>
                </div>
              </div>
            </div>

            {/* 底部按钮 */}
            <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200">
              <button
                onClick={() => setShowAddEventModal(false)}
                className="px-6 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition"
              >
                取消
              </button>
              <button
                onClick={() => {
                  // 这里可以添加保存逻辑
                  console.log('保存日程:', newEvent);
                  setShowAddEventModal(false);
                }}
                className="px-6 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
              >
                确认
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 日程详情弹窗 */}
      {showEventDetail && selectedEvent && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 p-4"
          onClick={() => setShowEventDetail(false)}
        >
          <div
            className="bg-white rounded-xl shadow-xl w-full max-w-lg"
            onClick={e => e.stopPropagation()}
          >
            {/* 头部 */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">日程详细信息</h3>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition">
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
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition">
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
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => setShowEventDetail(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition"
                >
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* 内容 */}
            <div className="p-6 space-y-6">
              {/* 标题和类型 */}
              <div>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full mt-1"></div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">
                      {selectedEvent.title}
                    </h4>
                    {selectedEvent.description && (
                      <p className="text-sm text-gray-600">{selectedEvent.description}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* 时间信息 */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">时间</div>
                    <div className="text-sm text-gray-600">
                      {selectedEvent.startTime} AM -&gt; {selectedEvent.endTime} AM
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">日期</div>
                    <div className="text-sm text-gray-600">
                      {new Date(selectedEvent.date).toLocaleDateString('zh-CN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* 地点 */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">地点</div>
                  <div className="text-sm text-gray-600">会议室A或会议链接</div>
                </div>
              </div>

              {/* 团队成员 */}
              <div>
                <div className="text-sm font-medium text-gray-900 mb-3">团队成员</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-sm font-medium text-blue-600">姓</span>
                    </div>
                    <span className="text-sm text-gray-700">姓名示例</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="text-sm font-medium text-purple-600">姓</span>
                    </div>
                    <span className="text-sm text-gray-700">姓名示例</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 底部按钮 */}
            <div className="flex items-center justify-between p-6 border-t border-gray-200">
              <button
                onClick={() => setShowEventDetail(false)}
                className="px-6 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition"
              >
                取消
              </button>
              <button
                onClick={() => {
                  setShowEventDetail(false);
                }}
                className="px-6 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
              >
                确认
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
