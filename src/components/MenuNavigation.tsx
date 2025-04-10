import React, { useState } from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Github } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { mochiy_pop_one } from '@/lib/fonts';
import { url } from 'inspector';

interface Props {
  selected?: string;
  options?: string[];
  handleChange?: (status: string) => void;
}

const MenuNavigation = ({ selected, options, handleChange }: Props) => {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const pathname = usePathname();
  const urlLink = pathname.split('/')[2];
  console.log(locale, urlLink);

  const [isNavlinkHidden, setIsNavlinkHidden] = useState(false);

  return (
    <MaxWidthWrapper className="flex flex-col items-center py-6 sm:flex-row">
      <div className="relative">
        <h2
          className={cn(
            'text-bold mb-2 animate-gradient bg-[linear-gradient(to_right,theme(colors.pallet-blue.1),theme(colors.pallet-blue.2),theme(colors.sky.400),theme(colors.pallet-purple.1),theme(colors.pallet-pink.1),theme(colors.sky.400),theme(colors.pallet-blue.2),theme(colors.pallet-blue.1))] bg-[length:200%_auto] bg-clip-text text-2xl text-transparent sm:mb-0',
            mochiy_pop_one.className,
          )}
        >
          Sneh Patel
        </h2>
      </div>
      <nav className="mx-auto flex w-fit flex-wrap gap-2 rounded-full bg-slate-200 p-1.5 dark:border dark:border-white/[0.2] dark:bg-card">
        {!isNavlinkHidden &&
          options?.map((option) => (
            <Chip
              text={t(option)}
              option={option}
              selected={selected === option}
              setSelected={handleChange}
              key={option}
            />
          ))}
        {urlLink === 'repository' && !isNavlinkHidden && (
          <div className="relative flex items-center rounded-md px-2 py-1 text-sm text-gray-500 transition-colors hover:bg-slate-700 hover:text-slate-200 sm:px-3.5 sm:py-0.5">
            <Link href={`/${locale}`} locale={locale}>
              <span className="relative z-10 ">{t('home')}</span>
            </Link>
          </div>
        )}
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
          }}
          className={cn(
            'flex animate-gradient items-center justify-center rounded-full bg-[linear-gradient(to_right,theme(colors.slate.300),theme(colors.slate.300),theme(colors.slate.500),theme(colors.slate.700),theme(colors.slate.800),theme(colors.slate.500),theme(colors.slate.200),theme(colors.slate.300))] bg-[length:200%_auto] p-2 shadow-lg',
            // {
            //   'bg-slate-50 hover:bg-slate-700 hover:text-slate-200 dark:bg-slate-800':
            //     urlLink === 'repository',
            //   'bg-slate-200 hover:bg-slate-700 hover:text-slate-200 dark:bg-slate-800':
            //     urlLink !== 'repository',
            // },
          )}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  href={`/${locale}/repository`}
                  aria-label="repository page"
                  locale={locale}
                  onClick={(event) => {
                    if (urlLink === 'repository') {
                      event.preventDefault();
                    } else {
                      setIsNavlinkHidden(!isNavlinkHidden);
                    }
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                  >
                    <Github width={18} height={18} aria-hidden="true" />
                  </motion.div>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{t('repository_selected')}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.div>
      </nav>
    </MaxWidthWrapper>
  );
};

const Chip = ({
  text,
  option,
  selected,
  setSelected,
}: {
  text: string;
  option: string;
  selected: boolean;
  setSelected?: (status: string) => void;
}) => {
  return (
    <button
      type="button"
      onClick={() => setSelected && setSelected(option)}
      className={`${
        selected
          ? 'text-gray-900'
          : 'text-gray-500 hover:bg-slate-700 hover:text-slate-200'
      } relative rounded-md px-2 py-1 text-sm transition-colors sm:px-3.5 sm:py-0.5`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: 'spring', duration: 0.5 }}
          className="absolute inset-0 z-0 rounded-md bg-gradient-to-r from-white to-slate-50 shadow-md dark:from-slate-500 dark:to-slate-300 dark:shadow-gray-700"
        ></motion.span>
      )}
    </button>
  );
};

export default MenuNavigation;
