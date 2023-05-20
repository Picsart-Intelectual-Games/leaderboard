import { useSelector } from "react-redux";
import { getTeamsArray } from "../../../store/slices/teams/selectors";
import TeamItem from "./TeamItem";

const TeamScoreboard = () => {
  const teams = useSelector(getTeamsArray);
  return (
    <div>
      {
        teams.map(team => (
          <TeamItem 
            key={team.id} 
            team={team} 
          />
        ))
      }
    </div>
  )
};

export default TeamScoreboard;
