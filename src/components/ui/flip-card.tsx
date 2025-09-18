"use client";

import { cn } from "../../lib/utils";
import {
  ArrowRight,
  Code2,
  BadgeIndianRupee,
  MapPinCheck,
  UsersRound,
} from "lucide-react";
import { useState } from "react";
import { GlowingEffect } from "./glowing-effect";
import Link from "next/link";
import { motion } from "framer-motion";

export interface CardFlipProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  features?: string[];
  prize_pool?: string;
  entry_fee?: string;
  venue?: string;
  team_size?: string;
  icon?: React.ReactNode;
  pdfUrl?: string;
  comingSoon?: boolean;
  date?: string;
  earlyBird?: boolean;
  registrationClosed?: boolean;
}

export default function CardFlip({
  children,
  title = "",
  description = "",
  prize_pool,
  entry_fee,
  venue,
  team_size,
  icon,
  pdfUrl,
  comingSoon = false,
  date,
  earlyBird = false,
  registrationClosed = false,
}: CardFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const calculateDiscount = (fee: string) => {
    // Remove non-digit characters
    const numericValue = parseFloat(fee.replace(/[^\d.]/g, ""));
    if (isNaN(numericValue)) return fee; // fallback if parsing fails

    const discounted = numericValue * 0.8; // 20% off
    return `₹${discounted.toLocaleString("en-IN")}`;
  };

  const extraInfo = [
    prize_pool && { label: "Prize Pool", value: prize_pool },
    entry_fee && {
      label: "Entry Fee",
      value: earlyBird ? (
        <span>
          <span className="line-through text-red-500 mr-2">{entry_fee}</span>
          <span className="text-green-600 font-bold">
            {calculateDiscount(entry_fee)}
          </span>
          <span className="ml-1 text-sm text-green-500 font-semibold">
            (20% off)
          </span>
        </span>
      ) : (
        entry_fee
      ),
    },
    venue && { label: "Venue", value: venue },
    team_size && { label: "Team Size(Max)", value: team_size },
    date && { label: "Date", value: date },
  ].filter(Boolean) as { label: string; value: React.ReactNode }[];

  return (
    <div
      className="group relative h-[360px] w-full max-w-[300px] [perspective:2000px]"
      onMouseEnter={() => !comingSoon && setIsFlipped(true)}
      onMouseLeave={() => !comingSoon && setIsFlipped(false)}
    >
      <GlowingEffect
        spread={40}
        glow
        disabled={true}
        proximity={150}
        inactiveZone={0.01}
        borderWidth={4}
        className="absolute inset-0 rounded-3xl pointer-events-none h-full w-full"
      />

      {comingSoon ? (
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl border border-yellow-400 bg-yellow-100/30 dark:border-yellow-600 dark:bg-yellow-300/10">
          <div className="flex flex-col items-center text-yellow-700 dark:text-yellow-300">
            <span className="text-lg font-semibold">🚧 Coming Soon</span>
            <span className="text-2xl font-medium">Robo Wars</span>
          </div>
        </div>
      ) : (
        <div
          className={cn(
            "relative h-full w-full",
            "[transform-style:preserve-3d]",
            "transition-all duration-700",
            isFlipped
              ? "[transform:rotateY(180deg)]"
              : "[transform:rotateY(0deg)]"
          )}
        >
          {/* Front */}

          <div
            className={cn(
              "absolute inset-0 h-full w-full flex flex-col bottom-10",
              "[transform:rotateY(0deg)] [backface-visibility:hidden]",
              "rounded-2xl flex items-center justify-center bg-black",
              // "border border-slate-200 dark:border-zinc-800/50",
              "shadow-lg dark:shadow-xl",
              "transition-all duration-700",
              "group-hover:shadow-xl dark:group-hover:shadow-2xl",
              "group-hover:border-primary/20 dark:group-hover:border-primary/30",
              isFlipped ? "opacity-0" : "opacity-100"
            )}
          >
            {earlyBird && (
              <div className="absolute top-4 right-3 z-20">
                <span className="animate-bounce bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-md font-bold px-3 py-1 rounded-full shadow-lg">
                  20% Early Bird!
                </span>
              </div>
            )}
            <div
              className={cn(
                "rounded-xl w-full h-auto object-contain",
                registrationClosed && "grayscale"
              )}
            >
              {children}
            </div>
            {registrationClosed && (
              <div className="absolute inset-0 z-30 flex items-end justify-center pointer-events-none">
                <span className="text-yellow-700 text-4xl font-extrabold uppercase border-8 border-yellow-700 px-8 py-3 bg-white/90 shadow-2xl font-oswald">
                  Registration Closed
                </span>
              </div>
            )}
          </div>

          {/* Back */}
          <div
            className={cn(
              "absolute inset-0 h-full w-full",
              "[transform:rotateY(180deg)] [backface-visibility:hidden]",
              "rounded-2xl p-5",
              "bg-gradient-to-br from-white via-slate-50 to-slate-100",
              "dark:from-zinc-900 dark:via-zinc-900/95 dark:to-zinc-800",
              "border border-slate-200 dark:border-zinc-800",
              "shadow-lg dark:shadow-xl",
              "flex flex-col",
              "transition-all duration-700",
              "group-hover:shadow-xl dark:group-hover:shadow-2xl",
              "group-hover:border-primary/20 dark:group-hover:border-primary/30",
              !isFlipped ? "opacity-0" : "opacity-100"
            )}
          >
            <div className="from-primary/5 dark:from-primary/10 absolute inset-0 rounded-2xl bg-gradient-to-br via-transparent to-blue-500/5 dark:to-blue-500/10" />
            <div className="relative z-10 flex-1 space-y-5">
              <div className="space-y-2">
                <div className="mb-2 flex items-center gap-2">
                  <div className="from-primary via-primary/90 to-primary/80 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br">
                    <Code2 className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
                    {title}
                  </h3>
                </div>
                <p className="line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {description}
                </p>
              </div>

              <div className="space-y-2.5">
  {extraInfo.map((info, idx) => {
    const icons = [BadgeIndianRupee, Code2, MapPinCheck, UsersRound];
    const Icon = icons[idx % icons.length];

    return (
      <motion.div
        key={info.label}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: isFlipped ? 1 : 0, x: isFlipped ? 0 : -10 }}
        transition={{ duration: 0.3, delay: idx * 0.1 }}
        className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300"
      >
        <div className="bg-primary/10 dark:bg-primary/20 flex h-5 w-5 items-center justify-center rounded-md">
          <Icon className="text-primary h-3 w-3" />
        </div>
        <span className="font-medium">
          {info.label}: {info.value}
        </span>
      </motion.div>
    );
  })}
</div>

            </div>

            <div className="flex flex-col mt-auto border-t border-slate-200 pt-4 space-y-2 dark:border-zinc-800 relative z-10">
              {!registrationClosed ? (
                <Link href="https://forms.gle/yYipx4suUdcMiMjU6" passHref>
                  <div className="group/start relative flex items-center justify-between rounded-lg p-2.5 bg-gradient-to-r from-slate-100 via-slate-100 to-slate-100 dark:from-zinc-800 dark:via-zinc-800 dark:to-zinc-800 hover:from-primary/10 hover:via-primary/5 hover:to-transparent dark:hover:from-primary/20 dark:hover:via-primary/10 dark:hover:to-transparent hover:scale-[1.02] hover:border-primary/20 border border-transparent transition-all duration-300">
                    <span className="text-sm font-semibold text-zinc-900 dark:text-white group-hover/start:text-primary">
                      Register Now!
                    </span>
                    <ArrowRight className="text-primary h-4 w-4 transition-all duration-300 group-hover/start:translate-x-1 group-hover/start:scale-110" />
                  </div>
                </Link>
              ) : null}

              {pdfUrl && (
                <button
                  onClick={() => window.open(`/brochures/${pdfUrl}`, "_blank")}
                  className="group/info flex items-center justify-between rounded-lg p-2.5 bg-gradient-to-r from-slate-50 via-slate-100 to-slate-50 dark:from-zinc-800 dark:via-zinc-800 dark:to-zinc-800 hover:from-blue-200/20 hover:via-blue-100/10 hover:to-transparent dark:hover:from-blue-500/20 dark:hover:via-blue-500/10 dark:hover:to-transparent hover:scale-[1.02] hover:border-blue-300/30 border border-transparent transition-all duration-300"
                >
                  <span className="text-sm font-semibold text-zinc-900 dark:text-white group-hover/info:text-blue-500">
                    Brochure
                  </span>
                  <ArrowRight className="text-primary h-4 w-4 transition-all duration-300 group-hover/info:translate-x-1 group-hover/info:scale-110" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideIn {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          50% {
            transform: translateX(0);
            opacity: 0.8;
          }
          100% {
            transform: translateX(100px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
