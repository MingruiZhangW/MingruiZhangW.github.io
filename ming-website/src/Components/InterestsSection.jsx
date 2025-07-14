import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, SkipBack, SkipForward } from 'lucide-react';

export default function InterestsSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef(null);

  const titleStyle = {
    fontSize: 'calc(65px + 0.4vw)',
    letterSpacing: '2px',
    fontWeight: 300,
    color: 'black',
    fontFamily: '"Liu Jian Mao Cao", cursive'
  };

  const poetryStyle = {
    fontSize: 'calc(35px + 0.4vw)',
    letterSpacing: '2px',
    fontWeight: 300,
    color: 'black',
    fontFamily: '"Ma Shan Zheng", cursive'
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      
      const updateTime = () => setCurrentTime(audio.currentTime);
      const updateDuration = () => setDuration(audio.duration);
      
      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('loadedmetadata', updateDuration);
      audio.addEventListener('ended', () => setIsPlaying(false));
      
      return () => {
        audio.removeEventListener('timeupdate', updateTime);
        audio.removeEventListener('loadedmetadata', updateDuration);
        audio.removeEventListener('ended', () => setIsPlaying(false));
      };
    }
  }, [volume]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audio.currentTime = percent * duration;
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <section id="interests" className="py-24 bg-slate-50">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Liu+Jian+Mao+Cao&display=swap');
        `}
      </style>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
            My <span className="font-bold">Interests</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Beyond coding, I find inspiration in music and poetry
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* First Card - Poetry and Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 
              className="text-center mb-8"
              style={titleStyle}
            >
              梅花三弄
            </h3>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Video Section */}
              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/w69vHX6ilAs"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>

              {/* Poetry Section */}
              <div className="text-center lg:text-left">
                <div 
                  className="mb-6"
                  style={poetryStyle}
                >
                  <div className="grid grid-cols-4 gap-4 text-center">
                    <div className="space-y-2">
                      <div>玉</div>
                      <div>人</div>
                      <div>何</div>
                      <div>处</div>
                      <div>教</div>
                      <div>吹</div>
                      <div>箫</div>
                    </div>
                    <div className="space-y-2">
                      <div>二</div>
                      <div>十</div>
                      <div>四</div>
                      <div>桥</div>
                      <div>明</div>
                      <div>月</div>
                      <div>夜</div>
                    </div>
                    <div className="space-y-2">
                      <div>秋</div>
                      <div>尽</div>
                      <div>江</div>
                      <div>南</div>
                      <div>草</div>
                      <div>木</div>
                      <div>凋</div>
                    </div>
                    <div className="space-y-2">
                      <div>青</div>
                      <div>山</div>
                      <div>隐</div>
                      <div>隐</div>
                      <div>水</div>
                      <div>迢</div>
                      <div>迢</div>
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed mt-4">
                  This beautiful piece reflects the harmony between technology and traditional arts, 
                  reminding me that innovation can coexist with cultural heritage.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Second Card - Music Player */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-slate-900 text-center mb-8">
                The Sound Of Silence
              </h3>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
                <audio
                  ref={audioRef}
                  src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                  preload="metadata"
                />
                
                {/* Album Art Placeholder */}
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-slate-400 to-slate-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="text-white text-4xl font-bold">♪</div>
                </div>
                
                <div className="text-center mb-6">
                  <h4 className="text-lg font-medium text-slate-900">The Sound Of Silence</h4>
                  <p className="text-slate-600">Cover Version</p>
                </div>
                
                {/* Progress Bar */}
                <div className="mb-6">
                  <div 
                    className="w-full h-2 bg-slate-200 rounded-full cursor-pointer hover:bg-slate-300 transition-colors"
                    onClick={handleSeek}
                  >
                    <div 
                      className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-100"
                      style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-slate-600 mt-2">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>
                
                {/* Controls */}
                <div className="flex items-center justify-center space-x-6 mb-6">
                  <button className="p-2 rounded-full hover:bg-white/50 transition-colors">
                    <SkipBack className="w-5 h-5 text-slate-600" />
                  </button>
                  
                  <button
                    onClick={togglePlayPause}
                    className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 text-white" />
                    ) : (
                      <Play className="w-6 h-6 text-white ml-1" />
                    )}
                  </button>
                  
                  <button className="p-2 rounded-full hover:bg-white/50 transition-colors">
                    <SkipForward className="w-5 h-5 text-slate-600" />
                  </button>
                </div>
                
                {/* Volume Control */}
                <div className="flex items-center justify-center space-x-3">
                  <Volume2 className="w-4 h-4 text-slate-600" />
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-24 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>
              
              <p className="text-slate-600 leading-relaxed text-center mt-6">
                Music has always been a companion in my coding journey. This haunting cover of 
                "The Sound Of Silence" captures the quiet moments of reflection that fuel creativity.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}