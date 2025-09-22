import ClientContactForm from '@/components/ClientContactForm'; // Adjust path if your components folder is elsewhere, e.g., 'components/'

export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <ClientContactForm />
    </div>
  );
}