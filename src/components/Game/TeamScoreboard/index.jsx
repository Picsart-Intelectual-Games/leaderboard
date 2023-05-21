import { useSelector } from "react-redux";
import { getTeamsArray } from "../../../store/slices/teams/selectors";
import TeamItem from "./TeamItem";
import QuestionBoard from './QuestionBoard'

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
      <QuestionBoard />
    </div>
  )
};

export default TeamScoreboard;
