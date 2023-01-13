import React from 'react';
import Loading from './Loading';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
} from 'mdbreact';
import Wrapper from '../assets/wrappers/TeamMember';
import { BsPerson } from 'react-icons/bs';

export default function TeamMember({ member }) {
  console.log(member);

  return (
    <Wrapper>
      <div className='team-member'>
        <div className='person'>
          <BsPerson />
        </div>

        <div className='team-member-info'>
          <h3>{member.nom}</h3>
          <p>{member.email}</p>
        </div>
      </div>
    </Wrapper>
  );
}
