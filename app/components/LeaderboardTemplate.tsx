"use client";
import React, { useMemo, useState } from "react";
import { Card, CardContent } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Linkedin,
  Instagram,
  Twitter,
  Award,
  Users,
  BookOpen,
} from "lucide-react";
import { ConfettiFireworks } from "./ConfettiFireworks";
import { participantsData, Participant } from "./participantsData";

const LeaderboardTemplate = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [participants, setParticipants] =
    useState<Participant[]>(participantsData);
  const stats = useMemo(() => {
    const completionsCount = participantsData.filter(
      (p) => p.allPathways
    ).length;
    return {
      completions: {
        current: completionsCount,
        total: participantsData.length,
      },
      registrations: participantsData.length,
    };
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredParticipants = participantsData.filter((participant) =>
      participant.name.toLowerCase().includes(query)
    );
    setParticipants(filteredParticipants);
  };

  // Enhanced animation variants
  const pageTransition = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const socialIconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    hover: {
      scale: 1.2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const tableVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <ConfettiFireworks />
      <motion.div
        className="max-w-6xl mx-auto p-4 space-y-6"
        initial="hidden"
        animate="visible"
        variants={pageTransition}
      >
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-100 rounded-lg shadow-lg"
          variants={headerVariants}
        >
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image src="/gdg.png" alt="GDSC Logo" height={50} width={50} />
            <div className="text-lg">
              <div className="font-semibold text-black">
                Google Developer Group
              </div>
              <div className="text-gray-600 text-sm">
                Veer Surendra Sai University of Technology
              </div>
            </div>
          </motion.div>
          {/* Adjusted container for icons */}
          <div className="flex flex-col md:flex-row items-center space-x-4 mt-2">
            <div className="flex space-x-4">
              {" "}
              {/* Row layout for icons */}
              {[
                { Icon: Linkedin, color: "text-blue-600", href: "https://www.linkedin.com/company/gdsc-vssut-burla/" },
                {
                  Icon: Instagram,
                  color: "text-pink-600",
                  href: "https://www.instagram.com/gdscvssut/",
                },
                {
                  Icon: Twitter,
                  color: "text-gray-800",
                  href: "https://x.com/gdscvssut",
                },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  variants={socialIconVariants}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.Icon
                      size={24}
                      className={`transition-all duration-200 ${social.color}`}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Title Section */}
        <motion.div
          className="flex flex-col items-center text-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
        >
          <Image src="/fd.png" alt="GDSC Logo" height={100} width={100} />
          <h1 className="text-xl  bg-clip-text  text-black mt-2">
            Gen AI Campaign 2024
          </h1>
          <div>
            <span className="text-xl font-normal">
              <span className="text-blue-500">G</span>
              <span className="text-red-500">o</span>
              <span className="text-yellow-500">o</span>
              <span className="text-blue-500">g</span>
              <span className="text-green-500">l</span>
              <span className="text-red-500">e</span>
              <span className="text-gray-600 ml-2">Cloud</span>
            </span>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div className="grid md:grid-cols-2 gap-10">
          {[
            {
              icon: BookOpen,
              title: "Number of Completions",
              value: `${stats.completions.current}/${stats.completions.total}`,
              color: "text-green-500",
            },
            {
              icon: Users,
              title: "Total Number of Registrations",
              value: stats.registrations,
              color: "text-blue-500",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="transform transition-shadow duration-300 hover:shadow-xl"
            >
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <motion.div
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <stat.icon className={`${stat.color} h-8 w-8`} />
                    <div>
                      <p className="text-gray-600">{stat.title}</p>
                      <p className={`${stat.color} font-bold text-xl`}>
                        {stat.value}
                      </p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <input
            type="text"
            placeholder="Search Your Name Here"
            value={searchQuery}
            onChange={handleSearch}
            className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </motion.div>

        {/* Last Updated */}
        <motion.div
          className="text-right text-sm text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <strong>Last updated on</strong>: 2nd Nov 8:50 PM
        </motion.div>

        {/* Leaderboard Table */}
        <motion.div className="overflow-x-auto" variants={tableVariants}>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                <th className="p-3 text-left">Rank</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-center">All Pathways Completed</th>
                <th className=" p-3 text-center">Prompt Design in Vertex AI</th>
                <th className="p-3 text-center">Develop GenAI Apps</th>
                <th className="p-3 text-center">Gen AI Arcade</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {participants.map((participant) => (
                  <motion.tr
                    key={participant.rank}
                    variants={rowVariants}
                    className="border-b"
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <td className="p-3">{participant.rank}</td>
                    <td className="p-3 font-medium capitalize">
                      {participant.name} 🏆
                    </td>
                    <td className="p-3 text-center">
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          participant.allPathways
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {participant.allPathways ? "Yes" : "No"}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      {participant.promptDesign}
                    </td>
                    <td className="p-3 text-center">{participant.genAI}</td>
                    <td className="p-3 text-center">{participant.arcade}</td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="text-center text-gray-500 mt-10 border-t pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <p>
            Developed by{" "}
            <motion.span
              className="text-blue-600 font-semibold cursor-pointer"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.5,
              }}
              whileHover={{ scale: 1.2, color: "#3b82f6" }}
            >
              Khitish Kumar Pradhan (GDG-VSSUT Frontend Lead)
            </motion.span>
          </p>
        </motion.footer>
      </motion.div>
    </>
  );
};

export default LeaderboardTemplate;
