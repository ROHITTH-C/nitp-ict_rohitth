import React from 'react';

const Module2_up = () => {
  return (
    <div className="w-[90%] mx-auto my-12 text-base">
      <div className="sm:w-[30vw] min-w-fit text-center px-5 bg-blue-600 text-white sm:text-left py-4 text-xl font-semibold">
      Module 2
      </div>
      <br />
      <div className="max-w-6xl mx-auto px-4 py-6 text-[#000000]">
        <div className="text-base space-y-6">
          <p className="text-[24px]">
          Starting from 22.09.2015
          </p>
          <p className="text-[30px]">
          Data Structures and Algorithms (L + P - 50 hrs.)
          </p>
          <p>
          <span className="font-bold">Objectives:</span> To provide theoretical and practical concepts along with the uses of data structures and algorithms.
          </p>
          <p>
          <span className="font-bold">Outcome:</span> On completion of this course, students are expected to be capable of understanding the data structures, their advantages, and drawbacks, how to implement them in C or in their known language, how their drawbacks can be overcome and what the applications are and where they can be used. Students should be able to learn about the data structures, methods, and algorithms mentioned in the course with a comparative perspective so as to make use of the most appropriate data structure, method, or algorithm in a program to enhance efficiency (i.e., reduce the run-time) or for better memory utilization, based on the priority of the implementation. The participant should be able to convert an inefficient program into an efficient one using the knowledge gathered from this course.
          </p>
            <br />
          <p className="text-[24px]">
          Theory (L - 50 hrs.)
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
      <td className='px-2 py-1'>Algorithm efficiency and analysis, order notations</td>
      <td className='text-center px-2 py-1'>1</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>2</td>
      <td className='px-2 py-1'><strong>Array:</strong> Different representations – row major, column major. Sparse matrix - its implementation and usage</td>
      <td className='text-center px-2 py-1'>2</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>3</td>
      <td className='px-2 py-1'>Array representation of polynomials</td>
      <td className='text-center px-2 py-1'>1</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>4</td>
      <td className='px-2 py-1'><strong>Linked List:</strong> Singly linked list, circular linked list, doubly linked list</td>
      <td className='text-center px-2 py-1'>2</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>5</td>
      <td className='px-2 py-1'>Representation of polynomial expression and Sparse Matrix using suitable Linked List</td>
      <td className='text-center px-2 py-1'>2</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>6</td>
      <td className='px-2 py-1'>Stack and its implementations, Principles of recursion – use of stack, Tail recursion, Applications - The Tower of Hanoi, Eight Queens Puzzle</td>
      <td className='text-center px-2 py-1'>2</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>7</td>
      <td className='px-2 py-1'>Queue, circular queue, Dequeqe, Priority Queue and its different Implementation, Applications</td>
      <td className='text-center px-2 py-1'>1</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>8</td>
      <td className='px-2 py-1'><strong>Trees:</strong> Basic Concepts & representation, Binary trees - Traversal (pre-, in-, post- order), Threaded binary tree (left, right, full), Expression tree</td>
      <td className='text-center px-2 py-1'>3</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>9</td>
      <td className='px-2 py-1'>Binary search tree- operations (creation, insertion, deletion, searching)</td>
      <td className='text-center px-2 py-1'>2</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>10</td>
      <td className='px-2 py-1'>B-Trees & B+ Tree – operations</td>
      <td className='text-center px-2 py-1'>1</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>11</td>
      <td className='px-2 py-1'><strong>Heaps:</strong> Balanced Search Trees as Heaps, Array-Based Heap, Heap-Ordered Trees and Half-Ordered Trees, Leftist Heaps, Skew Heap, Binomial Heaps, Changing Keys in Heaps</td>
      <td className='text-center px-2 py-1'>2</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>12</td>
      <td className='px-2 py-1'>Height-Balanced Trees and Weight Trees</td>
      <td className='text-center px-2 py-1'>2</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>13</td>
      <td className='px-2 py-1'>Red-Black Trees and Trees of Almost Optimal Height</td>
      <td className='text-center px-2 py-1'>1</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>14</td>
      <td className='px-2 py-1'>Top-Down Rebalancing for Red-Black Trees, Trees with Constant Update Time at a Known Location, Finger Trees and Level Linking</td>
      <td className='text-center px-2 py-1'>2</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>15</td>
      <td className='px-2 py-1'>Trees with Partial Rebuilding: Amortized Analysis, Splay Trees: Adaptive Data Structures</td>
      <td className='text-center px-2 py-1'>1</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>16</td>
      <td className='px-2 py-1'>Skip Lists: Randomized Data Structures, Joining and Splitting Balanced Search Trees</td>
      <td className='text-center px-2 py-1'>1</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>17</td>
      <td className='px-2 py-1'>Interval Trees, Segment Trees, Trees for Interval-Restricted Maximum Sum Queries, Orthogonal Range Trees, and Higher-Dimensional Segment Tree</td>
      <td className='text-center px-2 py-1'>2</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>18</td>
      <td className='px-2 py-1'>Searching: Sequential search, binary search, interpolation search.</td>
      <td className='text-center px-2 py-1'>2</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>19</td>
      <td className='px-2 py-1'>Sorting Algorithms: Bubble sort and its optimizations, insertion sort, shell sort, selection sort, merge sort, quick sort, heap sort, radix sort</td>
      <td className='text-center px-2 py-1'>4</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>20</td>
      <td className='px-2 py-1'>Graph definitions and concepts. Graph representations/storage implementations – adjacency matrix, adjacency list, adjacency multi-list</td>
      <td className='text-center px-2 py-1'>2</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>21</td>
      <td className='px-2 py-1'>Graph traversal algorithm: Breadth First Search (BFS) and Depth First Search (DFS) – Classification of edges - tree, forward, back and cross edges – complexity and comparison</td>
      <td className='text-center px-2 py-1'>1</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>22</td>
      <td className='px-2 py-1'>Basic Hash Tables and Collision Resolution, Universal Families of Hash Functions, Perfect Hash Functions, and Hash Trees, Extendible Hashing, Membership Testers and Bloom Filters</td>
      <td className='text-center px-2 py-1'>2</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>23</td>
      <td className='px-2 py-1'><strong>Divide & Conquer Algorithms</strong></td>
      <td className='text-center px-2 py-1'>2</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>24</td>
      <td className='px-2 py-1'><strong>Greedy Algorithms:</strong> Basic method, use, Examples</td>
      <td className='text-center px-2 py-1'>2</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>25</td>
      <td className='px-2 py-1'><strong>Dynamic Programming:</strong> Basic method, use, Examples</td>
      <td className='text-center px-2 py-1'>4</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>26</td>
      <td className='px-2 py-1'><strong>Backtracking Algorithms:</strong></td>
      <td className='text-center px-2 py-1'>4</td>
    </tr>
    <tr className="border-b border-b-gray-300">
      <td className='px-2 py-1'>27</td>
      <td className='px-2 py-1'><strong>Notion of NP-completeness:</strong> P class, NP class, NP hard class, NP complete class – their interrelationship, Satisfiability problem, Cook’s theorem, Clique decision problem</td>
      <td className='text-center px-2 py-1'>4</td>
    </tr>
    <tr>
      <td></td>
      <td className='px-2 py-1'><strong>Total lecture (hrs.)</strong></td>
      <td className='text-center px-2 py-1'><strong>50</strong></td>
    </tr>
  </tbody>
</table>
          <br />
          <p className="text-[24px]">
          Laboratory
          </p>
          <ul>
  <li><strong>Lab 1:</strong> Sequential search, binary search, interpolation search, Array insertion and deletion from any position, sparse matrix, array representation using polynomial.</li>
  <li><strong>Lab 2:</strong> Implementation of linked lists: inserting, deleting, and inverting a linked list. Polynomial addition and Polynomial multiplication using linked lists.</li>
  <li><strong>Lab 3:</strong> Stacks and Queues: adding, deleting elements Circular Queue, Priority queue, Infix to prefix and postfix conversion.</li>
  <li><strong>Lab 4:</strong> Factorial using recursion, Tower of Hanoi, Backtracking: Implement 8 Queen problem.</li>
  <li><strong>Lab 5:</strong> Merge sort, quick sort, radix sort, Sequential search, binary search, interpolation search.</li>
  <li><strong>Lab 6:</strong> Binary Tree, Traversal of Binary Tree, Binary Search Tree.</li>
  <li><strong>Lab 7:</strong> AVL tree, Red and Black Tree, B-Tree.</li>
  <li><strong>Lab 8:</strong> Balanced search trees as heap, Fibonacci heap, heap sort.</li>
  <li><strong>Lab 9:</strong> Graph Traversal Algorithm: (i) Breadth First Search (BFS), (ii) Depth First Search (DFS).</li>
  <li><strong>Lab 10:</strong> Greedy method: Minimum Cost Spanning Tree by (i) Prim&#39;s Algorithm, and (ii) Kruskal&#39;s Algorithm.</li>
</ul>

        </div>
      </div>
    </div>
  );
};

export default Module2_up;