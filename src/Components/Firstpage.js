import React from 'react';
import { Box, Typography, styled, } from '@mui/material';


const MainBox = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    align-content: space-between;
`

const Connecting = styled(Typography)`
    font-weight: 400;
    font-size: 40px;
    line-height: inherit;
    display: block;
    color: rgb(77,112,155);
    margin-top: 2rem;
`

const Talent = styled(Typography)`
    color: #1c4980;
    font-weight: 700;
    font-size: 50px;
    line-height: 60px;
    margin-bottom: 44px;
    position: relative;
    margin-top: 2rem;
`

const Explore = styled(Typography)`
    color: #1c4980;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    margin: 0;
`

const ImageBox = styled(Box)`
    display: flex;
    margin-top: 6rem;
    margin-left: 14rem;
`

const ImageBoxsec = styled(Box)`
    display: flex;
    margin-top: 4rem;
    margin-left: 14rem;
`

const ImageStyle = styled('img')({
    width: '162px',
    height: '203px',
    marginLeft: '1rem'
})


const Firstpage = () => {
    return (
        <>
            <MainBox>
                <Box>
                    <Connecting>Connecting</Connecting>
                    <Talent>Talent, Colleges, <br /> Recruiters</Talent>
                    <Explore>Explore opportunities from across the globe to learn, <br /> showcase skills, gain CV points, & get hired by your <br /> dream company.

                    </Explore>
                </Box>
                <Box>
                    <ImageBox>
                        <Box>
                            <ImageStyle src="https://cdn.unstop.com/uploads/images/home/home-hero-learn.png?d=324x406" alt="" />
                        </Box>
                        <Box>
                            <ImageStyle src="https://cdn.unstop.com/uploads/images/home/home-hero-practice.png?d=324x406" alt="" />
                        </Box>
                        <Box>
                            <ImageStyle src="https://cdn.unstop.com/uploads/images/home/home-hero-mentorships.png?d=324x406" alt="" />
                        </Box>
                    </ImageBox>
                    <ImageBoxsec>
                        <Box>
                            <ImageStyle src="https://cdn.unstop.com/uploads/images/home/home-hero-compete.png?d=324x406" alt="" />
                        </Box>
                        <Box>
                            <ImageStyle src="https://cdn.unstop.com/uploads/images/home/home-hero-jobs.png?d=324x406" alt="" />
                        </Box>
                        <Box>
                            <ImageStyle src="https://cdn.unstop.com/uploads/images/home/home-hero-blogs.png?d=324x406" alt="" />
                        </Box>
                    </ImageBoxsec>
                </Box>
            </MainBox>

        </>
    )
}

export default Firstpage
