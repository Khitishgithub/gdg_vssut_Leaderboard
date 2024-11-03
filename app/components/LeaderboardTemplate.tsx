"use client";
import React, { useState } from 'react';
import { Search, Linkedin, Instagram, Twitter } from 'lucide-react';
import { Card, CardContent } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { ConfettiFireworks } from './ConfettiFireworks';

const LeaderboardTemplate = () => {
  const stats = {
    completions: { current: 73, total: 80 },
    registrations: 223,
  };

  const participantsData = [
    { rank: 1, name: "SHREETI MOHAPATRA", allPathways: true, promptDesign: 1, genAI: 1, arcade: 1 },
    { rank: 2, name: "KHITISH KUMAR PRADHAN", allPathways: true, promptDesign: 1, genAI: 1, arcade: 1 },
    { rank: 3, name: "BHARAT PANIGRAHI", allPathways: true, promptDesign: 1, genAI: 1, arcade: 1 },
    { rank: 4, name: "VISHAL EKKA", allPathways: true, promptDesign: 1, genAI: 1, arcade: 1 },
    { rank: 5, name: "ANIMESH PATTNAIK", allPathways: true, promptDesign: 1, genAI: 1, arcade: 1 },
    { rank: 6, name: "ANKUSH BEHERA", allPathways: true, promptDesign: 1, genAI: 1, arcade: 1 },
    { rank: 7, name: "SUBHAM SWORUP", allPathways: true, promptDesign: 1, genAI: 1, arcade: 1 },
    { rank: 8, name: "DEVANSH BANSAL", allPathways: true, promptDesign: 1, genAI: 1, arcade: 1 },
    { rank: 9, name: "CHIRAG AGRAWAL", allPathways: true, promptDesign: 1, genAI: 1, arcade: 1 },
    { rank: 10, name: "SWAYAMJEET PADHI", allPathways: true, promptDesign: 1, genAI: 1, arcade: 1 },
    { rank: 11, name: "KRITIKA SUREKHA", allPathways: true, promptDesign: 1, genAI: 1, arcade: 1 },
    { rank: 12, name: "ARPITA PANDA", allPathways: true, promptDesign: 1, genAI: 1, arcade: 1 },
    { rank: 13, name: "RITESH KUMAR PANDA", allPathways: true, promptDesign: 1, genAI: 1, arcade: 1 },
    { rank: 14, name: "ADISHREE SRIKUMAR", allPathways: true, promptDesign: 1, genAI: 1, arcade: 1 },
    { rank: 15, name: "PRATYASHA PANDA", allPathways: true, promptDesign: 1, genAI: 1, arcade: 1 },






  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [participants, setParticipants] = useState(participantsData);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredParticipants = participantsData.filter((participant) =>
      participant.name.toLowerCase().includes(query)
    );
    setParticipants(filteredParticipants);
  };

  return (

    <>
    <ConfettiFireworks/>
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image src="/gdg.png" alt="GDSC Logo" height={40} width={40} className="h-10 w-10" />
          <div className="text-sm">
            <div>Google Developer Group</div>
            <div className="text-gray-600">Veer Surendra Sai University of Technology</div>
          </div>
        </div>

        <div className="flex space-x-4">
          <Link href="" className="text-blue-600">
            <Linkedin size={24} />
          </Link>
          <Link href="https://www.instagram.com/gdscvssut/" className="text-pink-600">
            <Instagram size={24} />
          </Link>
          <Link href="#" className="text-gray-800">
            <Twitter size={24} />
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center space-y-6">
        <h1 className="text-2xl font-bold">Gen AI Study Jams 2024</h1>
        <p className="text-yellow-600">Google Cloud</p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Number of Completions</span>
              <span className="text-green-500 font-bold">
                {stats.completions.current}/{stats.completions.total}
              </span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total number of registrations</span>
              <span className="font-bold">{stats.registrations}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search Your Name Here"
          value={searchQuery}
          onChange={handleSearch}
          className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      </div>

      {/* Last Updated */}
      <div className="text-right text-sm text-gray-600">
        Last updated on: 2nd Nov 8:50 PM
      </div>

      {/* Leaderboard Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left">Rank</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-center">All 3 Pathways Completed</th>
              <th className="p-3 text-center">Prompt Design in Vertex AI</th>
              <th className="p-3 text-center">Develop GenAI Apps</th>
              <th className="p-3 text-center">Gen AI Arcade</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((participant) => (
              <tr key={participant.rank} className="border-b hover:bg-gray-50">
                <td className="p-3">{participant.rank}</td>
                <td className="p-3 font-medium">{participant.name} 🏆</td>
                <td className="p-3 text-center">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                    Yes
                  </span>
                </td>
                <td className="p-3 text-center">{participant.promptDesign}</td>
                <td className="p-3 text-center">{participant.genAI}</td>
                <td className="p-3 text-center">{participant.arcade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 mt-10 border-t pt-4">
        <p>Developed by <span className="text-blue-600 font-semibold">Khitish Kumar Pradhan (GDG-VSSUT Frontend Lead)</span></p>
      </footer>
    </div>
    </>
  );
 
};

export default LeaderboardTemplate;
