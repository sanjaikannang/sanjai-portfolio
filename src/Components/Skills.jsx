import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const frontendRef = useRef(null);
  const backendRef = useRef(null);
  const containerRef = useRef(null);

  const frontendSkills = [
    { name: 'HTML', image: '/api/placeholder/128/128' },
    { name: 'CSS', image: '/api/placeholder/128/128' },
    { name: 'JavaScript', image: '/api/placeholder/128/128' },
    { name: 'React', image: '/api/placeholder/128/128' },
    { name: 'Next.js', image: '/api/placeholder/128/128' },
    { name: 'Tailwind', image: '/api/placeholder/128/128' },
    { name: 'React', image: '/api/placeholder/128/128' },
    { name: 'Next.js', image: '/api/placeholder/128/128' },
    { name: 'Tailwind', image: '/api/placeholder/128/128' },
    { name: 'Tailwind', image: '/api/placeholder/128/128' }
  ];

  const backendSkills = [
    { name: 'Node.js', image: '/api/placeholder/128/128' },
    { name: 'Express', image: '/api/placeholder/128/128' },
    { name: 'MongoDB', image: '/api/placeholder/128/128' },
    { name: 'PostgreSQL', image: '/api/placeholder/128/128' },
    { name: 'Python', image: '/api/placeholder/128/128' },
    { name: 'MongoDB', image: '/api/placeholder/128/128' },
    { name: 'PostgreSQL', image: '/api/placeholder/128/128' },
    { name: 'Python', image: '/api/placeholder/128/128' },
    { name: 'PostgreSQL', image: '/api/placeholder/128/128' },
    { name: 'Python', image: '/api/placeholder/128/128' }
  ];

  useEffect(() => {
    // Calculate the total width of scrollable content
    const calculateScrollWidth = (container) => {
      if (!container.current) return 0;
      const scrollContainer = container.current.querySelector('.scroll-container');
      const totalWidth = Array.from(scrollContainer.children).reduce((acc, child) => {
        const style = window.getComputedStyle(child);
        const margin = parseFloat(style.marginRight) + parseFloat(style.marginLeft);
        return acc + child.offsetWidth + margin;
      }, 0);
      return totalWidth - container.current.offsetWidth;
    };

    // Create main ScrollTrigger for pinning
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "500px 500px",
      end: "+=300%",
      pin: true,
      anticipatePin: 1,
      scrub: 1,
      invalidateOnRefresh: true,
      markers: true
    });

    // Create a timeline for synchronized animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "100px 100px",
        end: "+=300%",
        scrub: 1,
        invalidateOnRefresh: true,
        markers: true
      }
    });

    // Frontend section animations (right to left)
    const frontendScrollWidth = calculateScrollWidth(frontendRef);
    tl.to(frontendRef.current.querySelector('.scroll-container'), {
      x: -frontendScrollWidth,
      ease: 'none',
      duration: 1
    }, 0);
    tl.to(frontendRef.current.querySelector('.section-title'), {
      x: -100,
      ease: 'none',
      duration: 1
    }, 0);

    // Backend section animations (left to right)
    const backendScrollWidth = calculateScrollWidth(backendRef);
    tl.to(backendRef.current.querySelector('.scroll-container'), {
      x: backendScrollWidth,
      ease: 'none',
      duration: 1
    }, 0);
    tl.to(backendRef.current.querySelector('.section-title'), {
      x: 100,
      ease: 'none',
      duration: 1
    }, 0);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-colorblue min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-8xl text-colorwhite font-Roboto text-start py-14 leading-tight">
          Skills Section
        </h1>
      </div>

      <div className="skills-container h-screen" ref={containerRef}>
        {/* Frontend Skills */}
        <div className="mx-auto" ref={frontendRef}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-full md:w-1/3 overflow-hidden">
              <h2 className="section-title text-6xl md:text-8xl text-colorwhite font-Roboto text-center transform">
                FrontEnd Skills
              </h2>
            </div>

            <div className="w-full md:w-2/3 overflow-hidden">
              <div className="flex space-x-8 scroll-container transform">
                {frontendSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex-none w-48 bg-white/10 backdrop-blur-xl rounded-md p-4 hover:bg-white/20 transition-all duration-300"
                  >
                    <img src={skill.image} alt={skill.name} className="w-32 h-32 mx-auto mb-4 object-fill" />
                    <h3 className="text-xl text-colorwhite font-Roboto text-center">{skill.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Backend Skills */}
        <div className="mx-auto mt-20" ref={backendRef}>
          <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8">
            <div className="w-full md:w-2/3 overflow-hidden">
              <div className="flex space-x-8 scroll-container transform">
                {backendSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex-none w-48 bg-white/10 backdrop-blur-xl rounded-md p-4 hover:bg-white/20 transition-all duration-300"
                  >
                    <img src={skill.image} alt={skill.name} className="w-32 h-32 mx-auto mb-4 object-fill" />
                    <h3 className="text-xl text-colorwhite font-Roboto text-center">{skill.name}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full md:w-1/3 overflow-hidden">
              <h2 className="section-title text-6xl md:text-8xl text-colorwhite font-Roboto text-center leading-tight transform">
                Backend Skills
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer div to allow scrolling */}
      {/* <div className="h-screen"></div> */}
    </div>
  );
};

export default Skills;

// import { useEffect, useRef } from 'react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// if (typeof window !== 'undefined') {
//   gsap.registerPlugin(ScrollTrigger)
// }

// const customers = [
//   { id: 1, alt: "AlfaTKG" },
//   { id: 2, alt: "CratoFlow" },
//   { id: 3, alt: "Epsilon" },
//   { id: 4, alt: "GoFloaters" },
//   { id: 5, alt: "JandF" },
//   { id: 6, alt: "Srkay" },
//   { id: 7, alt: "Epsilon" },
//   { id: 8, alt: "GoFloaters" },
//   { id: 9, alt: "JandF" },
//   { id: 10, alt: "Srkay" },

//   { id: 11, alt: "AlfaTKG" },
//   { id: 12, alt: "CratoFlow" },
//   { id: 13, alt: "Epsilon" },
//   { id: 14, alt: "GoFloaters" },
//   { id: 15, alt: "JandF" },
//   { id: 16, alt: "Srkay" },
//   { id: 17, alt: "Epsilon" },
//   { id: 18, alt: "GoFloaters" },
//   { id: 19, alt: "JandF" },
//   { id: 20, alt: "Srkay" },
// ]

// const Skills = () => {
//   const firstRow = customers.slice(0, 10)
//   const secondRow = customers.slice(10)
//   const firstRowRef = useRef(null)
//   const secondRowRef = useRef(null)

//   useEffect(() => {
//     // Make sure we're in the browser environment
//     if (typeof window === 'undefined') return

//     // Calculate the total width of a row (including spacing)
//     const getRowWidth = (row) => {
//       const cards = row.children[0].children
//       const cardWidth = 6.5 // w-52 = 13rem = 208px
//       const spacing = 0.35 // space-x-6 = 1.5rem = 24px
//       return cards.length * (cardWidth + spacing)
//     }

//     const setupRowAnimation = (rowRef, direction) => {
//       const rowWidth = getRowWidth(rowRef)

//       gsap.to(rowRef.children[0], {
//         x: direction * -rowWidth,
//         ease: "none",
//         scrollTrigger: {
//           trigger: rowRef,
//           start: "-400px center",
//           end: "400px center",
//           scrub: 1,
//           invalidateOnRefresh: true,
//           markers: true
//         }
//       })
//     }

//     // Set up animations when refs are available
//     if (firstRowRef.current && secondRowRef.current) {
//       // First row moves right to left
//       setupRowAnimation(firstRowRef.current, 1)
//       // Second row moves left to right
//       setupRowAnimation(secondRowRef.current, -1)
//     }

//     // Cleanup
//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill())
//     }
//   }, [])

//   return (
//     <section className="h-screen overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col items-center justify-center space-y-8">
//           <div className="text-center max-w-3xl">
//             <h2 className="text-[2.5rem] leading-tight font-bold text-[#0B1C39] mb-14">
//               Customer Section
//             </h2>
//           </div>
//         </div>
//       </div>

//       {/* Cards Section */}
//       <div className="w-full space-y-6">
//         <div ref={firstRowRef} className="overflow-hidden pb-4">
//           <div className="flex space-x-6 min-w-max">
//             {firstRow.map((customer) => (
//               <div
//                 key={customer.id}
//                 className="w-52 h-40 rounded-lg shadow-sm flex items-center justify-center p-4 transition-transform hover:scale-105"
//               >
//                 <img
//                   src={""}
//                   alt={customer.alt}
//                   width={200}
//                   height={100}
//                   className="object-contain"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//         <div ref={secondRowRef} className="overflow-hidden pb-4">
//           <div className="flex space-x-6 min-w-max">
//             {secondRow.map((customer) => (
//               <div
//                 key={customer.id}
//                 className="w-52 h-40 rounded-lg shadow-sm flex items-center justify-center p-4 transition-transform hover:scale-105"
//               >
//                 <img
//                   src={""}
//                   alt={customer.alt}
//                   width={200}
//                   height={100}
//                   className="object-contain"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Skills
