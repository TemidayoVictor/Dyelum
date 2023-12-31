"use client";
import { useCountdown } from "@/hooks/useCountdown";
import { useEffect } from "react";
const DenaryHero = () => {
	let now = new Date();
	let currentTime = now.getTime();

	// Set the target time to 12:00 PM
	let targetTime = new Date();
	const to = targetTime.setHours(12, 0, 0, 0); // Set hours to 12 and minutes/seconds/milliseconds to 0

	if (now.getHours() >= 12) {
		console.log("yes", { to });
		// If the current time is already past 12 PM, set the target time to 12 PM of the next day
		targetTime.setDate(targetTime.getDate() + 1);
		// console.log("to hours", targetTime.getHours());
		// console.log("to date", targetTime.getDate());
	}

	var timeUntilNext12PM = targetTime.getTime();
	console.log({ timeUntilNext12PM });
	const [days, hours, minutes, seconds] = useCountdown(timeUntilNext12PM);
	return (
		<div>
			<div className="play hero max-lg:mt-[2rem] mt-[3.7rem] relative bg-[#E5EFFF] text-white max-lg:min-h-[70vh] min-h-[30vw] flex flex-col items-center justify-center">
				<h1 className="text-[3rem] text-black font-bold my-4">
					Indices Denary Game Mode
				</h1>
				<p className="w-[50%] text-center text-[1.2rem] text-gray-700 tracking-[.2px] font-normal">
					Compete against others in Denary Mode. Climb the Leaderboard
					and win rewards!
				</p>

				<p className="mt-[3rem] w-[50%] text-center text-[1.2rem] text-gray-700 tracking-[.2px] font-normal">
					Today's Contest Ends in
				</p>

				<div className="flex justify-between max-lg:w-[80%] w-[40%] max-lg:items-center">
					<div className="w-[22%] ">
						<div className="flex items-center">
							<h1 className="text-[3rem] text-[#0045AD] font-bold">
								{days}
							</h1>
							<p className="text-[3rem] text-[#0045AD] font-bold max-lg:pl-2 pl-5">
								:
							</p>
						</div>
						<p className="text-left text-[1.2rem] text-gray-700 tracking-[.2px] font-normal">
							days
						</p>
					</div>

					<div className="w-[22%]">
						<div className="flex items-center">
							<h1 className="text-[3rem] text-[#0045AD] font-bold">
								{hours}
							</h1>
							<p className="text-[3rem] text-[#0045AD] font-bold max-lg:pl-2 pl-5">
								:
							</p>
						</div>
						<p className="text-left text-[1.2rem] text-gray-700 tracking-[.2px] font-normal">
							hours
						</p>
					</div>

					<div className="w-[22%] ">
						<div className="flex items-center">
							<h1 className="text-[3rem] text-[#0045AD] font-bold">
								{minutes}
							</h1>
							<p className="text-[3rem] text-[#0045AD] font-bold max-lg:pl-2 pl-5">
								:
							</p>
						</div>
						<p className="text-left text-[1.2rem] text-gray-700 tracking-[.2px] font-normal max-lg:hidden">
							minutes
						</p>
						<p className="hidden text-left text-[1.2rem] text-gray-700 tracking-[.2px] font-normal max-lg:block">
							mins
						</p>
					</div>

					<div className="w-[22%] ">
						<h1 className="text-[3rem] text-[#0045AD] font-bold">
							{seconds}
						</h1>
						<p className="text-left text-[1.2rem] text-gray-700 tracking-[.2px] font-normal">
							seconds
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DenaryHero;
