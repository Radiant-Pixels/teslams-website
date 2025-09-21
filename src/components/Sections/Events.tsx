useimport React from "react";
import CardFlip from "../ui/flip-card";
import Image from "next/image";

const Events = () => {
  return (
    <section
      id="events"
      className="relative min-h-screen px-4 py-2"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white text-center mb-12">
          Competition Events
        </h2>
        <p className="text-3xl text-gray-600 dark:text-gray-400 mb-12"><span className="font-bold text-indigo-600 text-3xl">Free </span>Registration For All Events!</p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 justify-items-center">
          <CardFlip
            title="Robo Race"
            description=""
            prize_pool="₹6000"
            entry_fee="Free"
            venue="Near EEE Departmentr"
            team_size="4"
            comingSoon={false}
            date="27 September, 2025"
            registrationClosed={false}
            pdfUrl="/ROBORACE.pdf"
          >
                <Image
                  src="/images/events/roborace.jpg"
                  alt="Robo Wars"
                  width={160}
                  height={160}
                  className="rounded-xl w-full h-auto object-contain"
                />
          </CardFlip>
          <CardFlip
            title="Robo Soccer"
            description=""
            prize_pool="₹6000"
            entry_fee="Free"
            venue="2nd Floor, EEE Department"
            team_size="4"
            comingSoon={false}
            date="27 September, 2025"
            registrationClosed={false}
            pdfUrl="/ROBO-SOCCER.pdf"
          >
            <Image
                  src="/images/events/robosoccer.jpg"
                  alt="Robo Wars"
                  width={160}
                  height={160}
                  className="rounded-xl w-full h-auto object-contain"
                />
          </CardFlip>
          <CardFlip
            title="Ampere Arena"
            description=""
            prize_pool="₹1500"
            entry_fee="Free"
            venue="Power Electronics Lab, EEE Department"
            team_size="3"
            comingSoon={false}
            date="27 September, 2025"
            registrationClosed={false}
            pdfUrl="/AMPERE-ARENA.pdf"
          >
            <Image
                  src="/images/events/amperearena.jpg"
                  alt="Robo Wars"
                  width={160}
                  height={160}
                  className="rounded-xl w-full h-auto object-contain"
                />
          </CardFlip>
          <CardFlip
            title="Paper Presentation"
            description=""
            prize_pool="₹1500"
            entry_fee="Free"
            venue="Simulation Lab, EEE Department"
            team_size="4"
            comingSoon={false}
            date="27 September, 2025"
            registrationClosed={false}
            pdfUrl="/PPT-POSTER.pdf"
          >
            <Image
                  src="/images/events/paperpresentation.jpg"
                  alt="Robo Wars"
                  width={160}
                  height={160}
                  className="rounded-xl w-full h-auto object-contain"
                />
          </CardFlip>
          <CardFlip
            title="Brain Blast"
            description=""
            prize_pool="₹500"
            entry_fee="Free"
            venue="Robotics Lab, EEE Department"
            team_size="4"
            comingSoon={false}
            date="27 September, 2025"
            registrationClosed={false}
            pdfUrl="/BRAIN-BLAST.pdf"
          >
            <Image
                  src="/images/events/brainblast.jpg"
                  alt="Robo Wars"
                  width={160}
                  height={160}
                  className="rounded-xl w-full h-auto object-contain"
                />
          </CardFlip>
          <CardFlip
            title="Cinema-X"
            description=""
            prize_pool="₹500"
            entry_fee="Free"
            venue="Simulation Lab, EEE Department(12-2)"
            team_size="4"
            comingSoon={false}
            date="27 September, 2025"
            registrationClosed={false}
            pdfUrl="/CINEMA-X.pdf"
          >
            <Image
                  src="/images/events/cinemax.jpg"
                  alt="Robo Wars"
                  width={160}
                  height={160}
                  className="rounded-xl w-full h-auto object-contain"
                />
          </CardFlip>
          <CardFlip
            title="Gesture Quest"
            description=""
            prize_pool="₹500"
            entry_fee="Free"
            venue="2nd Floor, EEE Department"
            team_size="4"
            comingSoon={false}
            date="27 September, 2025"
            registrationClosed={false}
            pdfUrl="/GESTURE-QUEST.pdf"
          >
            <Image
                  src="/images/events/gesturequest.jpg"
                  alt="Robo Wars"
                  width={160}
                  height={160}
                  className="rounded-xl w-full h-auto object-contain"
                />
          </CardFlip>
          <CardFlip
            title="BitBattle"
            description=""
            prize_pool="₹500"
            entry_fee="Free"
            venue="Robotics Lab, EEE Department(12-2)"
            team_size="4"
            comingSoon={false}
            date="27 September, 2025"
            registrationClosed={false}
            pdfUrl="/BIT-BATTLE.pdf"
          >
              <Image
                src="/images/events/bitbattle.jpg"
                alt="BitBattle Event"
                width={160}
                height={160}
                className="rounded-xl w-full h-auto object-contain"
              />
          </CardFlip>
        </div>
      </div>
    </section>
  );
};

export default Events;
