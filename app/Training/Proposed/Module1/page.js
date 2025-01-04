import React from 'react';

const Module1 = () => {
  return (
    <div className="w-[90%] mx-auto my-12 text-base">
      <div className="sm:w-[30vw] min-w-fit text-center px-5 bg-blue-600 text-white sm:text-left py-4 text-xl font-semibold">
      Module 1
      </div>
      <br />
      <div className="max-w-6xl mx-auto px-4 py-6 text-[#000000]">
        <div className="text-base space-y-6">
          <p className="text-[30px]">
          VLSI and Embedded System
          </p>
          <p className="text-[24px]">
          VLSI Design:
          </p>
          <p>
          <span className="font-bold">Objectives:</span> This course is intended to impart in-depth knowledge about analog and digital CMOS circuits. The focus is on CMOS technology. Issues to be covered include deep submicron design, clocking, power dissipation, CAD tools and algorithms, simulation, verification, testing, and design methodology.
          </p>
          <p>
          <span className="font-bold">Outcome:</span> Upon successful completion of this course, students should be able to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base">
  <li>Analyze the operation of CMOS inverter</li>
  <li>Understand the design rules and layout diagram</li>
  <li>Analyze the physical design process of VLSI design flow</li>
  <li>Understand the design of CMOS Memories</li>
  <li>Design and analyze VLSI chips using CMOS technology</li>
  <li>Understand design issues at the layout, transistor, logic, and register transfer levels</li>
</ul>
        <p>
        <strong>Topics Covered</strong>
        </p>
        <ul className="list-disc pl-6 space-y-2">
  <li>
    <span className="font-bold">Theory</span>
    <ul className="list-disc pl-6 space-y-1">
      <li>Introduction to VLSI design</li>
      <li>Introduction to VLSI Technology</li>
      <li>Analysis of CMOS logic Circuits</li>
      <li>Advanced Techniques in CMOS logic circuit</li>
      <li>Memories: Static RAM; SRAM arrays; Dynamic RAMs; ROM arrays; Logic arrays</li>
      <li>Timing issues in VLSI system design CMOS Testing</li>
      <li>Verilog Hardware Description language: Overview of digital design with Verilog HDL; Hierarchical modeling concepts; Modules and port definitions; Gate level modeling; Data flow modeling; Behavioral modeling; Task & functions; Test bench
      </li>
    </ul>
  </li>
  <br />
  <li>    
    <span className="font-bold">Laboratory</span>
    <ul className="list-disc pl-6 space-y-1">
      <li>Simulation of MOS Inverter with different loads using PSPICE software</li>
      <li>Simulation of CMOS Inverter for different parameters Kn, Kp as a design variable in PSPICE software</li>
      <li>Study of the switching characteristics of CMOS Inverter and find out noise margins</li>
      <li>Simulate CMOS amplifier using PSPICE software</li>
      <li>Layout design of a CMOS Inverter using any layout design tool</li>
      <li>Simulate 1-bit full adder following behavioral and structural modeling using VHDL/Verilog</li>
      <li>Design of a decade counter using VHDL/Verilog</li>
      <li>Design of a 3-input NAND gate and its simulation using Modelsim</li>
      <li>Implementation of 1-bit full adder and decade counter using FPGA kit</li>
    </ul>
  </li>
</ul>


<br />
          <p className="text-[24px]">
          Embedded System:
          </p>
          <p>
          <span className="font-bold">Objectives:</span> This course concerns with Embedded systems basic knowledge: embedded architectures: Architectures and programming of microcontrollers: embedded system applications.
          </p>
          <p>
          <span className="font-bold">Outcome:</span> Upon successful completion of this course, students should be able to understand the following:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base">
          <li>Introduction to Microcontroller Organization and Architecture (ARM, 8051)</li>
  <li>Data Representation and Memory Usage</li>
  <li>Problem Solving and Algorithm Development</li>
  <li>Assembling/Compiling and Execution</li>
  <li>Assembly and C Programming</li>
  <li>Analysis of timing and memory requirements</li>
  <li>Embedded system applications</li>
</ul>
        <p>
        <strong>Topics Covered</strong>
        </p>
        <ul className="list-disc pl-6 space-y-2">
  <li>
    <span className="font-bold">Theory</span>
    <ul className="list-disc pl-6 space-y-1">
    <li>Introduction to Embedded Systems</li>
  <li>Typical Embedded System: Core of the Embedded System: General Purpose and Domain Specific Processors, ASICs, PLDs</li>
  <li>Commercial Off-The-Shelf Components (COTS); Programming Embedded Systems in C</li>
  <li>Embedded Firmware: Reset Circuit. Brown-out Protection Circuit. Oscillator Unit. Real time Clock. Watchdog Timer</li>
  <li>Embedded firmware Design Approaches and Development Languages. RTOS Based Embedded System Design: Operating System Basics</li>
  <li>Types of Operating Systems</li>
  <li>Tasks. Process and Threads. Multiprocessing and Multitasking</li>
  <li>Task Scheduling</li>
  <li>Task Communication: Shared Memory. Message Passing. Remote Procedure Call and Sockets. Task Synchronization: Task Communication/Synchronization Issues. Task Synchronization Techniques</li>
  <li>Device Drivers</li>
  <li>How to Choose an RTOS. ARM Architecture: ARM Design Philosophy, Registers, Program Status Register. Instruction Pipeline Interrupts and Vector Table. Architecture Revision, ARM Processor Families. ARM Programming Model – I: Instruction Set: Data Processing Instructions. Addressing Modes. Branch. Load. Store Instructions, PSR Instructions. Conditional Instructions.</li>
  <li>ARM Programming Model - II: Thumb Instruction Set: Register Usage</li>
  <li>Other Branch Instructions. Data Processing Instructions. Single-Register and Multi Register Load-Store Instructions. Stack. Software Interrupt Instructions</li>
  <li>ARM Programming: Simple C Programs using Function Calls, Pointers, Structures</li>
  <li>Integer and Floating Point Arithmetic</li>
  <li>Assembly Code using Instruction Scheduling</li>
  <li>Register Allocation. Conditional Execution and Loops</li>
    </ul>
  </li>    
  <br />
  <li>
    <p className="font-bold">Laboratory</p>
    <p>The following programs have to be tested on 89C51 Development board/equivalent using Embedded C Language on KEIL IDE or Equivalent.</p>
    <ul className="list-disc pl-6 space-y-1">
    <li>Program to toggle all the bits of Port P1 continuously with 250 ms delay</li>
  <li>Program to toggle only the bit P1.5 continuously with some delay. Use Timer 0, mode 1 to create delay</li>
  <li>Program to interface a switch and a buzzer to two different pins of a Port such that the buzzer should sound as long as the switch is pressed</li>
  <li>Program to interface LCD data pins to port P1 and display a message on it</li>
  <li>Program to interface keypad. Whenever a key is pressed, it should be displayed on LCD</li>
  <li>Program to interface seven segment display unit</li>
  <li>Program to transmit a message from Microcontroller to PC serially using RS232</li>
  <li>Program to get analog input from Temperature sensor and display the temperature value on LCD</li>
  <li>Program to interface Stepper Motor to rotate the motor in clockwise and anticlockwise directions</li>
  <li>Program to receive a message from PC serially using RS232</li>
    </ul>
  </li>
</ul>
<p>Approximate Total Cost: Rs. 20 lakhs</p>

        </div>
      </div>
    </div>
  );
};

export default Module1;