import React from "react";
import PropTypes from "prop-types";

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    bio,
    skills,
    user: { name, avatar },
  },
}) => {
  return (
    <>
      <div class='profile-top bg-primary p-2'>
        <img class='round-img my-1' src={avatar} alt='avatar' />
        <h1 class='large'>{name}</h1>
        <p class='lead'>
          {status} {company && <span> at {company} </span>}
        </p>
        <p>{location}</p>
        <div class='icons my-1'>
          {website && (
            <a href={website} target='_blank' rel='noopener noreferrer'>
              <i class='fas fa-globe fa-2x'></i>
            </a>
          )}
          {social && social.twitter && (
            <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
              <i class='fab fa-twitter fa-2x'></i>
            </a>
          )}
          {social && social.facebook && (
            <a href={social.facebook} target='_blank' rel='noopener noreferrer'>
              <i class='fab fa-facebook fa-2x'></i>
            </a>
          )}
          {social && social.linkedin && (
            <a href={social.linkedin} target='_blank' rel='noopener noreferrer'>
              <i class='fab fa-linkedin fa-2x'></i>
            </a>
          )}
          {social && social.youtube && (
            <a href={social.youtube} target='_blank' rel='noopener noreferrer'>
              <i class='fab fa-youtube fa-2x'></i>
            </a>
          )}
          {social && social.instagram && (
            <a
              href={social.instagram}
              target='_blank'
              rel='noopener noreferrer'
            >
              <i class='fab fa-instagram fa-2x'></i>
            </a>
          )}
        </div>
      </div>
      <div class='profile-about bg-light p-2'>
        {bio && (
          <>
            <h2 class='text-primary'>{name.trim().split(" ")[0]}'s Bio</h2>
            <p>{bio}</p>
          </>
        )}
        <div class='line'></div>
        <h2 class='text-primary'>Skill Set</h2>
        <div class='skills'>
          {skills.map((skill) => (
            <div class='p-1'>
              <i class='fa fa-check'></i> {skill}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
