const TeamItem = ({ team: { name, score } }) => {

  return (
    <div>
      <div>
        {name}
      </div>
      <div>
        {score}
      </div>
    </div>
  )
};

export default TeamItem;
