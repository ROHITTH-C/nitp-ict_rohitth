import React from "react";

const MLComputerVision = () => {
  return (
    <>
      <style>
        {`
          @keyframes blinkingText {
            0% { color: #000; }
            49% { color: #000; }
            60% { color: transparent; }
            99% { color: transparent; }
            100% { color: #000; }
          }
          .blinking {
            animation: blinkingText 0.6s infinite;
          }
          @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');
        `}
      </style>

      <div className="min-h-screen bg-white p-2 sm:p-4 md:p-6">
        <div className="w-[90%] mx-auto bg-[#FFF067] p-2 sm:p-4 md:p-6 text-sm">
          {/* Header - Improved mobile layout */}
          <div className="relative mb-6 md:mb-8 pt-8 sm:pt-4">
            <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold font-['Quicksand']">
              Machine Learning for computer vision
            </h1>
            <div className="absolute top-0 right-2 sm:right-4 flex flex-col sm:flex-row gap-2 sm:gap-4 text-right">
              <a
                href=""
                className="text-xs sm:text-sm font-bold hover:underline"
              >
                Brochure
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScgegJvO1ZcTYNI5mFxXDrBkjP1jnXYCQbo5Y1RY2I7NzMPjw/closedform"
                target="_blank"
                rel="noopener noreferrer"
                className="blinking font-bold text-xs sm:text-sm"
              >
                Apply Online
              </a>
            </div>
          </div>

          <hr className="border-gray-400 my-4" />

          {/* Coordinators - Improved mobile layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 px-2">
            <div className="space-y-2">
              <p className="font-bold text-sm sm:text-base">
                Principal Coordinator :
              </p>
              <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base">
                <li className="ml-4">Prof. Aparajita Ojha, IIITDM Jabalpur</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-bold text-sm sm:text-base">
                Co-Principal Coordinator :
              </p>
              <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base">
                <li className="ml-4">Dr. Santosh Vipparthi, MNIT Jaipur</li>
                <li className="ml-4">Prof. Amey Karkare,IIT Kanpur</li>
                <li className="ml-4">Dr Prthwijit Guha IIT Guwahati</li>
                <li className="ml-4">Dr. Mukesh Kumar NIT Patna</li>
              </ul>
            </div>
          </div>

          <hr className="border-gray-400 my-4" />

          {/* Academy Level Coordinator */}
          <div className="text-center mb-6 px-2">
            <h2 className="text-lg sm:text-xl font-bold font-['Quicksand'] mb-3 sm:mb-4">
              Academy Level Coordinator:
            </h2>
            <div className="space-y-2 text-sm sm:text-base">
              <p>
                <strong>Dr. Somaraju Suvvari, NIT Patna</strong>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:somaraju@nitp.ac.in"
                  className="hover:underline"
                >
                  somaraju@nitp.ac.in
                </a>
              </p>
              <p>
                Contact:{" "}
                <a href="tel:9676430356" className="hover:underline">
                  9676430356
                </a>
              </p>
            </div>
          </div>

          <hr className="border-gray-400 my-4" />

          {/* Course Fee Details - More compact on mobile */}
          <div className="text-center mb-6 px-2">
            <h2 className="text-lg sm:text-xl font-bold font-['Quicksand'] mb-3 sm:mb-4">
              Course Fee Details:
            </h2>
            <div className="space-y-2 text-sm sm:text-base">
              <p>
                Academic (student/faculty): <strong>500 INR</strong>
              </p>
              <p>
                Industry People/ Others: <strong>1000 INR</strong>
              </p>
              <p>
                Foreign Participants: <strong>4000 INR</strong>
              </p>
            </div>
          </div>

          {/* Payment Details - Improved spacing */}
          <div className="text-center mb-6 px-2">
            <h2 className="text-lg sm:text-xl font-bold font-['Quicksand'] mb-3 sm:mb-4">
              Payment Details:
            </h2>
            <div className="space-y-2 text-sm sm:text-base">
              <p>Bank Name: Allahabad Bank (Merge to Indian Bank)</p>
              <p>Account Name: NIT Patna</p>
              <p>
                <strong>Account No.: 50380476798</strong>
              </p>
              <p>
                <strong>IFSC Code: IDIB000B810</strong>
              </p>
            </div>
          </div>

          <hr className="border-gray-400 my-4" />

          {/* Resource Persons - Responsive text */}
          <div className="text-center mb-6 px-2">
            <h2 className="text-lg sm:text-xl font-bold font-['Quicksand'] mb-3 sm:mb-4">
              Resource Persons:
            </h2>
            <p className="text-sm sm:text-base">
              Prof. Shantanu Chaudhury, Director IIT Jodhpur; Dr. Suresh
              Sundaram, IITG; Prof. H. Fujiyoshi, Chubu Univ. Japan; Prof.
              Barbara Zitova, Acad Sci. Czech Repulic; Dr. Amit Sethi, IITB;
              Prof. Sumantra Dutta Roy, IITD; Prof. P. Guha, , Prof. Aparajita
              Ojha, IIITDM Jabalpur, Dr. Santosh Viparthi, MNIT Jaipur
            </p>
          </div>

          <hr className="border-gray-400 my-4" />

          {/* Course Contents - Improved mobile layout */}
          <div className="mb-6 px-2">
            <h2 className="text-lg sm:text-xl font-bold font-['Quicksand'] text-center mb-3 sm:mb-4">
              Course contents:
            </h2>
            <div className="border-2 border-black">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="p-4 text-left font-['Quicksand'] w-16">
                        S.No.
                      </th>
                      <th className="p-4 text-left font-['Quicksand']">
                        MODULES TOPICS
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#FFE81C] text-base">
                    {[
                      "Introduction to Image Processing and Computer Vision (CV): Digital Image and Computer Vision, Main Goals and challenges of the CV, Structure of Human Eye and Vision, Color Models, Image Processing Goals and Tasks",

                      "Traditional approaches in CV: Feature Extraction using local patterns and their applications to Image Processing and CV (SIFT, HOG, LBP), Natural Image Classification, Image Enhancement, Edge Detection, Segmentation, Image denoising",

                      "Introduction to Artificial Intelligence (AI) and Machine Learning (ML): AI and ML, Supervised and Unsupervised Learning, Traditional ML approaches",

                      "Neural Network as a learning machine: Machine learning applications in computer vision, Image classification, Image segmentation,etc.",

                      "Applications of ML in Medical Images: Challenges in Medical image processing, ML for Medical Image processing, Medical image segmentation, classification and survival prediction, Medical image denoising, Medical image retrieval",

                      "Introduction to Deep Learning (DL): Basic differences between Conventional ML and DL approaches, Feed forward Neural Networks (NN), Back propagation, Stochastic gradient method and variants, Regularization",

                      "and optimization, Vanishing/exploding gradient problem",

                      "Introduction to Convolutional Neural Network: The Convolution Operation, Basic architecture of a Convolution Neural Network, Pooling and Batch Normalization layers, CNNs as feature extractors, Image classification using CNN, Image Enhancement and Segmentation",

                      "CNN architectures for CV: State-of-the-Art CNN Architectures, CNN for Image Enhancement and Segmentation",

                      "Applications of CNN in face recognition: Face Detection and Recognition using CNN, Siamese Network, and Triplet Loss",
                    ].map((topic, index) => (
                      <tr
                        key={index}
                        className={
                          index % 2 === 0 ? "bg-[#FFE81C]" : "bg-[#FFF067]"
                        }
                      >
                        <td className="p-4 align-top">{index + 1}</td>
                        <td
                          className="p-4"
                          dangerouslySetInnerHTML={{ __html: topic }}
                        ></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <hr className="border-gray-400 my-4" />

          {/* Core Team Members - Improved spacing */}
          <div className="text-center mb-6 px-2">
            <h2 className="text-lg sm:text-xl font-bold font-['Quicksand'] mb-3 sm:mb-4">
              Core Team Members, E&ICT Academy, NIT Patna:
            </h2>
            <div className="space-y-4 text-sm sm:text-base">
              <div>
                <p className="font-bold">
                  Dr. Bharat Gupta (CI E & ICT Academy, NIT Patna)
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:bharat@nitp.ac.in"
                    className="text-blue-600 hover:underline"
                  >
                    bharat@nitp.ac.in
                  </a>
                </p>
              </div>
              <div>
                <p className="font-bold">
                  Dr. M.P Singh (CI E & ICT Academy, NIT Patna)
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:mps@nitp.ac.in"
                    className="text-blue-600 hover:underline"
                  >
                    mps@nitp.ac.in
                  </a>
                </p>
              </div>
              <p>
                Website: <strong>http://old.nitp.ac.in/ict/index.php</strong>
              </p>
            </div>
          </div>

          {/* Contact Information - Responsive spacing */}
          <div className="text-center px-2">
            <p className="font-bold font-['Quicksand'] mb-2 text-sm sm:text-base">
              Contact us :
            </p>
            <div className="space-y-1 text-sm sm:text-base">
              <p>Electronics and ICT Academy</p>
              <p>National Institute of Technology, Patna</p>
              <p>AshokRajpath, Patna 800005</p>
              <p>
                <span className="font-bold font-['Quicksand']">Email:</span>{" "}
                eictapatna@nitp.ac.in
              </p>
              <p>
                <span className="font-bold font-['Quicksand']">Website:</span>{" "}
                http://old.nitp.ac.in/ict
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MLComputerVision;
