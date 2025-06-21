import { defaultMetadata } from '../metadata';
import Sidebar from './sidebar';
export const metadata = {
  ...defaultMetadata,
  title: 'Admin Dashboard | NIT Patna Electronics and ICT Academy',
  description: 'Administration dashboard for NIT Patna Electronics and ICT Academy website.',
};

export default function AdminLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      <div className="w-full md:w-64">
        <Sidebar />
      </div>

      <main className="flex-1 p-4 bg-white">
        {children}
      </main>
    </div>
  );
} 