import Head from "next/head";
import Navbar from "@/components/navbar/Navbar";
import MenuCard from "@/components/menuCard/MenuCard";
import Poster from "@/components/poster/Poster";
import EventCard from "@/components/eventCard/EventCard";
import Testimonial from "@/components/testimonialSlide/Testimonial";
import Footer from "@/components/footer/Footer";
import Gallery from "@/components/gallery/Gallery";
import { useRouter } from "next/router";
import axios from "axios";
import TabMenu from "@/components/tabMenu/TabMenu";
import { useState, useEffect, useCallback } from "react";

export default function Home({ events, menus }) {
    const router = useRouter();

    console.log(events);

    //State
    const [listMenus, setListMenus] = useState(null);

    useEffect(() => {
        const menu = menus.find((data) => {
            return data.id === 1;
        });
        setListMenus(menu);
    }, []);

    //Tab Handler
    const selectMenu = useCallback((id) => {
        const menu = menus.find((data) => {
            return data.id === id;
        });
        setListMenus(menu);
    }, []);

    const tabs = [
        {
            name: "STARTERS",
            id: 1
        },
        {
            name: "MAIN",
            id: 2
        },
        {
            name: "DESSERT",
            id: 3
        },
        {
            name: "COCKTAILS",
            id: 4
        },
        {
            name: "WINE",
            id: 5
        },
        {
            name: "BEER",
            id: 6
        }
    ];

    return (
        <div className="" id="home-page">
            <Head>
                <title>Oro lounge</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="bg-hero-pattern header bg-center bg-no-repeat bg-contain">
                <Navbar />
                <div className="flex flex-col justify-center items-center content-center h-3/4">
                    <h3 className="header-text text-center text-whitish  ">
                        <p className="inline-block ">BAR </p> <span className="inline-block mx-4">•</span>{" "}
                        <p className="inline-block">RESTAURANT</p> <span className="inline-block mx-4">•</span>
                        <p className="inline-block ">EVENTS</p>
                    </h3>
                    <p className="text-whitish sub-text text-center px-5">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit. Exercitation veniam consequat met.
                    </p>

                    <div className="cta space-x-7 mt-8">
                        <button className="btn btn-secondary btn-md" onClick={() => router.push("/event/bookings")}>
                            BOOK AN EVENT
                        </button>
                        <button className="btn btn-primary btn-md" onClick={() => router.push("/order")}>
                            ORDER ONLINE
                        </button>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                {/**SECTION 2 */}
                <div className="2xl:container mx-auto px-12 md:px-32  about-section mb-24">
                    <div className="grid  md:grid-cols-1 lg:grid-cols-3 md:gap-y-10 gap-y-4 lg:gap-x-64 ">
                        <div className="col-span-2 left-section">
                            <h4 className="heading-text text-redish">
                                Located in Park Slope, Pacific Tavern is a purveyor of fine American dining from the
                                esteemed Chef Billy Lang.
                            </h4>
                            <p className="my-8 text-blackish">
                                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur
                                duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat
                                incididunt sint deserunt ut voluptate aute id deserunt nisi.
                            </p>
                            <p className="text-blackish">
                                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.
                                Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.
                            </p>
                        </div>
                        <div className="right-section">
                            <div className=" grid gap-y-10 lg:grid-cols-1 md:grid-cols-2 mt-3  ">
                                <div className="">
                                    <h5 className="mb-3">Phone</h5>
                                    <p>(347) 555-1234</p>
                                </div>
                                <div className="">
                                    <h5 className="mb-3">LOCATION</h5>
                                    <p className="">74 5th Avenue at St. Marks Place Brooklyn, NY 11217</p>
                                </div>
                                <div className="">
                                    <h5 className="mb-3">Hours</h5>
                                    <p>
                                        <span className="block">Mon -Thur: 5pm–11pm</span>
                                        <span className="block">Fri - Sat: 12pm –11pm</span>
                                        <span className="block">Sun: 10am – 11pm</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/**SECTION 3 */}
                <div className="3xl:container py-12 px-12 md:px-32 lg:mb-12 menu-section text-whitish relative">
                    <div className="first-image-overly">
                        <img className="" src="/assets/images/spag.png" className="hidden md:block" alt="" />
                    </div>

                    <div className="mx-auto py-20 z-50">
                        <h6 className="font-barlow tracking-wide text-center text-sm mb-2">ENJOY OUR TASTY MEALS</h6>
                        <h4 className="text-center heading-text">OUR MENU</h4>

                        <TabMenu menus={tabs} onSelect={selectMenu} />

                        <div className="menu-details mt-24">
                            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12 ">
                                {listMenus &&
                                    listMenus?.menus.map((menu) => {
                                        return (
                                            <MenuCard
                                                name={menu.name}
                                                ingredients={menu.ingredients}
                                                price={menu.price}
                                            />
                                        );
                                    })}
                            </div>
                        </div>

                        <div className="cta space-x-7 mt-24 flex justify-center ">
                            <button className="btn btn-secondary btn-md " onClick={() => router.push("/menu")}>
                                VIEW FULL MENU
                            </button>
                            <button
                                className="btn btn-primary btn-md text-blackish"
                                onClick={() => router.push("/order")}
                            >
                                ORDER ONLINE
                            </button>
                        </div>
                    </div>
                    <div className="second-image-overly">
                        <img className="" src="/assets/images/juice.png" className="hidden md:block" alt="" />
                    </div>
                </div>
                {/**SECTION 4 */}
                <Poster
                    smallText="FOR YOUR SPECIAL DAY"
                    headingText="EXCEPTIONAL CATERING SERVICES"
                    subText="        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                    duis enim velit mollit. Exercitation veniam consequat met."
                    LinkOne="VIEW MORE"
                    LinkTwo="GET CATERING"
                    bgImageClass="bg-cta-section"
                    LinkOneRoute="/catering"
                />
                {/**SECTION 5 */}
                <div className="xl:container mx-auto px-10 lg:px-20 happening-section my-28">
                    <h3 className="text-center heading-text text-blackish mb-8">HAPPENINGS</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-x-10">
                        {events.slice(0, 3).map((event) => (
                            <EventCard
                                month="First Tuesday of the month"
                                eventName={event.name}
                                time=" All Day"
                                img="bg-hook-one"
                            />
                        ))}
                        {/* <EventCard
                            month="First Tuesday of the month"
                            eventName="Free Drinks Wednesday"
                            time=" All Day"
                            img="bg-hook-one"
                        />
                        <EventCard
                            month="19th March 2021"
                            eventName="Karaoke Night"
                            time=" All Day"
                            img="bg-hook-two"
                        />
                        <EventCard
                            month="Tuesday of the month"
                            eventName="Free Drinks Wednesday"
                            time=" All Day"
                            img="bg-hook-three"
                        /> */}
                    </div>
                    <div className="cta flex mt-9 justify-center ">
                        <button
                            className="btn btn-primary btn-md text-blackish"
                            onClick={() => router.push("/happening")}
                        >
                            VIEW MORE
                        </button>
                    </div>
                </div>
                {/**SECTION 6 */}
                <Poster
                    smallText="MAKE USE OF OUR SPACE"
                    headingText="BOOK AN EVENT"
                    subText="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                    duis enim velit mollit. Exercitation veniam consequat met."
                    LinkOne="VIEW MORE"
                    LinkTwo="MAKE A RESERVATION"
                    bgImageClass="bg-booking-section"
                    LinkOneRoute="/event"
                />

                {/**SECTION 7 */}
                <div className="3xl:container gallery-section my-20">
                    <h3 className="text-center heading-text text-blackish mb-10 lg:mb-20">GALLERY</h3>
                    <Gallery />
                    <div className="cta flex mt-4 lg:mt-20  justify-center ">
                        <button className="btn btn-primary btn-md text-blackish">VIEW MORE</button>
                    </div>
                </div>
                {/**SECTION 8 */}
                <Testimonial />
                {/**SECTION 9 */}
                <div className="3xl:container contact-section lg:mb-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="address text-center px-6 md:px-0 py-28">
                            <p className=" text-sm font-barlow text-center leading-7  text-whitish">
                                WHAT OUR CUSTOMERS SAY ABOUT US
                            </p>
                            <h3 className="text-secondary">CONTACT US</h3>

                            <div className="address_details my-12 text-whitish font-barlow">
                                <p>2875 Brookdale Drive Brooklyn Park, MN 55444</p>
                                <p>+ (176) 34322384</p>
                                <p>bookings@orolounge.com, bookings@orolounge.com </p>
                            </div>

                            <div className="time font-barlow">
                                <p className="text-secondary mb-2">Opening Hours</p>
                                <ul className="text-whitish">
                                    <li>Mon -Thur: 5pm–11pm</li>
                                    <li> Fri - Sat: 12pm –11pm</li>
                                    <li> Sun: 10am – 11pm</li>
                                </ul>
                            </div>
                        </div>
                        <div id="map" className="bg-map bg-no-repeat p-32 bg-center bg-cover"></div>
                    </div>
                </div>
                {/**Footer */}
                <Footer />
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    try {
        const event_response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/events`);
        const menu_response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/categories`);

        return {
            props: {
                events: event_response.data.data.events.data,
                menus: menu_response.data.data.categories.data
            }
        };
    } catch (error) {
        return {
            props: { events: null, menus: null }
        };
    }
}
