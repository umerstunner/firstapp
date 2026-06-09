"use client";

import { useState } from "react";

const navItems = [
	{ label: "HOME", href: "#home" },
	{ label: "ABOUT", href: "#about" },
	{ label: "MENU", href: "#menu" },
	{ label: "WHERE", href: "#where" },
];

const eatMenu = [
	{
		name: "Bread Basket",
		description: "Assortment of fresh baked fruit breads and muffins",
		price: "5.50",
	},
	{
		name: "Honey Almond Granola with Fruits",
		description: "Natural cereal of honey toasted oats, raisins, almonds and dates",
		price: "7.00",
	},
	{
		name: "Belgian Waffle",
		description: "Vanilla flavored batter with malted flour",
		price: "7.50",
	},
	{
		name: "Scrambled eggs",
		description: "Scrambled eggs, roasted red pepper and garlic, with green onions",
		price: "7.50",
	},
	{
		name: "Blueberry Pancakes",
		description: "With syrup, butter and lots of berries",
		price: "8.50",
	},
];

const drinkMenu = [
	{
		name: "Coffee",
		description: "Regular coffee",
		price: "2.50",
	},
	{
		name: "Chocolato",
		description: "Chocolate espresso with milk",
		price: "4.50",
	},
	{
		name: "Corretto",
		description: "Whiskey and coffee",
		price: "5.00",
	},
	{
		name: "Iced tea",
		description: "Hot tea, except not hot",
		price: "3.00",
	},
	{
		name: "Soda",
		description: "Coke, Sprite, Fanta, etc.",
		price: "2.50",
	},
];

function SectionLabel({ children }: { children: string }) {
	return (
		<h5 className="py-16 text-center">
			<span className="inline-block bg-black px-2 py-0 text-[18px] font-normal tracking-[4px] text-white">
			{children}
			</span>
		</h5>
	);
}

export default function Home() {
	const [activeTab, setActiveTab] = useState<"eat" | "drink">("drink");
	const menuItems = activeTab === "eat" ? eatMenu : drinkMenu;

	return (
		<main className="scroll-smooth bg-[#fdf5e6] text-[18px] leading-normal text-black">
			<div className="fixed top-0 left-0 right-0 z-1 w-full">
				<div className="grid grid-cols-4 bg-black p-2">
					{navItems.map((item, idx) => (
						<a
							key={item.label}
							href={idx === 0 ? "#" : item.href}
							className="block bg-black px-4 py-2 text-center text-[15px] text-white hover:bg-[#cccccc] hover:text-black"
						>
							{item.label}
						</a>
					))}
				</div>
			</div>

			<div className="bg-[#fdf5e6] filter-[grayscale(60%)]">
				<header
					id="home"
					className="relative min-h-[75vh] bg-[url('https://www.w3schools.com/w3images/coffeehouse.jpg')] bg-cover bg-center"
				>
					<div className="absolute bottom-3 left-3 hidden bg-black px-2 py-0 text-[15px] text-white sm:block">
						Open from 6am to 5pm
					</div>
					<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
						<span className="block text-[90px] leading-normal">the</span>
						<span className="block text-[90px] leading-normal">Cafe</span>
					</div>
					<div className="absolute bottom-3 right-3 px-2 py-0 text-[15px] text-white">
						15 Adr street, 5015
					</div>
				</header>

				<div className="mx-auto max-w-175 px-4">
				<section id="about" className="py-0">
					<SectionLabel>ABOUT THE CAFE</SectionLabel>

					<p className="my-4.5">
						The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet,
						consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
						ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>

					<p className="my-4.5">
						In addition to our full espresso and brew bar menu, we serve fresh
						made-to-order breakfast and lunch sandwiches, as well as a selection of
						sides and salads and other good stuff.
					</p>

					<div className="my-4 border-l-[6px] border-[#ccc] bg-[#f1f1f1] px-4 py-px">
						<p className="my-4.5 italic">
							&ldquo;Use products from nature for what it&apos;s worth - but never too
							early, nor too late.&rdquo; Fresh is the new sweet.
						</p>
						<p className="my-4.5">Chef, Coffeeist and Owner: Liam Brown</p>
					</div>

					<img
						src="https://www.w3schools.com/w3images/coffeeshop.jpg"
						alt="Table setting in the cafe"
						className="mt-4 w-full"
					/>

					<p className="my-4.5">
						<strong>Opening hours:</strong> everyday from 6am to 5pm.
					</p>
					<p className="my-4.5">
						<strong>Address:</strong> 15 Adr street, 5015, NY
					</p>
				</section>

				<section id="menu" className="py-0">
					<SectionLabel>THE MENU</SectionLabel>

					<div className="mx-auto max-w-175">
						<div className="grid grid-cols-2 p-2 text-center shadow-[0_2px_5px_0_rgba(0,0,0,0.16),0_2px_10px_0_rgba(0,0,0,0.12)]">
						<button
							type="button"
							onClick={() => setActiveTab("eat")}
							className={`m-0 block px-4 py-0 text-[18px] ${
								activeTab === "eat" ? "bg-[#616161] text-white" : "bg-transparent text-black"
							}`}
						>
							Eat
						</button>
						<button
							type="button"
							onClick={() => setActiveTab("drink")}
							className={`m-0 block px-4 py-0 text-[18px] ${
								activeTab === "drink"
									? "bg-[#616161] text-white"
									: "bg-transparent text-black"
							}`}
						>
							Drink
						</button>
						</div>

						<div className="px-4 py-12 space-y-6 shadow-[0_2px_5px_0_rgba(0,0,0,0.16),0_2px_10px_0_rgba(0,0,0,0.12)]">
							{menuItems.map((item) => (
								<div key={item.name}>
									<h5 className="my-0 text-[18px] font-normal">{item.name}</h5>
									<p className="my-4.5 text-[#757575]">
										{item.description} {item.price}
									</p>
								</div>
							))}
						</div>
					</div>

					<img
						src="https://www.w3schools.com/w3images/coffeehouse2.jpg"
						alt="Coffee and food"
						className="mt-8 w-full"
					/>
				</section>

				<section id="where" className="py-0">
					<SectionLabel>WHERE TO FIND US</SectionLabel>

					<p className="my-4.5">Find us at some address at some place.</p>
					<img
						src="https://www.w3schools.com/w3images/map.jpg"
						alt="Cafe location map"
						className="w-full"
					/>

					<p className="my-4.5">
						<span className="bg-black px-2 py-1 text-[15px] text-white">FYI!</span> We
						offer full-service catering for any event, large or small. We understand
						your needs and we will cater the food to satisfy the biggerst criteria of
						them all, both look and taste.
					</p>

					<p className="my-4.5">
						<strong>Reserve</strong> a table, ask for today&apos;s special or just send us a
						message:
					</p>

					<form className="mt-5">
						<p className="my-4.5">
							<input
								type="text"
								placeholder="Name"
								required
								className="block w-full border border-[#ccc] bg-white px-4 py-4"
							/>
						</p>
						<p className="my-4.5">
							<input
								type="number"
								placeholder="How many people"
								required
								className="block w-full border border-[#ccc] bg-white px-4 py-4"
							/>
						</p>
						<p className="my-4.5">
							<input
								type="datetime-local"
								placeholder="Date and time"
								title="Date and time"
								defaultValue="2020-11-16T20:00"
								required
								className="block w-full border border-[#ccc] bg-white px-4 py-4"
							/>
						</p>
						<p className="my-4.5">
							<input
								type="text"
								placeholder="Message \ Special requirements"
								required
								className="block w-full border border-[#ccc] bg-white px-4 py-4"
							/>
						</p>
						<p className="my-4.5">
							<button
								type="submit"
								className="cursor-pointer bg-black px-4 py-2 text-[18px] text-white hover:bg-[#ccc] hover:text-black"
							>
								SEND MESSAGE
							</button>
						</p>
					</form>
				</section>
				</div>
			</div>

			<footer className="bg-[#f1f1f1] px-4 py-12 text-center text-[18px]">
				<p>
					Powered by{" "}
					<a
						href="https://www.w3schools.com/w3css/default.asp"
						target="_blank"
						rel="noopener noreferrer"
						className="underline hover:text-green-700"
					>
						w3.css
					</a>
				</p>
			</footer>
		</main>
	);
}
