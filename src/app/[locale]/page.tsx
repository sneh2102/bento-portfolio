'use client';

import React, { useState } from 'react';
import BentoGrid from '@/components/BentoGrid';
import BentoGridItem from '@/components/BentoGridItem';
import { IconTableColumn } from '@tabler/icons-react';
import { IListItem } from '@/lib/types';
import ItemTwo from '@/components/ItemTwo';
import About from '@/components/About';
import SocialMedia from '@/components/SocialMedia';
import Experience from '@/components/Experience';
import MenuNavigation from '@/components/MenuNavigation';
import TechStack from '@/components/TechStack';
import SkeletonMask from '@/components/SkeletonMask';
import { options, projectsData } from '@/lib/data';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';

interface Props {
  params: {
    locale: string;
  };
}

const Page = ({ params: { locale } }: Props) => {
  const t = useTranslations('projects');
  const { theme } = useTheme();

  // Determine the theme for GitHub Streak Stats and the snake SVG
  const streakStatsTheme = theme === 'light' ? 'light' : 'tokyonight';
  const snakeSvgUrl =
    theme === 'light'
      ? 'https://raw.githubusercontent.com/sneh2102/sneh2102/output/snake-light.svg'
      : 'https://raw.githubusercontent.com/sneh2102/sneh2102/output/snake.svg';

  const initialItem: IListItem[] = [
    {
      header: <About />,
      className: 'md:col-span-2 px-7 py-8',
      active: true,
    },
    {
      header: <ItemTwo />,
      className: 'md:col-span-1',
      active: true,
    },
    {
      header: <SocialMedia />,
      className: 'md:col-span-1 px-7 py-8',
      active: true,
    },
    {
      header: <TechStack />,
      className: 'md:col-span-2 px-7 py-8',
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      active: true,
    },
    {
      header: <Experience />,
      className: 'md:col-span-1 md:row-span-2 gap-4 p-4',
      active: true,
    },
    {
      title: 'GitHub Contributions',
      header: (
        <div className="flex flex-col">
          <div className="flex flex-col justify-evenly items-center">
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=sneh2102&theme=${streakStatsTheme}`}
              alt="GitHub Streak"
              width={300}
              height={100}
              className="w-full max-w-[300px] rounded-md"
            />
          </div>
          <div className="w-full">
            <img
              src={snakeSvgUrl}
              alt="GitHub Contribution Graph"
              width={700}
              height={150}
              className="w-full rounded-md"
            />
          </div>
        </div>
      ),
      className: 'md:col-span-2 p-4', // Full width of the grid
      active: true,
    },
    {
      title: projectsData[0].title,
      description: t(`${[0]}.description`),
      header: <SkeletonMask image={projectsData[0].image} />,
      className: 'md:col-span-1 p-4',
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      active: true,
    },
    {
      title: projectsData[1].title,
      description: t(`${[1]}.description`),
      header: <SkeletonMask image={projectsData[1].image} />,
      className: 'md:col-span-1 p-4',
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      active: true,
    },
    {
      title: projectsData[2].title,
      description: t(`${[2]}.description`),
      header: <SkeletonMask image={projectsData[2].image} />,
      className: 'md:col-span-1 p-4',
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      active: true,
    },
    {
      title: projectsData[3].title,
      description: t(`${[3]}.description`),
      header: <SkeletonMask image={projectsData[3].image} />,
      className: 'md:col-span-1 p-4',
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      active: true,
    },
    {
      title: projectsData[4].title,
      description: t(`${[4]}.description`),
      header: <SkeletonMask image={projectsData[4].image} />,
      className: 'md:col-span-1 p-4',
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      active: true,
    },
    {
      title: projectsData[5].title,
      description: t(`${[5]}.description`),
      header: <SkeletonMask image={projectsData[5].image} />,
      className: 'md:col-span-1 p-4',
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      active: true,
    },
    {
      title: projectsData[6].title,
      description: t(`${[6]}.description`),
      header: <SkeletonMask image={projectsData[6].image} />,
      className: 'md:col-span-1 p-4',
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      active: true,
    },
    {
      title: projectsData[7].title,
      description: t(`${[7]}.description`),
      header: <SkeletonMask image={projectsData[7].image} />,
      className: 'md:col-span-1 p-4',
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      active: true,
    },
    {
      title: projectsData[8].title,
      description: t(`${[8]}.description`),
      header: <SkeletonMask image={projectsData[8].image} />,
      className: 'md:col-span-1 p-4',
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      active: true,
    },
    {
      title: projectsData[9].title,
      description: t(`${[9]}.description`),
      header: <SkeletonMask image={projectsData[9].image} />,
      className: 'md:col-span-1 p-4',
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      active: true,
    },
    {
      title: projectsData[10].title,
      description: t(`${[10]}.description`),
      header: <SkeletonMask image={projectsData[10].image} />,
      className: 'md:col-span-1 p-4',
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      active: true,
    },
    {
      title: projectsData[11].title,
      description: t(`${[11]}.description`),
      header: <SkeletonMask image={projectsData[11].image} />,
      className: 'md:col-span-1 p-4',
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      active: true,
    },
    {
      title: projectsData[12].title,
      description: t(`${[12]}.description`),
      header: <SkeletonMask image={projectsData[12].image} />,
      className: 'md:col-span-1 p-4',
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      active: true,
    },
    {
      title: projectsData[13].title,
      description: t(`${[13]}.description`),
      header: <SkeletonMask image={projectsData[13].image} />,
      className: 'md:col-span-1 p-4',
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      active: true,
    }
  ];

  const [items, setItems] = useState<IListItem[]>(initialItem);
  const [selected, setSelected] = useState<string>('all');

  const onSortAll = () => {
    setSelected('all');
    setItems(initialItem);
  };

  const onSortAbout = () => {
    setSelected('about');
    const first = [
      { ...initialItem[0], active: true }, // About
      { ...initialItem[3], active: true }, // SocialMedia
      { ...initialItem[4], active: true }, // TechStack
      { ...initialItem[5], active: true }, // Experience
    ];
    const rest = [
      { ...initialItem[1], active: false }, // ItemTwo
      { ...initialItem[2], active: false }, // GitHub Contributions
      { ...initialItem[6], active: false }, // Project 1
      { ...initialItem[7], active: false }, // Project 2
      { ...initialItem[8], active: false }, // Project 3
      { ...initialItem[9], active: false }, // Project 4
    ];
    setItems([...first, ...rest]);
  };

  const onSortProject = () => {
    setSelected('projects');
    const first = [
      { ...initialItem[6], active: true }, // Project 1
      { ...initialItem[7], active: true }, // Project 2
      { ...initialItem[8], active: true }, // Project 3
      { ...initialItem[9], active: true }, // Project 4
      { ...initialItem[10], active: true }, // Project 5
      { ...initialItem[11], active: true }, // Project 6
      { ...initialItem[12], active: true }, // Project 7
      { ...initialItem[13], active: true }, // Project 8
      { ...initialItem[14], active: true }, // Project 9
      { ...initialItem[15], active: true }, // Project 10
      { ...initialItem[16], active: true }, // Project 11
      { ...initialItem[17], active: true }, // Project 12
      { ...initialItem[18], active: true }, // Project 13
    ];
    const rest = [
      { ...initialItem[0], active: false }, // About
      { ...initialItem[1], active: false }, // ItemTwo
      { ...initialItem[2], active: false }, // GitHub Contributions
      { ...initialItem[3], active: false }, // SocialMedia
      { ...initialItem[4], active: false }, // TechStack
      { ...initialItem[5], active: false }, // Experience
    ];
    setItems([...first, ...rest]);
  };

  const handleChange = (status: string) => {
    setSelected(status);
    if (status === 'all') {
      onSortAll();
    } else if (status === 'projects') {
      onSortProject();
    } else {
      onSortAbout();
    }
  };

  return (
    <>
      <main className="px-6 py-3 sm:px-3 md:px-0">
        <MenuNavigation
          selected={selected}
          options={options}
          handleChange={handleChange}
        />
        <BentoGrid
          list={items}
          setList={setItems}
          className="mx-auto max-w-4xl md:auto-rows-[20rem]"
        >
          {items.map((item, index) => (
            <BentoGridItem
              key={`item-${index}-${item.title}`}
              index={index}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              active={item.active}
            />
          ))}
        </BentoGrid>
      </main>
    </>
  );
};

export default Page;