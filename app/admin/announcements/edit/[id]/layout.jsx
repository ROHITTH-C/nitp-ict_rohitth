import { defaultMetadata } from '../../../../metadata';

export const metadata = {
  ...defaultMetadata,
  title: 'Edit Announcement | NIT Patna Electronics and ICT Academy',
  description: 'Edit an existing announcement on the NIT Patna Electronics and ICT Academy website.',
};

export default function EditAnnouncementLayout({ children }) {
  return (
    <div>
      {children}
    </div>
  );
} 