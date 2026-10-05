import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  if (!project) return null;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 12,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -12,
      }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        w-full
        max-w-xl
        overflow-hidden
        rounded-xl
        border
        border-border
        bg-surface
        transition-all
        duration-300
        hover:border-(--accent)/30
        hover:shadow-lg
      "
    >
      {/* Image */}

      <div className="relative aspect-16/7 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-[1.03]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-linear-to-t
            from-black/30
            to-transparent
          "
        />
      </div>

      {/* Content */}

      <div className="px-4 py-4">

        {/* Title */}

        <h3
          className="
            font-open-sans
            text-sm
            font-semibold
            text-text-primary
            transition-colors
            duration-300
            group-hover:text-(--accent)
          "
        >
          {project.title}
        </h3>

        {/* Description */}

        <p
          className="
            mt-1.5
            max-w-lg
            font-open-sans
            text-xs
            leading-5
            text-text-secondary
          "
        >
          {project.description}
        </p>

        {/* Technologies */}

        {project.tech?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tech.map((technology) => (
              <span
                key={technology}
                className="
                  rounded-full
                  border
                  border-border
                  bg-surface-hover
                  px-2
                  py-0.5
                  font-open-sans
                  text-[10px]
                  text-text-muted
                  transition-all
                  duration-300
                  hover:border-(--accent)/30
                  hover:text-(--accent)
                "
              >
                {technology}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}

        <div className="mt-4 flex items-center gap-2">

          {/* Live Site */}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-1
                rounded-md
                bg-(--accent)
                px-3
                py-1.5
                font-open-sans
                text-[11px]
                font-medium
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-(--accent-hover)
                hover:shadow-md
              "
            >
              Live Site
              <span>↗</span>
            </a>
          )}

          {/* GitHub */}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-1
                rounded-md
                border
                border-border
                bg-surface
                px-3
                py-1.5
                font-open-sans
                text-[11px]
                text-text-secondary
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-(--accent)/35
                hover:bg-surface-hover
                hover:text-(--accent)
              "
            >
              <FaGithub className="text-xs" />
              GitHub
            </a>
          )}

        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;