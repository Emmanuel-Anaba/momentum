"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

export default function PWAInstallToast() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallButton, setShowInstallButton] = useState<boolean>(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      const event = e as BeforeInstallPromptEvent;
      setDeferredPrompt(event);
      setShowInstallButton(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      setDeferredPrompt(null);
      setShowInstallButton(false);
    }
  };

  return (
    <>
      {showInstallButton && (
        <div className="fixed bottom-4 left-4 w-80 md:w-sm max-w-sm z-50 cursor-pointer rounded-xl p-4 border bg-background flex items-center gap-3">
          <div className="size-10 grid place-items-center bg-accent dark:bg-zinc-500/10 rounded-lg">
            <Download />
          </div>
          <div className="flex-1 truncate">
            <h3 className="font-semibold">Install Momentum</h3>
            <p className="text-xs text-muted-foreground">
              Track your daily habits and build streaks!
            </p>
          </div>
          <Button
            size="sm"
            className="font-medium"
            onClick={handleInstallClick}>
            Install
          </Button>
        </div>
      )}
    </>
  );
}
