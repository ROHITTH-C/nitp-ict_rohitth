import { defaultMetadata } from '../metadata';

export const metadata = {
  ...defaultMetadata,
  title: 'Admin Dashboard | NIT Patna Electronics and ICT Academy',
  description: 'Administration dashboard for NIT Patna Electronics and ICT Academy website.',
};

export default function AdminLayout({ children }) {
  return (
    <div>
      {children}
    </div>
  );
} 