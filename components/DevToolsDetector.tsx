'use client'

import { useState, useEffect } from 'react'

export default function DevToolsDetector() {
  const [isDevToolsOpen, setIsDevToolsOpen] = useState(false)

  useEffect(() => {
    const detectDevTools = () => {
      const devtools = {
        isOpen: false,
        orientation: undefined
      };

      const threshold = 160;

      const main = () => {
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        const orientation = widthThreshold ? 'vertical' : 'horizontal';

        if (
          !(heightThreshold && widthThreshold) &&
          ((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)
        ) {
          devtools.isOpen = true;
          devtools.orientation = orientation;
        } else {
          devtools.isOpen = false;
          devtools.orientation = undefined;
        }

        setIsDevToolsOpen(devtools.isOpen);
      };

      main();
      const interval = setInterval(main, 500);

      return () => clearInterval(interval);
    };

    const checkDevToolsOnLoad = () => {
      const start = performance.now();
      debugger;
      const end = performance.now();
      if (end - start > 100) {
        setIsDevToolsOpen(true);
      } else {
        detectDevTools();
      }
    };

    checkDevToolsOnLoad();

  }, []);

  if (isDevToolsOpen) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">403 拒绝请求</h1>
          <p className="text-xl mb-2">关闭 DevTools 除非你知道你正在做什么</p>
          <p>time: {new Date().toISOString()}</p>
        </div>
      </div>
    );
  }

  return null;
}

