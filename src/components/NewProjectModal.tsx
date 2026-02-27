import { useState } from 'react';

interface NewProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (project: any) => void;
}

export default function NewProjectModal({ isOpen, onClose, onSubmit }: NewProjectModalProps) {
  const [projectName, setProjectName] = useState('');
  const [projectType, setProjectType] = useState('进行中');
  const [startDate, setStartDate] = useState('2025年10月15日');
  const [endDate, setEndDate] = useState('2025年12月20日');
  const [description, setDescription] = useState('');
  const [manager, setManager] = useState('');
  const [teamMembers, setTeamMembers] = useState<string[]>([]);

  const handleSubmit = () => {
    const newProject = {
      name: projectName,
      type: projectType,
      startDate,
      endDate,
      description,
      manager,
      teamMembers,
    };
    onSubmit(newProject);
    handleClose();
  };

  const handleClose = () => {
    setProjectName('');
    setProjectType('进行中');
    setStartDate('2025年10月15日');
    setEndDate('2025年12月20日');
    setDescription('');
    setManager('');
    setTeamMembers([]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* 头部 */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">新项目</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* 内容 */}
        <div className="p-6 space-y-6">
          {/* 项目名称 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              项目名称
            </label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="网站重新设计ABC Corp"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* 项目类型和日期 */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                项目类型
              </label>
              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="进行中">进行中</option>
                <option value="审查中">审查中</option>
                <option value="已完成">已完成</option>
                <option value="已取消">已取消</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                日期
              </label>
              <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-gray-900">{startDate} → {endDate}</span>
              </div>
            </div>
          </div>

          {/* 项目描述 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              项目描述
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              placeholder="输入项目描述..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>

          {/* 专案经理 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              专案经理
            </label>
            <div className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Manager"
                alt="Manager"
                className="w-10 h-10 rounded-full"
              />
              <span className="text-sm font-medium text-gray-900">姓名示例</span>
            </div>
          </div>

          {/* 团队成员 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              团队成员
            </label>
            <div className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg">
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
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                + 邀请
              </button>
            </div>
          </div>
        </div>

        {/* 底部按钮 */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200">
          <button
            onClick={handleClose}
            className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
          >
            取消
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            确认
          </button>
        </div>
      </div>
    </div>
  );
}

