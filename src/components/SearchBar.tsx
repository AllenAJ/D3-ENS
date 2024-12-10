import { X } from 'lucide-react';

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-[60px] px-6 text-xl bg-white rounded-full border-2 border-[#4C82FB] focus:outline-none focus:border-[#4C82FB] transition-all"
          placeholder="Search names..."
          style={{
            boxShadow: '0 0 0 2px rgba(76, 130, 251, 0.1)',
          }}
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}