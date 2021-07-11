import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Profile() {
    const { user, isAuthenticated } = useAuth0();
    console.log(user)
    return (
        <>

            {isAuthenticated &&
                <>
                    {/* <LogoutButton /> */}
                    <div> the email{user.email} </div>
                    <div>Hello {user.name}</div>
                    <div>this is the profile picture
                        <img src={user.picture} alt="d" />
                    </div>

                </>
            }

        </>

    );
}

export default Profile;