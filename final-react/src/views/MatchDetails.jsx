import React from 'react';
import { useLocation } from "react-router-dom";

export default function MatchDetails() {
    const location = useLocation();
    const filteredHomeTeam = location.state?.filteredHomeTeam || [];
    const filteredAwayTeam = location.state?.filteredAwayTeam || [];
    const seasonTeamHomeData = location.state?.seasonTeamHomeData || [];
    const seasonTeamAwayData = location.state?.seasonTeamAwayData || [];
    console.log(seasonTeamHomeData);
    
    return (
      <div className="container mt-5 border border-light">
        <div className="row mt-4 pb-4 border-bottom">
          <img
            className="float-left col"
            style={{ width: "75px", height: "75px", objectFit: "contain" }}
            src={filteredHomeTeam[0].WikipediaLogoUrl}
            alt={filteredHomeTeam[0].Key}
          />
          <h5 className="col mt-4" style={{ textAlign: "center" }}>
            VS
          </h5>
          <img
            className="float-right col"
            style={{ width: "75px", height: "75px", objectFit: "contain" }}
            src={filteredAwayTeam[0].WikipediaLogoUrl}
            alt={filteredAwayTeam[0].Key}
          />
        </div>
        <div className="row mt-4 border-bottom">
          <div className="col text-center">
            <p>{seasonTeamHomeData.OffensiveYards}</p>
          </div>
          <div className="col text-center">Offensive Yards</div>
          <div className="col text-center">
            {seasonTeamAwayData.OffensiveYards}
          </div>
        </div>
        <div className="row mt-4 border-bottom">
          <div className="col text-center">
            <p>{seasonTeamHomeData.RushingYards}</p>
          </div>
          <div className="col text-center">Rushing Yards</div>
          <div className="col text-center">
            {seasonTeamAwayData.RushingYards}
          </div>
        </div>
        <div className="row mt-4 border-bottom">
          <div className="col text-center">
            <p>{seasonTeamHomeData.PassingYards}</p>
          </div>
          <div className="col text-center">Passing Yards</div>
          <div className="col text-center">
            {seasonTeamAwayData.PassingYards}
          </div>
        </div>
        <div className="row mt-4 border-bottom">
          <div className="col text-center">
            <p>{seasonTeamHomeData.ThirdDownConversions}</p>
          </div>
          <div className="col text-center">Third Down Conversions</div>
          <div className="col text-center">
            {seasonTeamAwayData.ThirdDownConversions}
          </div>
        </div>
        <div className="row mt-4 border-bottom">
          <div className="col text-center">
            <p>{seasonTeamHomeData.Sacks}</p>
          </div>
          <div className="col text-center">Sacks</div>
          <div className="col text-center">{seasonTeamAwayData.Sacks}</div>
        </div>
        <div className="row mt-4 pb-4">
          <div className="col text-center">
            <button type="button" className="text-light btn btn-secondary">
              Odds Movement
            </button>
          </div>
        </div>
      </div>
    );
}