import { useSelector } from "react-redux";
import { getTeamsArray } from "../../../store/slices/teams/selectors";
import TeamItem from "./TeamItem";
import QuestionBoard from './QuestionBoard'
import useStyles from "./styles";

const TeamScoreboard = () => {
  const classes = useStyles();
  const teams = useSelector(getTeamsArray);

  return (
    <div className={classes.root}>
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
