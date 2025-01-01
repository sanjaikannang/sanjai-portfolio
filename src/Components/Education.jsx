import React from 'react';

const Education = () => {
  return (
    <div className="bg-colorblue py-10">
      <div className="flex justify-center items-center mb-10">
        <h1 className="text-colorwhite text-[40px] md:text-[60px] lg:text-[100px] font-Roboto">Education</h1>
      </div>

      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className="relative flex flex-col">
          {/* Timeline line that spans the entire container */}
          <div className="absolute left-[13px] top-[30px] bottom-[30px] w-[1px] bg-colorwhite" />

          {/* Education items */}
          <div className="flex flex-col gap-10 md:gap-14 lg:gap-20">
            {/* Card 1 */}
            <div className="relative flex items-start gap-4">
              {/* Dot */}
              <div className="relative z-10 mt-4">
                <div className="flex justify-center items-center p-2 border border-colorred text-colorred font-Roboto rounded-full bg-colorblue">
                  <div className="bg-colorred p-1 rounded-full"></div>
                </div>
              </div>
              {/* Card */}
              <div className="w-full max-w-[300px] md:max-w-[500px] lg:max-w-[600px] bg-white/10 backdrop-blur-xl p-6 rounded-lg">
                <h4 className="text-[20px] md:text-[30px] lg:text-[40px] text-colorwhite font-Roboto">
                  SRM Institute of Science and Technology
                </h4>
                <p className="text-[15px] md:text-[20px] lg:text-[25px] text-colorwhite font-Roboto mt-1">
                  Master of Computer Applications - MCA
                </p>
                <p className="text-[15px] md:text-[20px] lg:text-[25px] text-colorwhite font-Roboto mt-2">
                  May 2024 - Jun 2026
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative flex items-start gap-4">
              <div className="relative z-10 mt-4">
                <div className="flex justify-center items-center p-2 border border-colorred text-colorred font-Roboto rounded-full bg-colorblue">
                  <div className="bg-colorred p-1 rounded-full"></div>
                </div>
              </div>
              <div className="w-full max-w-[300px] md:max-w-[500px] lg:max-w-[600px] bg-white/10 backdrop-blur-xl p-6 rounded-lg">
                <h4 className="text-[20px] md:text-[30px] lg:text-[40px] text-colorwhite font-Roboto">
                  PSG College of Arts and Science
                </h4>
                <p className="text-[15px] md:text-[20px] lg:text-[25px] text-colorwhite font-Roboto mt-1">
                  Bachelor of Science, Information Technology
                </p>
                <p className="text-[15px] md:text-[20px] lg:text-[25px] text-colorwhite font-Roboto mt-2">
                  Dec 2020 - May 2023
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative flex items-start gap-4">
              <div className="relative z-10 mt-4">
                <div className="flex justify-center items-center p-2 border border-colorred text-colorred font-Roboto rounded-full bg-colorblue">
                  <div className="bg-colorred p-1 rounded-full"></div>
                </div>
              </div>
              <div className="w-full max-w-[300px] md:max-w-[500px] lg:max-w-[600px] bg-white/10 backdrop-blur-xl p-6 rounded-lg">
                <h4 className="text-[20px] md:text-[30px] lg:text-[40px] text-colorwhite font-Roboto">
                  TMHNU Matriculation Higher Secondary School
                </h4>
                <p className="text-[15px] md:text-[20px] lg:text-[25px] text-colorwhite font-Roboto mt-1">
                  High School Diploma
                </p>
                <p className="text-[15px] md:text-[20px] lg:text-[25px] text-colorwhite font-Roboto mt-2">
                  Jun 2018 - Apr 2020
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;