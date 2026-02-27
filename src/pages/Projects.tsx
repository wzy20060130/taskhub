import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NewProjectModal from '../components/NewProjectModal';

interface Task {
  id: string;
  title: string;
  description: string;
  progress: number;
  members: string[];
  status: 'progress' | 'review' | 'completed' | 'cancelled';
  color: string;
}

export default function Projects() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('项目');
  const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false);

  const tasks: Task[] = [
    { id: '1', title: 'XX项目', description: '6个任务即将到期', progress: 50, members: ['A', 'B', 'C'], status: 'progress', color: 'bg-blue-500' },
    { id: '2', title: '初始项目', description: '6个任务即将到期', progress: 50, members: ['A', 'B', 'C'], status: 'progress', color: 'bg-orange-500' },
    { id: '3', title: 'Trustworth项', description: '6个任务即将到期', progress: 50, members: ['A', 'B', 'C'], status: 'progress', color: 'bg-teal-500' },
    { id: '4', title: '营销活动', description: '6个任务即将到期', progress: 50, members: ['A', 'B', 'C'], status: 'review', color: 'bg-green-500' },
    { id: '5', title: '网站重新设计', description: '6个任务即将到期', progress: 50, members: ['A', 'B', 'C'], status: 'review', color: 'bg-gray-800' },
    { id: '6', title: '新应用发布', description: '6个任务即将到期', progress: 50, members: ['A', 'B', 'C'], status: 'review', color: 'bg-red-500' },
    { id: '7', title: 'XX项目', description: '6个任务即将到期', progress: 50, members: ['A', 'B', 'C'], status: 'completed', color: 'bg-blue-500' },
    { id: '8', title: '初始项目', description: '6个任务即将到期', progress: 50, members: ['A', 'B', 'C'], status: 'completed', color: 'bg-orange-500' },
    { id: '9', title: 'Trustworth项', description: '6个任务即将到期', progress: 50, members: ['A', 'B', 'C'], status: 'completed', color: 'bg-teal-500' },
    { id: '10', title: '营销活动', description: '6个任务即将到期', progress: 50, members: ['A', 'B', 'C'], status: 'cancelled', color: 'bg-green-500' },
    { id: '11', title: '网站重新设计', description: '6个任务即将到期', progress: 50, members: ['A', 'B', 'C'], status: 'cancelled', color: 'bg-gray-800' },
  ];

  const getTasksByStatus = (status: Task['status']) => {
    return tasks.filter(task => task.status === status);
  };

  const statusConfig = {
    progress: { label: '进行中', count: getTasksByStatus('progress').length, color: 'text-blue-600', dotColor: 'bg-blue-600' },
    review: { label: '审查中', count: getTasksByStatus('review').length, color: 'text-orange-600', dotColor: 'bg-orange-600' },
    completed: { label: '已完成', count: getTasksByStatus('completed').length, color: 'text-green-600', dotColor: 'bg-green-600' },
    cancelled: { label: '已取消', count: getTasksByStatus('cancelled').length, color: 'text-red-600', dotColor: 'bg-red-600' },
  };



  const handleNewProject = (project: any) => {
    console.log('新项目:', project);
    // 这里可以添加创建项目的逻辑
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
            <h1 className="text-2xl font-bold text-gray-900">项目</h1>
            
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
              
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </button>
              
              <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              
              <button 
                onClick={() => setIsNewProjectModalOpen(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                新项目
              </button>
            </div>
          </div>
        </header>

        {/* 内容区域 */}
        <div className="p-8">
          {/* 标题 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              让我们管理您的任务
            </h2>

            {/* 统计卡片 */}
            <div className="grid grid-cols-5 gap-4 mb-8">
              {[
                { label: '总项目', value: '08', icon: '📋', color: 'text-gray-900' },
                { label: '总任务', value: '52', icon: '📝', color: 'text-blue-600' },
                { label: '今天到期的任务', value: '04', icon: '🔥', color: 'text-orange-600' },
                { label: '逾期任务', value: '1', icon: '📌', color: 'text-red-600' },
                { label: '完成的任务', value: '11', icon: '✅', color: 'text-green-600' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-600">{stat.label}</span>
                    <span className="text-xl">{stat.icon}</span>
                  </div>
                  <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 项目清单标题栏 */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-900">项目清单</h3>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                筛选
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
            </div>
          </div>

          {/* 看板视图 */}
          <div className="grid grid-cols-4 gap-6">
            {Object.entries(statusConfig).map(([status, config]) => (
              <div key={status} className="bg-gray-100 rounded-xl p-4">
                {/* 列标题 */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${config.dotColor}`}></div>
                    <span className="text-sm font-semibold text-gray-900">{config.label}</span>
                    <span className="text-xs text-gray-500">{config.count}</span>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>

                {/* 任务卡片 */}
                <div className="space-y-3">
                  {getTasksByStatus(status as Task['status']).map((task) => (
                    <div 
                      key={task.id} 
                      onClick={() => navigate(`/projects/${task.id}`)}
                      className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className={`w-10 h-10 ${task.color} rounded-lg flex items-center justify-center`}>
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                          </svg>
                        </button>
                      </div>
                      
                      <h4 className="font-semibold text-gray-900 mb-1">{task.title}</h4>
                      <p className="text-xs text-gray-500 mb-3">{task.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex-1 mr-3">
                          <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-teal-500" style={{ width: `${task.progress}%` }}></div>
                          </div>
                        </div>
                        <span className="text-xs text-gray-600">{task.progress}%</span>
                      </div>
                      
                      <div className="flex items-center -space-x-2 mt-3">
                        {task.members.map((member, i) => (
                          <img
                            key={i}
                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member}${task.id}`}
                            alt="Member"
                            className="w-6 h-6 rounded-full border-2 border-white"
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* 新项目弹窗 */}
      <NewProjectModal
        isOpen={isNewProjectModalOpen}
        onClose={() => setIsNewProjectModalOpen(false)}
        onSubmit={handleNewProject}
      />
    </div>
  );
}

