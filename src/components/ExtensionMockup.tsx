import React, { useState } from 'react';
import {
  Copy,
  Check,
  Search,
  Plus,
  Lock,
  ShieldCheck,
  User,
  Sparkles,
  Bookmark,
  FileText,
  Code,
  Globe
} from 'lucide-react';

interface MockLink {
  id: string;
  title: string;
  url: string;
  category: 'Social' | 'Coding' | 'Docs' | 'Portfolio';
  icon: React.ReactNode;
}

interface ExtensionMockupProps {
  onCopySuccess?: (url: string) => void;
}

// Custom brand SVGs for clean rendering
const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-blue-400" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const GithubIcon = () => (
  <svg className="w-4 h-4 fill-slate-200" viewBox="0 0 24 24">
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
  </svg>
);

const INITIAL_MOCK_LINKS: MockLink[] = [
  {
    id: '1',
    title: 'LinkedIn Profile',
    url: 'https://linkedin.com/in/alex-dev-pro',
    category: 'Social',
    icon: <LinkedinIcon />,
  },
  {
    id: '2',
    title: 'GitHub Repositories',
    url: 'https://github.com/alex-dev',
    category: 'Coding',
    icon: <GithubIcon />,
  },
  {
    id: '3',
    title: 'Personal Portfolio',
    url: 'https://alexdev.design',
    category: 'Portfolio',
    icon: <Globe className="w-4 h-4 text-emerald-400" />,
  },
  {
    id: '4',
    title: 'Software Engineer Resume (PDF)',
    url: 'https://drive.google.com/file/d/12345/view',
    category: 'Docs',
    icon: <FileText className="w-4 h-4 text-amber-400" />,
  },
  {
    id: '5',
    title: 'LeetCode Profile',
    url: 'https://leetcode.com/u/alex_coder',
    category: 'Coding',
    icon: <Code className="w-4 h-4 text-yellow-500" />,
  },
  {
    id: '6',
    title: 'CodeChef Handle',
    url: 'https://codechef.com/users/alex_dev',
    category: 'Coding',
    icon: <Code className="w-4 h-4 text-orange-400" />,
  },
  {
    id: '7',
    title: 'HackerRank Profile',
    url: 'https://hackerrank.com/alex_code',
    category: 'Coding',
    icon: <Code className="w-4 h-4 text-emerald-500" />,
  },
];

export const ExtensionMockup: React.FC<ExtensionMockupProps> = ({
  onCopySuccess,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [mockLinks, setMockLinks] = useState<MockLink[]>(INITIAL_MOCK_LINKS);

  const categories = ['All', 'Social', 'Coding', 'Docs', 'Portfolio'];

  const filteredLinks = mockLinks.filter((link) => {
    const matchesSearch =
      link.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      link.url.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || link.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCopy = (link: MockLink) => {
    navigator.clipboard.writeText(link.url);
    setCopiedId(link.id);
    if (onCopySuccess) {
      onCopySuccess(link.url);
    }
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const handleAddLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newUrl.trim()) return;
    const newLink: MockLink = {
      id: Date.now().toString(),
      title: newTitle.trim(),
      url: newUrl.trim(),
      category: 'Portfolio',
      icon: <Globe className="w-4 h-4 text-blue-400" />,
    };
    setMockLinks([newLink, ...mockLinks]);
    setNewTitle('');
    setNewUrl('');
    setShowAddModal(false);
  };

  return (
    <div className="w-full max-w-md mx-auto rounded-2xl bg-slate-900/90 border border-slate-700/60 shadow-2xl shadow-blue-900/30 overflow-hidden text-slate-100 font-sans transition-all duration-300">
      {/* Chrome Fake Toolbar Header */}
      <div className="bg-slate-950 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
          </div>
          <span className="font-mono text-[11px] text-slate-500 ml-2">Chrome Extension Popup</span>
        </div>
        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-[10px] text-emerald-400 font-medium">
          <ShieldCheck className="w-3 h-3 text-emerald-400" />
          <span>Local Storage Active</span>
        </div>
      </div>

      {/* Extension Header */}
      <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/30 border border-blue-400/30">
            <Lock className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm text-white tracking-tight">LinkVault</h3>
              <span className="px-1.5 py-0.2 rounded text-[10px] bg-blue-500/20 text-blue-300 font-semibold border border-blue-500/30">
                v1.0
              </span>
            </div>
            <p className="text-[11px] text-slate-400">Fast Profile Link Copier</p>
          </div>
        </div>

        <button
          onClick={() => setShowAddModal(!showAddModal)}
          className="flex items-center gap-1 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-2.5 py-1.5 rounded-lg transition border border-blue-400/40 shadow-sm cursor-pointer"
          title="Add new link"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add</span>
        </button>
      </div>

      {/* Add Link Form Modal Simulation */}
      {showAddModal && (
        <form onSubmit={handleAddLink} className="p-3.5 bg-slate-950 border-b border-blue-500/30 animate-fadeIn">
          <div className="text-xs font-semibold text-blue-400 mb-2 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" /> Add New Profile Link
          </div>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Title (e.g. LinkedIn Profile)"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 text-xs text-white rounded-md px-2.5 py-1.5 focus:outline-none focus:border-blue-500"
            />
            <input
              type="url"
              placeholder="URL (https://...)"
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 text-xs text-white rounded-md px-2.5 py-1.5 focus:outline-none focus:border-blue-500 font-mono"
            />
            <div className="flex justify-end gap-2 pt-1">
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="px-2.5 py-1 text-[11px] text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-3 py-1 bg-blue-600 text-white rounded text-[11px] font-semibold hover:bg-blue-500"
              >
                Save Link
              </button>
            </div>
          </div>
        </form>
      )}

      {/* Search & Category Filter Controls */}
      <div className="p-3 bg-slate-900/60 border-b border-slate-800/80 space-y-2.5">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search links..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 pl-8 pr-3 py-1.5 rounded-lg focus:outline-none focus:border-blue-500 transition"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 no-scrollbar text-[11px]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-0.5 rounded-md font-medium whitespace-nowrap transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Links List */}
      <div className="max-h-72 overflow-y-auto p-3 space-y-2 bg-slate-950/40 divide-y divide-slate-800/40">
        {filteredLinks.length === 0 ? (
          <div className="py-8 text-center text-xs text-slate-500">
            No matching links found.
          </div>
        ) : (
          filteredLinks.map((link) => (
            <div
              key={link.id}
              className="pt-2 first:pt-0 flex items-center justify-between gap-2 group hover:bg-slate-900/80 p-2 rounded-lg transition border border-transparent hover:border-slate-800"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-7 h-7 rounded-lg bg-slate-800/90 flex items-center justify-center border border-slate-700/50 shrink-0">
                  {link.icon}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-xs text-white truncate">
                      {link.title}
                    </span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 border border-slate-700/40 shrink-0">
                      {link.category}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-mono truncate max-w-[200px]">
                    {link.url}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <button
                  onClick={() => handleCopy(link)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold transition cursor-pointer ${
                    copiedId === link.id
                      ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/30'
                      : 'bg-blue-600/20 text-blue-300 hover:bg-blue-600 hover:text-white border border-blue-500/30'
                  }`}
                  title="Copy link to clipboard"
                >
                  {copiedId === link.id ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Extension Footer Status bar */}
      <div className="bg-slate-950 px-3 py-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
        <div className="flex items-center gap-1.5">
          <Bookmark className="w-3 h-3 text-blue-400" />
          <span>{mockLinks.length} Links saved</span>
        </div>
        <div className="flex items-center gap-1 text-slate-400 hover:text-white transition cursor-default">
          <User className="w-3 h-3" />
          <span>Google Auth (Optional)</span>
        </div>
      </div>
    </div>
  );
};
