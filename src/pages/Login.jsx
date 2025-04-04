import React, { useState } from 'react';
import { Eye, EyeOff, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left side - Login Form */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8 " >
        <div className="w-full max-w-md ">
          <h1 className="text-2xl font-medium text-gray-800 mb-8 text-center">
            Login to your account
          </h1>
          
          {/* Google Login Button */}
          <button className="w-full border border-gray-300 rounded-md py-2 px-4 flex items-center justify-center gap-2 mb-6 hover:bg-gray-50 transition-colors">
            <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
                <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
                <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
                <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
              </g>
            </svg>
            Create account with Google
          </button>
          
          {/* Divider */}
          <div className="flex items-center mb-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500 text-sm">Or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-gray-600 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          {/* Password Input */}
          <div className="mb-1">
            <label htmlFor="password" className="block text-sm text-gray-600 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-gray-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button 
                type="button" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          
          {/* Forgot Password Link */}
          <div className="text-right mb-6">
            <a href="#" className="text-sm text-gray-600 hover:underline">
              Forgot Password?
            </a>
          </div>
          
          {/* Login Button */}
          <button className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition-colors mb-4">
            Login
          </button>
          
          {/* Sign Up Link */}
          <div className="text-center mb-8">
            <span className="text-sm text-gray-600">Don't have a account? </span>
            <a href="#" className="text-sm text-gray-900 font-medium hover:underline">
              Login
            </a>
          </div>
          
          {/* Social Media Links */}
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Right side - Animated Background */}
      <div className="hidden md:block md:w-1/2 bg-black">
        <div className="h-full w-full flex items-center justify-center">
          <div className="relative w-4/5 h-4/5">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF1493" />
                  <stop offset="50%" stopColor="#9400D3" />
                  <stop offset="100%" stopColor="#4169E1" />
                </linearGradient>
              </defs>
              <path 
                fill="none" 
                stroke="url(#gradient)" 
                strokeWidth="2"
                d="M50,25 C100,25 100,75 150,75 C200,75 200,125 250,125 C300,125 300,175 350,175"
                className="animate-pulse"
              />
              <path 
                fill="none" 
                stroke="#FF1493" 
                strokeWidth="1" 
                d="M40,20 C90,20 90,70 140,70 C190,70 190,120 240,120 C290,120 290,170 340,170"
                className="animate-pulse opacity-40"
              />
              <ellipse 
                cx="100" 
                cy="100" 
                rx="70" 
                ry="80" 
                fill="none" 
                stroke="url(#gradient)" 
                strokeWidth="3" 
                className="animate-spin" 
                style={{animationDuration: '20s'}}
              />
              <ellipse 
                cx="100" 
                cy="100" 
                rx="60" 
                ry="90" 
                fill="none" 
                stroke="#4169E1" 
                strokeWidth="1" 
                className="animate-spin opacity-60" 
                style={{animationDuration: '15s'}}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;