import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, ArrowRight } from 'lucide-react';

interface LockScreenProps {
  onUnlock: () => void;
}

const LockScreen: React.FC<LockScreenProps> = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hardcoded password: "12A4" or "A4"
    if (password === '12A4' || password === 'A4' || password === 'a4' || password === '12a4') {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center text-white px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center w-full max-w-xs"
      >
        <div className="mb-8 p-4 rounded-full bg-white/5 border border-white/10">
            <Lock className="w-6 h-6 text-purple-400" />
        </div>

        <h2 className="text-2xl font-serif font-bold mb-2 tracking-wide">A4 Access Required</h2>
        <p className="text-gray-500 text-sm mb-10 tracking-widest uppercase">Nhập mật mã lớp học</p>

        <motion.form 
            onSubmit={handleSubmit}
            className="w-full relative"
            animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
            transition={{ duration: 0.4 }}
        >
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full bg-transparent border-b border-gray-700 py-3 text-center text-xl tracking-[0.5em] focus:outline-none focus:border-purple-500 transition-colors placeholder:text-gray-800 placeholder:tracking-normal placeholder:text-sm"
                autoFocus
            />
            <button 
                type="submit"
                className="absolute right-0 bottom-3 text-gray-500 hover:text-white transition-colors"
            >
                <ArrowRight size={20} />
            </button>
        </motion.form>
        
        {error && (
            <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="text-red-500 text-xs mt-4 tracking-widest uppercase"
            >
                Mật mã không chính xác
            </motion.p>
        )}
      </motion.div>
      
      <div className="absolute bottom-8 text-gray-800 text-xs tracking-widest uppercase">
        Secured by A4 Dev Team
      </div>
    </div>
  );
};

export default LockScreen;