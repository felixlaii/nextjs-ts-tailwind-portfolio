import React, { useState } from "react";
import { useRouter } from "next/router";
import { ProjectsData } from "../../data/projects-data";
import ProjectSetUp from "@/components/ui/ProjectSetUp";

interface ProjectSetUpProps {
  isDarkMode: boolean;
}

const ProjectSection: React.FC<ProjectSetUpProps> = ({ isDarkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const router = useRouter();
};
