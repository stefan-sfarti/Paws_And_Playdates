import { useState } from 'react';
import '../App.css'

const Profile = () => {
    const [user, setUser] = useState({
        id: 1,
        username: 'johndoe',
        email: 'johndoe@example.com',
        password: 'password123',
        firstName: 'John',
        lastName: 'Doe',
        userLocation: 'New York, USA',
        age: 30,
        description: 'Hi, I am a software developer.',
        meetingsAttended: [],
        meetingsOrganized: [],
        petProfiles: [],
        organizedMeetings: [],
        reviews: [],
        profilePhoto: 'https://via.placeholder.com/150',
    });

    return (
        <div className="profile-container">
            <div className="profile-header">
                <div className="profile-photo">
                    <img src={user.profilePhoto} alt="Profile Photo" />
                </div>
                <div className="profile-info">
                    <h1>{user.firstName} {user.lastName}</h1>
                    <p>@{user.username}</p>
                    <p>{user.userLocation}</p>
                </div>
            </div>
            <div className="profile-details">
                <div className="profile-section">
                    <h2>About Me</h2>
                    <p>{user.description}</p>
                    <p>Email: {user.email}</p>
                    <p>Age: {user.age}</p>
                </div>
                <div className="profile-section">
                    <h2>Meetings Attended</h2>
                    {user.meetingsAttended.length > 0 ? (
                        <ul>
                            {user.meetingsAttended.map((meeting, index) => (
                                <li key={index}>{meeting.title}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No meetings attended yet.</p>
                    )}
                </div>
                <div className="profile-section">
                    <h2>Meetings Organized</h2>
                    {user.meetingsOrganized.length > 0 ? (
                        <ul>
                            {user.meetingsOrganized.map((meeting, index) => (
                                <li key={index}>{meeting.title}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No meetings organized yet.</p>
                    )}
                </div>
                <div className="profile-section">
                    <h2>Pet Profiles</h2>
                    {user.petProfiles.length > 0 ? (
                        <ul>
                            {user.petProfiles.map((pet, index) => (
                                <li key={index}>{pet.name}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No pet profiles added yet.</p>
                    )}
                </div>
                <div className="profile-section">
                    <h2>Reviews</h2>
                    {user.reviews.length > 0 ? (
                        <ul>
                            {user.reviews.map((review, index) => (
                                <li key={index}>{review.comment}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No reviews yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;