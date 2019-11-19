import React, { useState, useEffect } from 'react';

const MainCont = styled.div`
    width: 50%;
    margin: 0 auto;
`;
const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px auto;
`;
const StyledEntry = styled.label`
    color: black;
`;
const StyledResults = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const NavStyle = styled.nav`
    display: flex;
    align-items: center;
    background-color: #235B2D;
`;
const H1Style = styled.h1`
    width: 50%;
    display: flex;
    padding-left: 10px;
    color: white;
`;
const H4Style = styled.h4`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;
    color: white;
`;
const StyledButton = styled.button`
    background-color: #235B2D;
    border: 1px solid #235B2D;
    color: white;
    width: 80%;
    margin: 30 0;
    border-radius: 20px;
`;
const NewUser = ({ values, errors, touched, status }) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        if (status) {
            setUser([...user, status])
        }
    }, [status]);

    return (
        <MainCont>
            <NavStyle>
                <H1Style>Plant Parenthood</H1Style>
                <H4Style>Icon</H4Style>
            </NavStyle>
            <div>
                <h2>Sign in!</h2>
            </div>
            <Form>
                <StyledForm>
                    <div>
                        <StyledEntry>Enter Username<Field className='input-box' type='text' name='name' placeholder='username'/>
                        {touched.name && errors.name && (<p className='error'>{errors.name}</p>)}
                        </StyledEntry>
                        
                    </div>
                    <div>
                        <StyledEntry>Enter Password<Field className='input-box' type='password' name='password' placeholder='●●●●●●●●' />
                        {touched.password && errors.password && (<p className='error'>{errors.password}</p>)}
                        </StyledEntry>
                        
                    </div>
                    <StyledButton>Log in</StyledButton>
                    <Link>Don't Have An Account?</Link>
                </StyledForm>
            </Form>
        </MainCont>
    )
}