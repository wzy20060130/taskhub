import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface Task {
  id: string;
  title: string;
  status: '已过期' | '进行中' | '审查中' | '已完成';
  priority: '紧急' | '低的' | '中的';
  date: string;
  comments: number;
  progress: number;
  assignee: string;
  color: string;
  project: string;
  projectIcon: string;
  projectColor: string;
}

export default function ProjectDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('看板');
  const [activeMenu, setActiveMenu] = useState('项目');

  // 模拟项目数据
  const projectData: Record<string, any> = {
    '1': { title: 'XX项目', color: 'bg-blue-500', status: '进行中' },
    '2': { title: '初始项目', color: 'bg-orange-500', status: '进行中' },
    '3': { title: 'Trustworth项', color: 'bg-teal-500', status: '进行中' },
    '4': { title: '营销活动', color: 'bg-green-500', status: '审查中' },
    '5': { title: '网站重新设计', color: 'bg-gray-800', status: '审查中' },
    '6': { title: '新应用发布', color: 'bg-red-500', status: '审查中' },
    '7': { title: 'XX项目', color: 'bg-blue-500', status: '已完成' },
    '8': { title: '初始项目', color: 'bg-orange-500', status: '已完成' },
    '9': { title: 'Trustworth项', color: 'bg-teal-500', status: '已完成' },
    '10': { title: '营销活动', color: 'bg-green-500', status: '已取消' },
    '11': { title: '网站重新设计', color: 'bg-gray-800', status: '已取消' },
  };

  const project = projectData[id || '1'] || projectData['1'];

  const tasks: Task[] = [
    { id: '1', title: '设计社交媒体广告', status: '已过期', priority: '紧急', date: '2025年11月12', comments: 1, progress: 60, assignee: 'A', color: 'bg-red-100 text-red-700', project: '网站重新设计', projectIcon: '📄', projectColor: 'bg-gray-800' },
    { id: '2', title: '设计社交媒体广告', status: '已过期', priority: '紧急', date: '2025年11月12', comments: 1, progress: 60, assignee: 'B', color: 'bg-red-100 text-red-700', project: '网站重新设计', projectIcon: '📄', projectColor: 'bg-gray-800' },
    { id: '3', title: '竞争对手分析', status: '已过期', priority: '低的', date: '2025年11月12', comments: 1, progress: 0, assignee: 'C', color: 'bg-red-100 text-red-700', project: '营销活动', projectIcon: '📄', projectColor: 'bg-green-500' },
    { id: '4', title: '写电子邮件副本', status: '进行中', priority: '低的', date: '2025年11月12', comments: 1, progress: 60, assignee: 'D', color: 'bg-blue-100 text-blue-700', project: '新应用发布', projectIcon: '📄', projectColor: 'bg-red-500' },
    { id: '5', title: '被经编定着陆页', status: '进行中', priority: '紧急', date: '2025年11月12', comments: 1, progress: 50, assignee: 'E', color: 'bg-blue-100 text-blue-700', project: '网站重新设计', projectIcon: '📄', projectColor: 'bg-gray-800' },
    { id: '6', title: 'SEO优化', status: '进行中', priority: '低的', date: '2025年11月12', comments: 1, progress: 0, assignee: 'F', color: 'bg-blue-100 text-blue-700', project: '营销活动', projectIcon: '📄', projectColor: 'bg-green-500' },
    { id: '7', title: '竞争对手分析', status: '审查中', priority: '紧急', date: '2025年11月12', comments: 1, progress: 95, assignee: 'G', color: 'bg-orange-100 text-orange-700', project: '营销活动', projectIcon: '📄', projectColor: 'bg-green-500' },
    { id: '8', title: '设计社交媒体广告', status: '审查中', priority: '中的', date: '2025年11月12', comments: 1, progress: 90, assignee: 'H', color: 'bg-orange-100 text-orange-700', project: '网站重新设计', projectIcon: '📄', projectColor: 'bg-gray-800' },
    { id: '9', title: '竞争对手分析', status: '已完成', priority: '低的', date: '2025年11月12', comments: 1, progress: 100, assignee: 'I', color: 'bg-green-100 text-green-700', project: '营销活动', projectIcon: '📄', projectColor: 'bg-green-500' },
    { id: '10', title: '竞争对手分析', status: '已完成', priority: '低的', date: '2025年11月12', comments: 1, progress: 100, assignee: 'J', color: 'bg-green-100 text-green-700', project: '营销活动', projectIcon: '📄', projectColor: 'bg-green-500' },
    { id: '11', title: '设计社交媒体广告', status: '已完成', priority: '紧急', date: '2025年11月12', comments: 1, progress: 100, assignee: 'K', color: 'bg-green-100 text-green-700', project: '网站重新设计', projectIcon: '📄', projectColor: 'bg-gray-800' },
  ];

  const getTasksByStatus = (status: Task['status']) => {
    return tasks.filter(task => task.status === status);
  };

  const statusConfig = {
    '已过期': { count: getTasksByStatus('已过期').length, color: 'text-red-600', dotColor: 'bg-red-600' },
    '进行中': { count: getTasksByStatus('进行中').length, color: 'text-blue-600', dotColor: 'bg-blue-600' },
    '审查中': { count: getTasksByStatus('审查中').length, color: 'text-orange-600', dotColor: 'bg-orange-600' },
    '已完成': { count: getTasksByStatus('已完成').length, color: 'text-green-600', dotColor: 'bg-green-600' },
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
      <main className="flex-1 overflow-auto">
        {/* 顶部导航 */}
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center gap-4 mb-4">
            <button 
              onClick={() => navigate('/projects')}
              className="text-gray-600 hover:text-gray-900"
            >
              项目
            </button>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">项目详情</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 ${project.color} rounded-xl flex items-center justify-center`}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{project.title}</h1>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                {project.status}
              </span>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                添加
              </button>
            </div>
          </div>
        </header>

        {/* 项目信息卡片 */}
        <div className="p-8">
          <div className="bg-white rounded-xl p-6 mb-6 border border-gray-200">
            <div className="grid grid-cols-4 gap-6">
              <div>
                <div className="text-sm text-gray-600 mb-1">项目状态：</div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    已完成
                  </span>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">进度：</div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: '80%' }}></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">80%</span>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">日期：</div>
                <div className="text-sm font-medium text-gray-900">2025年10月15日 → 2025年12月20日</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">专案经理：</div>
                <div className="flex items-center gap-2">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Manager" alt="Manager" className="w-6 h-6 rounded-full" />
                  <span className="text-sm font-medium text-gray-900">姓名示例</span>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="text-sm text-gray-600 mb-2">团队成员：</div>
              <div className="flex items-center gap-3">
                <div className="flex items-center -space-x-2">
                  {['A', 'B', 'C'].map((member) => (
                    <img
                      key={member}
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member}`}
                      alt="Member"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">+ 添请</button>
              </div>
            </div>
          </div>

          {/* 标签页 */}
          <div className="flex items-center gap-6 mb-6 border-b border-gray-200">
            {['看板', '列表', '日历'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 px-1 text-sm font-medium transition relative ${
                  activeTab === tab
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                )}
              </button>
            ))}
          </div>

          {/* 工具栏 */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                在这里搜索
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </button>
            </div>
          </div>

          {/* 看板视图 */}
          {activeTab === '看板' && (
            <div className="grid grid-cols-4 gap-6">
            {Object.entries(statusConfig).map(([status, config]) => (
              <div key={status} className="bg-gray-100 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${config.dotColor}`}></div>
                    <span className="text-sm font-semibold text-gray-900">{status}</span>
                    <span className="text-xs text-gray-500">{config.count}</span>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-3">
                  {getTasksByStatus(status as Task['status']).map((task) => (
                    <div key={task.id} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition cursor-pointer">
                      <div className="flex items-start justify-between mb-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${task.color}`}>
                          {task.priority}
                        </span>
                        <button className="text-gray-400 hover:text-gray-600">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                          </svg>
                        </button>
                      </div>
                      
                      <h4 className="font-medium text-gray-900 mb-3 text-sm">{task.title}</h4>
                      
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{task.date}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          <span className="text-xs text-gray-600">{task.comments}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-teal-500" style={{ width: `${task.progress}%` }}></div>
                          </div>
                          <img
                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${task.assignee}`}
                            alt="Assignee"
                            className="w-6 h-6 rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <button className="w-full py-2 text-sm text-gray-600 hover:text-gray-900 flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    添加
                  </button>
                </div>
              </div>
            ))}
          </div>
          )}

          {/* 列表视图 */}
          {activeTab === '列表' && (
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              {Object.entries(statusConfig).map(([status, config]) => (
                <div key={status} className="border-b border-gray-200 last:border-b-0">
                  <div className="bg-gray-50 px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${config.dotColor}`}></div>
                      <span className="text-sm font-semibold text-gray-900">{status}</span>
                      <span className="text-xs text-gray-500">{config.count}</span>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                  </div>

                  {getTasksByStatus(status as Task['status']).length > 0 && (
                    <>
                      <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 border-t border-gray-200 text-xs font-medium text-gray-600">
                        <div className="col-span-1">
                          <input type="checkbox" className="rounded border-gray-300" />
                        </div>
                        <div className="col-span-3">任务名称</div>
                        <div className="col-span-2">项目</div>
                        <div className="col-span-2">估计</div>
                        <div className="col-span-1">优先事项</div>
                        <div className="col-span-1">进度</div>
                        <div className="col-span-1">成员</div>
                        <div className="col-span-1">操作</div>
                      </div>

                      {getTasksByStatus(status as Task['status']).map((task) => (
                        <div key={task.id} className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50 border-t border-gray-100 items-center">
                          <div className="col-span-1">
                            <input type="checkbox" className="rounded border-gray-300" />
                          </div>
                          <div className="col-span-3">
                            <div className="font-medium text-gray-900 text-sm">{task.title}</div>
                          </div>
                          <div className="col-span-2">
                            <div className="flex items-center gap-2">
                              <div className={`w-6 h-6 ${task.projectColor} rounded flex items-center justify-center text-xs`}>
                                {task.projectIcon}
                              </div>
                              <span className="text-sm text-gray-700">{task.project}</span>
                            </div>
                          </div>
                          <div className="col-span-2">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span>{task.date}</span>
                              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                              </svg>
                              <span>{task.comments}</span>
                            </div>
                          </div>
                          <div className="col-span-1">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${task.color}`}>
                              {task.priority}
                            </span>
                          </div>
                          <div className="col-span-1">
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-teal-500" style={{ width: `${task.progress}%` }}></div>
                              </div>
                              <span className="text-xs text-gray-600">{task.progress}%</span>
                            </div>
                          </div>
                          <div className="col-span-1">
                            <div className="flex items-center -space-x-1">
                              <img
                                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${task.assignee}`}
                                alt="Assignee"
                                className="w-6 h-6 rounded-full border-2 border-white"
                              />
                              <img
                                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${task.assignee}2`}
                                alt="Assignee"
                                className="w-6 h-6 rounded-full border-2 border-white"
                              />
                            </div>
                          </div>
                          <div className="col-span-1">
                            <button className="text-gray-400 hover:text-gray-600">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* 日历视图 */}
          {activeTab === '日历' && (
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">2025年10</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                    <button className="px-3 py-1 text-sm text-gray-600 hover:bg-white rounded">天</button>
                    <button className="px-3 py-1 text-sm bg-white text-gray-900 rounded shadow-sm">周</button>
                    <button className="px-3 py-1 text-sm text-gray-600 hover:bg-white rounded">月</button>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm text-gray-900">2025年10月15日至22</span>
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-4">
                {['周一', '周二', '周三', '周四', '周五', '周六', '周日'].map((day, index) => (
                  <div key={day} className="text-center pb-4 border-b border-gray-200">
                    <div className="text-sm font-medium text-gray-600 mb-1">{day}</div>
                    <div className={`text-lg font-semibold ${index === 5 ? 'text-gray-900' : 'text-gray-400'}`}>
                      {index === 5 ? '20' : index + 1}
                    </div>
                  </div>
                ))}

                {Array.from({ length: 7 }).map((_, dayIndex) => (
                  <div key={dayIndex} className="min-h-[200px] pt-4">
                    {dayIndex === 1 && (
                      <div className="bg-blue-50 border-l-2 border-blue-500 rounded p-2 cursor-pointer hover:shadow-sm transition">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                          </div>
                          <span className="text-xs font-medium text-blue-900">60%</span>
                        </div>
                        <div className="text-xs font-medium text-gray-900 mb-1">进行客户产会议</div>
                        <div className="flex items-center gap-1">
                          <span className="text-xs text-blue-700">2025年11月12</span>
                          <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          <span className="text-xs text-gray-600">1</span>
                        </div>
                        <div className="flex items-center gap-1 mt-2">
                          <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs">进行中</span>
                          <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs">紧急</span>
                        </div>
                        <div className="flex items-center -space-x-1 mt-2">
                          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=A" alt="" className="w-5 h-5 rounded-full border border-white" />
                          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=B" alt="" className="w-5 h-5 rounded-full border border-white" />
                        </div>
                      </div>
                    )}

                    {dayIndex === 3 && (
                      <div className="bg-green-50 border-l-2 border-green-500 rounded p-2 cursor-pointer hover:shadow-sm transition">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-green-300"></div>
                          </div>
                          <span className="text-xs font-medium text-green-900">60%</span>
                        </div>
                        <div className="text-xs font-medium text-gray-900 mb-1">被经编定项目建议</div>
                        <div className="flex items-center gap-1">
                          <span className="text-xs text-green-700">2025年11月12</span>
                          <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          <span className="text-xs text-gray-600">1</span>
                        </div>
                        <div className="flex items-center gap-1 mt-2">
                          <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs">进行中</span>
                          <span className="px-2 py-0.5 bg-orange-100 text-orange-700 rounded text-xs">紧急</span>
                        </div>
                        <div className="flex items-center -space-x-1 mt-2">
                          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=C" alt="" className="w-5 h-5 rounded-full border border-white" />
                          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=D" alt="" className="w-5 h-5 rounded-full border border-white" />
                        </div>
                      </div>
                    )}

                    {dayIndex === 2 && (
                      <div className="space-y-2">
                        <div className="bg-teal-50 border-l-2 border-teal-500 rounded p-2 cursor-pointer hover:shadow-sm transition">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-4 h-4 rounded-full bg-teal-500 flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-teal-300"></div>
                            </div>
                            <span className="text-xs font-medium text-teal-900">60%</span>
                          </div>
                          <div className="text-xs font-medium text-gray-900 mb-1">写电子邮件副本</div>
                          <div className="flex items-center gap-1">
                            <span className="text-xs text-teal-700">2025年11月12</span>
                          </div>
                          <div className="flex items-center gap-1 mt-2">
                            <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs">低的</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {dayIndex === 6 && (
                      <div className="bg-green-50 border-l-2 border-green-500 rounded p-2 cursor-pointer hover:shadow-sm transition">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-xs font-medium text-green-900">100%</span>
                        </div>
                        <div className="text-xs font-medium text-gray-900 mb-1">进行客户产会议</div>
                        <div className="flex items-center gap-1 mt-2">
                          <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs">已完成</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

