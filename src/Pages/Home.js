import React from 'react';
import "./Home.css";

const Home = () => {
    return (
        <>
            <div className="Home">
              
                <div className="div1">
                    <h3>Planning a Trip</h3>
                    <ol>
                        <li>
                            <b>Choose a Destination:</b> Based on interest, budget, and travel companions.
                        </li>
                        <li>
                            <b>Set a Budget:</b> Determine costs for transport, lodging, food, and activities.
                        </li>
                        <li>
                            <b>Prepare an Itinerary:</b> Plan daily activities to make the most of the trip.
                        </li>
                        <li>
                            <b>Pack Smart:</b> Carry essentials, weather-appropriate clothing, and necessary documents.
                        </li>
                        <li>
                            <b>Travel Safely:</b> Follow health and safety guidelines, and stay informed about local customs.
                        </li>
                    </ol>
                </div>
               
                <div className="div2">
                    <h3>Popular Types of Destinations</h3>
                    <ul>
                        <li>
                            <b>Natural Retreats:</b> Mountains, beaches, forests, and lakes.
                        </li>
                        <li>
                            <b>Cultural and Historical Sites:</b> Museums, ancient monuments, and heritage cities.
                        </li>
                        <li>
                            <b>Adventure Spots:</b> Trekking trails, skiing resorts, or water sports hubs.
                        </li>
                        <li>
                            <b>Urban Destinations:</b> Metropolitan cities for shopping, nightlife, and iconic landmarks.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Home;
