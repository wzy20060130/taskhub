export default function DashboardView() {
  return (
    <div className="p-8">
      {/* 欢迎区域 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          欢迎回来，Koto 👋
        </h2>
        <p className="text-gray-600">
          今天让我们开始，我们有2个待处理任务和5个节日录。
        </p>
      </div>

      {/* 统计卡片 */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {[
          { label: '总任务', value: '52', icon: '📋', color: 'text-blue-600' },
          { label: '今天到期的任务', value: '04', icon: '🔥', color: 'text-orange-600' },
          { label: '总项目', value: '24', icon: '📁', color: 'text-teal-600' },
          { label: '总成员', value: '1', icon: '👥', color: 'text-pink-600' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">{stat.label}</span>
              <span className="text-2xl">{stat.icon}</span>
            </div>
            <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
          </div>
        ))}
      </div>

      {/* 项目和成员区域 */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* 项目进度 */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">📋 项目进度</h3>
            <button className="text-blue-600 text-sm hover:underline">查看所有项目</button>
          </div>
          
          <div className="space-y-4">
            {[
              { name: '初始项目', tasks: '6个任务剩余', color: 'bg-orange-500' },
              { name: 'XX项目', tasks: '3个任务剩余', color: 'bg-blue-500' },
              { name: 'Trustworth项目', tasks: '3个任务剩余', color: 'bg-teal-500' },
            ].map((project) => (
              <div key={project.name} className="flex items-center gap-3">
                <div className={`w-10 h-10 ${project.color} rounded-lg`}></div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{project.name}</div>
                  <div className="text-sm text-gray-500">{project.tasks}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 成员 */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">👥 成员</h3>
            <button className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700">
              +
            </button>
          </div>
          
          <div className="space-y-4">
            {[
              { name: '姓名示例', email: 'rainerbrown@mail.co', avatar: 'Felix' },
              { name: '姓名示例', email: 'connyeran@mail.co', avatar: 'Amy' },
              { name: '姓名示例', email: 'arfalcon@mail.co', avatar: 'John' },
            ].map((member, i) => (
              <div key={i} className="flex items-center gap-3">
                <img 
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.avatar}`}
                  alt={member.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{member.name}</div>
                  <div className="text-sm text-gray-500">{member.email}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 任务列表 */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">📝 任务列表</h3>
            <div className="flex items-center gap-3">
              <button className="text-sm text-gray-600 hover:text-gray-900">🔍 筛选</button>
              <button className="text-sm text-gray-600 hover:text-gray-900">📤 导出</button>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">任务名称</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">项目</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">估计</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">优先事项</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">进度</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">成员</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { task: '最终确定项目建议', project: '网站重新设计', date: '2025年11月1日至7月', priority: '紧急', progress: 80, color: 'bg-red-500' },
                { task: '进行客户会议', project: '新应用发布', date: '2025年11月1日至7月', priority: '低的', progress: 80, color: 'bg-blue-500' },
                { task: '最终确定项目建议', project: '网站重新设计', date: '2025年11月1日至7月', priority: '紧急', progress: 80, color: 'bg-red-500' },
              ].map((item, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{item.task}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{item.project}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{item.date}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      item.priority === '紧急' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {item.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-teal-500" style={{ width: `${item.progress}%` }}></div>
                      </div>
                      <span className="text-xs text-gray-600">{item.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center -space-x-2">
                      {['A', 'B', 'C'].map((seed, j) => (
                        <img
                          key={j}
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}${i}`}
                          alt="Member"
                          className="w-6 h-6 rounded-full border-2 border-white"
                        />
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

