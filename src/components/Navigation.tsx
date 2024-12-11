import { Link, useLocation } from 'react-router-dom';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { Search, Briefcase, ChevronDown } from 'lucide-react';

export function Navigation() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const location = useLocation();

  const shortenAddress = (addr: string) => {
    return addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : '';
  };

  const handleConnect = () => {
    const connector = connectors[0];
    if (connector) {
      connect({ connector });
    }
  };

  const isActivePath = (path: string) => {
    return location?.pathname === path;
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side - Logo and main navigation */}
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-[#4C82FB]">
                D3 Names
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  isActivePath('/')
                    ? 'text-[#4C82FB] border-b-2 border-[#4C82FB]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Search className="w-4 h-4 mr-2" />
                Search
              </Link>
              <Link
                to="/portfolio"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  isActivePath('/portfolio')
                    ? 'text-[#4C82FB] border-b-2 border-[#4C82FB]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Briefcase className="w-4 h-4 mr-2" />
                Portfolio
              </Link>
            </div>
          </div>

          {/* Right side - Wallet connection */}
          <div className="flex items-center">
            {isConnected && address ? (
              <div className="relative inline-block text-left">
                <button
                  onClick={() => disconnect()}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                >
                  {shortenAddress(address)}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={handleConnect}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#4C82FB] hover:bg-[#3E74E7] focus:outline-none"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="sm:hidden">
        <div className="pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className={`block pl-3 pr-4 py-2 text-base font-medium ${
              isActivePath('/')
                ? 'text-[#4C82FB] border-l-4 border-[#4C82FB] bg-blue-50'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            Search
          </Link>
          <Link
            to="/portfolio"
            className={`block pl-3 pr-4 py-2 text-base font-medium ${
              isActivePath('/portfolio')
                ? 'text-[#4C82FB] border-l-4 border-[#4C82FB] bg-blue-50'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            Portfolio
          </Link>
        </div>
      </div>
    </nav>
  );
}