import React, { useState } from 'react';
import one from '../../assets/4.png'
import two from '../../assets/2.png'
import three from '../../assets/3.png'
import four from '../../assets/5.png'
import five from '../../assets/6.png'
import six from '../../assets/7.png'
import seven from '../../assets/8.png'
import eight from '../../assets/9.png'
import nine from '../../assets/10.png'
import ten from '../../assets/11.png'
import eleven from '../../assets/12.png'
import twelve from '../../assets/13.png'
import thirteen from '../../assets/14.png'
import fourteen from '../../assets/15.png'
import fifteen from '../../assets/16.png'
import sixteen from '../../assets/17.png'
import seventeen from '../../assets/18.png'
import eighteen from '../../assets/19.png'
import nineteen from '../../assets/20.png'
import twenty from '../../assets/21.png'
import twentyone from '../../assets/22.png'
import twentytwo from '../../assets/23.png'
import twentythree from '../../assets/24.png'
import twentyfour from '../../assets/25.png'
import twentyfive from '../../assets/26.png'
import twentysix from '../../assets/27.png'
import twentyseven from '../../assets/28.png'
import twentyeight from '../../assets/29.png'
import twentynine from '../../assets/30.png'
import thirty from '../../assets/31.png'
import thirtyone from '../../assets/32.png'
import thirtytwo from '../../assets/33.png'
import thirtythree from '../../assets/34.png'
import thirtyfour from '../../assets/35.png'
import thirtyfive from '../../assets/36.png'
import thirtysix from '../../assets/37.png'
import thirtyseven from '../../assets/38.png'
import thirtyeight from '../../assets/39.png'


const equipmentData = [
  {
    id: 1,
    name: "Hydraulic Rotary Rig machine",
    model: "XR-420D",
    capacity: "Dia-3000mm & Depth-106 MTR",
    yom: "2024",
    brand: "XCMG",
    origin: "CHINA",
    quantity: "1 nos",
    condition: "Good",
    image: one,
    remarks: ""
  },
  {
    id: 2,
    name: "Hydraulic Rotary Rig machine",
    model: "XR-220D",
    capacity: "Dia-2000mm & Depth-80 MTR",
    yom: "2017",
    brand: "XCMG",
    origin: "CHINA",
    quantity: "1 nos",
    condition: "Good",
    image: two,
    remarks: ""
  },
  {
    id: 3,
    name: "Hydraulic Rotary Rig machine",
    model: "XR-180D",
    capacity: "Dia-1800mm & Depth-60 MTR",
    yom: "2017",
    brand: "XCMG",
    origin: "CHINA",
    quantity: "1 nos",
    condition: "Good",
    image: three,
    remarks: ""
  },
  {
    id: 4,
    name: "Hydraulic Rotary Rig machine",
    model: "SR-40",
    capacity: "Dia-1500mm & Depth-55 MTR",
    yom: "2008",
    brand: "Soilmec",
    origin: "Italy",
    quantity: "2 nos",
    condition: "Good",
    image: four,
    remarks: ""
  },
  {
    id: 5,
    name: "Hydraulic Rotary Rig machine",
    model: "SR-55",
    capacity: "Dia-1500mm & Depth-55 MTR",
    yom: "2016",
    brand: "Soilmec",
    origin: "Italy",
    quantity: "1 nos",
    condition: "Good",
    image: five,
    remarks: ""
  },
  {
    id: 6,
    name: "RCD Rig machine",
    model: "",
    capacity: "Dia-3000-3200 mm & Depth-100 MTR",
    yom: "2012",
    brand: "",
    origin: "",
    quantity: "2 nos",
    condition: "Good",
    image: six,
    remarks: ""
  },
  {
    id: 7,
    name: "RCD Rig machine",
    model: "",
    capacity: "Dia-3000-3200 mm & Depth-100 MTR",
    yom: "2012",
    brand: "",
    origin: "",
    quantity: "2 nos",
    condition: "Good",
    image: seven,
    remarks: ""
  },
  {
    id: 8,
    name: "Manual Rig machine",
    model: "",
    capacity: "Dia-1200 mm & Depth-60 MTR",
    yom: "2016",
    brand: "",
    origin: "",
    quantity: "30 nos",
    condition: "Good",
    image: eight,
    remarks: ""
  },
  {
    id: 9,
    name: "LSB Excavator",
    model: "XCT25L4",
    capacity: "2 Ton",
    yom: "2019",
    brand: "XCMG",
    origin: "China",
    quantity: "1 nos",
    condition: "Good",
    image: nine,
    remarks: ""
  },
  {
    id: 10,
    name: "Crawler Crane",
    model: "ZCC100H",
    capacity: "100 Ton",
    yom: "2022",
    brand: "ZOOMLION",
    origin: "CHINA",
    quantity: "1 nos",
    condition: "Good",
    image: ten,
    remarks: ""
  },
  {
    id: 11,
    name: "AIR COMPRESSORE",
    model: "PDS185S",
    capacity: "185 cfm",
    yom: "",
    brand: "AIRMAN",
    origin: "MADE IN JAPAN",
    quantity: "4 nos",
    condition: "Good",
    image: eleven,
    remarks: ""
  },
  {
    id: 12,
    name: "EXCAVATOR",
    model: "CL-G920D",
    capacity: "0.9 M3",
    yom: "2017",
    brand: "LIUGONG",
    origin: "CHINA",
    quantity: "4 nos",
    condition: "Good",
    image: twelve,
    remarks: ""
  },
  {
    id: 13,
    name: "EXCAVATOR LONG BOOM",
    model: "XE260CLL",
    capacity: "",
    yom: "2017",
    brand: "XCMG",
    origin: "CHINA",
    quantity: "2 nos",
    condition: "Good",
    image: thirteen,
    remarks: ""
  },
  {
    id: 14,
    name: "WHEEL LOADER",
    model: "LW400KN",
    capacity: "4 Ton",
    yom: "2017",
    brand: "XCMG",
    origin: "CHINA",
    quantity: "2 nos",
    condition: "Good",
    image: fourteen,
    remarks: ""
  },
  {
    id: 15,
    name: "DOGER",
    model: "",
    capacity: "",
    yom: "2017",
    brand: "XCMG",
    origin: "CHINA",
    quantity: "2 nos",
    condition: "Good",
    image: fifteen,
    remarks: ""
  },
  {
    id: 16,
    name: "GRADER",
    model: "GR-180",
    capacity: "15.4 ton (3.6mx610mm)",
    yom: "2017",
    brand: "XCMG",
    origin: "CHINA",
    quantity: "1 nos",
    condition: "Good",
    image: sixteen,
    remarks: ""
  },
  {
    id: 17,
    name: "GRADER",
    model: "GR-165",
    capacity: "15 Ton (3.6mx610mm)",
    yom: "2020",
    brand: "XCMG",
    origin: "CHINA",
    quantity: "1 nos",
    condition: "Good",
    image: seventeen,
    remarks: ""
  },
  {
    id: 18,
    name: "CRAWLER CRANE",
    model: "XGC-85",
    capacity: "85 Ton",
    yom: "2018",
    brand: "XCMG",
    origin: "CHINA",
    quantity: "1 nos",
    condition: "Good",
    image: eighteen,
    remarks: ""
  },
  {
    id: 19,
    name: "CRAWLER CRANE",
    model: "XGC-55",
    capacity: "55 Ton",
    yom: "2019",
    brand: "XCMG",
    origin: "CHINA",
    quantity: "1 nos",
    condition: "Good",
    image: nineteen,
    remarks: ""
  },
  {
    id: 20,
    name: "CRAWLER CRANE",
    model: "IHI-50",
    capacity: "50 Ton",
    yom: "1996",
    brand: "IHI",
    origin: "Japan",
    quantity: "2 nos",
    condition: "Good",
    image: twenty,
    remarks: ""
  },
  {
    id: 21,
    name: "Hydraulic Static Pile Driver Machine",
    model: "",
    capacity: "420t",
    yom: "",
    brand: "VY320 A SINOVO",
    origin: "CHINA",
    quantity: "1 nos",
    condition: "Good",
    image: twentyone,
    remarks: ""
  },
  {
    id: 22,
    name: "Hydraulic Static Pile Driver Machine",
    model: "",
    capacity: "320t",
    yom: "",
    brand: "VY420 A SINOVO",
    origin: "CHINA",
    quantity: "1 nos",
    condition: "Good",
    image: twentytwo,
    remarks: ""
  },
  {
    id: 23,
    name: "PRD Rig machine",
    model: "",
    capacity: "Dia-1200mm & Depth- 60 MTR",
    yom: "2012",
    brand: "",
    origin: "",
    quantity: "2 nos",
    condition: "Good",
    image: twentythree,
    remarks: ""
  },
  {
    id: 24,
    name: "EXCAVATOR",
    model: "",
    capacity: "0.7 m3",
    yom: "2019",
    brand: "XCMG",
    origin: "CHINA",
    quantity: "2 nos",
    condition: "Good",
    image: twentyfour,
    remarks: ""
  },
  {
    id: 25,
    name: "ROAD ROLLER",
    model: "",
    capacity: "",
    yom: "2017",
    brand: "XCMG",
    origin: "CHINA",
    quantity: "2 nos",
    condition: "Good",
    image: twentyfive,
    remarks: ""
  },
  {
    id: 26,
    name: "Tire Roller",
    model: "",
    capacity: "",
    yom: "2017",
    brand: "XCMG",
    origin: "CHINA",
    quantity: "3 nos",
    condition: "Good",
    image: twentysix,
    remarks: ""
  },
  {
    id: 27,
    name: "Mobile crane",
    model: "",
    capacity: "25 Ton",
    yom: "2019",
    brand: "XCMG",
    origin: "CHINA",
    quantity: "2 nos",
    condition: "Good",
    image: twentyseven,
    remarks: ""
  },
  {
    id: 28,
    name: "Mobile crane",
    model: "",
    capacity: "35 Ton",
    yom: "2013",
    brand: "KATO",
    origin: "JAPAN",
    quantity: "1 nos",
    condition: "Good",
    image: twentyeight,
    remarks: ""
  },
  {
    id: 29,
    name: "Mobile CRANE",
    model: "KR-25H-II",
    capacity: "25 Ton",
    yom: "2013",
    brand: "Kato",
    origin: "Japan",
    quantity: "1 nos",
    condition: "Good",
    image: twentynine,
    remarks: ""
  },
  {
    id: 30,
    name: "Sino Truk",
    model: "",
    capacity: "35 Ton",
    yom: "2017",
    brand: "SINO",
    origin: "CHINA",
    quantity: "1 nos",
    condition: "Good",
    image: thirty,
    remarks: ""
  },
  {
    id: 31,
    name: "Concrete Pump",
    model: "",
    capacity: "52 m3/hr",
    yom: "2019",
    Brand: "schwing Stetter",
    origin: "India",
    quantity: "2 nos",
    condition: "Good",
    image: thirtyone,
    remarks: ""
  },
  {
    id: 32,
    name: "Concrete Batching Plant",
    capacity: "60 m3/hr",
    yOM: "2024",
    brand: "AQUARIUS",
    origin: "India",
    quantity: "1 No",
    condition: "New",
    image: thirtytwo,
    remarks: ""
  },
  {
    id:33,
    name: "Transit Mixer",
    capacity: "07 m3",
    YOM: "2022",
    brand: "SINOTRUCK",
    origin: "CHINA",
    quantity: "3 nos",
    condition: "Good",
    image: thirtythree,
    remarks: ""
  },
  {
    id:34,
    name: "Cross Hole Sonic Logging (CSL)Test",
    capacity: "",
    YOM: "2022",
    brand: "PDI",
    origin: "USA",
    quantity: "1 nos",
    condition: "Good",
    image: thirtyfour,
    remarks: ""
  },
  {
    id:35,
    name:"Tructor",
    capacity:"",
    YOM: "2020",
    brand: "Mahindra",
    origin: "India",
    quantity: "2 nos",
    condition: "Good",
    image: thirtyfive,
    remarks: ""
  },
  { id:36,
    name: "DIESEL HAMMER",
    capacity: "30-62 ton",
    YOM: "",
    brand: "STARKE",
    origin: "CHINA",
    quantity: "4 nos",
    condition: "Good",
    image: thirtysix,
    remarks: ""
  },
  { id:37,
    name: "DIESELGENERATOR",
    capacity: "Various",
    YOM:"",
    brand: "Various",
    origin: "Various",
    quantity: "20 nos",
    condition: "Good",
    image: thirtyseven,
    remarks: ""
  },
  { id:38,
    name: "WELDING MACHINE",
    capacity: "Various",
    YOM:"",
    brand: "Various",
    origin: "Various",
    quantity: "50 nos",
    condition: "Good",
    image: thirtyeight,
    remarks: ""
  }
];
 
const Documentation = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6 md:p-10">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-8 border-b pb-2 border-gray-700">
        Equipment Inventory
      </h1>

      {/* Table Section */}
      <div className="overflow-x-auto rounded-lg shadow-md border border-gray-700">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-gray-800 text-gray-300 uppercase text-xs tracking-wider">
            <tr>
              {[
                'Sl. No.',
                'Description',
                'Model',
                'Capacity',
                'YOM',
                'Brand',
                'Origin',
                'Qty',
                'Condition',
                'Image',
                'Remarks',
              ].map((heading, index) => (
                <th key={index} className="px-4 py-3 border border-gray-700 text-left">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-gray-700">
            {equipmentData.map((item, index) => (
              <tr key={item.id || index} className="hover:bg-gray-700 transition">
                <td className="px-4 py-3 border border-gray-700">{index + 1}</td>
                <td className="px-4 py-3 border border-gray-700">{item.name || '-'}</td>
                <td className="px-4 py-3 border border-gray-700">{item.model || '-'}</td>
                <td className="px-4 py-3 border border-gray-700">{item.capacity || '-'}</td>
                <td className="px-4 py-3 border border-gray-700">{item.yom || '-'}</td>
                <td className="px-4 py-3 border border-gray-700">{item.brand || '-'}</td>
                <td className="px-4 py-3 border border-gray-700">{item.origin || '-'}</td>
                <td className="px-4 py-3 border border-gray-700">{item.quantity || '-'}</td>
                <td className="px-4 py-3 border border-gray-700">{item.condition || '-'}</td>
                <td className="px-4 py-3 border border-gray-700">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-auto rounded-md border border-gray-600 cursor-pointer hover:scale-105 transition-transform"
                      onClick={() => setSelectedImage(item.image)}
                    />
                  ) : (
                    <span className="text-gray-400 italic">N/A</span>
                  )}
                </td>
                <td className="px-4 py-3 border border-gray-700">{item.remarks || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Section */}
      <div className="mt-12 text-sm text-gray-300 border-t border-gray-700 pt-6">
        <h2 className="text-lg font-semibold mb-2 text-white">
          LEGAL PILING & CONSTRUCTION
        </h2>
        <p className="leading-relaxed">
          87-92 B, Green Road, Farmview Super Market (5th Floor),<br />
          Room No: 52-55, Farmgate, Dhaka-1215<br />
          <strong>Contact No:</strong> [Insert Number Here] <br />
          <em className="text-green-400">All Machines are operational</em>
        </p>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-0 right-0 m-2 text-white text-xl bg-gray-800 rounded-full px-2"
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Expanded"
              className="max-w-[90vw] max-h-[90vh] rounded-lg border-4 border-white"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Documentation;
