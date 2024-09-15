import React, { useState, useContext } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { Briefcase, Calendar, MapPin, IndianRupeeIcon } from 'lucide-react';
import img from "../../assets/favicon.png";
import { useTheme } from "@/components/Darkmode/Theme-provider";
import { MyContext } from "../../context/UseContext";

function Jobs() {
    const { theme } = useTheme();
    const { jobtype, location } = useContext(MyContext); 
    const [selectedJob, setSelectedJob] = useState(null); // State for selected job

    const jobData = [
        {
          id: 1,
          logo: img, 
          title: 'Frontend Developer',
          company: "Microsoft",
          type: 'Internship',
          datePosted: '24/08/2024',
          experience: "Freshers",
          salary: '40k',
          location: 'Remote',
          description: "A frontend developer position at Microsoft for freshers."
        },
        {
          id: 2,
          logo: '', 
          title: 'Backend Developer',
          company: "Microsoft",
          type: 'Internship',
          datePosted: '23/8/2024',
          experience: "1/2+YOE",
          salary: '20k',
          location: 'Remote',
          description: "A backend developer internship at Microsoft with 1/2+ years of experience."
        },
        {
            id: 3,
            logo: '', 
            title: 'Full Stack Developer',
            company: "Microsoft",
            type: 'Full time',
            datePosted: '05/09/2024',
            experience: "1+YOE",
            salary: '40k-60k',
            location: 'Hybrid',
            description: "A full-time full stack developer role at Microsoft with hybrid work."
        },
        {
            id: 4,
            logo: '', 
            title: 'Software Engineer',
            company: "Microsoft",
            type: 'Full time',
            datePosted: 'Date Posted',
            experience: "4+YOE",
            salary: '80k-1L',
            location: 'On-site',
            description: "A senior software engineer position at Microsoft with on-site work."
        },
    ];

    const filteredJobs = jobData.filter(job => 
        (location === "Any" || job.location === location) && 
        (jobtype === "Any" || job.type === jobtype)
    );

    if (selectedJob) {
        return (
            <Card className={`overflow-hidden transition-shadow duration-300 border-2 ${
                theme === "light"
                    ? "border-blue-400 shadow-[0_0_10px_rgba(59,130,246,1),_0_0_20px_rgba(59,130,246,0.5)]"
                    : "border-green-400 shadow-[0_0_10px_rgba(34,197,94,1),_0_0_20px_rgba(34,197,94,0.5)]"
            }`}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="flex items-center space-x-4">
                        <img src={selectedJob.logo} alt="Company logo" className="w-12 h-12 rounded-full" />
                        <div>
                            <h3 className="font-semibold text-lg">{selectedJob.title}</h3>
                            <p className="text-sm text-muted-foreground">{selectedJob.company}</p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="w-full flex space-x-4 mt-2">
                        <Badge variant="secondary" className="mb-4">{selectedJob.type}</Badge>
                        <Badge variant="secondary" className="mb-4">{selectedJob.experience}</Badge>
                    </div>
                    <div className="flex flex-col space-y-4 text-sm">
                        <div className="flex justify-between">
                            <div className="flex items-center space-x-2">
                                <Calendar className="h-4 w-4" />
                                <span>Posted: {selectedJob.datePosted}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4" />
                                <span>{selectedJob.location}</span>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center space-x-2">
                                <Briefcase className="h-4 w-4" />
                                <span>{selectedJob.type}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <IndianRupeeIcon className="h-4 w-4" />
                                <span>{selectedJob.salary}</span>
                            </div>
                        </div>
                        <p className='underline font-bold text-lg'>Description:</p>
                        <p className="mt-4">{selectedJob.description}</p>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button onClick={() => setSelectedJob(null)} variant="outline">Back</Button>
                    <Button>Apply Now</Button>
                </CardFooter>
            </Card>
        );
    }

    return (
        <div className="space-y-6">
            {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                    <Card key={job.id} className={`overflow-hidden transition-shadow duration-300 border-2 ${
                        theme === "light"
                            ? "border-blue-400 shadow-[0_0_10px_rgba(59,130,246,1),_0_0_20px_rgba(59,130,246,0.5)]"
                            : "border-green-400 shadow-[0_0_10px_rgba(34,197,94,1),_0_0_20px_rgba(34,197,94,0.5)]"
                    }`}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <div className="flex items-center space-x-4">
                                <img src={job.logo} alt="Company logo" className="w-12 h-12 rounded-full" />
                                <div>
                                    <h3 className="font-semibold text-lg">{job.title}</h3>
                                    <p className="text-sm text-muted-foreground">{job.company}</p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="w-full flex space-x-4 mt-2">
                                <Badge variant="secondary" className="mb-4">{job.type}</Badge>
                                <Badge variant="secondary" className="mb-4">{job.experience}</Badge>
                            </div>
                            <div className="flex flex-col space-y-4 text-sm">
                                <div className="flex justify-between">
                                    <div className="flex items-center space-x-2">
                                        <Calendar className="h-4 w-4" />
                                        <span>Posted: {job.datePosted}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <MapPin className="h-4 w-4" />
                                        <span>{job.location}</span>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex items-center space-x-2">
                                        <Briefcase className="h-4 w-4" />
                                        <span>{job.type}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <IndianRupeeIcon className="h-4 w-4" />
                                        <span>{job.salary}</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button onClick={() => setSelectedJob(job)} variant="outline">View Details</Button>
                            <Button>Apply Now</Button>
                        </CardFooter>
                    </Card>
                ))
            ) : (
                <p>No jobs available for the selected filters.</p>
            )}
        </div>
    );
};

export default Jobs;
