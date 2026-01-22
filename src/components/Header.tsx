import { motion } from 'framer-motion';

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between mb-8 pb-6 border-b border-border"
    >
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <img 
            src="/public/LOGO_PORTO_WPP.jpg-removebg-preview.png" 
            alt="Porto Alumínio" 
            className="h-32 w-auto"
          />
          <div>
            <p className="text-lg text-gray-600 font-medium">
              Automação Fiscal • XML → Excel
            </p>
          </div>
        </div>
      </div>
      <div className="text-right">
        <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">NF-e / CT-e</p>
      </div>
    </motion.header>
  );
}
