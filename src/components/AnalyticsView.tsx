export default function AnalyticsView() {
  return (
    <div className="p-8">
      {/* 顶部标题和筛选 */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">分析您的项目</h2>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            最近30天
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            导出
          </button>
        </div>
      </div>

      {/* 统计卡片 */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-600">总项目</span>
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📋</span>
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900">52</div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-600">完成的任务</span>
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
              <span className="text-2xl">✅</span>
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900">500</div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-600">待处理任务</span>
            <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
              <span className="text-2xl">⏳</span>
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900">58</div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-600">团队生产力得分</span>
            <div className="w-10 h-10 bg-pink-50 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📊</span>
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900">87%</div>
        </div>
      </div>

      {/* 任务消费力和项目性能 */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* 任务消费力 */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">📊 任务消费力</h3>
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-center mb-6">
            <div className="relative w-64 h-64">
              {/* 圆环图 */}
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                {/* 背景圆环 */}
                <circle cx="100" cy="100" r="80" fill="none" stroke="#f3f4f6" strokeWidth="30" />

                {/* 已完成 - 绿色 */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="30"
                  strokeDasharray="502.4"
                  strokeDashoffset="125.6"
                  className="transition-all duration-1000"
                />

                {/* 进行中 - 橙色 */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="30"
                  strokeDasharray="502.4"
                  strokeDashoffset="251.2"
                  className="transition-all duration-1000"
                />

                {/* 审查中 - 蓝色 */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="30"
                  strokeDasharray="502.4"
                  strokeDashoffset="376.8"
                  className="transition-all duration-1000"
                />
              </svg>

              {/* 中心文字 */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-4xl font-bold text-gray-900">500</div>
                <div className="text-sm text-gray-500">+125 增加了这个月</div>
              </div>
            </div>
          </div>

          {/* 图例 */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                <span className="text-sm text-gray-700">已完成</span>
              </div>
              <span className="text-sm font-medium text-gray-900">275</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-700">进行中：</span>
              </div>
              <span className="text-sm font-medium text-gray-900">15</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-sm text-gray-700">审查中</span>
              </div>
              <span className="text-sm font-medium text-gray-900">50</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-sm text-gray-700">逾期</span>
              </div>
              <span className="text-sm font-medium text-gray-900">25</span>
            </div>
          </div>
        </div>

        {/* 项目性能 */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">📈 项目性能</h3>
            <div className="flex items-center gap-2">
              <button className="text-sm text-gray-600 hover:text-gray-900">右边重要度</button>
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
              <span>项目名称</span>
              <div className="flex items-center gap-12">
                <span>已完成</span>
                <span>逾期任务</span>
                <span>进度</span>
              </div>
            </div>

            {[
              {
                name: '网站重新设计',
                completed: 45,
                overdue: 3,
                progress: 80,
                color: 'bg-teal-500',
              },
              { name: '营销活动', completed: 32, overdue: 1, progress: 30, color: 'bg-blue-500' },
              {
                name: '移动应用启动',
                completed: 25,
                overdue: 5,
                progress: 50,
                color: 'bg-purple-500',
              },
            ].map((project, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">{project.name}</span>
                  <div className="flex items-center gap-12 text-sm text-gray-600">
                    <span className="w-8 text-center">{project.completed}</span>
                    <span className="w-8 text-center">{project.overdue}</span>
                    <span className="w-16 text-right">{project.progress}%</span>
                  </div>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${project.color} transition-all duration-500`}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 团队概述 */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">📊 团队概述</h3>
          <div className="flex items-center gap-3">
            <button className="text-sm text-blue-600 hover:text-blue-700">完成的任务</button>
            <button className="text-sm text-gray-600 hover:text-gray-900">任务修订</button>
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
            </button>
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* 图表区域 */}
        <div className="relative h-80">
          <svg className="w-full h-full" viewBox="0 0 800 300">
            {/* Y轴刻度 */}
            {[0, 1, 20, 30, 40, 50].map((val, i) => (
              <g key={i}>
                <text x="10" y={280 - i * 50} className="text-xs fill-gray-400">
                  {val}
                </text>
                <line
                  x1="40"
                  y1={280 - i * 50}
                  x2="780"
                  y2={280 - i * 50}
                  stroke="#f3f4f6"
                  strokeWidth="1"
                />
              </g>
            ))}

            {/* X轴刻度 */}
            {[2, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map((day, i) => (
              <text key={i} x={60 + i * 65} y="295" className="text-xs fill-gray-400">
                {day}
              </text>
            ))}

            {/* 绿色线条 - 完成的任务 */}
            <polyline
              points="60,200 125,180 190,150 255,140 320,160 385,140 450,120 515,100 580,110 645,90 710,100"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
            />

            {/* 红色区域 - 任务修订 */}
            <defs>
              <linearGradient id="redGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <polygon
              points="60,280 125,250 190,220 255,200 320,210 385,190 450,180 515,170 580,180 645,160 710,170 710,280"
              fill="url(#redGradient)"
            />
            <polyline
              points="60,280 125,250 190,220 255,200 320,210 385,190 450,180 515,170 580,180 645,160 710,170"
              fill="none"
              stroke="#ef4444"
              strokeWidth="2"
            />

            {/* 数据点 */}
            <circle cx="645" cy="90" r="4" fill="#10b981" />
            <circle cx="645" cy="160" r="4" fill="#ef4444" />
          </svg>

          {/* 悬浮提示 */}
          <div className="absolute top-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-3 text-xs">
            <div className="text-gray-500 mb-1">Des, 2025年</div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-gray-700">40</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-700">27</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
