import Link from 'next/link';

const VolunteerSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center p-6">
      <h1 className="text-5xl font-bebas mb-4 text-[#94ae81]">
        “Our Kindness, Their Hope!&quot;
      </h1>
      <p className="font-montserrat text-2xl mb-6 text-gray-900">
        Thank you for your interest in volunteering with Care4Poor! We strive to empower underprivileged communities through key initiatives like Score4Change and Debate4Change. Join us to create lasting, meaningful change through education, sports, and public discourse.
      </p>
      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdx6DjVHiMkUtDRiGDRxRWr9GCAMxMJYoZho7gVyhhKW0pPrA/viewform" passHref className="px-6 py-3 bg-[#94ae81] text-white font-montserrat rounded-3xl hover:opacity-90 transition-opacity">
          Fill the Form
      </Link>
    </section>
  );
};

export default VolunteerSection;
