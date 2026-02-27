export default function AuthShowcase() {
  return (
    <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-500 to-blue-600 p-12 items-center justify-center relative overflow-hidden">
      {/* 装饰性背景元素 */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-2xl rotate-12"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/10 rounded-full"></div>

      <div className="relative z-10 max-w-2xl">
        {/* 图标 */}
        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8 mx-auto">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
            />
          </svg>
        </div>

        {/* 标题和描述 */}
        <h2 className="text-4xl font-bold text-white mb-4 leading-tight text-center whitespace-nowrap">
          您的任务管理和团队生产力的最终枢纽
        </h2>
        <p className="text-blue-100 text-lg mb-20 text-center whitespace-nowrap">
          潜入您的工作空间，分配任务并跟踪首在高效团队协作从零一天起的效率的工具
        </p>

        {/* 模拟产品截图 */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-300">
          <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="flex-1 text-center text-xs text-gray-500">TaskHub Dashboard</div>
          </div>
          <div className="p-6 bg-white">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg"></div>
                <div className="flex-1">
                  <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg"></div>
                <div className="flex-1">
                  <div className="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
                  <div className="h-2 bg-gray-100 rounded w-1/3"></div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg"></div>
                <div className="flex-1">
                  <div className="h-3 bg-gray-200 rounded w-4/5 mb-2"></div>
                  <div className="h-2 bg-gray-100 rounded w-2/5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

