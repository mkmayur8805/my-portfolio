import { AnimatePresence, motion } from "framer-motion";

const ExecutiveBrandSuccessModal = ({ open, onClose }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-md flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full max-w-xl bg-white rounded-3xl px-12 py-14 shadow-[0_40px_80px_-25px_rgba(0,0,0,0.35)]"
          >
            {/* BRAND */}
            <p className="text-sm uppercase tracking-widest text-(--primery-color) mb-4">
              MayurKumawat.me
            </p>

            {/* TITLE */}
            <h2 className="text-4xl font-semibold leading-tight mb-6">
              Thank you for contacting me
            </h2>

            {/* MESSAGE */}
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Your message has been successfully submitted.  
              I personally review every inquiry and will get back to you shortly.
            </p>

            {/* DIVIDER */}
            <div className="h-px w-full bg-gray-200 mb-8" />

            {/* CONTACT INFO */}
            <div className="space-y-4 text-base">
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Email</span>
                <span className="font-medium text-gray-900">
                  mkmayur4480@gmail.com
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-500">Phone / WhatsApp</span>
                <span className="font-medium text-gray-900">
                  +91 74480 46577
                </span>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="mt-12 flex flex-col sm:flex-row gap-5">
              <a
                href="https://wa.me/917448046577"
                target="_blank"
                className="flex-1 text-center border border-(--primery-color) text-(--primery-color) rounded-xl py-3.5 font-medium hover:bg-(--primery-color) hover:text-white transition"
              >
                WhatsApp Me
              </a>

              <a
                href="tel:+917448046577"
                className="flex-1 text-center bg-(--primery-color) text-white rounded-xl py-3.5 font-medium hover:opacity-90 transition"
              >
                Call Now
              </a>
            </div>

            {/* CLOSE */}
            <button
              onClick={onClose}
              className="mt-10 block mx-auto text-sm text-gray-400 hover:text-gray-600 transition"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExecutiveBrandSuccessModal;
