import "./App.css";
import { Attribution } from "./Components/Attribution/Attribution";
import data from "../data.json";
import { Card } from "./Components/Card/Card";
import { ActiveFilters } from "./Components/ActiveFilters/ActiveFilters";
import { useEffect, useState } from "react";
import { Header } from "./Components/Header/Header";

function App() {
  const [roleFilter, setRoleFilter] = useState([])
  const [levelFilter, setLevelFilter] = useState([])
  const [languageFilter, setLanguageFilter] = useState([])
  const [toolFilter, setToolFilter] = useState([])
  const [filteredJobs, setFilteredJobs] = useState([])

useEffect(()=>{
  setFilteredJobs(data)
if(roleFilter.length > 0) setFilteredJobs(prev => prev.filter(job => roleFilter.includes(job.role)))
if(levelFilter.length > 0) setFilteredJobs(prev => prev.filter(job => levelFilter.includes(job.level)))
if(languageFilter.length > 0) setFilteredJobs(prev => prev.filter(job => job.languages.some(language => languageFilter.includes(language))))
if(toolFilter.length > 0) setFilteredJobs(prev => prev.filter(job => job.tools.some(tool =>toolFilter.includes(tool))))

}, [roleFilter,levelFilter,languageFilter,toolFilter])

  return (
    <>
      <Header >
        <ActiveFilters roles={roleFilter} levels={levelFilter} languages={languageFilter} tools={toolFilter} handleFilter={{setLanguageFilter, setLevelFilter, setRoleFilter, setToolFilter}} />
      </Header>
      {filteredJobs.map((job) => (
        <Card key={job.id} {...job} handleFilter={{setLanguageFilter, setLevelFilter, setRoleFilter, setToolFilter}} />
      ))}
      <Attribution />
    </>
  );
}

export default App;
