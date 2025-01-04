import React from 'react';

const Module1_up = () => {
  return (
    <div className="w-[90%] mx-auto my-12 text-base">
      <div className="sm:w-[30vw] min-w-fit text-center px-5 bg-blue-600 text-white sm:text-left py-4 text-xl font-semibold">
      Module 1
      </div>
      <br />
      <div className="max-w-6xl mx-auto px-4 py-6 text-[#000000]">
        <div className="text-base space-y-6">
          <p className="text-[24px]">
          Starting from 22.09.2015
          </p>
          <p className="text-[30px]">
          VLSI Design:( L - 25 hrs., P - 15 hrs.)
          </p>
          <p>
          <span className="font-bold">Course Outcome:</span> Upon successful completion of this course, students should be able to understand the following:
          </p>
          
            <ol className="list-decimal pl-6 ">
              <li>Microcontroller Organization and Architecture (ARM.8051)</li>
              <li>Understand the design rules and layout diagram.</li>
              <li>Understand the design of CMOS Memories.</li>
              <li>Understand design issues at the layout, transistor, logic, and register transfer levels.</li>
              <li>Analyse the physical design process of VLSI design flow.</li>
            </ol>
            <br />
          <p className="text-[24px]">
          Theory (L - 25 hrs.)
          </p>
          <table className="table-auto w-full border-collapse">
  <thead>
    <tr className="border-b border-t border-gray-300">
      <th className='text-left px-2 py-1'>S.No</th>
      <th className='text-left px-2 py-1'>Topic</th>
      <th className='px-2 py-1'>Lecture (hrs)</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>1</td>
      <td className='px-2 py-1'>Introduction to VLSI design</td>
      <td className='text-center px-2 py-1'>1</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>2</td>
      <td className='px-2 py-1'>Introduction to CMOS Technology, device characteristics</td>
      <td className='text-center px-2 py-1'>2</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>3</td>
      <td className='px-2 py-1'>Analysis of CMOS logic Circuits (inverter, NAND gate, NOR gate)</td>
      <td className='text-center px-2 py-1'>3</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>4</td>
      <td className='px-2 py-1'>Layout design rules</td>
      <td className='text-center px-2 py-1'>1</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>5</td>
      <td className='px-2 py-1'>Advanced Techniques in CMOS logic circuit</td>
      <td className='text-center px-2 py-1'>3</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>6</td>
      <td className='px-2 py-1'>Memories: Static RAM; SRAM arrays; Dynamic RAMs</td>
      <td className='text-center px-2 py-1'>4</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>7</td>
      <td className='px-2 py-1'>ROM arrays; Logic arrays</td>
      <td className='text-center px-2 py-1'>1</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>8</td>
      <td className='px-2 py-1'>Timing issues in VLSI system design CMOS Testing</td>
      <td className='text-center px-2 py-1'>3</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>9</td>
      <td className='px-2 py-1'>Verilog Hardware Description language: Overview of digital design with Verilog HDL</td>
      <td className='text-center px-2 py-1'>1</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>10</td>
      <td className='px-2 py-1'>Hierarchical modelling concepts; Modules and port definitions</td>
      <td className='text-center px-2 py-1'>1</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>11</td>
      <td className='px-2 py-1'>Gate level modelling; Data flow modelling; Behavioural modelling</td>
      <td className='text-center px-2 py-1'>3</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>12</td>
      <td className='px-2 py-1'>Task & functions; Test bench Laboratory</td>
      <td className='text-center px-2 py-1'>2</td>
    </tr>
    <tr>
      <td></td>
      <td className='px-2 py-1'><strong>Total lecture (hrs.)</strong></td>
      <td className='text-center px-2 py-1'><strong>25</strong></td>
    </tr>
  </tbody>
</table>


          <br />
          <p className="text-[24px]">
          Laboratory (P - 15 hrs.)
          </p>
          <table className="table-auto w-full border-collapse">
  <thead>
    <tr className="border-b border-t border-gray-300">
      <th className='text-left px-2 py-1'>S.No</th>
      <th className='text-left px-2 py-1'>Experiment</th>
      <th className='px-2 py-1'>Time (hrs.)</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>1</td>
      <td className='px-2 py-1'>Simulation of MOS Inverter with different loads using PSPICE software.</td>
      <td className='text-center px-2 py-1'>1</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>2</td>
      <td className='px-2 py-1'>Simulation of CMOS Inverter for different parameters Kn, Kpas as design variable in PSPICE software.</td>
      <td className='text-center px-2 py-1'>1</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>3</td>
      <td className='px-2 py-1'>Study of the switching characteristics of CMOS Inverter and find out noise margins.</td>
      <td className='text-center px-2 py-1'>1</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>4</td>
      <td className='px-2 py-1'>Simulate CMOS amplifier using PSPICE software.</td>
      <td className='text-center px-2 py-1'>3</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>5</td>
      <td className='px-2 py-1'>Layout design of a CMOS Inverter using any layout design tool.</td>
      <td className='text-center px-2 py-1'>3</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>6</td>
      <td className='px-2 py-1'>Design of a 3-input NAND gate and its simulation using Modelsim.</td>
      <td className='text-center px-2 py-1'>3</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>7</td>
      <td className='px-2 py-1'>Implementation of 1-bit full adder and decade counter using FPGA kit.</td>
      <td className='text-center px-2 py-1'>3</td>
    </tr>
    <tr>
      <td></td>
      <td className='px-2 py-1'><strong>Total Lab Time (hrs.)</strong></td>
      <td className='text-center px-2 py-1'><strong>15</strong></td>
    </tr>
  </tbody>
</table>


          <br />
          <p className="text-[24px]">
          Embedded System:( L - 27 hrs., P - 15 hrs.)
          </p>
          <p>
          <span className="font-bold">Course Outcome:</span> Upon successful completion of this course, students should be able to:
          </p>
          <ol className="list-decimal pl-6">
  <li>Analyse the operation of CMOS inverter.</li>
  <li>Data Representation and Memory Usage.</li>
  <li>Problem Solving and Algorithm Development.</li>
  <li>Assembling/Compiling and Execution.</li>
  <li>Assembly and C Programming.</li>
  <li>Analysis of timing and memory requirements.</li>
  <li>Embedded system applications.</li>
</ol>

          <br />
          <p className="text-[24px]">
          Theory (L - 27 hrs.)
          </p>
          <table className="table-auto w-full border-collapse">
  <thead>
    <tr className="border-b border-t border-gray-300">
      <th className='text-left px-2 py-1'>S.No</th>
      <th className='text-left px-2 py-1'>Topic</th>
      <th className='px-2 py-1'>Lecture (hrs.)</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>1</td>
      <td className='px-2 py-1'>Introduction to Embedded Systems, Typical Embedded System: Core of the Embedded System, General Purpose and Domain Specific Processors, ASICs, PLDs</td>
      <td className='text-center px-2 py-1'>2</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>2</td>
      <td className='px-2 py-1'>Programming Embedded Systems in C</td>
      <td className='text-center px-2 py-1'>2</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>3</td>
      <td className='px-2 py-1'>Embedded Firmware: Reset Circuit. Brown-out Protection Circuit. Oscillator Unit. Real-time Clock. Watchdog Timer</td>
      <td className='text-center px-2 py-1'>1</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>4</td>
      <td className='px-2 py-1'>RTOS Based Embedded System Design: Operating System Basics, Types of Operating Systems, Tasks, Process and Threads, Multiprocessing and Multitasking, Task Scheduling, Task Synchronization: Task Communication/Synchronization Issues. Task Synchronization Techniques, Device Drivers, How to Choose an RTOS.</td>
      <td className='text-center px-2 py-1'>4</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>5</td>
      <td className='px-2 py-1'>ARM Architecture: ARM Design Philosophy, Registers, Program Status Register. Instruction Pipeline Interrupts and Vector Table</td>
      <td className='text-center px-2 py-1'>2</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>6</td>
      <td className='px-2 py-1'>Architecture Revision, ARM Processor Families</td>
      <td className='text-center px-2 py-1'>2</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>7</td>
      <td className='px-2 py-1'>ARM Programming Model – I: Instruction Set: Data Processing Instructions. Addressing Modes. Branch. Load. Store Instructions, PSR Instructions, Conditional Instructions</td>
      <td className='text-center px-2 py-1'>5</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>8</td>
      <td className='px-2 py-1'>ARM Programming Model - II: Thumb Instruction Set: Register Usage, Other Branch Instructions. Data Processing Instructions. Single-Register and Multi-Register Load-Store Instructions</td>
      <td className='text-center px-2 py-1'>5</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>9</td>
      <td className='px-2 py-1'>Stack. Software Interrupt Instructions ARM Programming: Simple C Programs using Function Calls, Pointers, Structures, Integer and Floating Point Arithmetic</td>
      <td className='text-center px-2 py-1'>2</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>10</td>
      <td className='px-2 py-1'>Assembly Code using Instruction Scheduling, Register Allocation. Conditional Execution and Loops</td>
      <td className='text-center px-2 py-1'>2</td>
    </tr>
    <tr>
      <td></td>
      <td className='px-2 py-1'><strong>Total lecture (hrs.)</strong></td>
      <td className='text-center px-2 py-1'><strong>27</strong></td>
    </tr>
  </tbody>
</table>


          <br />
          <p className="text-[24px]">
          Laboratory (P - 15 hrs.)
          </p>

          <table className="table-auto w-full border-collapse">
  <thead>
    <tr className="border-b border-t border-gray-300">
      <th className='text-left px-2 py-1'>S.No</th>
      <th className='text-left px-2 py-1'>Experiment</th>
      <th className='px-2 py-1'>Time (hrs.)</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>1</td>
      <td className='px-2 py-1'>Program to toggle all the bits of Port P1 continuously with 250 ms delay.</td>
      <td className='text-center px-2 py-1'>2</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>2</td>
      <td className='px-2 py-1'>Program to toggle only the bit P1.5 continuously with some delay. Use Timer 0, mode 1 to create delay.</td>
      <td className='text-center px-2 py-1'>3</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>3</td>
      <td className='px-2 py-1'>Program to interface a switch and a buzzer to two different pins of a Port such that the buzzer should sound as long as the switch is pressed.</td>
      <td className='text-center px-2 py-1'>2</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>4</td>
      <td className='px-2 py-1'>Program to interface LCD data pins to port P1 and display a message on it.</td>
      <td className='text-center px-2 py-1'>1</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>5</td>
      <td className='px-2 py-1'>Program to interface keypad. Whenever a key is pressed, it should be displayed on LCD.</td>
      <td className='text-center px-2 py-1'>1</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>6</td>
      <td className='px-2 py-1'>Program to interface seven segment display.</td>
      <td className='text-center px-2 py-1'>1</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>7</td>
      <td className='px-2 py-1'>Program to transmit a message from Microcontroller to PC serially using RS232.</td>
      <td className='text-center px-2 py-1'>1</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>8</td>
      <td className='px-2 py-1'>Program to get analog input from Temperature sensor and display the temperature value on LCD.</td>
      <td className='text-center px-2 py-1'>2</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>9</td>
      <td className='px-2 py-1'>Program to interface Stepper Motor to rotate the motor in clockwise and anticlockwise directions.</td>
      <td className='text-center px-2 py-1'>1</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>10</td>
      <td className='px-2 py-1'>Program to receive a message from PC serially using RS232.</td>
      <td className='text-center px-2 py-1'>1</td>
    </tr>
    <tr>
      <td></td>
      <td className='px-2 py-1'><strong>Total Lab Time (hrs.)</strong></td>
      <td className='text-center px-2 py-1'><strong>15</strong></td>
    </tr>
  </tbody>
</table>


        </div>
      </div>
    </div>
  );
};

export default Module1_up;