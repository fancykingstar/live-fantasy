import React, { useState, useEffect } from 'react';
import classes from './interactiveContests.module.scss';
import Ball from '../../icons/Ball';
import BasketBall from '../../icons/BasketBall';
import Hockeys from '../../icons/Hockeys';
import SuperBall from '../../icons/SuperBall';
import CashPowerBalance from '../../components/CashPowerBalance';
import { redirectTo } from '../../utility/shared';
import CustomDropDown from '../../components/CustomDropDown';
import MyGameCenterCard from '../../components/MyGameCenterCard';

const myGameCenterCardData = [
    {
        id: 1,
        title: "MLB",
        prize: "10,000",
        outOf: "58,589",
        total: "200,000",
        percent: "29",
        url: '/mlb-powerdfs'
    },
    {
        id: 2,
        title: "NFL",
        prize: "10,000",
        outOf: "58,589",
        total: "200,000",
        percent: "29",
    },
    {
        id: 3,
        title: "NBA",
        prize: "10,000",
        outOf: "58,589",
        total: "200,000",
        percent: "29",
        url: '/nba-powerdfs'
    },
    {
        id: 4,
        title: "NHL",
        prize: "10,000",
        outOf: "58,589",
        total: "200,000",
        percent: "29",
        url: '/nhl-powerdfs'
    },
    {
        id: 5,
        title: "NFL",
        prize: "10,000",
        outOf: "58,589",
        total: "200,000",
        percent: "29",
    },
    {
        id: 6,
        title: "MLB",
        prize: "10,000",
        outOf: "58,589",
        total: "200,000",
        percent: "29",
    },
    {
        id: 7,
        title: "NHL",
        prize: "10,000",
        outOf: "58,589",
        total: "200,000",
        percent: "29",
    },
    {
        id: 8,
        title: "NBA",
        prize: "10,000",
        outOf: "58,589",
        total: "200,000",
        percent: "29",
    }
];

const options = [
    { value: 'FRI, Mar 12', label: 'FRI, Mar 12' },
    { value: 'SAT, Mar 13', label: 'SAT, Mar 13' },
    { value: 'SUN, Mar 14', label: 'SUN, Mar 14' },
    { value: 'MON, Mar 15', label: 'MON, Mar 15' },
    { value: 'TUE, Mar 16', label: 'TUE, Mar 16' },
    { value: 'WED, Mar 17', label: 'WED, Mar 17' },
    { value: 'THU, Mar 18', label: 'THU, Mar 18' },
];

const filters = [
    {
        id: 1,
        title: 'NFL',
        icon: <SuperBall />
    },
    {
        id: 2,
        title: 'NBA',
        icon: <BasketBall />
    },
    {
        id: 3,
        title: 'MLB',
        icon: <Ball />
    },
    {
        id: 4,
        title: 'NHL',
        icon: <Hockeys />
    },
    {
        id: 5,
        title: 'SHOW ALL',
        icon: ''
    },
];

const InteractiveContests = props => {
    const [isMobileDevice, setMobileDevice] = useState(false);
    const responsiveHandler = maxWidth => setMobileDevice(maxWidth.matches);

    const [selectedDate, setSelectedDate] = useState(options[0].value);
    const [showCardDetails, setShowCardDetails] = useState(-1);
    const [selectedFilter, setSelectedFilter] = useState(1);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const maxWidth = window.matchMedia("(max-width: 1200px)");
        responsiveHandler(maxWidth);
        maxWidth.addEventListener('change', responsiveHandler);
        return () => maxWidth.removeEventListener('change', responsiveHandler);
    }, []);

    useEffect(() => {
        const filteredData = myGameCenterCardData.filter(item => item.title === 'NFL');
        setFilteredData(filteredData);
    }, []);

    const myGameCenterCard = (item, redirectUri) => {
        return (
            <div className={classes.__interactive_contests_power_center_card}>
                <MyGameCenterCard
                    id={item.id}
                    title={item.title}
                    prize={item.prize}
                    outOf={item.outOf}
                    total={item.total}
                    percent={item.percent}
                    showDetails={showCardDetails == item.id}
                    onEnter={() => redirectTo(props, { path: redirectUri || '/' })}
                    onDetailsClick={(cardId) => setShowCardDetails(cardId)}
                    onBackClick={() => setShowCardDetails(-1)}
                    onNextClick={() => setShowCardDetails(-1)}
                />
            </div>
        );
    }

    return (
        <>
            <div className='__table-wrapper __mb-6'>
                <div className='__flex'>
                    <div style={{ flex: 1 }}>
                        <div className='__badges-wrapper __text-in-one-line __mediam'>
                            {
                                filters.map((item, index) => {
                                    return (
                                        <div 
                                        className={'__outline-badge __f1 ' + (selectedFilter == item.id && '__active')}
                                        onClick={() => {
                                            setSelectedFilter(item.id);
                                            const filteredData = item.id === 5 
                                                ? 
                                                myGameCenterCardData 
                                                : 
                                                myGameCenterCardData.filter(cardItem => cardItem.title === item.title);
                                            setFilteredData(filteredData);
                                                
                                        }}>
                                            {item.icon}{item.title}
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div style={{ flex: 1, marginLeft: 380 }}>
                        <CashPowerBalance styles={{ margin: 0, backgroundColor: '#202124', boxShadow: 'none' }} />
                    </div>
                </div>
                <div className={classes.__interactive_contests_filter}>
                    <div className={classes.__interactive_contests_most_popular}>
                        <p>All Active</p>
                    </div>
                    <div className={classes.__interactive_contests_prize_total}>
                        <p>Not Started</p>
                    </div>
                    <div className={classes.__interactive_contests_top_prize}>
                        <p>In Progress</p>
                    </div>
                    <div className={classes.__interactive_contests_min_entry}>
                        <p>Completed</p>
                    </div>
                    <div className={classes.__interactive_contests_date}>
                        <CustomDropDown 
                            value={selectedDate}
                            options={options}
                            onChange={selectedOption => setSelectedDate(selectedOption)}
                        />
                    </div>
                </div>

                {
                    (() => {
                        const itemsInaRow = 4;
                        const numberOfRows = Math.ceil(myGameCenterCardData.length / itemsInaRow);
                        const myGameCenterCardView = Array(numberOfRows).fill(undefined).map((item, i) => {
                            const start = ((i + 1) * itemsInaRow) - 4;
                            const end = ((i + 1) * itemsInaRow);
                            const items = filteredData.slice(start, end);

                            return (
                                <div className={classes.__interactive_contests_power_center_card_row}>
                                    {
                                        items.map(power => {
                                            return myGameCenterCard(power, power.url);
                                        })
                                    }
                                </div>
                            );
                        })
                        return myGameCenterCardView;
                    }
                    )()
                }
            </div>
        </>
    )
}

export default InteractiveContests;