'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const dataOriginalJSON = 
    [{
      "id": 1,
      "nombre": "Advanced stable workforce",
      "fecha": "11/2/2020",
      "monto": 9,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 2,
      "nombre": "Distributed system-worthy hardware",
      "fecha": "9/1/2020",
      "monto": 33,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 3,
      "nombre": "Re-engineered responsive process improvement",
      "fecha": "11/1/2020",
      "monto": 26,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 4,
      "nombre": "Multi-tiered contextually-based portal",
      "fecha": "4/23/2020",
      "monto": 40,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 5,
      "nombre": "Managed systematic implementation",
      "fecha": "1/10/2021",
      "monto": 75,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 6,
      "nombre": "Inverse upward-trending matrix",
      "fecha": "8/14/2020",
      "monto": 8,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 7,
      "nombre": "Open-source neutral methodology",
      "fecha": "8/5/2020",
      "monto": 44,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 8,
      "nombre": "Optimized next generation superstructure",
      "fecha": "4/1/2020",
      "monto": 96,
      "tipo": 5,
      "categoria": 3
    }, {
      "id": 9,
      "nombre": "Digitized mobile strategy",
      "fecha": "10/16/2020",
      "monto": 89,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 10,
      "nombre": "Synergistic system-worthy website",
      "fecha": "12/17/2020",
      "monto": 35,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 11,
      "nombre": "Assimilated contextually-based contingency",
      "fecha": "7/17/2020",
      "monto": 93,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 12,
      "nombre": "Fundamental fresh-thinking extranet",
      "fecha": "10/13/2020",
      "monto": 94,
      "tipo": 5,
      "categoria": 3
    }, {
      "id": 13,
      "nombre": "Triple-buffered optimizing alliance",
      "fecha": "2/13/2020",
      "monto": 46,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 14,
      "nombre": "Optional responsive open architecture",
      "fecha": "9/1/2020",
      "monto": 18,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 15,
      "nombre": "Cross-platform optimizing initiative",
      "fecha": "8/3/2020",
      "monto": 51,
      "tipo": 3,
      "categoria": 3
    }, {
      "id": 16,
      "nombre": "Intuitive object-oriented array",
      "fecha": "7/2/2020",
      "monto": 34,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 17,
      "nombre": "Customizable dynamic groupware",
      "fecha": "8/8/2020",
      "monto": 47,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 18,
      "nombre": "Horizontal holistic methodology",
      "fecha": "8/16/2020",
      "monto": 87,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 19,
      "nombre": "Reactive encompassing throughput",
      "fecha": "1/14/2021",
      "monto": 55,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 20,
      "nombre": "Enhanced mission-critical open system",
      "fecha": "12/17/2020",
      "monto": 82,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 21,
      "nombre": "Enterprise-wide intermediate strategy",
      "fecha": "9/4/2020",
      "monto": 2,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 22,
      "nombre": "Multi-layered multi-tasking core",
      "fecha": "1/15/2021",
      "monto": 75,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 23,
      "nombre": "Exclusive attitude-oriented Graphic Interface",
      "fecha": "7/11/2020",
      "monto": 90,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 24,
      "nombre": "Visionary even-keeled circuit",
      "fecha": "3/15/2020",
      "monto": 87,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 25,
      "nombre": "Digitized clear-thinking contingency",
      "fecha": "6/8/2020",
      "monto": 40,
      "tipo": 6,
      "categoria": 1
    }, {
      "id": 26,
      "nombre": "Reactive mission-critical system engine",
      "fecha": "10/15/2020",
      "monto": 56,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 27,
      "nombre": "Proactive dedicated ability",
      "fecha": "6/3/2020",
      "monto": 16,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 28,
      "nombre": "Front-line zero defect knowledge user",
      "fecha": "12/3/2020",
      "monto": 47,
      "tipo": 6,
      "categoria": 2
    }, {
      "id": 29,
      "nombre": "Assimilated multi-tasking infrastructure",
      "fecha": "9/29/2020",
      "monto": 6,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 30,
      "nombre": "Pre-emptive stable portal",
      "fecha": "9/27/2020",
      "monto": 46,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 31,
      "nombre": "Expanded zero administration focus group",
      "fecha": "1/3/2021",
      "monto": 23,
      "tipo": 3,
      "categoria": 3
    }, {
      "id": 32,
      "nombre": "Re-contextualized hybrid extranet",
      "fecha": "11/13/2020",
      "monto": 63,
      "tipo": 2,
      "categoria": 3
    }, {
      "id": 33,
      "nombre": "Stand-alone clear-thinking functionalities",
      "fecha": "5/6/2020",
      "monto": 72,
      "tipo": 1,
      "categoria": 1
    }, {
      "id": 34,
      "nombre": "Reverse-engineered client-server benchmark",
      "fecha": "12/23/2020",
      "monto": 8,
      "tipo": 2,
      "categoria": 3
    }, {
      "id": 35,
      "nombre": "Customizable heuristic intranet",
      "fecha": "6/19/2020",
      "monto": 78,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 36,
      "nombre": "Optional 5th generation initiative",
      "fecha": "2/15/2020",
      "monto": 96,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 37,
      "nombre": "Optimized multi-tasking interface",
      "fecha": "2/29/2020",
      "monto": 73,
      "tipo": 3,
      "categoria": 3
    }, {
      "id": 38,
      "nombre": "Integrated dynamic challenge",
      "fecha": "5/15/2020",
      "monto": 46,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 39,
      "nombre": "Implemented dynamic strategy",
      "fecha": "12/8/2020",
      "monto": 38,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 40,
      "nombre": "Quality-focused disintermediate Graphical User Interface",
      "fecha": "9/16/2020",
      "monto": 76,
      "tipo": 2,
      "categoria": 3
    }, {
      "id": 41,
      "nombre": "Persistent responsive groupware",
      "fecha": "6/14/2020",
      "monto": 22,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 42,
      "nombre": "Horizontal hybrid matrices",
      "fecha": "6/15/2020",
      "monto": 20,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 43,
      "nombre": "Digitized leading edge collaboration",
      "fecha": "7/29/2020",
      "monto": 24,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 44,
      "nombre": "Monitored contextually-based capacity",
      "fecha": "12/3/2020",
      "monto": 65,
      "tipo": 2,
      "categoria": 4
    }, {
      "id": 45,
      "nombre": "Advanced actuating policy",
      "fecha": "2/25/2020",
      "monto": 61,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 46,
      "nombre": "Multi-channelled next generation Graphic Interface",
      "fecha": "11/24/2020",
      "monto": 27,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 47,
      "nombre": "Visionary mission-critical matrix",
      "fecha": "8/28/2020",
      "monto": 41,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 48,
      "nombre": "Customizable systemic implementation",
      "fecha": "12/6/2020",
      "monto": 45,
      "tipo": 1,
      "categoria": 1
    }, {
      "id": 49,
      "nombre": "Virtual motivating process improvement",
      "fecha": "2/9/2020",
      "monto": 36,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 50,
      "nombre": "Reverse-engineered bi-directional complexity",
      "fecha": "7/4/2020",
      "monto": 99,
      "tipo": 2,
      "categoria": 4
    }, {
      "id": 51,
      "nombre": "Diverse actuating attitude",
      "fecha": "6/4/2020",
      "monto": 61,
      "tipo": 3,
      "categoria": 3
    }, {
      "id": 52,
      "nombre": "Proactive directional extranet",
      "fecha": "8/7/2020",
      "monto": 73,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 53,
      "nombre": "Robust systematic budgetary management",
      "fecha": "3/20/2020",
      "monto": 57,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 54,
      "nombre": "Mandatory exuding open system",
      "fecha": "3/20/2020",
      "monto": 82,
      "tipo": 2,
      "categoria": 4
    }, {
      "id": 55,
      "nombre": "Right-sized incremental moratorium",
      "fecha": "12/18/2020",
      "monto": 21,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 56,
      "nombre": "Reduced directional implementation",
      "fecha": "10/25/2020",
      "monto": 73,
      "tipo": 1,
      "categoria": 1
    }, {
      "id": 57,
      "nombre": "Digitized asynchronous hardware",
      "fecha": "12/25/2020",
      "monto": 39,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 58,
      "nombre": "Programmable directional secured line",
      "fecha": "7/10/2020",
      "monto": 86,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 59,
      "nombre": "Configurable foreground Graphical User Interface",
      "fecha": "6/29/2020",
      "monto": 15,
      "tipo": 3,
      "categoria": 3
    }, {
      "id": 60,
      "nombre": "Reverse-engineered bifurcated artificial intelligence",
      "fecha": "10/22/2020",
      "monto": 90,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 61,
      "nombre": "Fundamental heuristic portal",
      "fecha": "1/20/2021",
      "monto": 8,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 62,
      "nombre": "Re-contextualized even-keeled system engine",
      "fecha": "8/28/2020",
      "monto": 43,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 63,
      "nombre": "Polarised transitional circuit",
      "fecha": "10/9/2020",
      "monto": 79,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 64,
      "nombre": "Reactive bifurcated matrices",
      "fecha": "6/4/2020",
      "monto": 27,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 65,
      "nombre": "Reactive asymmetric ability",
      "fecha": "11/26/2020",
      "monto": 99,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 66,
      "nombre": "Diverse intangible interface",
      "fecha": "3/17/2020",
      "monto": 47,
      "tipo": 2,
      "categoria": 3
    }, {
      "id": 67,
      "nombre": "Business-focused leading edge local area network",
      "fecha": "3/3/2020",
      "monto": 89,
      "tipo": 3,
      "categoria": 3
    }, {
      "id": 68,
      "nombre": "Re-engineered static definition",
      "fecha": "4/17/2020",
      "monto": 52,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 69,
      "nombre": "Sharable motivating contingency",
      "fecha": "5/16/2020",
      "monto": 61,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 70,
      "nombre": "Pre-emptive value-added challenge",
      "fecha": "7/4/2020",
      "monto": 68,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 71,
      "nombre": "Streamlined transitional concept",
      "fecha": "6/7/2020",
      "monto": 5,
      "tipo": 4,
      "categoria": 1
    }, {
      "id": 72,
      "nombre": "Robust multi-tasking forecast",
      "fecha": "2/17/2020",
      "monto": 58,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 73,
      "nombre": "Automated global concept",
      "fecha": "5/6/2020",
      "monto": 6,
      "tipo": 2,
      "categoria": 4
    }, {
      "id": 74,
      "nombre": "Intuitive full-range website",
      "fecha": "12/21/2020",
      "monto": 64,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 75,
      "nombre": "Automated static toolset",
      "fecha": "6/6/2020",
      "monto": 91,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 76,
      "nombre": "Customizable demand-driven time-frame",
      "fecha": "4/3/2020",
      "monto": 97,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 77,
      "nombre": "User-friendly attitude-oriented attitude",
      "fecha": "9/21/2020",
      "monto": 26,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 78,
      "nombre": "Right-sized actuating initiative",
      "fecha": "2/10/2020",
      "monto": 22,
      "tipo": 2,
      "categoria": 3
    }, {
      "id": 79,
      "nombre": "Total dedicated encoding",
      "fecha": "1/23/2021",
      "monto": 89,
      "tipo": 2,
      "categoria": 3
    }, {
      "id": 80,
      "nombre": "Distributed composite process improvement",
      "fecha": "11/14/2020",
      "monto": 89,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 81,
      "nombre": "Proactive exuding time-frame",
      "fecha": "4/16/2020",
      "monto": 67,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 82,
      "nombre": "Fundamental mobile superstructure",
      "fecha": "1/31/2021",
      "monto": 37,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 83,
      "nombre": "User-centric transitional product",
      "fecha": "8/11/2020",
      "monto": 19,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 84,
      "nombre": "Robust multi-tasking matrices",
      "fecha": "10/1/2020",
      "monto": 94,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 85,
      "nombre": "Robust even-keeled implementation",
      "fecha": "10/4/2020",
      "monto": 32,
      "tipo": 6,
      "categoria": 2
    }, {
      "id": 86,
      "nombre": "User-friendly encompassing policy",
      "fecha": "3/28/2020",
      "monto": 11,
      "tipo": 1,
      "categoria": 1
    }, {
      "id": 87,
      "nombre": "Function-based stable algorithm",
      "fecha": "7/21/2020",
      "monto": 85,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 88,
      "nombre": "Progressive heuristic interface",
      "fecha": "5/16/2020",
      "monto": 67,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 89,
      "nombre": "Persistent optimal initiative",
      "fecha": "5/15/2020",
      "monto": 28,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 90,
      "nombre": "Face to face logistical productivity",
      "fecha": "10/9/2020",
      "monto": 89,
      "tipo": 6,
      "categoria": 1
    }, {
      "id": 91,
      "nombre": "Networked zero administration groupware",
      "fecha": "7/30/2020",
      "monto": 23,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 92,
      "nombre": "Proactive radical database",
      "fecha": "3/21/2020",
      "monto": 25,
      "tipo": 5,
      "categoria": 3
    }, {
      "id": 93,
      "nombre": "Intuitive intangible implementation",
      "fecha": "8/3/2020",
      "monto": 55,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 94,
      "nombre": "Pre-emptive empowering benchmark",
      "fecha": "2/20/2020",
      "monto": 49,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 95,
      "nombre": "Universal actuating capacity",
      "fecha": "4/16/2020",
      "monto": 22,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 96,
      "nombre": "Re-contextualized upward-trending forecast",
      "fecha": "1/19/2021",
      "monto": 22,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 97,
      "nombre": "Virtual transitional monitoring",
      "fecha": "7/18/2020",
      "monto": 57,
      "tipo": 1,
      "categoria": 1
    }, {
      "id": 98,
      "nombre": "Down-sized intermediate local area network",
      "fecha": "11/7/2020",
      "monto": 52,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 99,
      "nombre": "Phased methodical challenge",
      "fecha": "5/24/2020",
      "monto": 64,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 100,
      "nombre": "Fully-configurable user-facing knowledge base",
      "fecha": "6/23/2020",
      "monto": 79,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 101,
      "nombre": "Balanced secondary adapter",
      "fecha": "1/23/2021",
      "monto": 49,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 102,
      "nombre": "Reduced 5th generation alliance",
      "fecha": "7/28/2020",
      "monto": 38,
      "tipo": 2,
      "categoria": 4
    }, {
      "id": 103,
      "nombre": "Operative asymmetric system engine",
      "fecha": "4/22/2020",
      "monto": 12,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 104,
      "nombre": "Progressive high-level instruction set",
      "fecha": "8/17/2020",
      "monto": 44,
      "tipo": 4,
      "categoria": 1
    }, {
      "id": 105,
      "nombre": "Customer-focused interactive frame",
      "fecha": "8/9/2020",
      "monto": 22,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 106,
      "nombre": "Fundamental dedicated knowledge user",
      "fecha": "4/28/2020",
      "monto": 100,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 107,
      "nombre": "Managed multi-state model",
      "fecha": "4/7/2020",
      "monto": 85,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 108,
      "nombre": "Re-contextualized holistic task-force",
      "fecha": "7/6/2020",
      "monto": 95,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 109,
      "nombre": "Switchable leading edge function",
      "fecha": "10/3/2020",
      "monto": 79,
      "tipo": 5,
      "categoria": 3
    }, {
      "id": 110,
      "nombre": "Persistent human-resource circuit",
      "fecha": "12/13/2020",
      "monto": 51,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 111,
      "nombre": "Stand-alone transitional knowledge user",
      "fecha": "12/1/2020",
      "monto": 57,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 112,
      "nombre": "Automated composite software",
      "fecha": "7/18/2020",
      "monto": 10,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 113,
      "nombre": "Exclusive didactic knowledge base",
      "fecha": "4/8/2020",
      "monto": 92,
      "tipo": 2,
      "categoria": 3
    }, {
      "id": 114,
      "nombre": "Programmable bandwidth-monitored architecture",
      "fecha": "1/17/2021",
      "monto": 27,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 115,
      "nombre": "Organic real-time solution",
      "fecha": "4/8/2020",
      "monto": 45,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 116,
      "nombre": "Profound modular productivity",
      "fecha": "1/11/2021",
      "monto": 35,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 117,
      "nombre": "Assimilated directional artificial intelligence",
      "fecha": "4/30/2020",
      "monto": 52,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 118,
      "nombre": "Phased grid-enabled circuit",
      "fecha": "4/11/2020",
      "monto": 91,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 119,
      "nombre": "Reduced logistical emulation",
      "fecha": "8/29/2020",
      "monto": 97,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 120,
      "nombre": "Mandatory fresh-thinking hub",
      "fecha": "10/28/2020",
      "monto": 28,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 121,
      "nombre": "Decentralized non-volatile utilisation",
      "fecha": "8/31/2020",
      "monto": 20,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 122,
      "nombre": "Multi-layered hybrid conglomeration",
      "fecha": "6/10/2020",
      "monto": 2,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 123,
      "nombre": "Inverse bandwidth-monitored local area network",
      "fecha": "11/22/2020",
      "monto": 31,
      "tipo": 1,
      "categoria": 1
    }, {
      "id": 124,
      "nombre": "User-friendly attitude-oriented workforce",
      "fecha": "7/22/2020",
      "monto": 88,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 125,
      "nombre": "Enterprise-wide fault-tolerant info-mediaries",
      "fecha": "8/25/2020",
      "monto": 3,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 126,
      "nombre": "Optimized interactive archive",
      "fecha": "4/10/2020",
      "monto": 43,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 127,
      "nombre": "Reactive multi-tasking circuit",
      "fecha": "12/6/2020",
      "monto": 98,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 128,
      "nombre": "Cross-group heuristic architecture",
      "fecha": "12/26/2020",
      "monto": 61,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 129,
      "nombre": "Reduced well-modulated toolset",
      "fecha": "6/17/2020",
      "monto": 92,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 130,
      "nombre": "Mandatory zero administration hierarchy",
      "fecha": "9/21/2020",
      "monto": 77,
      "tipo": 6,
      "categoria": 1
    }, {
      "id": 131,
      "nombre": "Virtual coherent solution",
      "fecha": "1/17/2021",
      "monto": 38,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 132,
      "nombre": "Up-sized radical approach",
      "fecha": "11/13/2020",
      "monto": 32,
      "tipo": 1,
      "categoria": 1
    }, {
      "id": 133,
      "nombre": "Assimilated impactful instruction set",
      "fecha": "11/12/2020",
      "monto": 38,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 134,
      "nombre": "Team-oriented incremental solution",
      "fecha": "4/19/2020",
      "monto": 63,
      "tipo": 6,
      "categoria": 2
    }, {
      "id": 135,
      "nombre": "User-friendly mission-critical structure",
      "fecha": "6/23/2020",
      "monto": 79,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 136,
      "nombre": "Open-source dedicated hierarchy",
      "fecha": "10/30/2020",
      "monto": 44,
      "tipo": 5,
      "categoria": 3
    }, {
      "id": 137,
      "nombre": "Proactive holistic hierarchy",
      "fecha": "3/30/2020",
      "monto": 11,
      "tipo": 1,
      "categoria": 1
    }, {
      "id": 138,
      "nombre": "Organic national utilisation",
      "fecha": "4/10/2020",
      "monto": 68,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 139,
      "nombre": "Automated context-sensitive leverage",
      "fecha": "10/14/2020",
      "monto": 64,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 140,
      "nombre": "Compatible reciprocal strategy",
      "fecha": "6/22/2020",
      "monto": 91,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 141,
      "nombre": "Programmable didactic synergy",
      "fecha": "5/2/2020",
      "monto": 39,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 142,
      "nombre": "Front-line systemic pricing structure",
      "fecha": "12/23/2020",
      "monto": 6,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 143,
      "nombre": "Stand-alone homogeneous attitude",
      "fecha": "11/28/2020",
      "monto": 30,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 144,
      "nombre": "Fully-configurable static product",
      "fecha": "3/22/2020",
      "monto": 28,
      "tipo": 1,
      "categoria": 1
    }, {
      "id": 145,
      "nombre": "Stand-alone dedicated budgetary management",
      "fecha": "9/14/2020",
      "monto": 73,
      "tipo": 2,
      "categoria": 4
    }, {
      "id": 146,
      "nombre": "Self-enabling 24 hour intranet",
      "fecha": "10/11/2020",
      "monto": 7,
      "tipo": 2,
      "categoria": 3
    }, {
      "id": 147,
      "nombre": "Persevering didactic hardware",
      "fecha": "4/23/2020",
      "monto": 38,
      "tipo": 2,
      "categoria": 3
    }, {
      "id": 148,
      "nombre": "Cross-platform cohesive hardware",
      "fecha": "10/12/2020",
      "monto": 4,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 149,
      "nombre": "Centralized dedicated pricing structure",
      "fecha": "4/25/2020",
      "monto": 68,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 150,
      "nombre": "User-friendly homogeneous structure",
      "fecha": "5/9/2020",
      "monto": 8,
      "tipo": 6,
      "categoria": 1
    }, {
      "id": 151,
      "nombre": "Reverse-engineered full-range help-desk",
      "fecha": "7/13/2020",
      "monto": 100,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 152,
      "nombre": "Automated dynamic benchmark",
      "fecha": "6/14/2020",
      "monto": 28,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 153,
      "nombre": "Mandatory bottom-line flexibility",
      "fecha": "7/3/2020",
      "monto": 36,
      "tipo": 4,
      "categoria": 1
    }, {
      "id": 154,
      "nombre": "Upgradable solution-oriented synergy",
      "fecha": "11/2/2020",
      "monto": 27,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 155,
      "nombre": "Virtual scalable definition",
      "fecha": "5/9/2020",
      "monto": 82,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 156,
      "nombre": "Devolved stable data-warehouse",
      "fecha": "9/4/2020",
      "monto": 28,
      "tipo": 5,
      "categoria": 3
    }, {
      "id": 157,
      "nombre": "Assimilated stable framework",
      "fecha": "2/18/2020",
      "monto": 19,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 158,
      "nombre": "Customer-focused optimal extranet",
      "fecha": "7/27/2020",
      "monto": 84,
      "tipo": 6,
      "categoria": 2
    }, {
      "id": 159,
      "nombre": "Re-engineered multi-tasking strategy",
      "fecha": "12/26/2020",
      "monto": 77,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 160,
      "nombre": "Implemented bifurcated middleware",
      "fecha": "7/27/2020",
      "monto": 73,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 161,
      "nombre": "Optional zero defect circuit",
      "fecha": "6/24/2020",
      "monto": 51,
      "tipo": 4,
      "categoria": 1
    }, {
      "id": 162,
      "nombre": "Decentralized attitude-oriented attitude",
      "fecha": "1/28/2021",
      "monto": 64,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 163,
      "nombre": "Focused content-based product",
      "fecha": "5/31/2020",
      "monto": 84,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 164,
      "nombre": "Front-line methodical hardware",
      "fecha": "10/9/2020",
      "monto": 97,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 165,
      "nombre": "Function-based composite attitude",
      "fecha": "7/13/2020",
      "monto": 40,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 166,
      "nombre": "Streamlined system-worthy focus group",
      "fecha": "7/24/2020",
      "monto": 68,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 167,
      "nombre": "Centralized exuding utilisation",
      "fecha": "3/18/2020",
      "monto": 6,
      "tipo": 1,
      "categoria": 1
    }, {
      "id": 168,
      "nombre": "Reactive well-modulated array",
      "fecha": "7/22/2020",
      "monto": 87,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 169,
      "nombre": "Robust didactic conglomeration",
      "fecha": "3/16/2020",
      "monto": 24,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 170,
      "nombre": "Balanced tangible Graphic Interface",
      "fecha": "2/12/2020",
      "monto": 51,
      "tipo": 2,
      "categoria": 4
    }, {
      "id": 171,
      "nombre": "Programmable real-time process improvement",
      "fecha": "3/13/2020",
      "monto": 9,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 172,
      "nombre": "Managed high-level array",
      "fecha": "7/22/2020",
      "monto": 32,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 173,
      "nombre": "Operative full-range alliance",
      "fecha": "5/29/2020",
      "monto": 57,
      "tipo": 3,
      "categoria": 3
    }, {
      "id": 174,
      "nombre": "Multi-tiered client-driven task-force",
      "fecha": "8/17/2020",
      "monto": 33,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 175,
      "nombre": "Cloned modular toolset",
      "fecha": "6/13/2020",
      "monto": 66,
      "tipo": 2,
      "categoria": 3
    }, {
      "id": 176,
      "nombre": "Quality-focused 24 hour pricing structure",
      "fecha": "8/23/2020",
      "monto": 39,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 177,
      "nombre": "Visionary 3rd generation architecture",
      "fecha": "6/19/2020",
      "monto": 66,
      "tipo": 2,
      "categoria": 3
    }, {
      "id": 178,
      "nombre": "Front-line responsive protocol",
      "fecha": "7/30/2020",
      "monto": 96,
      "tipo": 3,
      "categoria": 3
    }, {
      "id": 179,
      "nombre": "Customer-focused human-resource secured line",
      "fecha": "10/30/2020",
      "monto": 99,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 180,
      "nombre": "Cloned modular monitoring",
      "fecha": "9/20/2020",
      "monto": 11,
      "tipo": 2,
      "categoria": 3
    }, {
      "id": 181,
      "nombre": "Cross-group modular website",
      "fecha": "3/14/2020",
      "monto": 44,
      "tipo": 6,
      "categoria": 1
    }, {
      "id": 182,
      "nombre": "Proactive coherent approach",
      "fecha": "3/25/2020",
      "monto": 70,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 183,
      "nombre": "Realigned holistic contingency",
      "fecha": "5/4/2020",
      "monto": 32,
      "tipo": 1,
      "categoria": 1
    }, {
      "id": 184,
      "nombre": "Total methodical emulation",
      "fecha": "9/19/2020",
      "monto": 3,
      "tipo": 1,
      "categoria": 1
    }, {
      "id": 185,
      "nombre": "Enterprise-wide user-facing productivity",
      "fecha": "2/1/2021",
      "monto": 51,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 186,
      "nombre": "De-engineered 4th generation success",
      "fecha": "4/29/2020",
      "monto": 58,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 187,
      "nombre": "Stand-alone context-sensitive hardware",
      "fecha": "5/7/2020",
      "monto": 6,
      "tipo": 1,
      "categoria": 1
    }, {
      "id": 188,
      "nombre": "Switchable fresh-thinking methodology",
      "fecha": "3/26/2020",
      "monto": 38,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 189,
      "nombre": "Devolved exuding middleware",
      "fecha": "7/17/2020",
      "monto": 4,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 190,
      "nombre": "Mandatory 3rd generation budgetary management",
      "fecha": "12/25/2020",
      "monto": 50,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 191,
      "nombre": "Switchable mobile structure",
      "fecha": "4/14/2020",
      "monto": 60,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 192,
      "nombre": "Implemented systemic database",
      "fecha": "1/31/2021",
      "monto": 87,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 193,
      "nombre": "Face to face even-keeled collaboration",
      "fecha": "8/15/2020",
      "monto": 69,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 194,
      "nombre": "User-centric actuating archive",
      "fecha": "4/1/2020",
      "monto": 22,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 195,
      "nombre": "Business-focused contextually-based concept",
      "fecha": "5/29/2020",
      "monto": 32,
      "tipo": 5,
      "categoria": 3
    }, {
      "id": 196,
      "nombre": "Synchronised dynamic infrastructure",
      "fecha": "4/25/2020",
      "monto": 43,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 197,
      "nombre": "Cross-platform secondary support",
      "fecha": "8/25/2020",
      "monto": 30,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 198,
      "nombre": "Open-architected 24/7 challenge",
      "fecha": "3/11/2020",
      "monto": 41,
      "tipo": 5,
      "categoria": 3
    }, {
      "id": 199,
      "nombre": "Assimilated web-enabled conglomeration",
      "fecha": "10/8/2020",
      "monto": 59,
      "tipo": 4,
      "categoria": 1
    }, {
      "id": 200,
      "nombre": "Optimized clear-thinking infrastructure",
      "fecha": "7/6/2020",
      "monto": 49,
      "tipo": 4,
      "categoria": 1
    }, {
      "id": 201,
      "nombre": "Vision-oriented 6th generation moderator",
      "fecha": "4/6/2020",
      "monto": 34,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 202,
      "nombre": "Synergized systemic support",
      "fecha": "3/7/2020",
      "monto": 65,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 203,
      "nombre": "Compatible needs-based infrastructure",
      "fecha": "9/16/2020",
      "monto": 54,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 204,
      "nombre": "Adaptive mobile complexity",
      "fecha": "10/2/2020",
      "monto": 37,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 205,
      "nombre": "Seamless asynchronous project",
      "fecha": "12/16/2020",
      "monto": 31,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 206,
      "nombre": "Profit-focused 3rd generation function",
      "fecha": "11/29/2020",
      "monto": 21,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 207,
      "nombre": "Upgradable intangible methodology",
      "fecha": "6/12/2020",
      "monto": 41,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 208,
      "nombre": "Team-oriented client-server middleware",
      "fecha": "12/21/2020",
      "monto": 26,
      "tipo": 4,
      "categoria": 1
    }, {
      "id": 209,
      "nombre": "Integrated context-sensitive circuit",
      "fecha": "2/10/2020",
      "monto": 12,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 210,
      "nombre": "Networked high-level strategy",
      "fecha": "12/17/2020",
      "monto": 31,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 211,
      "nombre": "Sharable optimal capability",
      "fecha": "3/16/2020",
      "monto": 12,
      "tipo": 5,
      "categoria": 3
    }, {
      "id": 212,
      "nombre": "Mandatory asymmetric productivity",
      "fecha": "6/16/2020",
      "monto": 4,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 213,
      "nombre": "Realigned object-oriented firmware",
      "fecha": "10/24/2020",
      "monto": 86,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 214,
      "nombre": "Operative exuding moderator",
      "fecha": "8/14/2020",
      "monto": 66,
      "tipo": 2,
      "categoria": 3
    }, {
      "id": 215,
      "nombre": "Right-sized interactive support",
      "fecha": "9/18/2020",
      "monto": 82,
      "tipo": 4,
      "categoria": 1
    }, {
      "id": 216,
      "nombre": "Organic human-resource intranet",
      "fecha": "11/22/2020",
      "monto": 63,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 217,
      "nombre": "Up-sized foreground adapter",
      "fecha": "8/21/2020",
      "monto": 52,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 218,
      "nombre": "Reduced hybrid pricing structure",
      "fecha": "4/24/2020",
      "monto": 59,
      "tipo": 2,
      "categoria": 3
    }, {
      "id": 219,
      "nombre": "Ameliorated bandwidth-monitored algorithm",
      "fecha": "3/30/2020",
      "monto": 13,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 220,
      "nombre": "Universal grid-enabled product",
      "fecha": "9/20/2020",
      "monto": 2,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 221,
      "nombre": "Progressive uniform orchestration",
      "fecha": "7/10/2020",
      "monto": 47,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 222,
      "nombre": "Fully-configurable leading edge implementation",
      "fecha": "2/11/2020",
      "monto": 96,
      "tipo": 3,
      "categoria": 3
    }, {
      "id": 223,
      "nombre": "Reduced 24/7 instruction set",
      "fecha": "7/2/2020",
      "monto": 57,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 224,
      "nombre": "Focused discrete task-force",
      "fecha": "2/27/2020",
      "monto": 94,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 225,
      "nombre": "Up-sized well-modulated productivity",
      "fecha": "11/6/2020",
      "monto": 98,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 226,
      "nombre": "Devolved human-resource firmware",
      "fecha": "3/31/2020",
      "monto": 21,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 227,
      "nombre": "Multi-tiered mission-critical policy",
      "fecha": "7/14/2020",
      "monto": 91,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 228,
      "nombre": "Sharable object-oriented success",
      "fecha": "7/26/2020",
      "monto": 23,
      "tipo": 2,
      "categoria": 4
    }, {
      "id": 229,
      "nombre": "Enhanced transitional core",
      "fecha": "7/16/2020",
      "monto": 36,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 230,
      "nombre": "Synergized holistic open architecture",
      "fecha": "3/8/2020",
      "monto": 23,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 231,
      "nombre": "Persistent web-enabled open architecture",
      "fecha": "1/11/2021",
      "monto": 37,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 232,
      "nombre": "User-centric tangible access",
      "fecha": "3/25/2020",
      "monto": 9,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 233,
      "nombre": "Synergistic holistic architecture",
      "fecha": "2/12/2020",
      "monto": 43,
      "tipo": 2,
      "categoria": 3
    }, {
      "id": 234,
      "nombre": "Centralized coherent leverage",
      "fecha": "3/6/2020",
      "monto": 88,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 235,
      "nombre": "Self-enabling web-enabled core",
      "fecha": "9/7/2020",
      "monto": 97,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 236,
      "nombre": "Expanded tertiary focus group",
      "fecha": "2/28/2020",
      "monto": 39,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 237,
      "nombre": "Fundamental leading edge superstructure",
      "fecha": "3/2/2020",
      "monto": 57,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 238,
      "nombre": "Compatible radical task-force",
      "fecha": "5/4/2020",
      "monto": 18,
      "tipo": 4,
      "categoria": 1
    }, {
      "id": 239,
      "nombre": "Enhanced 6th generation parallelism",
      "fecha": "10/11/2020",
      "monto": 63,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 240,
      "nombre": "Customizable coherent superstructure",
      "fecha": "5/28/2020",
      "monto": 25,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 241,
      "nombre": "Networked interactive task-force",
      "fecha": "9/4/2020",
      "monto": 88,
      "tipo": 1,
      "categoria": 1
    }, {
      "id": 242,
      "nombre": "Profit-focused background standardization",
      "fecha": "3/31/2020",
      "monto": 31,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 243,
      "nombre": "Open-source zero administration time-frame",
      "fecha": "11/19/2020",
      "monto": 26,
      "tipo": 6,
      "categoria": 2
    }, {
      "id": 244,
      "nombre": "Function-based even-keeled portal",
      "fecha": "5/12/2020",
      "monto": 37,
      "tipo": 2,
      "categoria": 4
    }, {
      "id": 245,
      "nombre": "Profound coherent database",
      "fecha": "11/25/2020",
      "monto": 76,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 246,
      "nombre": "Multi-layered leading edge challenge",
      "fecha": "11/2/2020",
      "monto": 57,
      "tipo": 6,
      "categoria": 2
    }, {
      "id": 247,
      "nombre": "Cross-platform context-sensitive encoding",
      "fecha": "9/6/2020",
      "monto": 55,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 248,
      "nombre": "Ergonomic content-based secured line",
      "fecha": "5/28/2020",
      "monto": 72,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 249,
      "nombre": "Stand-alone uniform time-frame",
      "fecha": "7/17/2020",
      "monto": 13,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 250,
      "nombre": "Expanded asymmetric moderator",
      "fecha": "2/5/2020",
      "monto": 29,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 251,
      "nombre": "Streamlined discrete analyzer",
      "fecha": "7/19/2020",
      "monto": 16,
      "tipo": 6,
      "categoria": 2
    }, {
      "id": 252,
      "nombre": "Automated global monitoring",
      "fecha": "3/11/2020",
      "monto": 91,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 253,
      "nombre": "Organic context-sensitive attitude",
      "fecha": "10/18/2020",
      "monto": 59,
      "tipo": 5,
      "categoria": 3
    }, {
      "id": 254,
      "nombre": "Networked solution-oriented middleware",
      "fecha": "2/23/2020",
      "monto": 15,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 255,
      "nombre": "Open-architected reciprocal success",
      "fecha": "6/5/2020",
      "monto": 50,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 256,
      "nombre": "Reactive 4th generation hub",
      "fecha": "8/19/2020",
      "monto": 9,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 257,
      "nombre": "Expanded discrete alliance",
      "fecha": "2/28/2020",
      "monto": 28,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 258,
      "nombre": "Seamless global customer loyalty",
      "fecha": "3/15/2020",
      "monto": 1,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 259,
      "nombre": "User-friendly analyzing budgetary management",
      "fecha": "3/25/2020",
      "monto": 32,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 260,
      "nombre": "Distributed neutral artificial intelligence",
      "fecha": "3/5/2020",
      "monto": 71,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 261,
      "nombre": "Synergized 4th generation flexibility",
      "fecha": "8/29/2020",
      "monto": 38,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 262,
      "nombre": "Enterprise-wide intangible functionalities",
      "fecha": "10/6/2020",
      "monto": 1,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 263,
      "nombre": "Synergistic regional website",
      "fecha": "5/4/2020",
      "monto": 89,
      "tipo": 4,
      "categoria": 1
    }, {
      "id": 264,
      "nombre": "Innovative fault-tolerant task-force",
      "fecha": "10/15/2020",
      "monto": 53,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 265,
      "nombre": "Enhanced incremental software",
      "fecha": "2/16/2020",
      "monto": 10,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 266,
      "nombre": "Seamless full-range protocol",
      "fecha": "8/24/2020",
      "monto": 22,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 267,
      "nombre": "Right-sized object-oriented hub",
      "fecha": "8/20/2020",
      "monto": 73,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 268,
      "nombre": "Switchable regional data-warehouse",
      "fecha": "11/8/2020",
      "monto": 98,
      "tipo": 5,
      "categoria": 3
    }, {
      "id": 269,
      "nombre": "Profound 4th generation open architecture",
      "fecha": "6/14/2020",
      "monto": 34,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 270,
      "nombre": "Multi-layered mobile methodology",
      "fecha": "7/19/2020",
      "monto": 42,
      "tipo": 4,
      "categoria": 1
    }, {
      "id": 271,
      "nombre": "Integrated executive success",
      "fecha": "3/29/2020",
      "monto": 58,
      "tipo": 3,
      "categoria": 3
    }, {
      "id": 272,
      "nombre": "Managed systematic standardization",
      "fecha": "7/22/2020",
      "monto": 35,
      "tipo": 5,
      "categoria": 3
    }, {
      "id": 273,
      "nombre": "Open-architected object-oriented portal",
      "fecha": "4/29/2020",
      "monto": 93,
      "tipo": 5,
      "categoria": 3
    }, {
      "id": 274,
      "nombre": "Reactive didactic architecture",
      "fecha": "2/9/2020",
      "monto": 54,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 275,
      "nombre": "Horizontal object-oriented protocol",
      "fecha": "8/28/2020",
      "monto": 86,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 276,
      "nombre": "Innovative methodical hardware",
      "fecha": "4/15/2020",
      "monto": 12,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 277,
      "nombre": "Assimilated dedicated implementation",
      "fecha": "10/18/2020",
      "monto": 88,
      "tipo": 4,
      "categoria": 1
    }, {
      "id": 278,
      "nombre": "Operative human-resource implementation",
      "fecha": "1/24/2021",
      "monto": 61,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 279,
      "nombre": "Triple-buffered empowering time-frame",
      "fecha": "9/1/2020",
      "monto": 82,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 280,
      "nombre": "Open-source exuding service-desk",
      "fecha": "7/12/2020",
      "monto": 64,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 281,
      "nombre": "Triple-buffered bifurcated circuit",
      "fecha": "3/2/2020",
      "monto": 50,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 282,
      "nombre": "Profit-focused zero tolerance analyzer",
      "fecha": "12/15/2020",
      "monto": 93,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 283,
      "nombre": "Public-key upward-trending info-mediaries",
      "fecha": "10/22/2020",
      "monto": 56,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 284,
      "nombre": "Quality-focused non-volatile portal",
      "fecha": "9/6/2020",
      "monto": 79,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 285,
      "nombre": "Optimized intermediate hub",
      "fecha": "10/27/2020",
      "monto": 86,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 286,
      "nombre": "Extended encompassing interface",
      "fecha": "8/7/2020",
      "monto": 12,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 287,
      "nombre": "Ameliorated radical software",
      "fecha": "5/2/2020",
      "monto": 52,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 288,
      "nombre": "Digitized mission-critical utilisation",
      "fecha": "2/26/2020",
      "monto": 70,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 289,
      "nombre": "Object-based optimizing data-warehouse",
      "fecha": "11/5/2020",
      "monto": 67,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 290,
      "nombre": "Quality-focused optimal workforce",
      "fecha": "12/11/2020",
      "monto": 93,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 291,
      "nombre": "User-friendly intermediate model",
      "fecha": "2/5/2020",
      "monto": 90,
      "tipo": 4,
      "categoria": 1
    }, {
      "id": 292,
      "nombre": "Streamlined fresh-thinking toolset",
      "fecha": "7/6/2020",
      "monto": 73,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 293,
      "nombre": "Virtual bottom-line instruction set",
      "fecha": "7/18/2020",
      "monto": 70,
      "tipo": 6,
      "categoria": 1
    }, {
      "id": 294,
      "nombre": "Intuitive static budgetary management",
      "fecha": "12/14/2020",
      "monto": 35,
      "tipo": 4,
      "categoria": 1
    }, {
      "id": 295,
      "nombre": "Digitized foreground standardization",
      "fecha": "2/28/2020",
      "monto": 5,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 296,
      "nombre": "Enterprise-wide uniform time-frame",
      "fecha": "3/15/2020",
      "monto": 21,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 297,
      "nombre": "Devolved eco-centric help-desk",
      "fecha": "8/9/2020",
      "monto": 94,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 298,
      "nombre": "Mandatory national open architecture",
      "fecha": "8/10/2020",
      "monto": 91,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 299,
      "nombre": "Vision-oriented logistical leverage",
      "fecha": "1/5/2021",
      "monto": 84,
      "tipo": 1,
      "categoria": 1
    }, {
      "id": 300,
      "nombre": "Multi-lateral foreground definition",
      "fecha": "2/26/2020",
      "monto": 48,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 301,
      "nombre": "Stand-alone analyzing Graphical User Interface",
      "fecha": "11/9/2020",
      "monto": 55,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 302,
      "nombre": "Business-focused 24 hour superstructure",
      "fecha": "4/12/2020",
      "monto": 84,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 303,
      "nombre": "Customer-focused interactive access",
      "fecha": "7/11/2020",
      "monto": 81,
      "tipo": 6,
      "categoria": 1
    }, {
      "id": 304,
      "nombre": "Total high-level hub",
      "fecha": "11/5/2020",
      "monto": 37,
      "tipo": 6,
      "categoria": 1
    }, {
      "id": 305,
      "nombre": "Customizable didactic knowledge user",
      "fecha": "1/11/2021",
      "monto": 57,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 306,
      "nombre": "De-engineered multimedia synergy",
      "fecha": "7/27/2020",
      "monto": 90,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 307,
      "nombre": "Seamless disintermediate data-warehouse",
      "fecha": "5/17/2020",
      "monto": 65,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 308,
      "nombre": "Profound dynamic superstructure",
      "fecha": "2/10/2020",
      "monto": 65,
      "tipo": 3,
      "categoria": 3
    }, {
      "id": 309,
      "nombre": "Up-sized tertiary strategy",
      "fecha": "3/25/2020",
      "monto": 15,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 310,
      "nombre": "Extended transitional complexity",
      "fecha": "11/9/2020",
      "monto": 85,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 311,
      "nombre": "Synergized leading edge projection",
      "fecha": "9/6/2020",
      "monto": 34,
      "tipo": 5,
      "categoria": 3
    }, {
      "id": 312,
      "nombre": "Streamlined dedicated collaboration",
      "fecha": "6/25/2020",
      "monto": 94,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 313,
      "nombre": "Total reciprocal portal",
      "fecha": "6/30/2020",
      "monto": 19,
      "tipo": 2,
      "categoria": 4
    }, {
      "id": 314,
      "nombre": "Profound tertiary installation",
      "fecha": "10/27/2020",
      "monto": 53,
      "tipo": 6,
      "categoria": 1
    }, {
      "id": 315,
      "nombre": "Open-architected multimedia alliance",
      "fecha": "6/1/2020",
      "monto": 3,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 316,
      "nombre": "Realigned fault-tolerant customer loyalty",
      "fecha": "11/29/2020",
      "monto": 14,
      "tipo": 6,
      "categoria": 2
    }, {
      "id": 317,
      "nombre": "Synchronised next generation capability",
      "fecha": "2/27/2020",
      "monto": 92,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 318,
      "nombre": "Integrated 24/7 standardization",
      "fecha": "11/15/2020",
      "monto": 8,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 319,
      "nombre": "De-engineered human-resource knowledge user",
      "fecha": "10/24/2020",
      "monto": 29,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 320,
      "nombre": "Distributed attitude-oriented local area network",
      "fecha": "2/12/2020",
      "monto": 23,
      "tipo": 4,
      "categoria": 1
    }, {
      "id": 321,
      "nombre": "User-friendly actuating policy",
      "fecha": "4/13/2020",
      "monto": 54,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 322,
      "nombre": "Re-contextualized heuristic project",
      "fecha": "11/1/2020",
      "monto": 1,
      "tipo": 4,
      "categoria": 1
    }, {
      "id": 323,
      "nombre": "Right-sized needs-based function",
      "fecha": "5/26/2020",
      "monto": 67,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 324,
      "nombre": "Robust system-worthy ability",
      "fecha": "12/6/2020",
      "monto": 94,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 325,
      "nombre": "Fully-configurable real-time capacity",
      "fecha": "1/15/2021",
      "monto": 15,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 326,
      "nombre": "Polarised directional encoding",
      "fecha": "10/15/2020",
      "monto": 96,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 327,
      "nombre": "Synergistic explicit ability",
      "fecha": "2/14/2020",
      "monto": 14,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 328,
      "nombre": "Progressive full-range algorithm",
      "fecha": "4/11/2020",
      "monto": 94,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 329,
      "nombre": "Organic discrete groupware",
      "fecha": "10/24/2020",
      "monto": 31,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 330,
      "nombre": "Programmable demand-driven budgetary management",
      "fecha": "10/30/2020",
      "monto": 86,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 331,
      "nombre": "Balanced actuating ability",
      "fecha": "12/14/2020",
      "monto": 54,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 332,
      "nombre": "De-engineered object-oriented productivity",
      "fecha": "7/18/2020",
      "monto": 15,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 333,
      "nombre": "Optimized high-level local area network",
      "fecha": "4/18/2020",
      "monto": 91,
      "tipo": 6,
      "categoria": 1
    }, {
      "id": 334,
      "nombre": "Centralized fresh-thinking forecast",
      "fecha": "5/9/2020",
      "monto": 36,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 335,
      "nombre": "Front-line 24/7 process improvement",
      "fecha": "7/2/2020",
      "monto": 33,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 336,
      "nombre": "Digitized well-modulated workforce",
      "fecha": "2/1/2021",
      "monto": 78,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 337,
      "nombre": "Down-sized tangible architecture",
      "fecha": "5/4/2020",
      "monto": 40,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 338,
      "nombre": "Universal 4th generation hardware",
      "fecha": "2/13/2020",
      "monto": 88,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 339,
      "nombre": "Multi-lateral incremental functionalities",
      "fecha": "6/1/2020",
      "monto": 77,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 340,
      "nombre": "Multi-tiered responsive approach",
      "fecha": "1/28/2021",
      "monto": 38,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 341,
      "nombre": "Optional hybrid encoding",
      "fecha": "10/6/2020",
      "monto": 59,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 342,
      "nombre": "Total cohesive matrices",
      "fecha": "12/6/2020",
      "monto": 95,
      "tipo": 2,
      "categoria": 4
    }, {
      "id": 343,
      "nombre": "Programmable grid-enabled product",
      "fecha": "9/13/2020",
      "monto": 57,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 344,
      "nombre": "Horizontal disintermediate initiative",
      "fecha": "11/28/2020",
      "monto": 88,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 345,
      "nombre": "Enhanced optimal attitude",
      "fecha": "8/27/2020",
      "monto": 80,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 346,
      "nombre": "Advanced encompassing workforce",
      "fecha": "6/29/2020",
      "monto": 83,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 347,
      "nombre": "Up-sized stable synergy",
      "fecha": "1/26/2021",
      "monto": 14,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 348,
      "nombre": "Pre-emptive optimizing extranet",
      "fecha": "8/11/2020",
      "monto": 54,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 349,
      "nombre": "Open-source optimal workforce",
      "fecha": "7/29/2020",
      "monto": 41,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 350,
      "nombre": "Multi-tiered global data-warehouse",
      "fecha": "5/22/2020",
      "monto": 84,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 351,
      "nombre": "Face to face holistic initiative",
      "fecha": "9/19/2020",
      "monto": 54,
      "tipo": 1,
      "categoria": 1
    }, {
      "id": 352,
      "nombre": "Business-focused disintermediate matrices",
      "fecha": "7/3/2020",
      "monto": 77,
      "tipo": 5,
      "categoria": 3
    }, {
      "id": 353,
      "nombre": "Intuitive responsive forecast",
      "fecha": "1/8/2021",
      "monto": 70,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 354,
      "nombre": "Cross-group responsive capacity",
      "fecha": "12/21/2020",
      "monto": 31,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 355,
      "nombre": "Grass-roots multimedia hardware",
      "fecha": "11/21/2020",
      "monto": 18,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 356,
      "nombre": "Right-sized bi-directional application",
      "fecha": "6/22/2020",
      "monto": 45,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 357,
      "nombre": "Automated upward-trending adapter",
      "fecha": "4/6/2020",
      "monto": 81,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 358,
      "nombre": "Diverse client-driven knowledge base",
      "fecha": "7/17/2020",
      "monto": 11,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 359,
      "nombre": "Robust leading edge installation",
      "fecha": "11/8/2020",
      "monto": 28,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 360,
      "nombre": "Adaptive clear-thinking challenge",
      "fecha": "2/18/2020",
      "monto": 85,
      "tipo": 2,
      "categoria": 4
    }, {
      "id": 361,
      "nombre": "Object-based transitional infrastructure",
      "fecha": "3/22/2020",
      "monto": 45,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 362,
      "nombre": "Cross-group exuding artificial intelligence",
      "fecha": "5/3/2020",
      "monto": 8,
      "tipo": 4,
      "categoria": 1
    }, {
      "id": 363,
      "nombre": "Versatile tangible approach",
      "fecha": "12/14/2020",
      "monto": 95,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 364,
      "nombre": "Compatible 4th generation system engine",
      "fecha": "11/5/2020",
      "monto": 34,
      "tipo": 2,
      "categoria": 3
    }, {
      "id": 365,
      "nombre": "Distributed actuating adapter",
      "fecha": "8/28/2020",
      "monto": 82,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 366,
      "nombre": "Stand-alone incremental open system",
      "fecha": "3/27/2020",
      "monto": 72,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 367,
      "nombre": "Profit-focused bi-directional analyzer",
      "fecha": "7/27/2020",
      "monto": 15,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 368,
      "nombre": "Upgradable system-worthy collaboration",
      "fecha": "5/1/2020",
      "monto": 79,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 369,
      "nombre": "Inverse coherent implementation",
      "fecha": "9/8/2020",
      "monto": 14,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 370,
      "nombre": "Self-enabling local challenge",
      "fecha": "5/25/2020",
      "monto": 1,
      "tipo": 3,
      "categoria": 3
    }, {
      "id": 371,
      "nombre": "Devolved cohesive open system",
      "fecha": "5/2/2020",
      "monto": 87,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 372,
      "nombre": "Total bi-directional emulation",
      "fecha": "3/23/2020",
      "monto": 27,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 373,
      "nombre": "Upgradable maximized info-mediaries",
      "fecha": "10/15/2020",
      "monto": 90,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 374,
      "nombre": "Re-contextualized zero defect definition",
      "fecha": "4/29/2020",
      "monto": 82,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 375,
      "nombre": "Public-key asymmetric pricing structure",
      "fecha": "12/19/2020",
      "monto": 36,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 376,
      "nombre": "Multi-channelled dedicated info-mediaries",
      "fecha": "12/25/2020",
      "monto": 26,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 377,
      "nombre": "Total human-resource superstructure",
      "fecha": "7/31/2020",
      "monto": 13,
      "tipo": 3,
      "categoria": 3
    }, {
      "id": 378,
      "nombre": "Monitored directional model",
      "fecha": "6/6/2020",
      "monto": 78,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 379,
      "nombre": "Reactive grid-enabled access",
      "fecha": "11/26/2020",
      "monto": 17,
      "tipo": 3,
      "categoria": 3
    }, {
      "id": 380,
      "nombre": "Front-line next generation database",
      "fecha": "3/9/2020",
      "monto": 41,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 381,
      "nombre": "Team-oriented mission-critical middleware",
      "fecha": "9/26/2020",
      "monto": 49,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 382,
      "nombre": "Networked fresh-thinking process improvement",
      "fecha": "4/20/2020",
      "monto": 58,
      "tipo": 5,
      "categoria": 3
    }, {
      "id": 383,
      "nombre": "Multi-lateral global concept",
      "fecha": "11/4/2020",
      "monto": 54,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 384,
      "nombre": "Ergonomic fault-tolerant concept",
      "fecha": "7/19/2020",
      "monto": 55,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 385,
      "nombre": "Upgradable systemic policy",
      "fecha": "3/6/2020",
      "monto": 97,
      "tipo": 5,
      "categoria": 3
    }, {
      "id": 386,
      "nombre": "Down-sized bandwidth-monitored Graphic Interface",
      "fecha": "9/16/2020",
      "monto": 100,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 387,
      "nombre": "Balanced full-range database",
      "fecha": "4/19/2020",
      "monto": 38,
      "tipo": 2,
      "categoria": 3
    }, {
      "id": 388,
      "nombre": "Organic modular utilisation",
      "fecha": "3/5/2020",
      "monto": 37,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 389,
      "nombre": "Total global parallelism",
      "fecha": "11/9/2020",
      "monto": 26,
      "tipo": 1,
      "categoria": 1
    }, {
      "id": 390,
      "nombre": "Multi-lateral fault-tolerant alliance",
      "fecha": "9/22/2020",
      "monto": 77,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 391,
      "nombre": "Polarised eco-centric middleware",
      "fecha": "7/20/2020",
      "monto": 99,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 392,
      "nombre": "User-friendly multi-state conglomeration",
      "fecha": "8/21/2020",
      "monto": 94,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 393,
      "nombre": "Customizable regional portal",
      "fecha": "3/31/2020",
      "monto": 44,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 394,
      "nombre": "User-centric disintermediate core",
      "fecha": "9/1/2020",
      "monto": 42,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 395,
      "nombre": "Monitored incremental system engine",
      "fecha": "11/13/2020",
      "monto": 80,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 396,
      "nombre": "Front-line zero defect utilisation",
      "fecha": "4/24/2020",
      "monto": 64,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 397,
      "nombre": "De-engineered zero tolerance synergy",
      "fecha": "6/28/2020",
      "monto": 87,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 398,
      "nombre": "Secured responsive ability",
      "fecha": "8/18/2020",
      "monto": 74,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 399,
      "nombre": "Front-line modular implementation",
      "fecha": "7/13/2020",
      "monto": 59,
      "tipo": 6,
      "categoria": 2
    }, {
      "id": 400,
      "nombre": "Programmable multi-tasking matrix",
      "fecha": "7/24/2020",
      "monto": 94,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 401,
      "nombre": "Streamlined 3rd generation parallelism",
      "fecha": "1/28/2021",
      "monto": 50,
      "tipo": 6,
      "categoria": 1
    }, {
      "id": 402,
      "nombre": "Profit-focused scalable orchestration",
      "fecha": "7/21/2020",
      "monto": 56,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 403,
      "nombre": "Grass-roots mission-critical definition",
      "fecha": "5/22/2020",
      "monto": 46,
      "tipo": 6,
      "categoria": 1
    }, {
      "id": 404,
      "nombre": "Integrated uniform utilisation",
      "fecha": "8/5/2020",
      "monto": 47,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 405,
      "nombre": "Optional context-sensitive moderator",
      "fecha": "3/4/2020",
      "monto": 54,
      "tipo": 6,
      "categoria": 2
    }, {
      "id": 406,
      "nombre": "Advanced tangible emulation",
      "fecha": "2/5/2020",
      "monto": 42,
      "tipo": 3,
      "categoria": 3
    }, {
      "id": 407,
      "nombre": "Visionary 24 hour support",
      "fecha": "1/11/2021",
      "monto": 7,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 408,
      "nombre": "Open-source didactic projection",
      "fecha": "10/18/2020",
      "monto": 81,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 409,
      "nombre": "Decentralized grid-enabled paradigm",
      "fecha": "12/14/2020",
      "monto": 4,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 410,
      "nombre": "Cross-group zero defect open system",
      "fecha": "3/17/2020",
      "monto": 65,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 411,
      "nombre": "Reduced homogeneous budgetary management",
      "fecha": "8/3/2020",
      "monto": 35,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 412,
      "nombre": "Organized fresh-thinking attitude",
      "fecha": "3/17/2020",
      "monto": 93,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 413,
      "nombre": "Mandatory content-based conglomeration",
      "fecha": "10/23/2020",
      "monto": 50,
      "tipo": 1,
      "categoria": 1
    }, {
      "id": 414,
      "nombre": "Multi-lateral interactive analyzer",
      "fecha": "9/10/2020",
      "monto": 91,
      "tipo": 5,
      "categoria": 3
    }, {
      "id": 415,
      "nombre": "Reduced attitude-oriented model",
      "fecha": "6/26/2020",
      "monto": 52,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 416,
      "nombre": "Multi-tiered systematic process improvement",
      "fecha": "12/6/2020",
      "monto": 33,
      "tipo": 4,
      "categoria": 1
    }, {
      "id": 417,
      "nombre": "Cross-platform incremental concept",
      "fecha": "11/18/2020",
      "monto": 70,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 418,
      "nombre": "Upgradable analyzing matrices",
      "fecha": "3/31/2020",
      "monto": 35,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 419,
      "nombre": "Secured context-sensitive monitoring",
      "fecha": "8/26/2020",
      "monto": 41,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 420,
      "nombre": "Digitized impactful conglomeration",
      "fecha": "5/15/2020",
      "monto": 93,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 421,
      "nombre": "Expanded tertiary productivity",
      "fecha": "8/14/2020",
      "monto": 71,
      "tipo": 2,
      "categoria": 4
    }, {
      "id": 422,
      "nombre": "Synergistic 4th generation hierarchy",
      "fecha": "4/26/2020",
      "monto": 31,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 423,
      "nombre": "Balanced didactic system engine",
      "fecha": "9/6/2020",
      "monto": 68,
      "tipo": 2,
      "categoria": 4
    }, {
      "id": 424,
      "nombre": "Customizable fault-tolerant data-warehouse",
      "fecha": "7/31/2020",
      "monto": 77,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 425,
      "nombre": "Optimized full-range solution",
      "fecha": "10/1/2020",
      "monto": 20,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 426,
      "nombre": "Compatible leading edge hardware",
      "fecha": "11/19/2020",
      "monto": 18,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 427,
      "nombre": "Intuitive bandwidth-monitored focus group",
      "fecha": "10/2/2020",
      "monto": 85,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 428,
      "nombre": "Ameliorated attitude-oriented neural-net",
      "fecha": "2/16/2020",
      "monto": 68,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 429,
      "nombre": "Inverse bi-directional solution",
      "fecha": "7/25/2020",
      "monto": 91,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 430,
      "nombre": "Triple-buffered fresh-thinking product",
      "fecha": "2/22/2020",
      "monto": 24,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 431,
      "nombre": "Customer-focused eco-centric info-mediaries",
      "fecha": "5/13/2020",
      "monto": 72,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 432,
      "nombre": "Ergonomic 24 hour parallelism",
      "fecha": "12/23/2020",
      "monto": 83,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 433,
      "nombre": "Synchronised attitude-oriented database",
      "fecha": "4/5/2020",
      "monto": 14,
      "tipo": 6,
      "categoria": 2
    }, {
      "id": 434,
      "nombre": "Expanded dedicated service-desk",
      "fecha": "3/19/2020",
      "monto": 52,
      "tipo": 1,
      "categoria": 1
    }, {
      "id": 435,
      "nombre": "Total clear-thinking framework",
      "fecha": "9/21/2020",
      "monto": 90,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 436,
      "nombre": "Open-architected discrete Graphical User Interface",
      "fecha": "8/10/2020",
      "monto": 19,
      "tipo": 2,
      "categoria": 3
    }, {
      "id": 437,
      "nombre": "Focused human-resource encoding",
      "fecha": "6/20/2020",
      "monto": 32,
      "tipo": 1,
      "categoria": 1
    }, {
      "id": 438,
      "nombre": "Enterprise-wide directional attitude",
      "fecha": "10/2/2020",
      "monto": 54,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 439,
      "nombre": "Team-oriented 5th generation interface",
      "fecha": "11/5/2020",
      "monto": 5,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 440,
      "nombre": "Front-line bandwidth-monitored throughput",
      "fecha": "4/20/2020",
      "monto": 9,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 441,
      "nombre": "Configurable coherent parallelism",
      "fecha": "5/16/2020",
      "monto": 87,
      "tipo": 2,
      "categoria": 4
    }, {
      "id": 442,
      "nombre": "Streamlined context-sensitive firmware",
      "fecha": "1/26/2021",
      "monto": 11,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 443,
      "nombre": "Multi-lateral grid-enabled workforce",
      "fecha": "5/9/2020",
      "monto": 95,
      "tipo": 4,
      "categoria": 1
    }, {
      "id": 444,
      "nombre": "Team-oriented directional array",
      "fecha": "12/23/2020",
      "monto": 74,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 445,
      "nombre": "Upgradable even-keeled open architecture",
      "fecha": "12/19/2020",
      "monto": 50,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 446,
      "nombre": "Progressive reciprocal solution",
      "fecha": "10/5/2020",
      "monto": 83,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 447,
      "nombre": "Down-sized stable frame",
      "fecha": "8/4/2020",
      "monto": 46,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 448,
      "nombre": "Virtual heuristic concept",
      "fecha": "5/4/2020",
      "monto": 98,
      "tipo": 2,
      "categoria": 4
    }, {
      "id": 449,
      "nombre": "Horizontal clear-thinking protocol",
      "fecha": "11/27/2020",
      "monto": 15,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 450,
      "nombre": "Reverse-engineered coherent groupware",
      "fecha": "9/2/2020",
      "monto": 64,
      "tipo": 6,
      "categoria": 2
    }, {
      "id": 451,
      "nombre": "Diverse holistic firmware",
      "fecha": "3/12/2020",
      "monto": 84,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 452,
      "nombre": "Future-proofed upward-trending budgetary management",
      "fecha": "8/25/2020",
      "monto": 42,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 453,
      "nombre": "Up-sized attitude-oriented intranet",
      "fecha": "8/17/2020",
      "monto": 23,
      "tipo": 5,
      "categoria": 3
    }, {
      "id": 454,
      "nombre": "Mandatory logistical secured line",
      "fecha": "1/27/2021",
      "monto": 55,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 455,
      "nombre": "Managed stable website",
      "fecha": "9/27/2020",
      "monto": 71,
      "tipo": 2,
      "categoria": 3
    }, {
      "id": 456,
      "nombre": "Expanded systematic capability",
      "fecha": "9/30/2020",
      "monto": 73,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 457,
      "nombre": "User-centric upward-trending projection",
      "fecha": "9/16/2020",
      "monto": 60,
      "tipo": 4,
      "categoria": 1
    }, {
      "id": 458,
      "nombre": "Reduced intermediate data-warehouse",
      "fecha": "6/18/2020",
      "monto": 11,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 459,
      "nombre": "Inverse systematic toolset",
      "fecha": "1/14/2021",
      "monto": 48,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 460,
      "nombre": "Organic multi-tasking core",
      "fecha": "7/18/2020",
      "monto": 57,
      "tipo": 2,
      "categoria": 3
    }, {
      "id": 461,
      "nombre": "Upgradable modular throughput",
      "fecha": "12/26/2020",
      "monto": 63,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 462,
      "nombre": "Re-engineered client-server open system",
      "fecha": "5/27/2020",
      "monto": 43,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 463,
      "nombre": "Persevering disintermediate application",
      "fecha": "1/27/2021",
      "monto": 59,
      "tipo": 6,
      "categoria": 2
    }, {
      "id": 464,
      "nombre": "Re-contextualized regional policy",
      "fecha": "11/30/2020",
      "monto": 11,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 465,
      "nombre": "Fundamental hybrid moderator",
      "fecha": "10/11/2020",
      "monto": 68,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 466,
      "nombre": "Multi-tiered intangible challenge",
      "fecha": "2/27/2020",
      "monto": 9,
      "tipo": 5,
      "categoria": 3
    }, {
      "id": 467,
      "nombre": "Switchable systematic database",
      "fecha": "9/8/2020",
      "monto": 7,
      "tipo": 5,
      "categoria": 3
    }, {
      "id": 468,
      "nombre": "Total web-enabled throughput",
      "fecha": "9/25/2020",
      "monto": 45,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 469,
      "nombre": "Balanced exuding solution",
      "fecha": "6/30/2020",
      "monto": 93,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 470,
      "nombre": "Versatile fresh-thinking customer loyalty",
      "fecha": "10/10/2020",
      "monto": 94,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 471,
      "nombre": "Organic transitional adapter",
      "fecha": "11/7/2020",
      "monto": 68,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 472,
      "nombre": "Horizontal coherent capacity",
      "fecha": "7/5/2020",
      "monto": 37,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 473,
      "nombre": "Optional eco-centric interface",
      "fecha": "11/28/2020",
      "monto": 94,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 474,
      "nombre": "User-centric contextually-based open system",
      "fecha": "7/7/2020",
      "monto": 7,
      "tipo": 2,
      "categoria": 4
    }, {
      "id": 475,
      "nombre": "Seamless executive collaboration",
      "fecha": "12/20/2020",
      "monto": 42,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 476,
      "nombre": "Quality-focused fresh-thinking access",
      "fecha": "6/2/2020",
      "monto": 28,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 477,
      "nombre": "Inverse stable paradigm",
      "fecha": "7/17/2020",
      "monto": 40,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 478,
      "nombre": "Streamlined transitional artificial intelligence",
      "fecha": "3/6/2020",
      "monto": 39,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 479,
      "nombre": "Down-sized zero defect initiative",
      "fecha": "10/8/2020",
      "monto": 53,
      "tipo": 5,
      "categoria": 3
    }, {
      "id": 480,
      "nombre": "Synergistic zero defect orchestration",
      "fecha": "4/18/2020",
      "monto": 87,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 481,
      "nombre": "Up-sized solution-oriented firmware",
      "fecha": "4/12/2020",
      "monto": 40,
      "tipo": 6,
      "categoria": 1
    }, {
      "id": 482,
      "nombre": "Ergonomic discrete methodology",
      "fecha": "2/19/2020",
      "monto": 30,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 483,
      "nombre": "Up-sized local challenge",
      "fecha": "10/24/2020",
      "monto": 16,
      "tipo": 6,
      "categoria": 1
    }, {
      "id": 484,
      "nombre": "Open-architected scalable moderator",
      "fecha": "3/27/2020",
      "monto": 70,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 485,
      "nombre": "Universal 24 hour complexity",
      "fecha": "11/3/2020",
      "monto": 61,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 486,
      "nombre": "Versatile maximized local area network",
      "fecha": "12/19/2020",
      "monto": 12,
      "tipo": 3,
      "categoria": 3
    }, {
      "id": 487,
      "nombre": "Object-based eco-centric interface",
      "fecha": "8/12/2020",
      "monto": 93,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 488,
      "nombre": "Optimized non-volatile initiative",
      "fecha": "10/9/2020",
      "monto": 41,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 489,
      "nombre": "Grass-roots neutral migration",
      "fecha": "12/5/2020",
      "monto": 18,
      "tipo": 5,
      "categoria": 3
    }, {
      "id": 490,
      "nombre": "Re-engineered secondary capability",
      "fecha": "3/9/2020",
      "monto": 29,
      "tipo": 6,
      "categoria": 2
    }, {
      "id": 491,
      "nombre": "Reactive tangible hierarchy",
      "fecha": "5/29/2020",
      "monto": 46,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 492,
      "nombre": "Grass-roots actuating complexity",
      "fecha": "5/15/2020",
      "monto": 58,
      "tipo": 6,
      "categoria": 2
    }, {
      "id": 493,
      "nombre": "Synergistic 5th generation functionalities",
      "fecha": "7/16/2020",
      "monto": 5,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 494,
      "nombre": "Cloned attitude-oriented conglomeration",
      "fecha": "5/24/2020",
      "monto": 16,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 495,
      "nombre": "Advanced interactive complexity",
      "fecha": "2/16/2020",
      "monto": 72,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 496,
      "nombre": "Profit-focused bi-directional instruction set",
      "fecha": "6/19/2020",
      "monto": 75,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 497,
      "nombre": "Synchronised non-volatile utilisation",
      "fecha": "3/28/2020",
      "monto": 72,
      "tipo": 6,
      "categoria": 1
    }, {
      "id": 498,
      "nombre": "Self-enabling composite data-warehouse",
      "fecha": "7/16/2020",
      "monto": 57,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 499,
      "nombre": "Fully-configurable modular middleware",
      "fecha": "4/3/2020",
      "monto": 60,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 500,
      "nombre": "Face to face 6th generation task-force",
      "fecha": "2/2/2021",
      "monto": 92,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 501,
      "nombre": "Diverse 24 hour functionalities",
      "fecha": "5/1/2020",
      "monto": 48,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 502,
      "nombre": "Customer-focused 4th generation throughput",
      "fecha": "4/26/2020",
      "monto": 80,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 503,
      "nombre": "User-centric demand-driven analyzer",
      "fecha": "3/11/2020",
      "monto": 52,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 504,
      "nombre": "Exclusive leading edge standardization",
      "fecha": "1/7/2021",
      "monto": 15,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 505,
      "nombre": "Intuitive intermediate capacity",
      "fecha": "6/10/2020",
      "monto": 18,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 506,
      "nombre": "Fundamental analyzing instruction set",
      "fecha": "6/4/2020",
      "monto": 100,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 507,
      "nombre": "Visionary transitional software",
      "fecha": "11/24/2020",
      "monto": 36,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 508,
      "nombre": "Devolved value-added instruction set",
      "fecha": "2/27/2020",
      "monto": 43,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 509,
      "nombre": "Virtual methodical interface",
      "fecha": "12/21/2020",
      "monto": 90,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 510,
      "nombre": "Vision-oriented tertiary synergy",
      "fecha": "9/6/2020",
      "monto": 57,
      "tipo": 1,
      "categoria": 1
    }, {
      "id": 511,
      "nombre": "Ergonomic scalable knowledge user",
      "fecha": "12/29/2020",
      "monto": 100,
      "tipo": 4,
      "categoria": 1
    }, {
      "id": 512,
      "nombre": "Adaptive motivating interface",
      "fecha": "2/17/2020",
      "monto": 79,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 513,
      "nombre": "Phased static algorithm",
      "fecha": "6/24/2020",
      "monto": 6,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 514,
      "nombre": "Business-focused optimal migration",
      "fecha": "3/12/2020",
      "monto": 28,
      "tipo": 2,
      "categoria": 3
    }, {
      "id": 515,
      "nombre": "Universal non-volatile paradigm",
      "fecha": "1/30/2021",
      "monto": 21,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 516,
      "nombre": "Realigned tertiary support",
      "fecha": "6/17/2020",
      "monto": 57,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 517,
      "nombre": "Multi-tiered full-range neural-net",
      "fecha": "12/23/2020",
      "monto": 4,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 518,
      "nombre": "Sharable object-oriented core",
      "fecha": "9/18/2020",
      "monto": 77,
      "tipo": 2,
      "categoria": 4
    }, {
      "id": 519,
      "nombre": "Optional transitional collaboration",
      "fecha": "2/7/2020",
      "monto": 21,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 520,
      "nombre": "Customizable client-server capability",
      "fecha": "10/2/2020",
      "monto": 87,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 521,
      "nombre": "Triple-buffered 24/7 focus group",
      "fecha": "9/21/2020",
      "monto": 18,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 522,
      "nombre": "Organized coherent complexity",
      "fecha": "1/16/2021",
      "monto": 98,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 523,
      "nombre": "Grass-roots tangible Graphic Interface",
      "fecha": "2/7/2020",
      "monto": 98,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 524,
      "nombre": "Compatible multimedia internet solution",
      "fecha": "11/16/2020",
      "monto": 13,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 525,
      "nombre": "Versatile contextually-based paradigm",
      "fecha": "6/12/2020",
      "monto": 30,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 526,
      "nombre": "Multi-channelled heuristic website",
      "fecha": "7/19/2020",
      "monto": 19,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 527,
      "nombre": "Compatible reciprocal synergy",
      "fecha": "4/21/2020",
      "monto": 42,
      "tipo": 1,
      "categoria": 1
    }, {
      "id": 528,
      "nombre": "Ameliorated motivating definition",
      "fecha": "2/20/2020",
      "monto": 4,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 529,
      "nombre": "Visionary attitude-oriented secured line",
      "fecha": "5/10/2020",
      "monto": 25,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 530,
      "nombre": "Seamless eco-centric system engine",
      "fecha": "7/14/2020",
      "monto": 66,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 531,
      "nombre": "Right-sized bottom-line matrices",
      "fecha": "12/9/2020",
      "monto": 78,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 532,
      "nombre": "Extended impactful standardization",
      "fecha": "10/29/2020",
      "monto": 70,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 533,
      "nombre": "Exclusive intermediate initiative",
      "fecha": "7/3/2020",
      "monto": 60,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 534,
      "nombre": "Profound encompassing algorithm",
      "fecha": "2/5/2020",
      "monto": 52,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 535,
      "nombre": "De-engineered intermediate extranet",
      "fecha": "6/16/2020",
      "monto": 18,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 536,
      "nombre": "Reduced incremental time-frame",
      "fecha": "3/29/2020",
      "monto": 5,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 537,
      "nombre": "Virtual clear-thinking model",
      "fecha": "7/30/2020",
      "monto": 52,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 538,
      "nombre": "Open-source optimizing matrices",
      "fecha": "10/10/2020",
      "monto": 11,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 539,
      "nombre": "Monitored global architecture",
      "fecha": "3/30/2020",
      "monto": 33,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 540,
      "nombre": "Switchable composite flexibility",
      "fecha": "3/8/2020",
      "monto": 46,
      "tipo": 6,
      "categoria": 1
    }, {
      "id": 541,
      "nombre": "Re-contextualized bifurcated productivity",
      "fecha": "8/3/2020",
      "monto": 34,
      "tipo": 6,
      "categoria": 2
    }, {
      "id": 542,
      "nombre": "Synergistic maximized attitude",
      "fecha": "11/30/2020",
      "monto": 36,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 543,
      "nombre": "Advanced grid-enabled orchestration",
      "fecha": "12/4/2020",
      "monto": 10,
      "tipo": 2,
      "categoria": 4
    }, {
      "id": 544,
      "nombre": "Innovative exuding superstructure",
      "fecha": "9/2/2020",
      "monto": 68,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 545,
      "nombre": "Assimilated client-driven pricing structure",
      "fecha": "4/3/2020",
      "monto": 53,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 546,
      "nombre": "Virtual demand-driven focus group",
      "fecha": "12/10/2020",
      "monto": 50,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 547,
      "nombre": "Progressive executive neural-net",
      "fecha": "5/6/2020",
      "monto": 76,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 548,
      "nombre": "Versatile 3rd generation open system",
      "fecha": "2/4/2020",
      "monto": 100,
      "tipo": 1,
      "categoria": 1
    }, {
      "id": 549,
      "nombre": "Expanded content-based strategy",
      "fecha": "7/12/2020",
      "monto": 70,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 550,
      "nombre": "Digitized client-server analyzer",
      "fecha": "11/26/2020",
      "monto": 87,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 551,
      "nombre": "Open-architected zero administration software",
      "fecha": "11/19/2020",
      "monto": 11,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 552,
      "nombre": "Phased grid-enabled protocol",
      "fecha": "9/14/2020",
      "monto": 14,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 553,
      "nombre": "Face to face explicit methodology",
      "fecha": "8/20/2020",
      "monto": 25,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 554,
      "nombre": "Distributed clear-thinking capacity",
      "fecha": "1/31/2021",
      "monto": 93,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 555,
      "nombre": "Versatile solution-oriented strategy",
      "fecha": "3/19/2020",
      "monto": 7,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 556,
      "nombre": "Reactive executive artificial intelligence",
      "fecha": "8/30/2020",
      "monto": 28,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 557,
      "nombre": "Balanced secondary knowledge base",
      "fecha": "10/27/2020",
      "monto": 63,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 558,
      "nombre": "Self-enabling bifurcated alliance",
      "fecha": "8/18/2020",
      "monto": 90,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 559,
      "nombre": "Switchable executive methodology",
      "fecha": "6/22/2020",
      "monto": 13,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 560,
      "nombre": "Cloned multi-state intranet",
      "fecha": "2/23/2020",
      "monto": 39,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 561,
      "nombre": "Automated coherent utilisation",
      "fecha": "9/28/2020",
      "monto": 18,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 562,
      "nombre": "Polarised client-driven middleware",
      "fecha": "5/25/2020",
      "monto": 67,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 563,
      "nombre": "Extended systematic internet solution",
      "fecha": "4/8/2020",
      "monto": 96,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 564,
      "nombre": "Managed hybrid internet solution",
      "fecha": "4/1/2020",
      "monto": 100,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 565,
      "nombre": "Down-sized 5th generation forecast",
      "fecha": "1/5/2021",
      "monto": 9,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 566,
      "nombre": "Pre-emptive reciprocal budgetary management",
      "fecha": "11/22/2020",
      "monto": 76,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 567,
      "nombre": "Programmable secondary algorithm",
      "fecha": "7/8/2020",
      "monto": 94,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 568,
      "nombre": "Enterprise-wide tertiary website",
      "fecha": "7/10/2020",
      "monto": 5,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 569,
      "nombre": "Visionary cohesive product",
      "fecha": "7/4/2020",
      "monto": 44,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 570,
      "nombre": "Persevering 24 hour hub",
      "fecha": "1/2/2021",
      "monto": 29,
      "tipo": 1,
      "categoria": 1
    }, {
      "id": 571,
      "nombre": "Face to face motivating Graphical User Interface",
      "fecha": "12/30/2020",
      "monto": 48,
      "tipo": 3,
      "categoria": 3
    }, {
      "id": 572,
      "nombre": "Synergized contextually-based analyzer",
      "fecha": "2/29/2020",
      "monto": 96,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 573,
      "nombre": "Automated static synergy",
      "fecha": "6/26/2020",
      "monto": 35,
      "tipo": 5,
      "categoria": 3
    }, {
      "id": 574,
      "nombre": "Horizontal background frame",
      "fecha": "3/22/2020",
      "monto": 50,
      "tipo": 2,
      "categoria": 3
    }, {
      "id": 575,
      "nombre": "Balanced eco-centric Graphical User Interface",
      "fecha": "1/1/2021",
      "monto": 63,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 576,
      "nombre": "Up-sized tertiary methodology",
      "fecha": "1/30/2021",
      "monto": 95,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 577,
      "nombre": "Triple-buffered fault-tolerant attitude",
      "fecha": "4/9/2020",
      "monto": 90,
      "tipo": 6,
      "categoria": 1
    }, {
      "id": 578,
      "nombre": "Focused radical success",
      "fecha": "6/23/2020",
      "monto": 31,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 579,
      "nombre": "Persevering coherent standardization",
      "fecha": "10/5/2020",
      "monto": 81,
      "tipo": 3,
      "categoria": 3
    }, {
      "id": 580,
      "nombre": "Team-oriented methodical pricing structure",
      "fecha": "6/28/2020",
      "monto": 77,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 581,
      "nombre": "Versatile fault-tolerant moderator",
      "fecha": "7/1/2020",
      "monto": 97,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 582,
      "nombre": "Devolved coherent interface",
      "fecha": "4/1/2020",
      "monto": 95,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 583,
      "nombre": "Switchable context-sensitive internet solution",
      "fecha": "11/9/2020",
      "monto": 96,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 584,
      "nombre": "Advanced intangible process improvement",
      "fecha": "10/9/2020",
      "monto": 27,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 585,
      "nombre": "Fundamental solution-oriented website",
      "fecha": "8/2/2020",
      "monto": 85,
      "tipo": 6,
      "categoria": 2
    }, {
      "id": 586,
      "nombre": "Pre-emptive scalable help-desk",
      "fecha": "9/22/2020",
      "monto": 33,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 587,
      "nombre": "Centralized fresh-thinking flexibility",
      "fecha": "11/10/2020",
      "monto": 77,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 588,
      "nombre": "Fundamental directional focus group",
      "fecha": "7/28/2020",
      "monto": 100,
      "tipo": 4,
      "categoria": 1
    }, {
      "id": 589,
      "nombre": "Universal scalable emulation",
      "fecha": "1/9/2021",
      "monto": 93,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 590,
      "nombre": "Advanced modular knowledge base",
      "fecha": "11/30/2020",
      "monto": 71,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 591,
      "nombre": "Organic system-worthy architecture",
      "fecha": "2/14/2020",
      "monto": 42,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 592,
      "nombre": "Upgradable system-worthy workforce",
      "fecha": "2/11/2020",
      "monto": 43,
      "tipo": 3,
      "categoria": 3
    }, {
      "id": 593,
      "nombre": "Persevering attitude-oriented strategy",
      "fecha": "4/30/2020",
      "monto": 29,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 594,
      "nombre": "Profit-focused empowering infrastructure",
      "fecha": "4/26/2020",
      "monto": 83,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 595,
      "nombre": "Assimilated content-based hardware",
      "fecha": "12/31/2020",
      "monto": 94,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 596,
      "nombre": "Digitized directional intranet",
      "fecha": "10/15/2020",
      "monto": 51,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 597,
      "nombre": "Stand-alone bottom-line infrastructure",
      "fecha": "9/18/2020",
      "monto": 71,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 598,
      "nombre": "Streamlined heuristic website",
      "fecha": "10/25/2020",
      "monto": 29,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 599,
      "nombre": "Realigned upward-trending website",
      "fecha": "12/19/2020",
      "monto": 40,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 600,
      "nombre": "Stand-alone disintermediate application",
      "fecha": "6/9/2020",
      "monto": 55,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 601,
      "nombre": "Persistent human-resource analyzer",
      "fecha": "8/16/2020",
      "monto": 75,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 602,
      "nombre": "Pre-emptive full-range help-desk",
      "fecha": "12/11/2020",
      "monto": 47,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 603,
      "nombre": "Extended 24 hour attitude",
      "fecha": "3/19/2020",
      "monto": 16,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 604,
      "nombre": "Assimilated local implementation",
      "fecha": "10/16/2020",
      "monto": 4,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 605,
      "nombre": "Switchable coherent success",
      "fecha": "10/18/2020",
      "monto": 12,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 606,
      "nombre": "Open-architected global frame",
      "fecha": "12/9/2020",
      "monto": 2,
      "tipo": 2,
      "categoria": 4
    }, {
      "id": 607,
      "nombre": "Expanded object-oriented firmware",
      "fecha": "8/24/2020",
      "monto": 93,
      "tipo": 5,
      "categoria": 3
    }, {
      "id": 608,
      "nombre": "Right-sized foreground application",
      "fecha": "9/15/2020",
      "monto": 45,
      "tipo": 6,
      "categoria": 2
    }, {
      "id": 609,
      "nombre": "Realigned zero defect monitoring",
      "fecha": "4/15/2020",
      "monto": 75,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 610,
      "nombre": "Organized full-range frame",
      "fecha": "2/26/2020",
      "monto": 81,
      "tipo": 6,
      "categoria": 1
    }, {
      "id": 611,
      "nombre": "Fully-configurable value-added challenge",
      "fecha": "5/19/2020",
      "monto": 33,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 612,
      "nombre": "Upgradable hybrid artificial intelligence",
      "fecha": "7/20/2020",
      "monto": 3,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 613,
      "nombre": "Multi-tiered 24 hour projection",
      "fecha": "3/8/2020",
      "monto": 64,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 614,
      "nombre": "Integrated leading edge protocol",
      "fecha": "9/22/2020",
      "monto": 78,
      "tipo": 2,
      "categoria": 3
    }, {
      "id": 615,
      "nombre": "Persevering multi-state core",
      "fecha": "9/9/2020",
      "monto": 11,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 616,
      "nombre": "Networked client-driven neural-net",
      "fecha": "11/21/2020",
      "monto": 68,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 617,
      "nombre": "Expanded national definition",
      "fecha": "1/20/2021",
      "monto": 16,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 618,
      "nombre": "Cross-group intermediate info-mediaries",
      "fecha": "2/25/2020",
      "monto": 74,
      "tipo": 2,
      "categoria": 4
    }, {
      "id": 619,
      "nombre": "Diverse static process improvement",
      "fecha": "5/14/2020",
      "monto": 87,
      "tipo": 1,
      "categoria": 1
    }, {
      "id": 620,
      "nombre": "Multi-tiered client-driven monitoring",
      "fecha": "10/4/2020",
      "monto": 66,
      "tipo": 3,
      "categoria": 3
    }, {
      "id": 621,
      "nombre": "Multi-lateral multi-tasking customer loyalty",
      "fecha": "9/14/2020",
      "monto": 89,
      "tipo": 2,
      "categoria": 4
    }, {
      "id": 622,
      "nombre": "Proactive mission-critical project",
      "fecha": "2/21/2020",
      "monto": 53,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 623,
      "nombre": "Business-focused local synergy",
      "fecha": "2/8/2020",
      "monto": 30,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 624,
      "nombre": "Robust radical synergy",
      "fecha": "11/25/2020",
      "monto": 97,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 625,
      "nombre": "Optimized local artificial intelligence",
      "fecha": "8/1/2020",
      "monto": 73,
      "tipo": 1,
      "categoria": 1
    }, {
      "id": 626,
      "nombre": "Versatile 24/7 parallelism",
      "fecha": "1/11/2021",
      "monto": 42,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 627,
      "nombre": "Networked transitional function",
      "fecha": "12/3/2020",
      "monto": 64,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 628,
      "nombre": "Upgradable hybrid orchestration",
      "fecha": "3/29/2020",
      "monto": 26,
      "tipo": 4,
      "categoria": 1
    }, {
      "id": 629,
      "nombre": "Adaptive fresh-thinking attitude",
      "fecha": "11/30/2020",
      "monto": 99,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 630,
      "nombre": "Automated 24/7 encoding",
      "fecha": "9/14/2020",
      "monto": 40,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 631,
      "nombre": "Configurable discrete leverage",
      "fecha": "2/16/2020",
      "monto": 15,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 632,
      "nombre": "User-friendly tangible internet solution",
      "fecha": "1/6/2021",
      "monto": 88,
      "tipo": 6,
      "categoria": 2
    }, {
      "id": 633,
      "nombre": "Seamless zero tolerance parallelism",
      "fecha": "3/21/2020",
      "monto": 98,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 634,
      "nombre": "Triple-buffered homogeneous budgetary management",
      "fecha": "9/9/2020",
      "monto": 98,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 635,
      "nombre": "Down-sized analyzing hardware",
      "fecha": "9/23/2020",
      "monto": 37,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 636,
      "nombre": "Compatible interactive challenge",
      "fecha": "11/13/2020",
      "monto": 73,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 637,
      "nombre": "Automated methodical internet solution",
      "fecha": "10/27/2020",
      "monto": 70,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 638,
      "nombre": "Advanced system-worthy protocol",
      "fecha": "1/10/2021",
      "monto": 18,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 639,
      "nombre": "Assimilated optimal success",
      "fecha": "3/21/2020",
      "monto": 84,
      "tipo": 1,
      "categoria": 1
    }, {
      "id": 640,
      "nombre": "Face to face uniform artificial intelligence",
      "fecha": "2/5/2020",
      "monto": 34,
      "tipo": 6,
      "categoria": 2
    }, {
      "id": 641,
      "nombre": "Configurable scalable projection",
      "fecha": "11/18/2020",
      "monto": 52,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 642,
      "nombre": "Total client-server focus group",
      "fecha": "1/1/2021",
      "monto": 27,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 643,
      "nombre": "Re-contextualized interactive projection",
      "fecha": "7/24/2020",
      "monto": 80,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 644,
      "nombre": "Organized explicit instruction set",
      "fecha": "9/4/2020",
      "monto": 1,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 645,
      "nombre": "Persistent hybrid workforce",
      "fecha": "12/6/2020",
      "monto": 17,
      "tipo": 6,
      "categoria": 2
    }, {
      "id": 646,
      "nombre": "Polarised dedicated analyzer",
      "fecha": "12/31/2020",
      "monto": 62,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 647,
      "nombre": "Open-source bi-directional protocol",
      "fecha": "6/17/2020",
      "monto": 97,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 648,
      "nombre": "Universal non-volatile internet solution",
      "fecha": "9/24/2020",
      "monto": 41,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 649,
      "nombre": "Right-sized asynchronous capability",
      "fecha": "12/13/2020",
      "monto": 67,
      "tipo": 6,
      "categoria": 1
    }, {
      "id": 650,
      "nombre": "Assimilated needs-based synergy",
      "fecha": "2/2/2021",
      "monto": 13,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 651,
      "nombre": "Automated national concept",
      "fecha": "6/28/2020",
      "monto": 90,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 652,
      "nombre": "Right-sized optimal local area network",
      "fecha": "4/4/2020",
      "monto": 10,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 653,
      "nombre": "Customer-focused asynchronous system engine",
      "fecha": "4/19/2020",
      "monto": 49,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 654,
      "nombre": "Distributed 6th generation core",
      "fecha": "9/20/2020",
      "monto": 36,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 655,
      "nombre": "Operative holistic paradigm",
      "fecha": "11/11/2020",
      "monto": 39,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 656,
      "nombre": "Customer-focused real-time superstructure",
      "fecha": "2/24/2020",
      "monto": 7,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 657,
      "nombre": "Seamless bi-directional project",
      "fecha": "12/27/2020",
      "monto": 72,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 658,
      "nombre": "Profound encompassing interface",
      "fecha": "12/29/2020",
      "monto": 83,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 659,
      "nombre": "Fundamental discrete extranet",
      "fecha": "1/7/2021",
      "monto": 51,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 660,
      "nombre": "Decentralized leading edge challenge",
      "fecha": "8/21/2020",
      "monto": 89,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 661,
      "nombre": "Multi-lateral grid-enabled hardware",
      "fecha": "11/18/2020",
      "monto": 77,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 662,
      "nombre": "Networked well-modulated archive",
      "fecha": "5/17/2020",
      "monto": 32,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 663,
      "nombre": "Front-line content-based time-frame",
      "fecha": "4/13/2020",
      "monto": 8,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 664,
      "nombre": "Reverse-engineered system-worthy database",
      "fecha": "7/7/2020",
      "monto": 78,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 665,
      "nombre": "Diverse transitional task-force",
      "fecha": "7/22/2020",
      "monto": 53,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 666,
      "nombre": "Virtual content-based methodology",
      "fecha": "8/24/2020",
      "monto": 53,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 667,
      "nombre": "Self-enabling radical circuit",
      "fecha": "1/8/2021",
      "monto": 31,
      "tipo": 6,
      "categoria": 1
    }, {
      "id": 668,
      "nombre": "Customizable user-facing neural-net",
      "fecha": "6/14/2020",
      "monto": 44,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 669,
      "nombre": "Devolved client-driven capacity",
      "fecha": "9/28/2020",
      "monto": 18,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 670,
      "nombre": "Quality-focused full-range concept",
      "fecha": "5/21/2020",
      "monto": 98,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 671,
      "nombre": "Organic solution-oriented orchestration",
      "fecha": "2/25/2020",
      "monto": 22,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 672,
      "nombre": "Balanced context-sensitive challenge",
      "fecha": "9/7/2020",
      "monto": 76,
      "tipo": 1,
      "categoria": 1
    }, {
      "id": 673,
      "nombre": "Customizable holistic database",
      "fecha": "11/11/2020",
      "monto": 63,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 674,
      "nombre": "User-centric disintermediate structure",
      "fecha": "10/3/2020",
      "monto": 27,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 675,
      "nombre": "Progressive tertiary capacity",
      "fecha": "7/24/2020",
      "monto": 76,
      "tipo": 6,
      "categoria": 2
    }, {
      "id": 676,
      "nombre": "Reverse-engineered mission-critical strategy",
      "fecha": "3/25/2020",
      "monto": 53,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 677,
      "nombre": "User-friendly object-oriented alliance",
      "fecha": "11/27/2020",
      "monto": 69,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 678,
      "nombre": "Persistent holistic implementation",
      "fecha": "2/9/2020",
      "monto": 45,
      "tipo": 3,
      "categoria": 3
    }, {
      "id": 679,
      "nombre": "Team-oriented bi-directional service-desk",
      "fecha": "9/20/2020",
      "monto": 100,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 680,
      "nombre": "Seamless dedicated local area network",
      "fecha": "6/21/2020",
      "monto": 53,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 681,
      "nombre": "Configurable composite superstructure",
      "fecha": "5/18/2020",
      "monto": 50,
      "tipo": 3,
      "categoria": 3
    }, {
      "id": 682,
      "nombre": "Sharable scalable leverage",
      "fecha": "11/18/2020",
      "monto": 34,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 683,
      "nombre": "Polarised next generation capability",
      "fecha": "3/5/2020",
      "monto": 56,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 684,
      "nombre": "Streamlined high-level hardware",
      "fecha": "10/7/2020",
      "monto": 15,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 685,
      "nombre": "Profit-focused bandwidth-monitored utilisation",
      "fecha": "8/24/2020",
      "monto": 73,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 686,
      "nombre": "Reduced holistic paradigm",
      "fecha": "9/18/2020",
      "monto": 82,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 687,
      "nombre": "Phased logistical approach",
      "fecha": "5/22/2020",
      "monto": 56,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 688,
      "nombre": "Pre-emptive well-modulated framework",
      "fecha": "6/22/2020",
      "monto": 8,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 689,
      "nombre": "Upgradable value-added neural-net",
      "fecha": "12/29/2020",
      "monto": 10,
      "tipo": 4,
      "categoria": 1
    }, {
      "id": 690,
      "nombre": "Object-based bifurcated matrix",
      "fecha": "7/17/2020",
      "monto": 66,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 691,
      "nombre": "Expanded methodical function",
      "fecha": "11/10/2020",
      "monto": 36,
      "tipo": 6,
      "categoria": 1
    }, {
      "id": 692,
      "nombre": "Polarised well-modulated utilisation",
      "fecha": "10/6/2020",
      "monto": 89,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 693,
      "nombre": "Configurable local complexity",
      "fecha": "3/26/2020",
      "monto": 96,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 694,
      "nombre": "Advanced actuating definition",
      "fecha": "8/31/2020",
      "monto": 27,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 695,
      "nombre": "Proactive analyzing approach",
      "fecha": "3/16/2020",
      "monto": 90,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 696,
      "nombre": "Sharable user-facing approach",
      "fecha": "4/6/2020",
      "monto": 79,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 697,
      "nombre": "Automated discrete hub",
      "fecha": "7/6/2020",
      "monto": 20,
      "tipo": 2,
      "categoria": 3
    }, {
      "id": 698,
      "nombre": "Diverse real-time matrix",
      "fecha": "10/21/2020",
      "monto": 25,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 699,
      "nombre": "Visionary 3rd generation software",
      "fecha": "12/14/2020",
      "monto": 42,
      "tipo": 3,
      "categoria": 3
    }, {
      "id": 700,
      "nombre": "Intuitive local internet solution",
      "fecha": "10/17/2020",
      "monto": 91,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 701,
      "nombre": "Secured eco-centric capability",
      "fecha": "2/12/2020",
      "monto": 74,
      "tipo": 3,
      "categoria": 3
    }, {
      "id": 702,
      "nombre": "Pre-emptive directional task-force",
      "fecha": "2/19/2020",
      "monto": 87,
      "tipo": 6,
      "categoria": 2
    }, {
      "id": 703,
      "nombre": "Expanded well-modulated attitude",
      "fecha": "5/7/2020",
      "monto": 96,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 704,
      "nombre": "Cross-group empowering alliance",
      "fecha": "8/22/2020",
      "monto": 74,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 705,
      "nombre": "Versatile modular artificial intelligence",
      "fecha": "10/30/2020",
      "monto": 28,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 706,
      "nombre": "Right-sized system-worthy algorithm",
      "fecha": "6/20/2020",
      "monto": 85,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 707,
      "nombre": "Decentralized dynamic artificial intelligence",
      "fecha": "5/12/2020",
      "monto": 35,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 708,
      "nombre": "Self-enabling neutral hierarchy",
      "fecha": "8/10/2020",
      "monto": 34,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 709,
      "nombre": "Distributed grid-enabled support",
      "fecha": "5/11/2020",
      "monto": 16,
      "tipo": 4,
      "categoria": 1
    }, {
      "id": 710,
      "nombre": "Monitored mobile migration",
      "fecha": "9/6/2020",
      "monto": 65,
      "tipo": 4,
      "categoria": 1
    }, {
      "id": 711,
      "nombre": "Reverse-engineered systematic leverage",
      "fecha": "10/29/2020",
      "monto": 96,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 712,
      "nombre": "Synchronised actuating capability",
      "fecha": "5/19/2020",
      "monto": 53,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 713,
      "nombre": "Seamless 24/7 application",
      "fecha": "12/30/2020",
      "monto": 10,
      "tipo": 5,
      "categoria": 3
    }, {
      "id": 714,
      "nombre": "Team-oriented object-oriented leverage",
      "fecha": "1/13/2021",
      "monto": 78,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 715,
      "nombre": "Expanded fresh-thinking collaboration",
      "fecha": "3/1/2020",
      "monto": 46,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 716,
      "nombre": "Function-based logistical moderator",
      "fecha": "6/17/2020",
      "monto": 97,
      "tipo": 1,
      "categoria": 1
    }, {
      "id": 717,
      "nombre": "Down-sized next generation circuit",
      "fecha": "10/15/2020",
      "monto": 55,
      "tipo": 2,
      "categoria": 4
    }, {
      "id": 718,
      "nombre": "Expanded stable success",
      "fecha": "6/25/2020",
      "monto": 52,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 719,
      "nombre": "Function-based next generation synergy",
      "fecha": "8/8/2020",
      "monto": 31,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 720,
      "nombre": "Reduced 5th generation groupware",
      "fecha": "6/30/2020",
      "monto": 30,
      "tipo": 2,
      "categoria": 4
    }, {
      "id": 721,
      "nombre": "Seamless mobile orchestration",
      "fecha": "12/24/2020",
      "monto": 62,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 722,
      "nombre": "Front-line bifurcated database",
      "fecha": "3/12/2020",
      "monto": 58,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 723,
      "nombre": "Inverse high-level productivity",
      "fecha": "7/8/2020",
      "monto": 100,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 724,
      "nombre": "Customizable executive methodology",
      "fecha": "12/18/2020",
      "monto": 99,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 725,
      "nombre": "Robust bottom-line workforce",
      "fecha": "1/6/2021",
      "monto": 80,
      "tipo": 2,
      "categoria": 3
    }, {
      "id": 726,
      "nombre": "Vision-oriented local local area network",
      "fecha": "10/6/2020",
      "monto": 36,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 727,
      "nombre": "Synergized executive toolset",
      "fecha": "6/7/2020",
      "monto": 40,
      "tipo": 1,
      "categoria": 1
    }, {
      "id": 728,
      "nombre": "Multi-layered leading edge frame",
      "fecha": "9/9/2020",
      "monto": 88,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 729,
      "nombre": "Enhanced neutral moratorium",
      "fecha": "10/19/2020",
      "monto": 3,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 730,
      "nombre": "Reverse-engineered attitude-oriented utilisation",
      "fecha": "6/2/2020",
      "monto": 14,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 731,
      "nombre": "Devolved fresh-thinking info-mediaries",
      "fecha": "9/30/2020",
      "monto": 44,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 732,
      "nombre": "Distributed analyzing matrices",
      "fecha": "4/24/2020",
      "monto": 5,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 733,
      "nombre": "Balanced heuristic moratorium",
      "fecha": "6/26/2020",
      "monto": 66,
      "tipo": 1,
      "categoria": 1
    }, {
      "id": 734,
      "nombre": "Quality-focused impactful local area network",
      "fecha": "4/24/2020",
      "monto": 89,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 735,
      "nombre": "Synergized non-volatile groupware",
      "fecha": "10/11/2020",
      "monto": 48,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 736,
      "nombre": "Persistent executive frame",
      "fecha": "12/20/2020",
      "monto": 41,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 737,
      "nombre": "Re-contextualized bi-directional portal",
      "fecha": "6/24/2020",
      "monto": 22,
      "tipo": 1,
      "categoria": 1
    }, {
      "id": 738,
      "nombre": "Reduced asynchronous conglomeration",
      "fecha": "4/28/2020",
      "monto": 38,
      "tipo": 2,
      "categoria": 3
    }, {
      "id": 739,
      "nombre": "Fully-configurable systemic algorithm",
      "fecha": "9/18/2020",
      "monto": 7,
      "tipo": 3,
      "categoria": 3
    }, {
      "id": 740,
      "nombre": "Persistent dedicated system engine",
      "fecha": "10/1/2020",
      "monto": 15,
      "tipo": 5,
      "categoria": 3
    }, {
      "id": 741,
      "nombre": "Customer-focused 24 hour infrastructure",
      "fecha": "5/23/2020",
      "monto": 32,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 742,
      "nombre": "Managed secondary local area network",
      "fecha": "6/17/2020",
      "monto": 33,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 743,
      "nombre": "Integrated non-volatile database",
      "fecha": "2/17/2020",
      "monto": 83,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 744,
      "nombre": "Re-engineered background model",
      "fecha": "3/16/2020",
      "monto": 21,
      "tipo": 4,
      "categoria": 1
    }, {
      "id": 745,
      "nombre": "Optimized upward-trending service-desk",
      "fecha": "10/22/2020",
      "monto": 24,
      "tipo": 2,
      "categoria": 4
    }, {
      "id": 746,
      "nombre": "Organic empowering extranet",
      "fecha": "5/31/2020",
      "monto": 22,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 747,
      "nombre": "Balanced bandwidth-monitored support",
      "fecha": "4/5/2020",
      "monto": 4,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 748,
      "nombre": "Multi-tiered multi-state middleware",
      "fecha": "3/18/2020",
      "monto": 90,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 749,
      "nombre": "Re-engineered homogeneous internet solution",
      "fecha": "4/10/2020",
      "monto": 82,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 750,
      "nombre": "Robust coherent attitude",
      "fecha": "11/4/2020",
      "monto": 26,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 751,
      "nombre": "Quality-focused scalable paradigm",
      "fecha": "4/28/2020",
      "monto": 9,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 752,
      "nombre": "Re-contextualized human-resource neural-net",
      "fecha": "3/17/2020",
      "monto": 29,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 753,
      "nombre": "Future-proofed optimal product",
      "fecha": "12/5/2020",
      "monto": 44,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 754,
      "nombre": "Customer-focused client-server software",
      "fecha": "11/1/2020",
      "monto": 78,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 755,
      "nombre": "Seamless dynamic capacity",
      "fecha": "3/11/2020",
      "monto": 35,
      "tipo": 4,
      "categoria": 1
    }, {
      "id": 756,
      "nombre": "Customer-focused client-driven methodology",
      "fecha": "7/12/2020",
      "monto": 72,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 757,
      "nombre": "Multi-channelled regional implementation",
      "fecha": "2/24/2020",
      "monto": 4,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 758,
      "nombre": "Up-sized 24/7 database",
      "fecha": "8/24/2020",
      "monto": 43,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 759,
      "nombre": "Profound leading edge architecture",
      "fecha": "11/16/2020",
      "monto": 90,
      "tipo": 3,
      "categoria": 3
    }, {
      "id": 760,
      "nombre": "Automated object-oriented Graphic Interface",
      "fecha": "7/30/2020",
      "monto": 44,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 761,
      "nombre": "Automated hybrid info-mediaries",
      "fecha": "5/27/2020",
      "monto": 47,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 762,
      "nombre": "Progressive user-facing orchestration",
      "fecha": "6/2/2020",
      "monto": 93,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 763,
      "nombre": "Re-engineered context-sensitive monitoring",
      "fecha": "10/18/2020",
      "monto": 90,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 764,
      "nombre": "Fully-configurable national flexibility",
      "fecha": "11/1/2020",
      "monto": 98,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 765,
      "nombre": "Realigned hybrid help-desk",
      "fecha": "10/10/2020",
      "monto": 84,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 766,
      "nombre": "Innovative secondary access",
      "fecha": "3/28/2020",
      "monto": 91,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 767,
      "nombre": "Robust dedicated approach",
      "fecha": "1/2/2021",
      "monto": 64,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 768,
      "nombre": "Operative transitional definition",
      "fecha": "3/18/2020",
      "monto": 17,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 769,
      "nombre": "Monitored encompassing archive",
      "fecha": "1/12/2021",
      "monto": 50,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 770,
      "nombre": "Open-source well-modulated groupware",
      "fecha": "6/7/2020",
      "monto": 68,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 771,
      "nombre": "Expanded heuristic internet solution",
      "fecha": "8/11/2020",
      "monto": 13,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 772,
      "nombre": "Realigned value-added encoding",
      "fecha": "5/8/2020",
      "monto": 19,
      "tipo": 2,
      "categoria": 3
    }, {
      "id": 773,
      "nombre": "Progressive disintermediate archive",
      "fecha": "1/29/2021",
      "monto": 52,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 774,
      "nombre": "Decentralized systematic migration",
      "fecha": "12/31/2020",
      "monto": 18,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 775,
      "nombre": "Realigned bandwidth-monitored frame",
      "fecha": "11/30/2020",
      "monto": 17,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 776,
      "nombre": "Cross-platform bottom-line framework",
      "fecha": "6/19/2020",
      "monto": 100,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 777,
      "nombre": "Devolved fault-tolerant leverage",
      "fecha": "1/22/2021",
      "monto": 95,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 778,
      "nombre": "Extended cohesive conglomeration",
      "fecha": "9/11/2020",
      "monto": 81,
      "tipo": 4,
      "categoria": 1
    }, {
      "id": 779,
      "nombre": "Synchronised upward-trending archive",
      "fecha": "9/13/2020",
      "monto": 1,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 780,
      "nombre": "Future-proofed solution-oriented neural-net",
      "fecha": "5/11/2020",
      "monto": 35,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 781,
      "nombre": "Optimized tertiary intranet",
      "fecha": "5/16/2020",
      "monto": 90,
      "tipo": 6,
      "categoria": 2
    }, {
      "id": 782,
      "nombre": "Streamlined bandwidth-monitored collaboration",
      "fecha": "11/19/2020",
      "monto": 34,
      "tipo": 3,
      "categoria": 3
    }, {
      "id": 783,
      "nombre": "Public-key hybrid implementation",
      "fecha": "7/4/2020",
      "monto": 56,
      "tipo": 2,
      "categoria": 4
    }, {
      "id": 784,
      "nombre": "Integrated solution-oriented project",
      "fecha": "2/19/2020",
      "monto": 60,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 785,
      "nombre": "Integrated context-sensitive leverage",
      "fecha": "7/13/2020",
      "monto": 25,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 786,
      "nombre": "Team-oriented directional superstructure",
      "fecha": "5/27/2020",
      "monto": 23,
      "tipo": 2,
      "categoria": 4
    }, {
      "id": 787,
      "nombre": "Versatile modular budgetary management",
      "fecha": "9/15/2020",
      "monto": 9,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 788,
      "nombre": "Public-key 5th generation time-frame",
      "fecha": "4/14/2020",
      "monto": 46,
      "tipo": 6,
      "categoria": 1
    }, {
      "id": 789,
      "nombre": "Proactive high-level flexibility",
      "fecha": "6/20/2020",
      "monto": 2,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 790,
      "nombre": "Fundamental needs-based budgetary management",
      "fecha": "5/10/2020",
      "monto": 33,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 791,
      "nombre": "Reverse-engineered foreground firmware",
      "fecha": "12/20/2020",
      "monto": 13,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 792,
      "nombre": "Profit-focused full-range collaboration",
      "fecha": "9/4/2020",
      "monto": 16,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 793,
      "nombre": "Total real-time service-desk",
      "fecha": "2/9/2020",
      "monto": 17,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 794,
      "nombre": "Profound bottom-line attitude",
      "fecha": "11/22/2020",
      "monto": 28,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 795,
      "nombre": "Open-architected 4th generation focus group",
      "fecha": "8/7/2020",
      "monto": 31,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 796,
      "nombre": "Self-enabling static model",
      "fecha": "4/14/2020",
      "monto": 15,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 797,
      "nombre": "Organized 6th generation concept",
      "fecha": "3/11/2020",
      "monto": 55,
      "tipo": 5,
      "categoria": 3
    }, {
      "id": 798,
      "nombre": "User-centric zero defect collaboration",
      "fecha": "1/5/2021",
      "monto": 36,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 799,
      "nombre": "Public-key mobile process improvement",
      "fecha": "1/25/2021",
      "monto": 24,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 800,
      "nombre": "Future-proofed foreground hardware",
      "fecha": "10/31/2020",
      "monto": 23,
      "tipo": 2,
      "categoria": 4
    }, {
      "id": 801,
      "nombre": "Integrated encompassing software",
      "fecha": "10/10/2020",
      "monto": 56,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 802,
      "nombre": "Progressive tangible monitoring",
      "fecha": "5/31/2020",
      "monto": 29,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 803,
      "nombre": "Reactive even-keeled definition",
      "fecha": "6/30/2020",
      "monto": 44,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 804,
      "nombre": "Distributed 5th generation approach",
      "fecha": "10/24/2020",
      "monto": 83,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 805,
      "nombre": "Advanced impactful open system",
      "fecha": "12/15/2020",
      "monto": 87,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 806,
      "nombre": "Operative zero tolerance function",
      "fecha": "12/27/2020",
      "monto": 33,
      "tipo": 6,
      "categoria": 1
    }, {
      "id": 807,
      "nombre": "Business-focused real-time installation",
      "fecha": "12/1/2020",
      "monto": 13,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 808,
      "nombre": "Multi-tiered multi-state workforce",
      "fecha": "3/6/2020",
      "monto": 30,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 809,
      "nombre": "Enterprise-wide hybrid application",
      "fecha": "2/10/2020",
      "monto": 77,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 810,
      "nombre": "Fully-configurable even-keeled project",
      "fecha": "1/9/2021",
      "monto": 29,
      "tipo": 4,
      "categoria": 1
    }, {
      "id": 811,
      "nombre": "Implemented radical infrastructure",
      "fecha": "6/27/2020",
      "monto": 71,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 812,
      "nombre": "Streamlined multimedia open architecture",
      "fecha": "12/4/2020",
      "monto": 59,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 813,
      "nombre": "Persevering background Graphical User Interface",
      "fecha": "3/3/2020",
      "monto": 26,
      "tipo": 1,
      "categoria": 1
    }, {
      "id": 814,
      "nombre": "Digitized global data-warehouse",
      "fecha": "2/5/2020",
      "monto": 51,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 815,
      "nombre": "Function-based analyzing superstructure",
      "fecha": "4/18/2020",
      "monto": 48,
      "tipo": 1,
      "categoria": 1
    }, {
      "id": 816,
      "nombre": "Assimilated reciprocal benchmark",
      "fecha": "10/27/2020",
      "monto": 8,
      "tipo": 2,
      "categoria": 4
    }, {
      "id": 817,
      "nombre": "Team-oriented client-server core",
      "fecha": "4/7/2020",
      "monto": 71,
      "tipo": 3,
      "categoria": 3
    }, {
      "id": 818,
      "nombre": "Visionary multi-state access",
      "fecha": "5/27/2020",
      "monto": 97,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 819,
      "nombre": "Secured leading edge local area network",
      "fecha": "10/14/2020",
      "monto": 19,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 820,
      "nombre": "Future-proofed regional knowledge user",
      "fecha": "11/17/2020",
      "monto": 12,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 821,
      "nombre": "Networked real-time function",
      "fecha": "8/30/2020",
      "monto": 17,
      "tipo": 2,
      "categoria": 3
    }, {
      "id": 822,
      "nombre": "Synergistic motivating support",
      "fecha": "12/9/2020",
      "monto": 49,
      "tipo": 1,
      "categoria": 1
    }, {
      "id": 823,
      "nombre": "Polarised cohesive secured line",
      "fecha": "6/10/2020",
      "monto": 37,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 824,
      "nombre": "Persistent multi-state workforce",
      "fecha": "10/15/2020",
      "monto": 70,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 825,
      "nombre": "Visionary zero tolerance analyzer",
      "fecha": "2/7/2020",
      "monto": 49,
      "tipo": 2,
      "categoria": 3
    }, {
      "id": 826,
      "nombre": "Digitized client-driven help-desk",
      "fecha": "12/27/2020",
      "monto": 65,
      "tipo": 2,
      "categoria": 3
    }, {
      "id": 827,
      "nombre": "Seamless explicit moderator",
      "fecha": "12/27/2020",
      "monto": 99,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 828,
      "nombre": "Fundamental systematic circuit",
      "fecha": "1/31/2021",
      "monto": 12,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 829,
      "nombre": "Right-sized bandwidth-monitored complexity",
      "fecha": "2/4/2020",
      "monto": 69,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 830,
      "nombre": "Synergistic well-modulated middleware",
      "fecha": "3/13/2020",
      "monto": 73,
      "tipo": 6,
      "categoria": 1
    }, {
      "id": 831,
      "nombre": "Self-enabling neutral knowledge user",
      "fecha": "5/2/2020",
      "monto": 91,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 832,
      "nombre": "User-centric foreground implementation",
      "fecha": "12/1/2020",
      "monto": 63,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 833,
      "nombre": "Versatile systemic methodology",
      "fecha": "5/10/2020",
      "monto": 49,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 834,
      "nombre": "Monitored 3rd generation website",
      "fecha": "7/9/2020",
      "monto": 90,
      "tipo": 3,
      "categoria": 3
    }, {
      "id": 835,
      "nombre": "Re-engineered tangible paradigm",
      "fecha": "5/12/2020",
      "monto": 50,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 836,
      "nombre": "Polarised cohesive initiative",
      "fecha": "2/5/2020",
      "monto": 14,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 837,
      "nombre": "Exclusive didactic hub",
      "fecha": "2/27/2020",
      "monto": 69,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 838,
      "nombre": "Realigned coherent interface",
      "fecha": "1/10/2021",
      "monto": 28,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 839,
      "nombre": "Digitized system-worthy hardware",
      "fecha": "1/13/2021",
      "monto": 64,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 840,
      "nombre": "Secured homogeneous collaboration",
      "fecha": "10/7/2020",
      "monto": 89,
      "tipo": 3,
      "categoria": 3
    }, {
      "id": 841,
      "nombre": "Implemented radical customer loyalty",
      "fecha": "10/24/2020",
      "monto": 61,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 842,
      "nombre": "Right-sized foreground internet solution",
      "fecha": "2/14/2020",
      "monto": 7,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 843,
      "nombre": "Synergized bifurcated knowledge base",
      "fecha": "12/28/2020",
      "monto": 22,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 844,
      "nombre": "Team-oriented logistical projection",
      "fecha": "12/15/2020",
      "monto": 21,
      "tipo": 2,
      "categoria": 3
    }, {
      "id": 845,
      "nombre": "Synergistic context-sensitive access",
      "fecha": "5/4/2020",
      "monto": 42,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 846,
      "nombre": "Visionary optimal function",
      "fecha": "5/3/2020",
      "monto": 14,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 847,
      "nombre": "Enterprise-wide empowering migration",
      "fecha": "9/27/2020",
      "monto": 84,
      "tipo": 2,
      "categoria": 4
    }, {
      "id": 848,
      "nombre": "Stand-alone well-modulated definition",
      "fecha": "10/21/2020",
      "monto": 59,
      "tipo": 5,
      "categoria": 3
    }, {
      "id": 849,
      "nombre": "Down-sized mission-critical local area network",
      "fecha": "1/30/2021",
      "monto": 28,
      "tipo": 4,
      "categoria": 1
    }, {
      "id": 850,
      "nombre": "Centralized optimizing attitude",
      "fecha": "4/26/2020",
      "monto": 33,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 851,
      "nombre": "Advanced disintermediate core",
      "fecha": "8/19/2020",
      "monto": 15,
      "tipo": 3,
      "categoria": 3
    }, {
      "id": 852,
      "nombre": "Focused zero administration support",
      "fecha": "10/2/2020",
      "monto": 55,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 853,
      "nombre": "Reverse-engineered composite hardware",
      "fecha": "5/28/2020",
      "monto": 10,
      "tipo": 3,
      "categoria": 3
    }, {
      "id": 854,
      "nombre": "Progressive contextually-based moderator",
      "fecha": "6/5/2020",
      "monto": 48,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 855,
      "nombre": "Open-architected exuding local area network",
      "fecha": "9/26/2020",
      "monto": 63,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 856,
      "nombre": "Self-enabling scalable access",
      "fecha": "5/19/2020",
      "monto": 27,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 857,
      "nombre": "Phased eco-centric superstructure",
      "fecha": "6/14/2020",
      "monto": 51,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 858,
      "nombre": "Persevering impactful interface",
      "fecha": "7/23/2020",
      "monto": 96,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 859,
      "nombre": "Right-sized bifurcated productivity",
      "fecha": "8/15/2020",
      "monto": 6,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 860,
      "nombre": "Configurable 5th generation internet solution",
      "fecha": "12/13/2020",
      "monto": 71,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 861,
      "nombre": "Right-sized reciprocal interface",
      "fecha": "6/21/2020",
      "monto": 23,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 862,
      "nombre": "Stand-alone mission-critical solution",
      "fecha": "4/18/2020",
      "monto": 44,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 863,
      "nombre": "Inverse attitude-oriented collaboration",
      "fecha": "7/7/2020",
      "monto": 88,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 864,
      "nombre": "Optional non-volatile standardization",
      "fecha": "12/29/2020",
      "monto": 7,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 865,
      "nombre": "Synergized solution-oriented application",
      "fecha": "7/20/2020",
      "monto": 10,
      "tipo": 2,
      "categoria": 4
    }, {
      "id": 866,
      "nombre": "Devolved mobile instruction set",
      "fecha": "1/12/2021",
      "monto": 25,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 867,
      "nombre": "Integrated transitional model",
      "fecha": "3/7/2020",
      "monto": 47,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 868,
      "nombre": "Reduced executive customer loyalty",
      "fecha": "1/11/2021",
      "monto": 59,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 869,
      "nombre": "Ergonomic impactful access",
      "fecha": "10/11/2020",
      "monto": 61,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 870,
      "nombre": "Integrated value-added firmware",
      "fecha": "7/4/2020",
      "monto": 64,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 871,
      "nombre": "Multi-lateral optimizing paradigm",
      "fecha": "2/27/2020",
      "monto": 100,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 872,
      "nombre": "Devolved 24 hour concept",
      "fecha": "3/22/2020",
      "monto": 16,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 873,
      "nombre": "Up-sized didactic orchestration",
      "fecha": "8/26/2020",
      "monto": 61,
      "tipo": 3,
      "categoria": 3
    }, {
      "id": 874,
      "nombre": "Enterprise-wide disintermediate projection",
      "fecha": "12/10/2020",
      "monto": 94,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 875,
      "nombre": "Integrated multimedia hierarchy",
      "fecha": "5/12/2020",
      "monto": 13,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 876,
      "nombre": "Decentralized 24 hour time-frame",
      "fecha": "3/4/2020",
      "monto": 76,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 877,
      "nombre": "Multi-layered 6th generation concept",
      "fecha": "9/26/2020",
      "monto": 4,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 878,
      "nombre": "Reactive heuristic paradigm",
      "fecha": "1/4/2021",
      "monto": 2,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 879,
      "nombre": "Polarised 24 hour hierarchy",
      "fecha": "11/26/2020",
      "monto": 28,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 880,
      "nombre": "Triple-buffered optimizing contingency",
      "fecha": "7/19/2020",
      "monto": 40,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 881,
      "nombre": "Multi-lateral 24 hour firmware",
      "fecha": "2/22/2020",
      "monto": 61,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 882,
      "nombre": "Right-sized incremental portal",
      "fecha": "12/19/2020",
      "monto": 63,
      "tipo": 5,
      "categoria": 3
    }, {
      "id": 883,
      "nombre": "Re-engineered context-sensitive encoding",
      "fecha": "12/26/2020",
      "monto": 13,
      "tipo": 6,
      "categoria": 2
    }, {
      "id": 884,
      "nombre": "Universal 24 hour hierarchy",
      "fecha": "8/30/2020",
      "monto": 66,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 885,
      "nombre": "Front-line local website",
      "fecha": "2/8/2020",
      "monto": 45,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 886,
      "nombre": "Secured global matrices",
      "fecha": "12/2/2020",
      "monto": 68,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 887,
      "nombre": "Multi-tiered solution-oriented protocol",
      "fecha": "4/24/2020",
      "monto": 22,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 888,
      "nombre": "Seamless systemic website",
      "fecha": "11/6/2020",
      "monto": 24,
      "tipo": 6,
      "categoria": 2
    }, {
      "id": 889,
      "nombre": "Multi-lateral eco-centric firmware",
      "fecha": "7/20/2020",
      "monto": 11,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 890,
      "nombre": "Organic explicit encoding",
      "fecha": "11/25/2020",
      "monto": 21,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 891,
      "nombre": "Versatile multi-tasking collaboration",
      "fecha": "11/30/2020",
      "monto": 74,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 892,
      "nombre": "Progressive demand-driven throughput",
      "fecha": "3/29/2020",
      "monto": 46,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 893,
      "nombre": "Face to face next generation pricing structure",
      "fecha": "1/17/2021",
      "monto": 43,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 894,
      "nombre": "Managed bifurcated moratorium",
      "fecha": "6/13/2020",
      "monto": 65,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 895,
      "nombre": "De-engineered tangible success",
      "fecha": "6/24/2020",
      "monto": 24,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 896,
      "nombre": "Multi-layered fault-tolerant interface",
      "fecha": "5/11/2020",
      "monto": 37,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 897,
      "nombre": "Horizontal value-added instruction set",
      "fecha": "4/14/2020",
      "monto": 66,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 898,
      "nombre": "Synergistic context-sensitive instruction set",
      "fecha": "1/4/2021",
      "monto": 38,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 899,
      "nombre": "Mandatory static algorithm",
      "fecha": "8/21/2020",
      "monto": 23,
      "tipo": 6,
      "categoria": 2
    }, {
      "id": 900,
      "nombre": "Realigned well-modulated implementation",
      "fecha": "8/11/2020",
      "monto": 24,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 901,
      "nombre": "Universal multimedia software",
      "fecha": "4/1/2020",
      "monto": 46,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 902,
      "nombre": "Virtual demand-driven methodology",
      "fecha": "4/20/2020",
      "monto": 4,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 903,
      "nombre": "Distributed foreground attitude",
      "fecha": "1/16/2021",
      "monto": 89,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 904,
      "nombre": "Public-key exuding open architecture",
      "fecha": "2/21/2020",
      "monto": 45,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 905,
      "nombre": "Sharable object-oriented array",
      "fecha": "10/17/2020",
      "monto": 21,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 906,
      "nombre": "Versatile dynamic encryption",
      "fecha": "11/11/2020",
      "monto": 46,
      "tipo": 3,
      "categoria": 3
    }, {
      "id": 907,
      "nombre": "Re-contextualized attitude-oriented core",
      "fecha": "5/16/2020",
      "monto": 90,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 908,
      "nombre": "Self-enabling client-server success",
      "fecha": "6/1/2020",
      "monto": 54,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 909,
      "nombre": "Synergized disintermediate solution",
      "fecha": "10/27/2020",
      "monto": 29,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 910,
      "nombre": "Extended incremental middleware",
      "fecha": "9/20/2020",
      "monto": 89,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 911,
      "nombre": "Front-line real-time intranet",
      "fecha": "4/20/2020",
      "monto": 43,
      "tipo": 2,
      "categoria": 4
    }, {
      "id": 912,
      "nombre": "Operative background task-force",
      "fecha": "10/30/2020",
      "monto": 65,
      "tipo": 6,
      "categoria": 1
    }, {
      "id": 913,
      "nombre": "Balanced coherent core",
      "fecha": "12/25/2020",
      "monto": 8,
      "tipo": 6,
      "categoria": 1
    }, {
      "id": 914,
      "nombre": "Balanced modular standardization",
      "fecha": "4/13/2020",
      "monto": 62,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 915,
      "nombre": "Up-sized 4th generation hierarchy",
      "fecha": "8/1/2020",
      "monto": 15,
      "tipo": 6,
      "categoria": 2
    }, {
      "id": 916,
      "nombre": "Operative interactive throughput",
      "fecha": "1/1/2021",
      "monto": 15,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 917,
      "nombre": "Synchronised directional hardware",
      "fecha": "3/17/2020",
      "monto": 43,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 918,
      "nombre": "Balanced bottom-line circuit",
      "fecha": "10/7/2020",
      "monto": 81,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 919,
      "nombre": "Organized heuristic moderator",
      "fecha": "11/21/2020",
      "monto": 43,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 920,
      "nombre": "Seamless demand-driven throughput",
      "fecha": "4/1/2020",
      "monto": 33,
      "tipo": 2,
      "categoria": 3
    }, {
      "id": 921,
      "nombre": "Compatible didactic synergy",
      "fecha": "2/4/2020",
      "monto": 85,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 922,
      "nombre": "Persevering demand-driven success",
      "fecha": "2/8/2020",
      "monto": 26,
      "tipo": 5,
      "categoria": 3
    }, {
      "id": 923,
      "nombre": "Fully-configurable 3rd generation knowledge base",
      "fecha": "5/31/2020",
      "monto": 28,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 924,
      "nombre": "Fully-configurable zero defect capacity",
      "fecha": "2/12/2020",
      "monto": 23,
      "tipo": 4,
      "categoria": 1
    }, {
      "id": 925,
      "nombre": "Enterprise-wide systematic Graphic Interface",
      "fecha": "6/22/2020",
      "monto": 5,
      "tipo": 5,
      "categoria": 3
    }, {
      "id": 926,
      "nombre": "Synergized clear-thinking internet solution",
      "fecha": "9/17/2020",
      "monto": 28,
      "tipo": 4,
      "categoria": 1
    }, {
      "id": 927,
      "nombre": "Digitized dynamic interface",
      "fecha": "9/2/2020",
      "monto": 79,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 928,
      "nombre": "Integrated solution-oriented open system",
      "fecha": "7/4/2020",
      "monto": 32,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 929,
      "nombre": "Polarised intangible middleware",
      "fecha": "5/1/2020",
      "monto": 80,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 930,
      "nombre": "Centralized systemic archive",
      "fecha": "7/20/2020",
      "monto": 85,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 931,
      "nombre": "Decentralized multimedia parallelism",
      "fecha": "10/4/2020",
      "monto": 67,
      "tipo": 6,
      "categoria": 2
    }, {
      "id": 932,
      "nombre": "Function-based explicit success",
      "fecha": "8/31/2020",
      "monto": 85,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 933,
      "nombre": "Innovative zero defect emulation",
      "fecha": "2/12/2020",
      "monto": 19,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 934,
      "nombre": "Organized intermediate leverage",
      "fecha": "2/26/2020",
      "monto": 18,
      "tipo": 6,
      "categoria": 2
    }, {
      "id": 935,
      "nombre": "Organized 24/7 time-frame",
      "fecha": "12/14/2020",
      "monto": 32,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 936,
      "nombre": "Managed contextually-based matrices",
      "fecha": "2/26/2020",
      "monto": 17,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 937,
      "nombre": "Expanded uniform superstructure",
      "fecha": "3/23/2020",
      "monto": 48,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 938,
      "nombre": "Innovative incremental analyzer",
      "fecha": "1/28/2021",
      "monto": 42,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 939,
      "nombre": "Polarised reciprocal model",
      "fecha": "9/14/2020",
      "monto": 28,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 940,
      "nombre": "Devolved bandwidth-monitored core",
      "fecha": "4/14/2020",
      "monto": 96,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 941,
      "nombre": "Self-enabling responsive Graphic Interface",
      "fecha": "10/26/2020",
      "monto": 89,
      "tipo": 5,
      "categoria": 3
    }, {
      "id": 942,
      "nombre": "Virtual leading edge product",
      "fecha": "7/31/2020",
      "monto": 95,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 943,
      "nombre": "Centralized value-added collaboration",
      "fecha": "5/5/2020",
      "monto": 24,
      "tipo": 3,
      "categoria": 3
    }, {
      "id": 944,
      "nombre": "Team-oriented multi-state moderator",
      "fecha": "8/22/2020",
      "monto": 78,
      "tipo": 6,
      "categoria": 2
    }, {
      "id": 945,
      "nombre": "Universal asymmetric architecture",
      "fecha": "4/18/2020",
      "monto": 30,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 946,
      "nombre": "Universal regional Graphic Interface",
      "fecha": "2/12/2020",
      "monto": 28,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 947,
      "nombre": "De-engineered bottom-line success",
      "fecha": "9/16/2020",
      "monto": 99,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 948,
      "nombre": "Right-sized client-driven framework",
      "fecha": "7/28/2020",
      "monto": 16,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 949,
      "nombre": "Decentralized systemic alliance",
      "fecha": "11/18/2020",
      "monto": 61,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 950,
      "nombre": "Visionary tangible internet solution",
      "fecha": "5/2/2020",
      "monto": 89,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 951,
      "nombre": "Universal zero administration approach",
      "fecha": "1/25/2021",
      "monto": 80,
      "tipo": 5,
      "categoria": 1
    }, {
      "id": 952,
      "nombre": "Synergistic bifurcated customer loyalty",
      "fecha": "9/15/2020",
      "monto": 74,
      "tipo": 6,
      "categoria": 2
    }, {
      "id": 953,
      "nombre": "Organized human-resource groupware",
      "fecha": "5/11/2020",
      "monto": 2,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 954,
      "nombre": "Object-based non-volatile capacity",
      "fecha": "9/20/2020",
      "monto": 50,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 955,
      "nombre": "Inverse intermediate frame",
      "fecha": "11/14/2020",
      "monto": 30,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 956,
      "nombre": "Devolved secondary flexibility",
      "fecha": "11/11/2020",
      "monto": 77,
      "tipo": 4,
      "categoria": 2
    }, {
      "id": 957,
      "nombre": "Multi-tiered upward-trending protocol",
      "fecha": "7/7/2020",
      "monto": 19,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 958,
      "nombre": "Upgradable hybrid monitoring",
      "fecha": "2/5/2020",
      "monto": 7,
      "tipo": 5,
      "categoria": 2
    }, {
      "id": 959,
      "nombre": "Face to face reciprocal middleware",
      "fecha": "1/3/2021",
      "monto": 69,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 960,
      "nombre": "Balanced systemic ability",
      "fecha": "3/25/2020",
      "monto": 47,
      "tipo": 3,
      "categoria": 3
    }, {
      "id": 961,
      "nombre": "Reduced even-keeled product",
      "fecha": "8/24/2020",
      "monto": 17,
      "tipo": 6,
      "categoria": 2
    }, {
      "id": 962,
      "nombre": "Advanced solution-oriented array",
      "fecha": "7/20/2020",
      "monto": 84,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 963,
      "nombre": "Reverse-engineered intermediate toolset",
      "fecha": "1/24/2021",
      "monto": 34,
      "tipo": 6,
      "categoria": 2
    }, {
      "id": 964,
      "nombre": "Configurable demand-driven methodology",
      "fecha": "7/26/2020",
      "monto": 40,
      "tipo": 4,
      "categoria": 1
    }, {
      "id": 965,
      "nombre": "Multi-lateral zero defect capacity",
      "fecha": "7/17/2020",
      "monto": 34,
      "tipo": 4,
      "categoria": 3
    }, {
      "id": 966,
      "nombre": "Organic explicit flexibility",
      "fecha": "9/18/2020",
      "monto": 55,
      "tipo": 2,
      "categoria": 1
    }, {
      "id": 967,
      "nombre": "Triple-buffered global encoding",
      "fecha": "1/30/2021",
      "monto": 6,
      "tipo": 4,
      "categoria": 1
    }, {
      "id": 968,
      "nombre": "Self-enabling composite concept",
      "fecha": "1/11/2021",
      "monto": 28,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 969,
      "nombre": "Digitized next generation database",
      "fecha": "2/11/2020",
      "monto": 45,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 970,
      "nombre": "Automated intermediate focus group",
      "fecha": "12/13/2020",
      "monto": 61,
      "tipo": 2,
      "categoria": 3
    }, {
      "id": 971,
      "nombre": "Optional non-volatile leverage",
      "fecha": "10/11/2020",
      "monto": 90,
      "tipo": 6,
      "categoria": 1
    }, {
      "id": 972,
      "nombre": "Fundamental next generation concept",
      "fecha": "9/8/2020",
      "monto": 72,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 973,
      "nombre": "Triple-buffered zero tolerance service-desk",
      "fecha": "10/19/2020",
      "monto": 94,
      "tipo": 3,
      "categoria": 1
    }, {
      "id": 974,
      "nombre": "Assimilated tangible open architecture",
      "fecha": "4/3/2020",
      "monto": 42,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 975,
      "nombre": "Front-line needs-based collaboration",
      "fecha": "3/31/2020",
      "monto": 6,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 976,
      "nombre": "Triple-buffered logistical protocol",
      "fecha": "9/17/2020",
      "monto": 98,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 977,
      "nombre": "Reactive well-modulated complexity",
      "fecha": "2/9/2020",
      "monto": 55,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 978,
      "nombre": "Advanced exuding moderator",
      "fecha": "10/20/2020",
      "monto": 14,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 979,
      "nombre": "Customer-focused bifurcated time-frame",
      "fecha": "8/10/2020",
      "monto": 12,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 980,
      "nombre": "Persistent 4th generation conglomeration",
      "fecha": "11/9/2020",
      "monto": 11,
      "tipo": 5,
      "categoria": 3
    }, {
      "id": 981,
      "nombre": "Centralized disintermediate system engine",
      "fecha": "9/3/2020",
      "monto": 59,
      "tipo": 1,
      "categoria": 1
    }, {
      "id": 982,
      "nombre": "Right-sized demand-driven portal",
      "fecha": "4/11/2020",
      "monto": 26,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 983,
      "nombre": "Optional high-level alliance",
      "fecha": "12/12/2020",
      "monto": 46,
      "tipo": 1,
      "categoria": 2
    }, {
      "id": 984,
      "nombre": "Stand-alone disintermediate productivity",
      "fecha": "1/18/2021",
      "monto": 20,
      "tipo": 4,
      "categoria": 1
    }, {
      "id": 985,
      "nombre": "Self-enabling motivating database",
      "fecha": "6/18/2020",
      "monto": 73,
      "tipo": 2,
      "categoria": 3
    }, {
      "id": 986,
      "nombre": "Switchable human-resource product",
      "fecha": "7/18/2020",
      "monto": 46,
      "tipo": 6,
      "categoria": 2
    }, {
      "id": 987,
      "nombre": "Balanced asymmetric knowledge user",
      "fecha": "8/4/2020",
      "monto": 95,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 988,
      "nombre": "Re-engineered scalable parallelism",
      "fecha": "6/5/2020",
      "monto": 61,
      "tipo": 6,
      "categoria": 4
    }, {
      "id": 989,
      "nombre": "Synchronised homogeneous intranet",
      "fecha": "6/10/2020",
      "monto": 13,
      "tipo": 5,
      "categoria": 3
    }, {
      "id": 990,
      "nombre": "Object-based heuristic productivity",
      "fecha": "7/27/2020",
      "monto": 56,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 991,
      "nombre": "Open-architected leading edge secured line",
      "fecha": "8/16/2020",
      "monto": 75,
      "tipo": 1,
      "categoria": 4
    }, {
      "id": 992,
      "nombre": "Optional web-enabled capability",
      "fecha": "4/12/2020",
      "monto": 85,
      "tipo": 2,
      "categoria": 2
    }, {
      "id": 993,
      "nombre": "Virtual systematic emulation",
      "fecha": "9/1/2020",
      "monto": 12,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 994,
      "nombre": "User-centric coherent protocol",
      "fecha": "4/21/2020",
      "monto": 55,
      "tipo": 3,
      "categoria": 2
    }, {
      "id": 995,
      "nombre": "Inverse responsive middleware",
      "fecha": "11/30/2020",
      "monto": 53,
      "tipo": 4,
      "categoria": 4
    }, {
      "id": 996,
      "nombre": "Optional systematic architecture",
      "fecha": "10/6/2020",
      "monto": 41,
      "tipo": 5,
      "categoria": 4
    }, {
      "id": 997,
      "nombre": "Assimilated discrete pricing structure",
      "fecha": "3/24/2020",
      "monto": 81,
      "tipo": 6,
      "categoria": 3
    }, {
      "id": 998,
      "nombre": "Synergized mission-critical extranet",
      "fecha": "4/2/2020",
      "monto": 30,
      "tipo": 1,
      "categoria": 3
    }, {
      "id": 999,
      "nombre": "Visionary leading edge matrix",
      "fecha": "12/17/2020",
      "monto": 65,
      "tipo": 3,
      "categoria": 4
    }, {
      "id": 1000,
      "nombre": "Multi-lateral bifurcated standardization",
      "fecha": "10/21/2020",
      "monto": 82,
      "tipo": 1,
      "categoria": 4
    }]

    const dataOriginalJS = JSON.parse(JSON.stringify(dataOriginalJSON));
    const dataModificada = [];

    for (var dato of dataOriginalJS)
    {
      var nuevoDato =
      {
        id : dato.id,
        nombre : dato.nombre,
        fecha : dato.fecha,
        monto : dato.monto,
        tipo : dato.tipo,
        categoria : dato.categoria,
        createdAt : new Date(),
        updatedAt : new Date()
      }

      dataModificada.push(nuevoDato);
    }

    await queryInterface.bulkInsert("Evento", dataModificada);
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Evento", null);
  }
};
