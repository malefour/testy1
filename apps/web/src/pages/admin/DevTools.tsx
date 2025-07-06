import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Send, 
  Copy, 
  Download, 
  AlertTriangle, 
  Terminal,
  Database,
  Server,
  Zap
} from 'lucide-react';

const DevTools = () => {
  const [requestInput, setRequestInput] = useState('');
  const [responseOutput, setResponseOutput] = useState('');
  const [requestType, setRequestType] = useState('GET');
  const [endpoint, setEndpoint] = useState('/api/events');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendRequest = async () => {
    setIsLoading(true);
    
    try {
      // Mock API request - replace with actual implementation
      const mockResponse = {
        timestamp: new Date().toISOString(),
        method: requestType,
        endpoint: endpoint,
        status: 200,
        data: {
          message: 'Mock response from backend',
          events: [
            { id: 1, name: 'Test Event 1', status: 'active' },
            { id: 2, name: 'Test Event 2', status: 'draft' }
          ],
          meta: {
            total: 2,
            page: 1,
            limit: 10
          }
        }
      };

      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setResponseOutput(JSON.stringify(mockResponse, null, 2));
    } catch (error) {
      setResponseOutput(JSON.stringify({
        error: 'Request failed',
        message: error instanceof Error ? error.message : 'Unknown error'
      }, null, 2));
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyResponse = () => {
    navigator.clipboard.writeText(responseOutput);
  };

  const handleDownloadResponse = () => {
    const blob = new Blob([responseOutput], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `api-response-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const quickRequests = [
    { name: 'Get All Events', method: 'GET', endpoint: '/api/events' },
    { name: 'Get Users', method: 'GET', endpoint: '/api/users' },
    { name: 'Get Flags', method: 'GET', endpoint: '/api/admin/flags' },
    { name: 'System Health', method: 'GET', endpoint: '/api/health' },
    { name: 'Database Stats', method: 'GET', endpoint: '/api/admin/stats' },
  ];

  const systemCommands = [
    { name: 'Clear Cache', command: 'cache:clear', icon: Zap },
    { name: 'Database Backup', command: 'db:backup', icon: Database },
    { name: 'Restart Services', command: 'services:restart', icon: Server },
    { name: 'Generate Report', command: 'report:generate', icon: Terminal },
  ];

  return (
    <div className="space-y-8">
      {/* Header with Warning */}
      <div>
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
            <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Developer Tools</h1>
            <p className="text-red-600 dark:text-red-400 font-medium">[DEVELOPER ONLY]</p>
          </div>
        </div>
        <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-red-900 dark:text-red-100">Warning</h3>
              <p className="text-red-700 dark:text-red-300 text-sm">
                This page provides direct access to backend APIs and system commands. 
                Use with caution as these operations can affect live data and system performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* API Request Tool */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Code className="h-6 w-6 text-teal-600 dark:text-teal-400" />
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">API Request Tool</h2>
          </div>

          <div className="space-y-4">
            {/* Request Configuration */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Method
                </label>
                <select
                  value={requestType}
                  onChange={(e) => setRequestType(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="GET">GET</option>
                  <option value="POST">POST</option>
                  <option value="PUT">PUT</option>
                  <option value="DELETE">DELETE</option>
                </select>
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Endpoint
                </label>
                <input
                  type="text"
                  value={endpoint}
                  onChange={(e) => setEndpoint(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="/api/endpoint"
                />
              </div>
            </div>

            {/* Request Body */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Request Body (JSON)
              </label>
              <textarea
                value={requestInput}
                onChange={(e) => setRequestInput(e.target.value)}
                rows={6}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent font-mono text-sm resize-none"
                placeholder='{"key": "value"}'
              />
            </div>

            {/* Send Button */}
            <button
              onClick={handleSendRequest}
              disabled={isLoading}
              className="w-full flex items-center justify-center px-4 py-3 bg-teal-600 hover:bg-teal-700 disabled:bg-slate-400 text-white font-semibold rounded-lg transition-colors"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Send Request
                </>
              )}
            </button>

            {/* Quick Requests */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Quick Requests
              </label>
              <div className="grid grid-cols-1 gap-2">
                {quickRequests.map((request, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setRequestType(request.method);
                      setEndpoint(request.endpoint);
                    }}
                    className="text-left px-3 py-2 text-sm bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors"
                  >
                    <span className="font-mono text-xs text-slate-500 dark:text-slate-400">{request.method}</span>
                    <span className="ml-2 text-slate-900 dark:text-slate-100">{request.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Response Output */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Terminal className="h-6 w-6 text-green-600 dark:text-green-400" />
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Response Output</h2>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={handleCopyResponse}
                disabled={!responseOutput}
                className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 disabled:opacity-50 transition-colors"
                title="Copy Response"
              >
                <Copy className="h-4 w-4" />
              </button>
              <button
                onClick={handleDownloadResponse}
                disabled={!responseOutput}
                className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 disabled:opacity-50 transition-colors"
                title="Download Response"
              >
                <Download className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="relative">
            <pre className="bg-slate-900 dark:bg-slate-950 text-green-400 p-4 rounded-lg overflow-auto max-h-96 text-sm font-mono">
              {responseOutput || '// Response will appear here after sending a request'}
            </pre>
          </div>
        </motion.div>
      </div>

      {/* System Commands */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
      >
        <div className="flex items-center space-x-3 mb-6">
          <Server className="h-6 w-6 text-purple-600 dark:text-purple-400" />
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">System Commands</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {systemCommands.map((command, index) => {
            const Icon = command.icon;
            return (
              <button
                key={index}
                className="flex flex-col items-center p-4 bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors group"
              >
                <Icon className="h-8 w-8 text-slate-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-2" />
                <span className="text-sm font-medium text-slate-900 dark:text-slate-100 text-center">
                  {command.name}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-1">
                  {command.command}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-yellow-900 dark:text-yellow-100">System Commands</h3>
              <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                These commands directly interact with the backend system. Some operations may cause temporary service interruptions.
                Always verify the impact before executing in production.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Debug Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">Debug Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-medium text-slate-900 dark:text-slate-100 mb-2">Environment</h3>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">Mode:</span>
                <span className="font-mono text-slate-900 dark:text-slate-100">development</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">Version:</span>
                <span className="font-mono text-slate-900 dark:text-slate-100">1.0.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">Build:</span>
                <span className="font-mono text-slate-900 dark:text-slate-100">abc123</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-slate-900 dark:text-slate-100 mb-2">Backend Status</h3>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">API:</span>
                <span className="text-green-600 dark:text-green-400 font-medium">Online</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">Database:</span>
                <span className="text-green-600 dark:text-green-400 font-medium">Connected</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">Cache:</span>
                <span className="text-green-600 dark:text-green-400 font-medium">Active</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-slate-900 dark:text-slate-100 mb-2">Performance</h3>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">Response Time:</span>
                <span className="font-mono text-slate-900 dark:text-slate-100">45ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">Memory Usage:</span>
                <span className="font-mono text-slate-900 dark:text-slate-100">234MB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">Uptime:</span>
                <span className="font-mono text-slate-900 dark:text-slate-100">2d 14h</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DevTools;