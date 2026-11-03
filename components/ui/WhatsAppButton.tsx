const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5493416459760"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="group fixed right-5 bottom-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#25d366] text-3xl text-white shadow-[0_0_30px_-6px_#25d366] transition duration-300 hover:brightness-110 hover:shadow-[0_0_40px_-4px_#25d366] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary motion-safe:hover:-translate-y-1 md:right-8 md:bottom-8 md:size-16"
    >
      <span aria-hidden="true" className="absolute inset-0 -z-10 rounded-full bg-[#25d366]/60 motion-safe:animate-ping" />
      <i className="bi bi-whatsapp" aria-hidden="true" />
    </a>
  );
};

export default WhatsAppButton;
