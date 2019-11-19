import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { withformik, Form, Field } from 'formik';
import * as yup from 'yup';

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
      

const NewUser = ({ values, errors, touched, status }) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        if (status) {
            setUser([...user, status])
        }
    }, [status]);

    return (
        <div>
              {/* <NavStyle>
            <H1Style>Plant Parenthood</H1Style>
            <H4Style>Icon</H4Style>
        </NavStyle>
            <Form>
                <StyledForm>
                    <div>
                        <StyledEntry>Enter Name<Field type='text' name='name' placeholder='name'/></StyledEntry>
                        {touched.name && errors.name && (<p className='error'>{errors.name}</p>)}
                    </div>
                    <div>
                        <StyledEntry>Enter Number<Field type='number' name='number' placeholder='(xxx)-xxx-xxxx'/></StyledEntry>
                    </div>
                </StyledForm>
            </Form> */}
        </div>
    )
}
