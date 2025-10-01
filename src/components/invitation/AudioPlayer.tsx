"use client";

import { useState, useRef, useEffect } from "react";
import { Music, PauseCircle, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audioElement = audioRef.current;

    const handleCanPlay = () => {
      audioElement?.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        // Autoplay was prevented.
        console.log("Autoplay prevented: ", error);
        setIsPlaying(false);
      });
    };

    if (audioElement) {
      audioElement.addEventListener('canplay', handleCanPlay);
      // If the audio is already loaded
      if (audioElement.readyState >= 3) {
        handleCanPlay();
      }
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener('canplay', handleCanPlay);
      }
    };
  }, []);


  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} src="/song.mp3" loop />
      <Button
        onClick={togglePlay}
        size="icon"
        className="rounded-full w-14 h-14"
      >
        {isPlaying ? <PauseCircle className="w-8 h-8" /> : <PlayCircle className="w-8 h-8" />}
        <span className="sr-only">Play/Pause Music</span>
      </Button>
    </div>
  );
}
