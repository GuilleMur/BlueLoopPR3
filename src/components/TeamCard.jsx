import React from 'react';

const TeamCard = ({ name, role, desc, img }) => {
  return (
    <div className="team-card card-glass no-ripple">
      <div className="member-photo">
        <img src={img} alt={name} />
      </div>
      <h3>{name}</h3>
      <span className="role">{role}</span>
      <p>{desc}</p>
    </div>
  );
};

export default TeamCard;