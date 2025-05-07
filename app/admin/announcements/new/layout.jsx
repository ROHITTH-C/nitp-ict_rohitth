import { defaultMetadata } from '../../../metadata';

export const metadata = {
  ...defaultMetadata,
  title: 'Add New Announcement | NIT Patna Electronics and ICT Academy',
  description: 'Add a new announcement to the NIT Patna Electronics and ICT Academy website.',
};

export default function NewAnnouncementLayout({ children }) {
  return (
    <div>
      {children}
    </div>
  );
} 