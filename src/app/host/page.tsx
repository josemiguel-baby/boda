import { MessagingPortal } from '@/components/host/MessagingPortal';
import { Section } from '@/components/shared/Section';

export default function HostPage() {
  return (
    <Section
      title="Host Messaging Portal"
      description="Craft and enhance messages for your guests with AI assistance."
    >
      <MessagingPortal />
    </Section>
  );
}
