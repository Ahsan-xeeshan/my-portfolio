
import { motion, useReducedMotion } from "framer-motion";
import { FaFilePdf } from "react-icons/fa";
import { FiDownload, FiArrowUpRight } from "react-icons/fi";
import ResumePDF from "../assets/Nazmul_Ahsan_CV.pdf";

const ResumeBillboard = () => {
  const prefersReducedMotion = useReducedMotion();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = ResumePDF;
    link.download = "Nazmul_Ahsan_CV.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <motion.aside
      initial={
        prefersReducedMotion
          ? false
          : { opacity: 0, y: 15, scale: 0.95 }
      }
      animate={
        prefersReducedMotion
          ? { opacity: 1 }
          : {
              opacity: 1,
              y: [0, -5, 0],
              rotate: [0, 0.6, -0.6, 0],
            }
      }
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : {
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }
      }
      aria-labelledby="resume-billboard-title"
      className="
        absolute
        z-30
        w-44

        /* Mobile */
        hidden
        min-[744px]:block
        

        /* Medium */
        md:-left-41.25
        md:right-auto
        md:bottom-8

        /* Large */
        lg:-left-53.75
        lg:right-auto
        lg:bottom-12

        /* Extra large */
        xl:-left-65
        xl:right-auto
        xl:bottom-16
      "
    >
      {/* Glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-xl
          bg-(--accent)/15
          blur-xl
        "
      />

      {/* Billboard */}
      <div
        className="
          relative
          overflow-hidden
          rounded-xl
          border
          border-(--accent)/30
          bg-surface/95
          p-3
          shadow-xl
          backdrop-blur-xl
        "
      >
        {/* Scan line */}
        {!prefersReducedMotion && (
          <motion.div
            aria-hidden="true"
            animate={{ y: ["-120%", "250%"] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              h-12
              w-full
              bg-(--accent)/10
              blur-lg
            "
          />
        )}

        {/* Status */}
        <div className="relative mb-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span
              aria-hidden="true"
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-(--accent)
                shadow-[0_0_8px_var(--accent)]
              "
            />

            <span
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.16em]
                text-text-secondary
              "
            >
              Available
            </span>
          </div>

          <FiArrowUpRight
            aria-hidden="true"
            className="text-sm text-(--accent)"
          />
        </div>

        {/* Resume icon */}
        <motion.div
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  rotateY: [0, 8, 0, -8, 0],
                }
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          aria-hidden="true"
          className="
            relative
            mx-auto
            mb-2.5
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-lg
            border
            border-(--accent)/30
            bg-(--accent)/10
            text-(--accent)
          "
        >
          <FaFilePdf className="text-lg" />
        </motion.div>

        {/* Text */}
        <div className="relative text-center">
          <h2
            id="resume-billboard-title"
            className="
              text-xs
              font-semibold
              text-text-primary
            "
          >
            My Resume
          </h2>

          <p
            className="
              mt-1
              text-[10px]
              leading-relaxed
              text-text-secondary
            "
          >
            Skills, experience & projects.
          </p>
        </div>

        {/* Download */}
        <motion.button
          type="button"
          whileHover={
            prefersReducedMotion
              ? undefined
              : {
                  scale: 1.03,
                  boxShadow:
                    "0 0 20px rgba(139, 92, 246, 0.2)",
                }
          }
          whileTap={
            prefersReducedMotion
              ? undefined
              : { scale: 0.97 }
          }
          onClick={handleDownload}
          aria-label="Download Nazmul Ahsan's resume as a PDF"
          className="
            relative
            mt-3
            flex
            min-h-9
            w-full
            items-center
            justify-center
            gap-1.5
            rounded-lg
            border
            border-(--accent)/40
            bg-(--accent)/10
            px-2
            py-2
            text-[10px]
            font-semibold
            text-(--accent)
            transition-colors
            duration-300
            hover:bg-(--accent)
            hover:text-white
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-(--accent)
            focus-visible:ring-offset-2
            focus-visible:ring-offset-surface
            cursor-pointer
          "
        >
          <FiDownload
            aria-hidden="true"
            className="text-xs"
          />

          <span>Download Resume</span>
        </motion.button>

        {/* Decoration */}
        <div
          aria-hidden="true"
          className="
            mt-2.5
            flex
            items-center
            justify-center
            gap-1
          "
        >
          <span className="h-px w-5 bg-(--accent)/20" />
          <span className="h-0.5 w-0.5 rounded-full bg-(--accent)" />
          <span className="h-px w-5 bg-(--accent)/20" />
        </div>
      </div>

      {/* Stand */}
      <div
        aria-hidden="true"
        className="
          mx-auto
          h-6
          w-px
          bg-linear-to-b
          from-(--accent)/40
          to-transparent
        "
      />
    </motion.aside>
  );
};

export default ResumeBillboard;

