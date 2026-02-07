import { useState } from 'react';
import { Share2, Check } from 'lucide-react';
import { Button } from './ui/button';
import { getCurrentPageUrl } from '../lib/runtimeUrl';

export default function ShareLinkButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = getCurrentPageUrl();
    
    try {
      // Try modern clipboard API first
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
        setCopied(true);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = url;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopied(true);
      }
      
      // Reset copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
  };

  return (
    <Button
      onClick={handleShare}
      variant="outline"
      className="bg-white/90 backdrop-blur-sm border-rose-200 hover:bg-rose-50 hover:border-rose-300 shadow-lg"
    >
      {copied ? (
        <>
          <Check className="h-4 w-4 mr-2 text-green-600" />
          <span className="text-green-600">Link copied!</span>
        </>
      ) : (
        <>
          <Share2 className="h-4 w-4 mr-2 text-rose-600" />
          <span className="text-rose-600">Share this page</span>
        </>
      )}
    </Button>
  );
}
