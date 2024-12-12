import Image from 'next/image'
import Link from "next/link"

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="project-card">
        <Image 
          src="/images/istockphoto-852550848-1024x1024.jpg" 
          alt="Project 1" 
          className="project-image" 
          width={500} 
          height={300} 
        />
        <h3 className="project-title">Project 1</h3>
        {/* Link without <a> */}
        <Link href="https://milestone1-2-wheat-nine.vercel.app/" target='_blank' className="project-link">View Project</Link>
      </div>

      <div className="project-card">
        <Image 
          src="/images/resume-apply-work-form-concept.jpg" 
          alt="Project 2" 
          className="project-image" 
          width={500} 
          height={300} 
        />
        <h3 className="project-title">Project 2</h3>
        <Link href="https://milestone-3-mu-five.vercel.app/" target='_blank' className="project-link">View Project</Link>
      </div>

      <div className="project-card">
        <Image 
          src="/images/istockphoto-1524816935-1024x1024.jpg" 
          alt="Project 3" 
          className="project-image" 
          width={500} 
          height={300} 
        />
        <h3 className="project-title">Project 3</h3>
        <Link href="https://milestone-4-ebon.vercel.app/" target='_blank' className="project-link">View Project</Link>
      </div>

      <div className="project-card">
        <Image 
          src="/images/pic-1.PNG" 
          alt="Project 4" 
          className="project-image" 
          width={500} 
          height={300} 
        />
        <h3 className="project-title">Project 4</h3>
        <Link href="https://giaic-id-card-peach.vercel.app/" target='_blank' className="project-link">View Project</Link>
      </div>

      <div className="project-card">
        <Image 
          src="/images/istockphoto-1259952407-1024x1024.jpg" 
          alt="Project 5" 
          className="project-image" 
          width={500} 
          height={300} 
        />
        <h3 className="project-title">Project 5</h3>
        <Link href="https://number-guessing-game-alpha-lake.vercel.app/" target='_blank' className="project-link">View Project</Link>
      </div>

      <div className="project-card">
        <Image 
          src="/images/damir-kopezhanov-nC6CyrVBtkU-unsplash.jpg" 
          alt="Project 6" 
          className="project-image" 
          width={500} 
          height={300} 
        />
        <h3 className="project-title">Project 6</h3>
        <Link href="https://company-portfolio-website-sz4l.vercel.app/" target='_blank' className="project-link">View Project</Link>
      </div>
    </div>
  )
}