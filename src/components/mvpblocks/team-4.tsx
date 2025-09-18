'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

type SocialMediaLinks = {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  github?: string;
  website?: string;
  email?: string;
  dribbble?: string;
};

type TeamMember = {
  id: number;
  name: string;
  role: string;
  email?: string;
  bio?: string;
  image: string;
  backgroundColor?: string;
  socialMedia?: SocialMediaLinks;
  expertise?: string[];
  department?: string;
};

type TeamSectionProps = {
  title?: string;
  subtitle?: string;
  teamMembers?: TeamMember[];
  backgroundColor?: string;
  textColor?: string;
  secondaryColor?: string;
  className?: string;
};

type Department =
  | 'all'
  | 'management'
  | 'roborace'
  | 'robosoccer'
  | 'amperearena'
  | 'paperpresentation'
  | 'brainblast'
  | 'cinemax'
  | 'gesturequest';

export interface ElegantTeamProps extends TeamSectionProps {
  departments?: Array<{
    id: Department;
    label: string;
  }>;
}

const elegantTeamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Fiaz Ahmed T',
    role: 'President',
    department: 'management',
    image:
      '/images/students/president.jpg',
  },
  {
    id: 2,
    name: 'Abdul Basith',
    role: 'Secretary',
    department: 'management',
    image:
      '/images/students/secretary.jpg',
  },
  {
    id: 3,
    name: 'Mohammed Zubair',
    role: 'Joint Secretary',
    department: 'management',
    image:
      '/images/students/js.jpg',
  },
  {
    id: 4,
    name: 'Sharrupriya P V',
    role: 'Treasurer',
    department: 'management',
    image: '/images/students/sharupriya.jpg',
  },
  {
    id: 5,
    name: 'Mohamed',
    role: 'Treasurer',
    department: 'management',
    image:
      '/images/students/mohamed.jpg',
  },
  {
    id: 6,
    name: 'Mohamed Yusuf Ameen S',
    role: 'Robo Race',
    department: 'roborace',
    image:
      '/images/students/ameen.jpg',
  },
  {
    id: 7,
    name: 'Mohammed Umar',
    role: 'Robo Race',
    department: 'roborace',
    image:
      '/images/students/user.png',
  },
  {
    id: 8,
    name: 'Rifan al deen H',
    role: 'Robo Race',
    department: 'roborace',
    image:
      '/images/students/rifan.jpg',
  },
  {
    id: 9,
    name: 'Abdul Kareem N',
    role: 'Robo Soccer',
    department: 'robosoccer',
    image:
      '/images/students/kareem.jpg',
  },
  {
    id: 10,
    name: 'Al Redhwan',
    role: 'Robo Soccer',
    department: 'robosoccer',
    image:
      '/images/students/alredhwan.jpg',
  },
  {
    id: 11,
    name: 'Mohamed Farook S',
    role: 'Ampere Arena',
    department: 'amperearena',
    image:
      '/images/students/farook.jpg',
  },
  {
    id: 12,
    name: 'Bala P',
    role: 'Ampere Arena',
    department: 'amperearena',
    image:
      '/images/students/bala.jpg',
  },
  {
    id: 13,
    name: 'Nataraj',
    role: 'Ampere Arena',
    department: 'amperearena',
    image:
      '/images/students/nataraj.jpg',
  },
  {
    id: 14,
    name: 'Sharrupriya P V',
    role: 'Paper Presentation',
    department: 'paperpresentation',
    image:
      '/images/students/sharupriya.jpg',
  },
  {
    id: 26,
    name: 'S.Mohamad Nathim',
    role: 'Paper Presentation',
    department: 'paperpresentation',
    image:
      '/images/students/nathim.jpg',
  },
  {
    id: 15,
    name: 'Mehaboo S',
    role: 'Paper Presentation',
    department: 'paperpresentation',
    image:
      '/images/students/mehaboo.jpg',
  },
  {
    id: 16,
    name: 'Raguram P',
    role: 'Paper Presentation',
    department: 'paperpresentation',
    image:
      '/images/students/raguram.JPG',
  },
  {
    id: 17,
    name: 'Meera S',
    role: 'Brain Blast & Bit Battle',
    department: 'brainblast',
    image:
      '/images/students/meera.jpg',
  },
  {
    id: 18,
    name: 'Aishwarya S',
    role: 'Brain Blast & Bit Battle',
    department: 'brainblast',
    image:
      '/images/students/aishwarya.jpg',
  },
  {
    id: 19,
    name: 'Monica PA',
    role: 'Brain Blast & Bit Battle',
    department: 'brainblast',
    image:
      '/images/students/monica.jpg',
  },
  {
    id: 20,
    name: 'Sikkandar Pasil G',
    role: 'Cinema-X',
    department: 'cinemax',
    image:
      '/images/students/sikkandar.jpg',
  },
  {
    id: 21,
    name: 'Bala P',
    role: 'Cinema-X',
    department: 'cinemax',
    image:
      '/images/students/bala.jpg',
  },
  {
    id: 22,
    name: 'Sadhik Ali S',
    role: 'Cinema-X',
    department: 'cinemax',
    image:
      '/images/students/sadhikali.jpg',
  },
  {
    id: 23,
    name: 'Taufik Ahmed T M',
    role: 'Gesture Quest',
    department: 'gesturequest',
    image:
      '/images/students/taufik.jpg',
  },
  {
    id: 24,
    name: 'Abdur Razeeth H',
    role: 'Gesture Quest',
    department: 'gesturequest',
    image:
      '/images/students/razeeth.jpg',
  },
  {
    id: 25,
    name: 'Syed Adnan Hussain',
    role: 'Gesture Quest',
    department: 'gesturequest',
    image:
      '/images/students/syed.webp',
  }
];

export default function Team4({
  title = 'Meet the brilliant minds behind the magic.',
  subtitle = 'Our passionate team of designers, builders, and problem solvers shaping the future.',
  teamMembers = elegantTeamMembers,
  backgroundColor = '#ffffff',
  textColor = '#000000',
  secondaryColor = '#666666',
  className,
  departments = [
    { id: 'all', label: 'View all' },
    { id: 'management', label: 'Management' },
    { id: 'roborace', label: 'Robo Race' },
    { id: 'robosoccer', label: 'Robo Soccer' },
    { id: 'amperearena', label: 'Ampere Arena' },
    { id: 'paperpresentation', label: 'Paper Presentation' },
    { id: 'brainblast', label: 'Brain Blast & Bit Battle' },
    { id: 'cinemax', label: 'Cinema-X' },
    { id: 'gesturequest', label: 'Gesture Quest' },
  ],
}: ElegantTeamProps) {
  const [activeDepartment, setActiveDepartment] = useState<Department>('all');

  // Filter team members by department
  const filteredTeamMembers =
    activeDepartment === 'all'
      ? teamMembers
      : teamMembers.filter(
          (member) =>
            member.department?.toLowerCase() === activeDepartment ||
            member.role?.toLowerCase().includes(activeDepartment),
        );

  // Split the title to apply italic styling to "magic"
  const titleParts = title.split(/(magic)/);

  return (
    <section
      className={cn('w-full py-16', className)}
      style={{ backgroundColor, color: textColor }}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-4xl leading-tight md:text-5xl">
            {titleParts.map((part, index) =>
              part.toLowerCase() === 'magic' ? (
                <span key={index} className="italic">
                  {part}
                </span>
              ) : (
                <span key={index}>{part}</span>
              ),
            )}
          </h2>
          <p
            className="mx-auto max-w-3xl text-base"
            style={{ color: secondaryColor }}
          >
            {subtitle}
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setActiveDepartment(dept.id)}
              className={cn(
                'rounded-md px-4 py-2 text-sm font-medium transition-colors',
                activeDepartment === dept.id
                  ? 'bg-gray-900 text-white'
                  : 'border border-gray-200 bg-white text-gray-800 hover:bg-gray-100',
              )}
            >
              {dept.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5">
          {filteredTeamMembers.map((member) => (
            <div
              key={member.id}
              className="relative overflow-hidden rounded-lg transition-all"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover"
                />
              </div>
              <div className="relative z-10 mx-auto -mt-[2.5rem] max-w-[90%] rounded-lg border border-gray-100 bg-white px-2 py-3 text-center">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm" style={{ color: secondaryColor }}>
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
