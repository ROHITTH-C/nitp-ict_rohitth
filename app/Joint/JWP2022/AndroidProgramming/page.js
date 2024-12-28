import React from "react";

const AndroidProgramming = () => {
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
              Android programming & applications
            </h1>
            <div className="absolute top-0 right-2 sm:right-4 flex flex-col sm:flex-row gap-2 sm:gap-4 text-right">
              <a
                href=""
                className="text-xs sm:text-sm font-bold hover:underline"
              >
                Brochure
              </a>
              <a
                href="https://forms.gle/fC1rnTacbmDppGpW7"
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
                <li className="ml-4">Dr. Gaurav Trivedi, IIT Guwahati</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-bold text-sm sm:text-base">
                Co-Principal Coordinator :
              </p>
              <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base">
                <li className="ml-4">Dr. Prabhat Kumar, NIT Patna</li>
                <li className="ml-4">Dr. Somraju Suvari, NIT Patna</li>
                <li className="ml-4">Dr. Amey Karkare, IIT Kanpur</li>
                <li className="ml-4">Dr. Sandeep Kumar Garg, IIT Roorkee</li>
                <li className="ml-4">
                  Dr. Kusum Kumari Bharti, IIITDM Jabalpur
                </li>
                <li className="ml-4">Dr. D. Gopalani, MNIT Jaipur</li>
                <li className="ml-4">Dr. Ramesh B. Battula, MNIT Jaipur</li>
              </ul>
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
              <strong>EXPERTS/SPEAKERS -</strong> TBA
            </p>
          </div>

          <hr className="border-gray-400 my-4" />

          {/* Course Contents - Improved mobile layout */}
          <div className="mb-6 px-2">
            <h2 className="text-lg sm:text-xl font-bold font-['Quicksand'] text-center mb-3 sm:mb-4">
              Course contents:
            </h2>
            <div className="border-2 border-black">
              <p className="font-bold font-['Quicksand'] mb-3 p-2 sm:p-4 sm:mb-4 text-sm sm:text-base">
                MODULES TOPICS :
              </p>
              <div className="grid bg-[#FFE81C] sm:p-4 grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                {/* Column layout adjusted for better mobile viewing */}
                <div className="px-4">
                  <ul className="list-[square] space-y-4 text-sm">
                    <li className="break-words">
                      <strong>MOBILE APP DEVELOPMENT INTRODUCTION</strong>
                      <ul className="list-disc space-y-4 text-sm px-4 py-2">
                        <li className="break-words">
                          <strong>Chapter 1:</strong> JAVA Concepts - OOPs
                          Concepts, Inheritance in detail, Exception handling,
                          Packages & interfaces, JVM & .jar file extension,
                          Multi-threading (Thread class & Runnable Interface)
                        </li>
                        <li className="break-words">
                          <strong>Chapter 2:</strong> SQL - DML & DDL Queries in
                          brief
                        </li>
                        <li className="break-words">
                          <strong>Chapter 3:</strong> Introduction to Android -
                          Setting up development environment, Dalvik Virtual
                          Machine & .apk file extension, Fundamentals (Basic
                          Building blocks - Activities, Services, Broadcast
                          Receivers & Content providers, UI Components - Views &
                          notifications, Components for communication - Intents
                          & Intent Filters), Android API levels (versions &
                          version names)
                        </li>
                      </ul>
                    </li>

                    <li className="break-words">
                      <strong>ANDROID SOFTWARE DEVELOPMENT KIT (SDK)</strong>
                      <ul className="list-disc space-y-4 text-sm px-4 py-2">
                        <li className="break-words">
                          <strong>Chapter 4:</strong> Application Structure -
                          AndroidManifest.xml, Uses-permission & uses-sdk,
                          Resources & R.java, Assets, Layouts & Drawable
                          Resources, Activities and Activity lifecycle, First
                          sample Application Course
                        </li>
                        <li className="break-words">
                          <strong>Chapter 5:</strong> Emulator-Android Virtual
                          Device - Launching emulator, Debugging in Android
                          Application, Logcat usage, Introduction to DDMS, Hello
                          World App, Creating your first project (The manifest
                          file, Layout resource, Running your app on Emulator),
                          Second App (switching between activities), Develop an
                          app for demonstrating the communication between
                          Intents
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="px-4">
                  <ul className="list-[square] space-y-4 text-sm">
                    <li className="break-words">
                      <strong>INTERFACE USABILITY</strong>
                      <ul className="list-disc space-y-4 text-sm px-4 py-2">
                        <li className="break-words">
                          <strong>Chapter 6:</strong> Basic UI design - Form
                          widgets, Text Fields, Layouts, [dip, dp, sip, sp]
                          versus px, Examples
                        </li>
                        <li className="break-words">
                          <strong>Chapter 7:</strong> Preferences - Shared
                          Preferences, Examples
                        </li>
                        <li className="break-words">
                          <strong>Chapter 8:</strong> Menu - Option menu,
                          Context menu, Sub menu, Menu from xml, Menu via code,
                          Examples
                        </li>
                        <li className="break-words">
                          <strong>Chapter 9:</strong> Intents (in detail) -
                          Explicit Intents, Implicit intents, Examples
                        </li>
                        <li className="break-words">
                          <strong>Chapter 10:</strong> UI design - Time and
                          Date, Images and media, Composite, Alert Dialogs &
                          Toast, Popup, Examples
                        </li>
                      </ul>
                    </li>

                    <li className="break-words">
                      <strong>ANDROID APPLICATION DEVELOPMENT</strong>
                      <ul className="list-disc space-y-4 text-sm px-4 py-2">
                        <li className="break-words">
                          <strong>Chapter 11:</strong> Styles & Themes -
                          styles.xml, Drawable resources for shapes, gradients
                          (selectors), Style attribute in layout file, Applying
                          themes via code and manifest file, Examples
                        </li>
                        <li className="break-words">
                          <strong>Chapter 12:</strong> Linkify - Web URLs, Email
                          address, text, map address, phone, Open Web Browser
                        </li>
                        <li className="break-words">
                          <strong>Chapter 13:</strong> Adapters and Widgets -
                          Adapters (ArrayAdapters, BaseAdapters, Recycler View),
                          Gallery using adapters
                        </li>
                        <li className="break-words">
                          <strong>Chapter 14:</strong> Content Providers -
                          SQLite Programming, SQLiteOpenHelper, SQLiteDatabase -
                          Getting Data from Database
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="px-4">
                  <ul className="list-[square] space-y-4 text-sm">
                    <li className="break-words">
                      <strong>ANDROID APPLICATION DEPLOYMENT</strong>
                      <ul className="list-disc space-y-4 text-sm px-4 py-2">
                        <li className="break-words">
                          <strong>Chapter 15:</strong> Toast
                        </li>
                        <li className="break-words">
                          <strong>Chapter 16:</strong> Camera - Taking pictures,
                          Media Recorder, Rendering previews
                        </li>
                        <li className="break-words">
                          <strong>Chapter 17:</strong> Threads - Threads running
                          on UI thread (runOnUiThread), Worker thread, Handlers
                          & Runnable, AsyncTask (in detail), Examples
                        </li>
                        <li className="break-words">
                          <strong>Chapter 18:</strong> Services - Overview of
                          services in Android, Implementing a Service, Service
                          lifecycle
                        </li>
                        <li className="break-words">
                          <strong>Chapter 19:</strong> Multimedia in Android -
                          Simple video playback
                        </li>
                        <li className="break-words">
                          <strong>Chapter 20:</strong> Location Based Services
                          and Google Maps - Using Location Based Services,
                          Finding current location and listening for changes in
                          location, Working with Google Maps, Showing google map
                          in an Activity
                        </li>
                        <li className="break-words">
                          <strong>Chapter 21:</strong> Sensors - How Sensors
                          work, Using Orientation and Accelerometer sensors,
                          Best practices for performance
                        </li>
                        <li className="break-words">
                          <strong>Chapter 22:</strong> Telephony Services -
                          Making calls, Sending messages
                        </li>
                        <li className="break-words">
                          <strong>Chapter 23:</strong> Android Application
                          Deployment on Android Market
                        </li>
                        <li className="break-words">
                          <strong>Chapter 24:</strong> Json Parsing in
                          Application
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="px-4 sm:px-8 sm:py-2 bg-[#FFE81C]">
                <ul className="list-[square] space-y-4 text-sm">
                  <li className="break-words">
                    <strong>Extra Points for Discussion</strong>
                    <ul className="list-disc space-y-4 text-sm px-4 py-2">
                      <li className="break-words">
                        Adding Advertisement (Admob) in Android App for making
                        money through App
                      </li>
                    </ul>
                  </li>
                </ul>
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
                  Dr. M.P Singh (CO-CI E & ICT Academy, NIT Patna)
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

export default AndroidProgramming;
