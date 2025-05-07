import { defaultMetadata } from '../../metadata';

export const metadata = {
  ...defaultMetadata,
  title: 'Admin Login | NIT Patna Electronics and ICT Academy',
  description: 'Login page for NIT Patna Electronics and ICT Academy website administrators.',
};

export default function AdminLoginLayout({ children }) {
  return (
    <div>
      {children}
    </div>
  );
} 