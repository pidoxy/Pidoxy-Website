// components/BrowserFrame.js
export default function BrowserFrame({ url, children }) {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden bg-gray-800">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 text-center">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 text-sm hover:underline"
          >
            {url}
          </a>
        </div>
      </div>
      <div className="p-4 bg-white">
        {children}
      </div>
    </div>
  )
} 